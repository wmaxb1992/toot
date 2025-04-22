"use client"

import { useEffect, useRef } from "react"

interface Props {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export default function IntersectionObserver({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          entry.target.classList.remove("animate")
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
