"use client"

import { useState, useEffect } from "react"
import MindbodyTabs from "../components/mindbody-tabs"
import Script from "next/script"

export default function SchedulePage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)") // Start with white
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initial animation from white to hero color
    setTimeout(() => {
      setIsLoaded(true)
      setBackgroundColor("rgb(229, 223, 217)")
    }, 100) // Small delay to ensure transition works

    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
      
      // Only handle scroll-based color changes after initial animation
      if (isLoaded) {
        const maxScroll = 500
        const scrollPercentage = Math.min(position / maxScroll, 1)
        
        // Starting color (rgb(229, 223, 217))
        const startColor = {
          r: 229,
          g: 223,
          b: 217
        }
        
        // End color (white)
        const endColor = {
          r: 255,
          g: 255,
          b: 255
        }
        
        // Interpolate between start and end colors
        const red = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercentage)
        const green = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercentage)
        const blue = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercentage)
        
        setBackgroundColor(`rgb(${red}, ${green}, ${blue})`)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLoaded])

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor,
        transition: "background-color 3s ease" // 3 second transition
      }}
    >
      <div className="pt-20">
        <MindbodyTabs />
      </div>
    </div>
  )
}
