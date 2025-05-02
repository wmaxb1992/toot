"use client"

// Type definitions for MindBody
declare global {
  interface Window {
    healcode?: any
  }
}

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function PricingPage() {
  const scriptLoaded = useRef(false)

  // Function to handle button styling after MindBody script loads
  const styleMindBodyLinks = () => {
    // Find all healcode links and style them as buttons
    const links = document.querySelectorAll(".healcode-pricing-option-text-link")
    links.forEach((link) => {
      link.classList.add(
        "w-full",
        "bg-charcoal",
        "text-white",
        "py-3",
        "px-6",
        "rounded-[200px]",
        "hover:bg-charcoal/90",
        "transition-colors",
        "inline-block",
        "text-center",
        "btn-3d",
        "text-sm",
        "font-medium"
      )
    })
  }

  useEffect(() => {
    // Load the MindBody script
    if (!scriptLoaded.current) {
      const script = document.createElement("script")
      script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js"
      script.async = true
      script.onload = () => {
        scriptLoaded.current = true
        // Style links after script loads
        setTimeout(styleMindBodyLinks, 500)
      }
      document.body.appendChild(script)
    }

    // Check if the script has already been loaded
    if (window.healcode && !scriptLoaded.current) {
      scriptLoaded.current = true
      // Style links after a short delay to ensure they're rendered
      setTimeout(styleMindBodyLinks, 500)
    }

    // Set up a MutationObserver to detect when healcode widgets are added to the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          // Check if any healcode links were added
          const links = document.querySelectorAll(".healcode-pricing-option-text-link")
          if (links.length > 0) {
            styleMindBodyLinks()
          }
        }
      })
    })

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      // Clean up the observer when component unmounts
      observer.disconnect()
    }
  }, [])

  // Function to render a MindBody widget
  const renderMindBodyWidget = (serviceId: string, innerHtml: string) => {
    return (
      <div
        className="w-full"
        dangerouslySetInnerHTML={{
          __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="126366" data-mb-site-id="5744900" data-service-id="${serviceId}" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="${innerHtml}" />`,
        }}
      />
    )
  }

  return (
    <>
      <style jsx global>{`
        .healcode-pricing-option-text-link {
          display: inline-block;
          width: 100%;
          background-color: #232323;
          color: white !important;
          padding: 0.75rem 1.5rem;
          border-radius: 200px;
          text-align: center;
          font-weight: 500;
          text-decoration: none !important;
          transition: background-color 0.2s;
        }
        .healcode-pricing-option-text-link:hover {
          background-color: #444;
        }
      `}</style>
      <div className="pt-20 min-h-screen bg-cream">
        <div className="container-custom py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* New to Our Studio? Section */}
            <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title mt-8">
              New to Our Studio?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-6 pb-6 px-6 sm:pt-4 sm:pb-4 sm:px-2">
                  <h2 className="text-2xl sm:text-xl font-medium mb-6 sm:mb-4">Intro Offer</h2>
                  <p className="text-gray-600 mb-1 sm:mb-0 text-base sm:text-sm">3 x classes. New Clients only.</p>
                  <p className="text-gray-600 mb-6 sm:mb-2 text-base sm:text-sm">Expires 7 days after first booking</p>
                  <p className="text-3xl sm:text-2xl font-semibold mb-6 sm:mb-4">$60</p>
                </CardContent>
                <CardFooter className="pb-6 sm:pb-4">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100011", "Book Offer")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-6 pb-6 px-6 sm:pt-4 sm:pb-4 sm:px-2">
                  <h2 className="text-2xl sm:text-xl font-medium mb-6 sm:mb-4">Single Reformer Drop In</h2>
                  <p className="text-gray-600 mb-1 sm:mb-0 text-base sm:text-sm">1 x single reformer class.</p>
                  <p className="text-gray-600 mb-6 sm:mb-2 text-base sm:text-sm">Expires 12 months from purchase</p>
                  <p className="text-3xl sm:text-2xl font-semibold mb-6 sm:mb-4">$32</p>
                </CardContent>
                <CardFooter className="pb-6 sm:pb-4">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100003", "Book Class")}</div>
                </CardFooter>
              </Card>
            </div>
            <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title mt-8">
              Class Packs
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 justify-center">
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-4 pb-4 px-6 sm:pt-2 sm:pb-2 sm:px-2">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">5 Class Pack</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$125</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100007", "Buy Now")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-4 pb-4 px-6 sm:pt-2 sm:pb-2 sm:px-2">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">10 Class Pack</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$250</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100008", "Buy Now")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-4 pb-4 px-6 sm:pt-2 sm:pb-2 sm:px-2">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">20 Class Pack</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$400</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100009", "Buy Now")}</div>
                </CardFooter>
              </Card>
            </div>
            <p className="text-center text-xs text-stone/70 mt-4 mb-16">
              All packs valid for 12 months from date of purchase.
            </p>
            <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title mt-8">
              Private Sessions
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-4 pb-4 px-6 sm:pt-2 sm:pb-2 sm:px-2">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">1:1 Private Reformer Session</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$100</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100005", "Book Private")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-4 pb-4 px-6 sm:pt-2 sm:pb-2 sm:px-2">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">Duo Private Reformer Session</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$80</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100006", "Book Duo")}</div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
