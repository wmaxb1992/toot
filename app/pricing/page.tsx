"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

const packages = [
  {
    title: "Single Class",
    price: "$35",
    description: "Perfect for first-time visitors or occasional drop-ins.",
    features: ["Access to any class format", "Equipment provided", "Valid for 30 days", "No commitment"],
    popular: false,
    link: "/pricing/single",
  },
  {
    title: "Class Pack (5)",
    price: "$160",
    description: "Our most popular option for regular practitioners.",
    features: [
      "5 classes ($32 per class)",
      "Access to all class formats",
      "Valid for 60 days",
      "Discounted rate per class",
    ],
    popular: true,
    link: "/pricing/pack-5",
  },
  {
    title: "Class Pack (10)",
    price: "$290",
    description: "Great value for frequent visitors.",
    features: ["10 classes ($29 per class)", "Access to all class formats", "Valid for 90 days", "Significant savings"],
    popular: false,
    link: "/pricing/pack-10",
  },
  {
    title: "Monthly Unlimited",
    price: "$250",
    description: "Best value for dedicated Pilates enthusiasts.",
    features: ["Unlimited classes", "Priority booking", "One complimentary guest pass", "Monthly auto-renewal"],
    popular: false,
    link: "/pricing/unlimited",
  },
  {
    title: "Annual Membership",
    price: "$2,400",
    description: "Our premium option with maximum benefits.",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Four complimentary guest passes",
      "Two private sessions included",
      "10% off retail items",
    ],
    popular: false,
    link: "/pricing/annual",
  },
  {
    title: "Private Session",
    price: "$95",
    description: "One-on-one instruction tailored to your needs.",
    features: [
      "55-minute personalized session",
      "Customized program",
      "All equipment provided",
      "Available for all skill levels",
    ],
    popular: false,
    link: "/pricing/private",
  },
]

export default function PricingPage() {
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
                Pricing & Packages
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
                Choose the package that fits your schedule and commitment level. All packages give you access to our
                state-of-the-art studio and expert instruction.
              </DataSplitting>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <IntersectionObserver
                key={index}
                className="stagger-card"
                threshold={0.1}
                rootMargin="0px 0px -50px 0px"
                triggerOnce={true}
              >
                <Card
                  className={`border-none relative transform-gpu transition-all duration-500 ${
                    pkg.popular ? "shadow-lg" : "shadow-sm"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-charcoal text-white text-xs px-3 py-1">Most Popular</div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl font-medium">{pkg.title}</CardTitle>
                    <CardDescription>
                      <span className="text-2xl font-dots">{pkg.price}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-charcoal/80 mb-4">{pkg.description}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-charcoal mr-2 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full rounded-none btn-3d ${
                        pkg.popular
                          ? "bg-charcoal text-white hover:bg-charcoal/90"
                          : "bg-white border border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                      }`}
                      asChild
                    >
                      <Link href={pkg.link}>Purchase Package</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </IntersectionObserver>
            ))}
          </div>

          <IntersectionObserver className="mt-16 bg-cream p-8 text-center stagger-card">
            <h2 className="text-2xl font-light mb-4 section-title">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Need Help Choosing?
              </DataSplitting>
            </h2>
            <div className="overflow-hidden">
              <DataSplitting
                type="words"
                delay={0.4}
                stagger={0.03}
                as="p"
                className="text-charcoal/80 max-w-2xl mx-auto mb-6"
              >
                Not sure which package is right for you? Contact us for personalized recommendations or to discuss
                corporate packages and special group rates.
              </DataSplitting>
            </div>
            <Button className="bg-charcoal text-white hover:bg-charcoal/90 rounded-none btn-3d" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </IntersectionObserver>
        </div>
      </div>
    </div>
  )
}
