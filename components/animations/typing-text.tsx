"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  className?: string
  delay?: number
}

export default function TypingText({ text, className = "", delay = 0 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, 50) // Speed of typing

    return () => clearTimeout(timer)
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && <span className="animate-blink">|</span>}
    </span>
  )
} 