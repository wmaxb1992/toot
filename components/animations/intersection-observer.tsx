"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface IntersectionObserverProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animateClass?: string
}

export default function IntersectionObserver({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  animateClass = "animate",
}: IntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animateClass)
            if (triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove(animateClass)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce, animateClass])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
