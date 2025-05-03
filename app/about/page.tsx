"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import IntersectionObserver from "@/components/animations/intersection-observer"

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <IntersectionObserver className="text-center mb-12 stagger-card">
            <h1 className="text-4xl font-light mb-4 animate-fade-in-up">About Us</h1>
          </IntersectionObserver>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <IntersectionObserver className="stagger-card">
              <h2 className="text-3xl font-light mb-6 animate-fade-in-up">Our Story</h2>
              <p className="text-sm text-charcoal/80 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Studio Seven was thoughtfully created by mother-daughter duo Laura and Danijela, whose shared love for Pilates blossomed into something much more. What began as a personal journey, earning their mat and reformer certifications side by side, quickly evolved into a vision for a space where they could share their passion with others.
              </p>
              <p className="text-sm text-charcoal/80 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                With a deep appreciation for health, wellness, and the power of mindful movement, they combined their knowledge and heart to bring Studio Seven to life. Their approach blends modern Pilates techniques with a strong focus on mind-body connection, all within a welcoming and supportive environment.
              </p>
              <p className="text-sm text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Located in Amherstburg, ON, Studio Seven is more than a studio, it's a community where you're encouraged to move with purpose, grow with confidence, and feel truly at home.
              </p>
            </IntersectionObserver>
            <IntersectionObserver className="stagger-card">
              <div className="relative h-[400px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-full h-full overflow-hidden relative rounded-lg bg-white flex items-center justify-center p-4 animate-fade-in-up">
                  <Image 
                    src="/images/ttyl.png"
                    alt="Studio Seven About" 
                    fill 
                    className="object-contain"
                    priority
                  />
                  {/* Radial edge blend */}
                  <div className="pointer-events-none absolute inset-0 rounded-lg" style={{
                    background: 'radial-gradient(circle at center, transparent 60%, white 100%)',
                  }} />
                  {/* Bottom fade to transparency */}
                  <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3 rounded-b-lg" style={{
                    background: 'linear-gradient(to bottom, transparent 0%, white 100%)'
                  }} />
                </div>
              </div>
            </IntersectionObserver>
          </div>

          <div className="mb-16">
            <IntersectionObserver className="text-center mb-8 stagger-card">
              <h2 className="text-3xl font-light mb-4 animate-fade-in-up">The Benefits</h2>
            </IntersectionObserver>

            <div className="grid md:grid-cols-2 gap-6">
              {["Strength", "Endurance", "Flexibility", "Body Alignment"].map((title, i) => (
                <IntersectionObserver key={title} className="stagger-card">
                  <Card className="bg-cream border-none shadow-sm transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-3">{title}</h3>
                      <p className="text-charcoal/80 text-sm">
                        {title === "Strength" && "Reformer Pilates is a mindful practice where your muscles gently work against adjustable resistance. With the help of the reformer's springs, you can personalize the level of resistance to suit your body, gradually increasing it as you grow stronger and more confident in your practice."}
                        {title === "Endurance" && "Low-impact workouts, like Pilates, offer a gentle yet effective way to reach your wellness goals while being kind to your body. These types of exercises are known to support heart health, improve endurance, and promote quicker recovery, helping you feel strong and revitalized with each session."}
                        {title === "Flexibility" && "In our classes, we weave dynamic stretching into the flow of movement to gradually increase flexibility. At the end of each session, we take a few moments to unwind with deep stretches and breath-focused exercises, helping to release tension and reduce the risk of injury."}
                        {title === "Body Alignment" && "We maintain small class sizes to ensure that each student receives personalized attention and guidance on proper alignment. With this focused approach, you'll develop a deeper awareness of your body, strengthen your core, and, over time, improve your posture."}
                      </p>
                    </CardContent>
                  </Card>
                </IntersectionObserver>
              ))}
            </div>
          </div>

          <IntersectionObserver className="bg-cream p-8 text-center stagger-card">
            <h2 className="text-2xl font-light mb-4 animate-fade-in-up">Ready to Reform?</h2>
            <p className="text-charcoal/80 max-w-2xl mx-auto mb-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Join us for a class and discover the transformative power of mindful movement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full" asChild>
                <Link href="/schedule">View Schedule</Link>
              </Button>
              <Button
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full"
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
