"use client"

import { useState, useEffect } from "react"
import MindbodyTabs from "../components/mindbody-tabs"
import Script from "next/script"

export default function SchedulePage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)")

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
      
      // Calculate the background color based on scroll position
      // Max scroll threshold of 500px for full transition
      const maxScroll = 500
      const scrollPercentage = Math.min(position / maxScroll, 1)
      
      // Cream color (#F8F5F0) and its 20% lighter version
      const cream = {
        r: 248, // F8
        g: 245, // F5
        b: 240  // F0
      }
      
      // Calculate 20% lighter version
      const lighterCream = {
        r: Math.min(255, cream.r + (255 - cream.r) * 0.2),
        g: Math.min(255, cream.g + (255 - cream.g) * 0.2),
        b: Math.min(255, cream.b + (255 - cream.b) * 0.2)
      }
      
      // Interpolate between white and lighter cream
      const red = Math.round(255 - (255 - lighterCream.r) * scrollPercentage)
      const green = Math.round(255 - (255 - lighterCream.g) * scrollPercentage)
      const blue = Math.round(255 - (255 - lighterCream.b) * scrollPercentage)
      
      setBackgroundColor(`rgb(${red}, ${green}, ${blue})`)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="pt-20">
        <MindbodyTabs />
      </div>
    </div>
  )
}
