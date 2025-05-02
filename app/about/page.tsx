"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light mb-4">
              About Us
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-light mb-6">
                Our Story
              </h2>
              <p className="text-sm text-charcoal/80 mb-4">
                Studio Seven was thoughtfully created by mother-daughter duo Laura and Danijela, whose shared love for Pilates blossomed into something much more. What began as a personal journey, earning their mat and reformer certifications side by side, quickly evolved into a vision for a space where they could share their passion with others.
              </p>
              <p className="text-sm text-charcoal/80 mb-4">
                With a deep appreciation for health, wellness, and the power of mindful movement, they combined their knowledge and heart to bring Studio Seven to life. Their approach blends modern Pilates techniques with a strong focus on mind-body connection, all within a welcoming and supportive environment.
              </p>
              <p className="text-sm text-charcoal/80">
                Located in Amherstburg, ON, Studio Seven is more than a studio, it's a community where you're encouraged to move with purpose, grow with confidence, and feel truly at home.
              </p>
            </div>
            <div className="relative h-[400px]">
              <div className="w-full h-full overflow-hidden relative rounded-lg">
                <Image 
                  src="/images/dd2.jpg" 
                  alt="Flower Detail" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light mb-4">
                The Benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-cream border-none shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Strength</h3>
                  <p className="text-charcoal/80 text-sm">
                    Reformer Pilates is a mindful practice where your muscles gently work against adjustable resistance. With the help of the reformer's springs, you can personalize the level of resistance to suit your body, gradually increasing it as you grow stronger and more confident in your practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cream border-none shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Endurance</h3>
                  <p className="text-charcoal/80 text-sm">
                    Low-impact workouts, like Pilates, offer a gentle yet effective way to reach your wellness goals while being kind to your body. These types of exercises are known to support heart health, improve endurance, and promote quicker recovery, helping you feel strong and revitalized with each session.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cream border-none shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Flexibility</h3>
                  <p className="text-charcoal/80 text-sm">
                    In our classes, we weave dynamic stretching into the flow of movement to gradually increase flexibility. At the end of each session, we take a few moments to unwind with deep stretches and breath-focused exercises, helping to release tension and reduce the risk of injury.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cream border-none shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Body Alignment</h3>
                  <p className="text-charcoal/80 text-sm">
                    We maintain small class sizes to ensure that each student receives personalized attention and guidance on proper alignment. With this focused approach, you'll develop a deeper awareness of your body, strengthen your core, and, over time, improve your posture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-cream p-8 text-center">
            <h2 className="text-2xl font-light mb-4">
              Ready to Reform?
            </h2>
            <p className="text-charcoal/80 max-w-2xl mx-auto mb-6 text-sm">
              Join us for a class and discover the transformative power of mindful movement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
  )
}
