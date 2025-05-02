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

  const handleAjaxSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    const formData = new FormData(e.target as HTMLFormElement);
    await fetch("https://formsubmit.co/ajax/info@studiosevenboutique.com", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    setIsSubmitting(false);
    setIsSuccess(true);
    (e.target as HTMLFormElement).reset();
  };

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
                  {isSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-4">
                      Thank you for your message! We'll be in touch soon.
                    </div>
                  )}

                  <form onSubmit={handleAjaxSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
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
                        name="email"
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
                        name="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="transform-gpu transition-all duration-300 focus:scale-[1.01]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select
                        name="inquiry"
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
                        name="subject"
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
                        name="message"
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
              <IntersectionObserver className="stagger-card">
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
                          300 Victoria St S
                          <br />
                          Amherstburg, ON N9V 1M9
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-charcoal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-charcoal/80">(519) 551-4767</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-charcoal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-charcoal/80">info@studiosevenboutique.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-charcoal mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-charcoal/80">
                          Monday - Friday: 7:00 AM - 10:00 AM
                          <br />
                          5:30 PM - 7:30 PM
                          <br />
                          Saturday: 9:00 AM - 12:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </IntersectionObserver>

              <IntersectionObserver className="stagger-card">
                <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">
                      <DataSplitting type="words" delay={0.2} stagger={0.1}>
                        Location
                      </DataSplitting>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted relative overflow-hidden rounded-full">
                      <iframe
                        src="https://www.google.com/maps?q=300+Victoria+St+S,+Amherstburg,+ON+N9V+1M9,+Canada&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <p className="mt-4 text-lg text-charcoal/80">
                      Located in the heart of Amherstburg
                    </p>
                    <p className="text-sm text-charcoal/60">
                      Parking Lot available at the Studio
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
