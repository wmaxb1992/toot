"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

// Add TypeScript declarations for the Mindbody widget
declare global {
  interface Window {
    MBXWidget?: {
      init: () => void;
    };
  }
}

export default function ScheduleWidgetSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Ensure the widget initializes when the script loads
    const initWidget = () => {
      if (window.MBXWidget) {
        window.MBXWidget.init();
      }
    };

    // Add event listener for script load
    window.addEventListener('MBXWidgetReady', initWidget);

    return () => {
      window.removeEventListener('MBXWidgetReady', initWidget);
    };
  }, [])

  return (
    <section className="pt-20 pb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-charcoal/5"></div>
      <div className="container-custom max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-light section-title">
            <DataSplitting type="words" delay={0.2} stagger={0.1}>
              Book Your Class
            </DataSplitting>
          </h2>
          <div className="text-charcoal/80 max-w-2xl mx-auto font-montserrat text-sm">
            View our schedule and book your next class
          </div>
        </div>
        <IntersectionObserver className="stagger-card">
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-8">
              <div className="mindbody-widget" data-widget-type="Schedules" data-widget-id="2223636f680"></div>
              <Script 
                src="https://brandedweb.mindbodyonline.com/embed/widget.js"
                strategy="afterInteractive"
                onLoad={() => {
                  if (window.MBXWidget) {
                    window.MBXWidget.init();
                  }
                }}
              />
            </CardContent>
          </Card>
        </IntersectionObserver>
      </div>
    </section>
  )
} 