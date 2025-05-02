"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedLogo from "./animated-logo"
import { usePathname } from "next/navigation"

export default function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (isHomePage) {
      // Show content after logo animation completes
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 2500)  // Match the navbar timing

      return () => clearTimeout(timer)
    } else {
      setShowContent(true)
    }
  }, [isHomePage])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      // Complete the transition by 75% of the hero section height
      const progress = Math.min(scrollPosition / (heroHeight * 0.75), 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate background color based on scroll progress
  const backgroundColor = `rgb(${
    229 + (255 - 229) * scrollProgress
  }, ${
    223 + (255 - 223) * scrollProgress
  }, ${
    217 + (255 - 217) * scrollProgress
  })`

  return (
    <section 
      className="relative h-screen flex items-center"
      style={{ backgroundColor }}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-[2000ms]"
        style={{
          backgroundImage: "url('/images/flower_frame_04.png')",
          filter: "brightness(0.9)",
          opacity: 1 - scrollProgress * 0.5
        }}
      />
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-[2000ms]"
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${0.1 * (1 - scrollProgress)})`
        }}
      />

      {isHomePage && <AnimatedLogo scrollProgress={scrollProgress} />}

      <div 
        className={`container-custom relative z-20 text-charcoal transition-all duration-[2000ms] ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-2xl mx-auto mt-32" style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>
          <h1 
            className={`text-5xl md:text-7xl font-normal mb-8 tracking-wide text-center transition-all duration-[2000ms] ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms', letterSpacing: '0.05em' }}
          >
            Move with intention
          </h1>
          <p 
            className={`text-base md:text-lg mb-8 font-light opacity-90 max-w-lg overflow-hidden text-center mx-auto transition-all duration-[2000ms] ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Transform your body and mind through the power of controlled movement at Studio Seven.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 mt-12 justify-center transition-all duration-[2000ms] ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '600ms' }}
          >
            <Button 
              size="lg" 
              className={`bg-white text-charcoal border-2 border-white hover:bg-white/80 rounded-[200px] btn-3d px-12 py-3 transition-all duration-[2000ms] ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '800ms' }}
              asChild
            >
              <Link href="/schedule">Book a Class</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`bg-white text-charcoal border-2 border-white hover:bg-white/80 rounded-[200px] btn-3d px-12 py-3 transition-all duration-[2000ms] ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1000ms' }}
              asChild
            >
              <Link href="/pricing">View Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
