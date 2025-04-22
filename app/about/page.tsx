"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

const instructors = [
  {
    name: "Emma Wilson",
    role: "Founder & Lead Instructor",
    bio: "Emma has over 15 years of experience in Pilates and movement education. She founded Studio Seven with a vision to create a space where mindful movement is accessible to all.",
    certifications: ["Comprehensive Pilates Certification", "Pre/Post Natal Specialist", "Injury Rehabilitation"],
    image: "/poised-pilates-professional.png",
  },
  {
    name: "Michael Chen",
    role: "Senior Instructor",
    bio: "Michael brings his background in physical therapy to his Pilates instruction, specializing in rehabilitation and functional movement patterns.",
    certifications: ["Comprehensive Pilates Certification", "Physical Therapy License", "Movement Analysis Specialist"],
    image: "/focused-pilates-instructor.png",
  },
  {
    name: "Sarah Johnson",
    role: "Instructor",
    bio: "Sarah's approach combines classical Pilates with contemporary movement science, creating classes that are both traditional and innovative.",
    certifications: ["Mat & Reformer Certification", "Yoga Alliance 200hr", "Functional Range Conditioning"],
    image: "/poised-pilates-professional.png",
  },
  {
    name: "David Miller",
    role: "Instructor",
    bio: "With a background in competitive athletics, David focuses on Pilates for performance enhancement and injury prevention.",
    certifications: [
      "Comprehensive Pilates Certification",
      "Sports Performance Specialist",
      "Corrective Exercise Specialist",
    ],
    image: "/focused-pilates-instructor.png",
  },
]

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
                About Studio Seven
              </DataSplitting>
            </h1>
            <div className="overflow-hidden">
              <DataSplitting
                type="words"
                delay={0.5}
                stagger={0.03}
                as="p"
                className="text-charcoal/80 max-w-2xl mx-auto"
              >
                Our story, our mission, and the people who make our studio special.
              </DataSplitting>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <IntersectionObserver className="stagger-card">
              <h2 className="text-3xl font-light mb-6 section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  Our Story
                </DataSplitting>
              </h2>
              <div className="overflow-hidden">
                <DataSplitting type="words" delay={0.4} stagger={0.02} as="p" className="text-charcoal/80 mb-4">
                  Founded in 2018 by Emma Wilson, Studio Seven was born from a passion for the transformative power of
                  mindful movement. After years of teaching in various studios across the country, Emma envisioned a
                  space that honored the precision and intention of classical Pilates while embracing modern
                  understanding of movement science.
                </DataSplitting>
              </div>
              <div className="overflow-hidden">
                <DataSplitting type="words" delay={0.6} stagger={0.02} as="p" className="text-charcoal/80 mb-4">
                  The name "Studio Seven" represents the seven principles that guide our practice: breath,
                  concentration, centering, control, precision, flow, and harmony. These principles inform not just our
                  approach to movement, but to the entire studio experience.
                </DataSplitting>
              </div>
              <div className="overflow-hidden">
                <DataSplitting type="words" delay={0.8} stagger={0.02} as="p" className="text-charcoal/80">
                  Today, Studio Seven is a thriving community of dedicated instructors and clients who share a
                  commitment to mindful movement and holistic wellness.
                </DataSplitting>
              </div>
            </IntersectionObserver>
            <IntersectionObserver className="relative h-[400px] stagger-card">
              <div className="w-full h-full transform-gpu transition-transform duration-700 hover:scale-[1.02]">
                <Image src="/sunlit-pilates-sanctuary.png" alt="Studio Seven Interior" fill className="object-cover" />
              </div>
            </IntersectionObserver>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light mb-4 section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  Our Philosophy
                </DataSplitting>
              </h2>
              <div className="overflow-hidden">
                <DataSplitting
                  type="words"
                  delay={0.4}
                  stagger={0.02}
                  as="p"
                  className="text-charcoal/80 max-w-2xl mx-auto"
                >
                  At Studio Seven, we believe that movement is medicine. Our approach is guided by these core
                  principles:
                </DataSplitting>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <IntersectionObserver className="stagger-card" delay={0.1}>
                <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Mindful Practice</h3>
                    <p className="text-charcoal/80">
                      We emphasize the mind-body connection in every movement, encouraging awareness, intention, and
                      presence.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>

              <IntersectionObserver className="stagger-card" delay={0.2}>
                <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Personalized Approach</h3>
                    <p className="text-charcoal/80">
                      We recognize that each body is unique, and we provide modifications and progressions to meet you
                      where you are.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>

              <IntersectionObserver className="stagger-card" delay={0.3}>
                <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Community Connection</h3>
                    <p className="text-charcoal/80">
                      We foster a supportive, inclusive environment where clients feel welcomed, respected, and
                      inspired.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light mb-4 section-title">
                <DataSplitting type="words" delay={0.2} stagger={0.1}>
                  Our Team
                </DataSplitting>
              </h2>
              <div className="overflow-hidden">
                <DataSplitting
                  type="words"
                  delay={0.4}
                  stagger={0.02}
                  as="p"
                  className="text-charcoal/80 max-w-2xl mx-auto"
                >
                  Meet our dedicated instructors who bring expertise, passion, and personalized attention to every
                  class.
                </DataSplitting>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {instructors.map((instructor, index) => (
                <IntersectionObserver
                  key={index}
                  className="stagger-card"
                  threshold={0.1}
                  rootMargin="0px 0px -50px 0px"
                  triggerOnce={true}
                  delay={index * 0.1}
                >
                  <Card className="border-none shadow-sm overflow-hidden transform-gpu hover:shadow-md transition-all duration-300">
                    <div className="grid sm:grid-cols-2 gap-0">
                      <div className="relative h-[200px] sm:h-auto overflow-hidden">
                        <div className="w-full h-full transform-gpu transition-transform duration-700 hover:scale-[1.05]">
                          <Image
                            src={instructor.image || "/placeholder.svg"}
                            alt={instructor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-medium mb-1">{instructor.name}</h3>
                        <p className="text-charcoal/70 text-sm mb-3">{instructor.role}</p>
                        <p className="text-charcoal/80 text-sm mb-3">{instructor.bio}</p>
                        <div className="text-xs text-charcoal/70">
                          <p className="font-medium mb-1">Certifications:</p>
                          <ul className="list-disc list-inside">
                            {instructor.certifications.map((cert, i) => (
                              <li key={i}>{cert}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </IntersectionObserver>
              ))}
            </div>
          </div>

          <IntersectionObserver className="bg-cream p-8 text-center stagger-card">
            <h2 className="text-2xl font-light mb-4 section-title">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Ready to Experience Studio Seven?
              </DataSplitting>
            </h2>
            <div className="overflow-hidden">
              <DataSplitting
                type="words"
                delay={0.4}
                stagger={0.02}
                as="p"
                className="text-charcoal/80 max-w-2xl mx-auto mb-6"
              >
                Join us for a class and discover the transformative power of mindful movement in our welcoming studio
                environment.
              </DataSplitting>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-charcoal text-white hover:bg-charcoal/90 rounded-none btn-3d" asChild>
                <Link href="/schedule">View Schedule</Link>
              </Button>
              <Button
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none btn-3d"
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
