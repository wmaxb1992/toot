"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

export default function PricingPage() {
  useEffect(() => {
    // Initialize animations for elements already in view
    const handleScroll = throttle(() => {
      document
        .querySelectorAll(".stagger-card:not(.animate)")
        .forEach((element) => {
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
    <div className="pt-20 min-h-screen bg-cream">
      <div className="container-custom py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* New to Our Studio? Section */}
          <IntersectionObserver className="mb-8 md:mb-10 stagger-card">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  New to Our Studio?
                </DataSplitting>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      Intro Offer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-charcoal mb-2 text-sm">
                      3 x classes. New Clients only.
                    </p>
                    <p className="text-xs text-charcoal mb-2">
                      Expires 7 days after first booking
                    </p>
                    <p className="text-xl font-dots font-bold mb-2">$60</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/schedule">Book Offer</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      Single Reformer Drop In
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-charcoal mb-2 text-sm">
                      1 x single reformer class.
                    </p>
                    <p className="text-xs text-charcoal mb-2">
                      Expires 12 months from purchase
                    </p>
                    <p className="text-xl font-dots font-bold mb-2">$30</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/schedule">Book Class</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </IntersectionObserver>

          {/* Class Packs Section */}
          <IntersectionObserver className="mb-8 md:mb-10 stagger-card">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  Class Packs
                </DataSplitting>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 5 Class Pack */}
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      5 Class Pack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-xl font-dots font-bold mb-2">$125</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/schedule">Buy Now</Link>
                    </Button>
                  </CardContent>
                </Card>
                {/* 10 Class Pack */}
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      10 Class Pack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-xl font-dots font-bold mb-2">$250</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/schedule">Buy Now</Link>
                    </Button>
                  </CardContent>
                </Card>
                {/* 20 Class Pack */}
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      20 Class Pack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-xl font-dots font-bold mb-2">$400</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/schedule">Buy Now</Link>
                    </Button>
                  </CardContent>
                </Card>
                {/* 40 Class Pack */}
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      40 Class Pack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-xl font-dots font-bold mb-2">$800</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/schedule">Buy Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-xs text-stone/70 mt-4">
                All packs valid for 12 months from date of purchase.
              </p>
            </div>
          </IntersectionObserver>

          {/* Private Sessions Section */}
          <IntersectionObserver className="stagger-card">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  Private Sessions
                </DataSplitting>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      1:1 Private Reformer Session
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-xl font-dots font-bold mb-2">$100</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/contact">Book Private</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-medium">
                      Duo Private Reformer Session
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <p className="text-xl font-dots font-bold mb-2">$80</p>
                    <Button
                      className="w-full rounded-[200px] btn-3d bg-charcoal text-white hover:bg-charcoal/90 px-8 py-2 transition-transform hover:scale-105 text-sm"
                      asChild
                    >
                      <Link href="/contact">Book Duo</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </div>
  )
}
