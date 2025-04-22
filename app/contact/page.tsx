"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiry: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiry: "general",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light mb-4 section-title">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Contact Us
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
                Have questions about our classes, packages, or anything else? We're here to help. Reach out to us using
                the form below or contact us directly.
              </DataSplitting>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <IntersectionObserver className="stagger-card">
              <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">
                    <DataSplitting type="words" delay={0.2} stagger={0.1}>
                      Send Us a Message
                    </DataSplitting>
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSuccess ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-4">
                      Thank you for your message! We'll be in touch soon.
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="transform-gpu transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="transform-gpu transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="transform-gpu transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select
                        value={formState.inquiry}
                        onValueChange={(value) => setFormState({ ...formState, inquiry: value })}
                      >
                        <SelectTrigger className="transform-gpu transition-all duration-300 hover:scale-[1.01]">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="classes">Class Information</SelectItem>
                          <SelectItem value="pricing">Pricing & Packages</SelectItem>
                          <SelectItem value="private">Private Sessions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        required
                        className="transform-gpu transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        className="transform-gpu transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-charcoal text-white hover:bg-charcoal/90 rounded-none btn-3d"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </IntersectionObserver>

            <div className="space-y-6">
              <IntersectionObserver className="stagger-card" delay={0.2}>
                <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">
                      <DataSplitting type="words" delay={0.2} stagger={0.1}>
                        Studio Information
                      </DataSplitting>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-charcoal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-charcoal/80">
                          123 Movement Lane
                          <br />
                          San Francisco, CA 94110
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-charcoal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-charcoal/80">(415) 555-1234</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-charcoal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-charcoal/80">info@studioseven.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-charcoal/80">
                          Monday - Friday: 6:00 AM - 8:00 PM
                          <br />
                          Saturday: 8:00 AM - 4:00 PM
                          <br />
                          Sunday: 9:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </IntersectionObserver>

              <IntersectionObserver className="stagger-card" delay={0.4}>
                <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">
                      <DataSplitting type="words" delay={0.2} stagger={0.1}>
                        Location
                      </DataSplitting>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      {/* In a real implementation, this would be a Google Maps embed */}
                      <div className="absolute inset-0 flex items-center justify-center bg-cream transform-gpu transition-all duration-700 hover:scale-[1.02]">
                        <p className="text-charcoal/70">Google Maps would be embedded here</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-charcoal/80">
                      We're conveniently located in the heart of the Mission District, with street parking available and
                      just two blocks from public transportation.
                    </p>
                  </CardContent>
                </Card>
              </IntersectionObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
