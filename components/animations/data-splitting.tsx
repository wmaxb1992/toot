"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface DataSplittingProps {
  children: ReactNode
  className?: string
  type?: "words" | "chars"
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  delay?: number
  stagger?: number
  animationType?: "3d" | "typing"
}

export default function DataSplitting({
  children,
  className,
  type = "words",
  as: Component = "div",
  delay = 0,
  stagger = 0.05,
  animationType = "3d",
}: DataSplittingProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    container.setAttribute("data-splitting", type)

    // Convert children to string to ensure we can split it
    const content = children ? String(children) : ""
    const elements: HTMLElement[] = []

    if (type === "words") {
      // Split text into words
      const words = content.split(" ")
      container.innerHTML = ""

      words.forEach((word, i) => {
        const wordSpan = document.createElement("span")
        wordSpan.className = "word"
        wordSpan.innerHTML = word + (i < words.length - 1 ? "&nbsp;" : "")
        wordSpan.style.display = "inline-block"
        wordSpan.style.opacity = "0"

        if (animationType === "typing") {
          wordSpan.style.width = "0"
          wordSpan.style.overflow = "hidden"
          wordSpan.style.whiteSpace = "nowrap"
          wordSpan.style.transition = `opacity 0.1s ease, width 0.3s ease`
        } else {
          wordSpan.style.transform = "translate3d(0, 100%, 0) rotateX(-90deg)"
          wordSpan.style.transformOrigin = "top center"
          wordSpan.style.transition = `opacity 0.5s ease, transform 0.5s ease`
        }

        wordSpan.style.transitionDelay = `${delay + i * stagger}s`
        container.appendChild(wordSpan)
        elements.push(wordSpan)
      })
    } else {
      // Split text into characters
      const chars = content.split("")
      container.innerHTML = ""

      chars.forEach((char, i) => {
        const charSpan = document.createElement("span")
        charSpan.className = "char"
        charSpan.innerHTML = char === " " ? "&nbsp;" : char
        charSpan.style.display = "inline-block"
        charSpan.style.opacity = "0"

        if (animationType === "typing") {
          if (i === chars.length - 1) {
            charSpan.style.borderRight = "2px solid currentColor"
            charSpan.style.animation = "blink-caret 0.75s step-end infinite"
          }
          charSpan.style.transition = `opacity 0.1s ease`
        } else {
          charSpan.style.transform = "translate3d(0, 100%, 0) rotateX(-90deg)"
          charSpan.style.transformOrigin = "top center"
          charSpan.style.transition = `opacity 0.5s ease, transform 0.5s ease`
        }

        charSpan.style.transitionDelay = `${delay + i * stagger}s`
        container.appendChild(charSpan)
        elements.push(charSpan)
      })
    }

    // Trigger animation after a small delay to ensure elements are rendered
    setTimeout(() => {
      // Add blinking cursor animation style if using typing animation
      if (animationType === "typing" && !document.getElementById("typing-animation-style")) {
        const style = document.createElement("style")
        style.id = "typing-animation-style"
        style.innerHTML = `
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: currentColor }
          }
        `
        document.head.appendChild(style)
      }

      if (animationType === "typing") {
        elements.forEach((el, index) => {
          setTimeout(
            () => {
              el.style.opacity = "1"
              if (type === "words") {
                el.style.width = "auto"
              }

              // For chars type, add cursor to current character and remove from previous
              if (type === "chars") {
                // Add cursor to current character
                el.style.borderRight = "2px solid currentColor"
                el.style.animation = "blink-caret 0.75s step-end infinite"

                // Remove cursor from previous character
                if (index > 0) {
                  elements[index - 1].style.borderRight = "none"
                  elements[index - 1].style.animation = "none"
                }

                // Remove cursor from last character when all are displayed
                if (index === elements.length - 1) {
                  setTimeout(() => {
                    el.style.borderRight = "none"
                    el.style.animation = "none"
                  }, 1000)
                }
              }
            },
            index * (type === "chars" ? 100 : 300),
          )
        })
      } else {
        // Original 3D animation
        elements.forEach((el) => {
          el.style.opacity = "1"
          el.style.transform = "translate3d(0, 0, 0) rotateX(0)"
        })
      }
    }, 100)

    return () => {
      // Cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = content
      }
    }
  }, [children, type, delay, stagger, animationType])

  return (
    <Component ref={containerRef} className={cn("inline-block perspective-500", className)}>
      {children}
    </Component>
  )
}
