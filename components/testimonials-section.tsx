"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

const testimonials = [
  {
    quote:
      "Studio Seven has completely transformed my relationship with exercise. The instructors are incredibly knowledgeable and create a supportive environment where I feel challenged yet capable.",
    author: "Sarah M.",
    role: "Member since 2022",
  },
  {
    quote:
      "After just two months of consistent classes at Studio Seven, my chronic back pain has significantly improved. The attention to proper form and personalized modifications has made all the difference.",
    author: "Michael T.",
    role: "Member since 2021",
  },
  {
    quote:
      "The atmosphere at Studio Seven is unlike any other fitness studio I've experienced. It's calm, focused, and truly allows you to connect with your body while building strength.",
    author: "Jennifer L.",
    role: "Member since 2023",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-light tracking-wide section-title">
            <DataSplitting type="words" delay={0.2} stagger={0.1}>
              Client Experiences
            </DataSplitting>
          </h2>
        </div>

        <IntersectionObserver className="relative max-w-4xl mx-auto stagger-card">
          <Card className="border-none shadow-sm bg-white transform-gpu">
            <CardContent className="pt-10 pb-8 px-6 md:px-12">
              <Quote className="h-10 w-10 text-charcoal/20 mb-6 mx-auto" />
              <div className="split-text-container">
                <DataSplitting
                  key={currentIndex}
                  type="words"
                  delay={0.1}
                  stagger={0.03}
                  className="text-lg md:text-xl text-center italic mb-8 split-text"
                >
                  {testimonials[currentIndex].quote}
                </DataSplitting>
              </div>
              <div className="text-center">
                <p className="font-medium">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-charcoal/70">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white btn-3d"
              onClick={prevTestimonial}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white btn-3d"
              onClick={nextTestimonial}
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </IntersectionObserver>
      </div>
    </section>
  )
}
