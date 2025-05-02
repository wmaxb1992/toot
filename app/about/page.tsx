"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

export default function AboutPage() {
  useEffect(() => {
    // Initialize animations for elements already in view
    const handleScroll = throttle(() => {
      document.querySelectorAll(".stagger-card:not(.animate)").forEach((element) => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          element.classList.add("animate")
        }
      })
    }, 100)

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Trigger initial animation
    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light mb-4 section-title">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                About Us
              </DataSplitting>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <IntersectionObserver className="stagger-card">
              <h2 className="text-3xl font-light mb-6 section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  Our Story
                </DataSplitting>
              </h2>
              <div className="overflow-hidden">
                <DataSplitting type="words" delay={0.4} stagger={0.02} as="p" className="text-sm text-charcoal/80 mb-4">
                  Studio Seven was thoughtfully created by mother-daughter duo Laura and Danijela, whose shared love for Pilates blossomed into something much more. What began as a personal journey, earning their mat and reformer certifications side by side, quickly evolved into a vision for a space where they could share their passion with others.
                </DataSplitting>
              </div>
              <div className="overflow-hidden">
                <DataSplitting type="words" delay={0.6} stagger={0.02} as="p" className="text-sm text-charcoal/80 mb-4">
                  With a deep appreciation for health, wellness, and the power of mindful movement, they combined their knowledge and heart to bring Studio Seven to life. Their approach blends modern Pilates techniques with a strong focus on mind-body connection, all within a welcoming and supportive environment.
                </DataSplitting>
              </div>
              <div className="overflow-hidden">
                <DataSplitting type="words" delay={0.8} stagger={0.02} as="p" className="text-sm text-charcoal/80">
                  Located in Amherstburg, ON, Studio Seven is more than a studio, it's a community where you're encouraged to move with purpose, grow with confidence, and feel truly at home.
                </DataSplitting>
              </div>
            </IntersectionObserver>
            <IntersectionObserver className="relative h-[400px] stagger-card">
              <div className="w-full h-full transform-gpu transition-transform duration-700 hover:scale-[1.02] overflow-hidden relative rounded-lg">
                <Image 
                  src="/images/dd2.jpg" 
                  alt="Flower Detail" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </IntersectionObserver>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light mb-4 section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  The Benefits
                </DataSplitting>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <IntersectionObserver className="stagger-card">
                <Card className="bg-cream border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Strength</h3>
                    <p className="text-charcoal/80 text-sm">
                      Reformer Pilates is a mindful practice where your muscles gently work against adjustable resistance. With the help of the reformer's springs, you can personalize the level of resistance to suit your body, gradually increasing it as you grow stronger and more confident in your practice.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>

              <IntersectionObserver className="stagger-card">
                <Card className="bg-cream border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Endurance</h3>
                    <p className="text-charcoal/80 text-sm">
                      Low-impact workouts, like Pilates, offer a gentle yet effective way to reach your wellness goals while being kind to your body. These types of exercises are known to support heart health, improve endurance, and promote quicker recovery, helping you feel strong and revitalized with each session.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>

              <IntersectionObserver className="stagger-card">
                <Card className="bg-cream border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Flexibility</h3>
                    <p className="text-charcoal/80 text-sm">
                      In our classes, we weave dynamic stretching into the flow of movement to gradually increase flexibility. At the end of each session, we take a few moments to unwind with deep stretches and breath-focused exercises, helping to release tension and reduce the risk of injury.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>

              <IntersectionObserver className="stagger-card">
                <Card className="bg-cream border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Body Alignment</h3>
                    <p className="text-charcoal/80 text-sm">
                      We maintain small class sizes to ensure that each student receives personalized attention and guidance on proper alignment. With this focused approach, you'll develop a deeper awareness of your body, strengthen your core, and, over time, improve your posture.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>
            </div>
          </div>

          <IntersectionObserver className="bg-cream p-8 text-center stagger-card">
            <h2 className="text-2xl font-light mb-4 section-title">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Ready to Reform?
              </DataSplitting>
            </h2>
            <div className="overflow-hidden">
              <DataSplitting
                type="words"
                delay={0.4}
                stagger={0.02}
                as="p"
                className="text-charcoal/80 max-w-2xl mx-auto mb-6 text-sm"
              >
                Join us for a class and discover the transformative power of mindful movement.
              </DataSplitting>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full btn-3d" asChild>
                <Link href="/schedule">View Schedule</Link>
              </Button>
              <Button
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full btn-3d"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </div>
  )
}
