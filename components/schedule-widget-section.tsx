"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    HealcodeWidget?: {
      init: () => void;
    };
  }
}

export default function ScheduleWidgetSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="pt-20 pb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-charcoal/5"></div>
      <div className="container-custom max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-light section-title">
            Book Your Class
          </h2>
          <div className="text-charcoal/80 max-w-2xl mx-auto font-montserrat text-sm">
            View our schedule and book your next class
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          {isClient && (
            <div className="min-h-[600px]">
              <Script
                src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
                strategy="beforeInteractive"
              />
              <div 
                className="healcode-widget" 
                data-type="schedules"
                data-widget-partner="object"
                data-widget-id="2223636f680"
                data-widget-version="0"
              />
              <style jsx global>{`
                .healcode-widget {
                  min-height: 600px;
                  width: 100%;
                }
                .healcode-widget .powered-by-mindbody,
                .healcode-widget .powered-by,
                .healcode-widget .mindbody-logo,
                .healcode-widget [class*="powered-by"],
                .healcode-widget [class*="mindbody-logo"] {
                  display: none !important;
                }
              `}</style>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 