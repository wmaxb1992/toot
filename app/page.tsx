"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ClassesSection from "@/components/classes-section"
import CTASection from "@/components/cta-section"
import { throttle } from "@/lib/utils"

export default function Home() {
  useEffect(() => {
    // Initialize parallax effect
    const handleParallax = throttle(() => {
      const scrollY = window.scrollY

      // Apply parallax effect to elements with the 'parallax' class
      document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.1"
        const yPos = -(scrollY * Number.parseFloat(speed))
        element.setAttribute("style", `transform: translate3d(0, ${yPos}px, 0)`)
      })

      // Check for elements to animate when they come into view
      document.querySelectorAll(".stagger-card:not(.animate)").forEach((element) => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          element.classList.add("animate")
        }
      })
    }, 100)

    // Add scroll event listener
    window.addEventListener("scroll", handleParallax)

    // Trigger initial animation for elements already in view
    setTimeout(() => {
      handleParallax()
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleParallax)
    }
  }, [])

  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <ClassesSection />
      <CTASection />
    </div>
  )
}
