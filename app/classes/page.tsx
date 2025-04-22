"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

const classes = [
  {
    id: "mat-pilates",
    title: "Mat Pilates",
    description:
      "Foundation class focusing on core strength, flexibility, and proper alignment using your body weight as resistance.",
    longDescription:
      "Our Mat Pilates classes focus on the fundamental principles of the Pilates method. Using your body weight as resistance, you'll strengthen your core, improve posture, and increase flexibility. These classes are perfect for beginners and experienced practitioners alike, as our instructors provide modifications for all levels.",
    duration: "55 min",
    level: "All Levels",
    imageQuery: "watercolor painting of people doing mat pilates exercises in a bright studio",
  },
  {
    id: "reformer-basics",
    title: "Reformer Basics",
    description: "Introduction to the Pilates reformer machine, focusing on proper form and fundamental movements.",
    longDescription:
      "Reformer Basics introduces you to the versatile Pilates reformer machine. This class focuses on proper form and fundamental movements, making it ideal for beginners or those looking to refine their technique. The reformer's spring resistance system provides support while challenging your strength and control.",
    duration: "55 min",
    level: "Beginner",
    imageQuery: "watercolor painting of person using pilates reformer machine, beginner level, soft colors",
  },
  {
    id: "advanced-reformer",
    title: "Advanced Reformer",
    description: "Challenging class for experienced practitioners, incorporating complex movements and flow sequences.",
    longDescription:
      "Our Advanced Reformer class is designed for experienced practitioners looking for a challenge. This fast-paced class incorporates complex movements, dynamic transitions, and flowing sequences that will test your strength, control, and endurance. Prior reformer experience is recommended.",
    duration: "55 min",
    level: "Advanced",
    imageQuery: "watercolor painting of advanced pilates reformer exercises, dynamic flowing movements",
  },
  {
    id: "pilates-fusion",
    title: "Pilates Fusion",
    description:
      "Blend of traditional Pilates with elements of yoga and functional training for a comprehensive workout.",
    longDescription:
      "Pilates Fusion blends traditional Pilates principles with elements of yoga and functional training. This dynamic class offers a comprehensive workout that improves strength, flexibility, and mind-body connection. The varied exercises keep your body guessing and your mind engaged.",
    duration: "60 min",
    level: "Intermediate",
    imageQuery: "watercolor painting of pilates fusion class combining pilates and yoga elements",
  },
  {
    id: "prenatal-pilates",
    title: "Prenatal Pilates",
    description:
      "Specially designed for expectant mothers, focusing on pelvic floor strength, posture, and gentle movement.",
    longDescription:
      "Our Prenatal Pilates classes are specially designed for expectant mothers in all trimesters. These gentle yet effective sessions focus on pelvic floor strength, proper posture, and safe movement patterns that prepare the body for birth and recovery. Our certified prenatal instructors ensure all exercises are appropriate for pregnancy.",
    duration: "50 min",
    level: "All Levels",
    imageQuery: "watercolor painting of prenatal pilates class with pregnant women in comfortable studio, gentle tones",
  },
  {
    id: "pilates-for-athletes",
    title: "Pilates for Athletes",
    description: "Targeted conditioning to enhance athletic performance, prevent injuries, and improve recovery.",
    longDescription:
      "Pilates for Athletes offers targeted conditioning that complements sports training and enhances overall athletic performance. This class focuses on core stability, balanced muscle development, and proper movement patterns to prevent injuries and improve recovery. Ideal for athletes of all types looking to elevate their game.",
    duration: "60 min",
    level: "Intermediate to Advanced",
    imageQuery: "watercolor painting of athletic men and women doing pilates exercises for sports conditioning",
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
                className="text-charcoal/80 max-w-2xl mx-auto"
              >
                Discover our range of specialized Pilates classes designed to meet you where you are in your movement
                journey and help you progress with confidence.
              </DataSplitting>
            </div>
          </div>

          <div className="space-y-12">
            {classes.map((cls, index) => (
              <IntersectionObserver
                key={index}
                className="stagger-card"
                threshold={0.1}
                rootMargin="0px 0px -50px 0px"
                triggerOnce={true}
              >
                <Card className="border-none shadow-sm overflow-hidden transform-gpu transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-[300px] md:h-auto overflow-hidden">
                      <div className="w-full h-full transform-gpu transition-transform duration-700 hover:scale-[1.05]">
                        <Image
                          src={`/abstract-geometric-shapes.png?height=600&width=800&query=${encodeURIComponent(
                            cls.imageQuery,
                          )}`}
                          alt={`${cls.title} - Watercolor illustration`}
                          fill
                          className="object-cover"
                          priority={index < 2}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col p-6">
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-2xl font-medium">{cls.title}</CardTitle>
                        <CardDescription className="flex justify-between">
                          <span>{cls.duration}</span>
                          <span>{cls.level}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-0 flex-grow">
                        <p className="text-charcoal/80 mb-4">{cls.longDescription}</p>
                      </CardContent>
                      <CardFooter className="px-0 pt-4 flex justify-between">
                        <Button
                          variant="outline"
                          className="rounded-none border-charcoal text-charcoal hover:bg-charcoal hover:text-white btn-3d"
                          asChild
                        >
                          <Link href={`/classes/${cls.id}`}>Learn More</Link>
                        </Button>
                        <Button className="bg-charcoal text-white hover:bg-charcoal/90 rounded-none btn-3d" asChild>
                          <Link href="/schedule">Book Class</Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </IntersectionObserver>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
