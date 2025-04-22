"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"
import Image from "next/image"

export default function Footer() {
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
    <footer className="bg-cream pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Studio Info */}
          <IntersectionObserver className="stagger-card">
            <div className="mb-6">
              <Image
                src="/images/studio-seven-logo.png"
                alt="Studio Seven"
                width={500}
                height={94}
                className="h-8 w-auto"
                quality={100}
              />
            </div>
            <div className="overflow-hidden">
              <DataSplitting type="words" delay={0.3} stagger={0.02} as="p" className="text-sm text-charcoal/80 mb-6">
                A modern Pilates studio dedicated to mindful movement, strength building, and holistic wellness in a
                serene environment.
              </DataSplitting>
            </div>
            <div className="flex items-center gap-4 text-charcoal/80">
              <Link
                href="https://instagram.com"
                className="hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="mailto:info@studiosevenboutique.com"
                className="hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </IntersectionObserver>

          {/* Quick Links */}
          <IntersectionObserver className="stagger-card">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </IntersectionObserver>

          {/* Contact Info */}
          <IntersectionObserver className="stagger-card">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start transform-gpu transition-all duration-300 hover:translate-x-1">
                <MapPin size={18} className="mr-2 text-charcoal/80 shrink-0 mt-0.5" />
                <span className="text-charcoal/80">
                  320 Richmond St
                  <br />
                  Amherstburg, ON N9V 1H4
                </span>
              </li>
              <li className="flex items-center transform-gpu transition-all duration-300 hover:translate-x-1">
                <Phone size={18} className="mr-2 text-charcoal/80" />
                <Link href="tel:+15195514767" className="text-charcoal/80 hover:text-charcoal transition-colors">
                  (519) 551-4767
                </Link>
              </li>
              <li className="flex items-center transform-gpu transition-all duration-300 hover:translate-x-1">
                <Mail size={18} className="mr-2 text-charcoal/80" />
                <Link
                  href="mailto:info@studiosevenboutique.com"
                  className="text-charcoal/80 hover:text-charcoal transition-colors"
                >
                  info@studiosevenboutique.com
                </Link>
              </li>
            </ul>
          </IntersectionObserver>

          {/* Newsletter */}
          <IntersectionObserver className="stagger-card">
            <h3 className="text-lg font-bold mb-4">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Stay Connected
              </DataSplitting>
            </h3>
            <p className="text-sm text-charcoal/80 mb-4">
              Subscribe to our newsletter for class updates, wellness tips, and special offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-sand focus-visible:ring-charcoal transform-gpu transition-all duration-300 focus:scale-[1.01]"
              />
              <Button type="submit" className="w-full bg-charcoal text-white hover:bg-charcoal/90 rounded-full btn-3d">
                Subscribe
              </Button>
            </form>
          </IntersectionObserver>
        </div>

        <div className="mt-8 pt-4 border-t border-sand/50 text-center text-xs text-charcoal/70">
          <p>© 2025 Studio Seven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
