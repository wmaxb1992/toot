"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface AnimatedLogoProps {
  scrollProgress: number
  dissolved?: boolean
}

export default function AnimatedLogo({ scrollProgress, dissolved = false }: AnimatedLogoProps) {
  // Calculate opacity based on dissolved prop and scroll
  const getOpacity = () => {
    if (dissolved) return 0
    return Math.max(0, 1 - scrollProgress * 2)
  }

  return (
    <div 
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[75px] sm:h-16 md:h-20 w-auto transition-opacity duration-500 ease-in-out z-50"
      style={{ opacity: getOpacity() }}
    >
      <Image
        src="/images/studio-seven-logo.png"
        alt="Studio Seven"
        width={500}
        height={94}
        className="h-full w-auto brightness-0 invert object-contain"
        priority
        quality={100}
      />
    </div>
  )
} 