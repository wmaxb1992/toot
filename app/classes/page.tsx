"use client"

import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

const classes = [
  {
    id: "power-flow",
    title: "POWER FLOW",
    description: "A thoughtfully designed reformer Pilates class that brings together gentle strength and mindful movement. This full-body experience encourages you to move with intention, lengthening, strengthening, with a focus on proper alignment. The perfect introduction to Pilates.",
    duration: "45 min",
    level: "Level 1",
    imageSrc: "/images/powerflow.png",
  },
  {
    id: "sculpt-and-tone",
    title: "SCULPT AND TONE",
    description: "A strength-focused Pilates class designed to tone, tighten, and strengthen the body through mindful, controlled movement. This full-body session blends dynamic sequences with targeted resistance work to help build muscle endurance, improve core stability, and enhance overall definition.",
    duration: "45 min",
    level: "Level 2",
    imageSrc: "/images/sculptandtone.png",
  },
  {
    id: "the-burn",
    title: "THE BURN",
    description: "This class lives up to its name, a high-intensity reformer Pilates class designed to ignite your muscles and elevate your heart rate. With the jump board adding a cardio boost, this class blends low-impact bursts with powerful, muscle-toning sequences for the ultimate full-body challenge. Prepare to sweat, sculpt, and feel the burn from start to finish.",
    duration: "45 min",
    level: "Level 3",
    imageSrc: "/images/sweaty.png",
  },
]

export default function ClassesPage() {
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
                Our Classes
              </DataSplitting>
            </h1>
            <div className="overflow-hidden">
              <DataSplitting
                type="words"
                delay={0.5}
                stagger={0.03}
                as="p"
                className="text-charcoal/80 max-w-2xl mx-auto text-sm"
              >
                Discover our specialized Pilates classes, designed to support your movement journey.
              </DataSplitting>
            </div>
          </div>

          <div className="space-y-8">
            {classes.map((cls, index) => (
              <IntersectionObserver
                key={index}
                className="stagger-card"
                threshold={0.1}
                rootMargin="0px 0px -50px 0px"
                triggerOnce={true}
              >
                <div className="p-8">
                  <Card 
                    className="overflow-hidden transition-all duration-500 rounded-[62px] border-none"
                  >
                    <div className="grid md:grid-cols-2 gap-4 h-full">
                      <div className="relative h-[240px] md:h-auto overflow-hidden">
                        <div className="w-full h-full transform-gpu transition-transform duration-700 hover:scale-[1.05] p-6">
                          <Image
                            src={cls.imageSrc}
                            alt={`${cls.title} - Vector illustration`}
                            fill
                            className={`object-contain ${cls.id === 'the-burn' ? 'mix-blend-multiply' : ''}`}
                            priority={index < 2}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col p-6">
                        <CardHeader className="px-0 pt-0">
                          <CardTitle className="text-lg text-sm">{cls.title}</CardTitle>
                          <CardDescription className="flex justify-between text-xs">
                            <span>Duration: {cls.duration}</span>
                            <span>Level: {cls.level}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 flex-grow">
                          <p className="text-charcoal/80 mb-4 text-xs">{cls.description}</p>
                        </CardContent>
                        <CardFooter className="px-0 pt-4 flex justify-between">
                          <Button
                            asChild
                            className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full btn-3d w-full max-w-[90%]"
                          >
                            <Link href={`/classes/${cls.id}`}>Learn More</Link>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </div>
              </IntersectionObserver>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
