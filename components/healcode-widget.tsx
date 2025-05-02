import Script from "next/script"
import { useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"

interface HealcodeWidgetProps {
  className?: string;
}

export default function HealcodeWidget({ className }: HealcodeWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!containerRef.current) return

    // Function to initialize the widget
    const initializeWidget = () => {
      // Remove any existing widget
      containerRef.current!.innerHTML = ""
      // Inject the widget HTML
      containerRef.current!.innerHTML = `<healcode-widget 
        data-version=\"0.2\" 
        data-link-class=\"healcode-pricing-option-text-link text-white\" 
        data-site-id=\"126366\" 
        data-mb-site-id=\"5744900\" 
        data-service-id=\"100011\" 
        data-bw-identity-site=\"true\" 
        data-type=\"pricing-link\" 
        data-inner-html=\"Buy Now\" 
      />`
      // Call the global init function if available
      if (window && (window as any).HealCodeWidget) {
        (window as any).HealCodeWidget.init && (window as any).HealCodeWidget.init();
      }
    }

    // Initialize the widget
    initializeWidget()

    // Reinitialize when the pathname changes
    const handleRouteChange = () => {
      // Small delay to ensure the DOM is ready
      setTimeout(initializeWidget, 100)
    }

    // Add event listeners for route changes
    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('pushState', handleRouteChange)
    window.addEventListener('replaceState', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('pushState', handleRouteChange)
      window.removeEventListener('replaceState', handleRouteChange)
    }
  }, [pathname])

  // Force reinitialize when the component mounts
  useEffect(() => {
    if (containerRef.current) {
      const initializeWidget = () => {
        containerRef.current!.innerHTML = ""
        containerRef.current!.innerHTML = `<healcode-widget 
          data-version=\"0.2\" 
          data-link-class=\"healcode-pricing-option-text-link text-white\" 
          data-site-id=\"126366\" 
          data-mb-site-id=\"5744900\" 
          data-service-id=\"100011\" 
          data-bw-identity-site=\"true\" 
          data-type=\"pricing-link\" 
          data-inner-html=\"Buy Now\" 
        />`
        if (window && (window as any).HealCodeWidget) {
          (window as any).HealCodeWidget.init && (window as any).HealCodeWidget.init();
        }
      }
      setTimeout(initializeWidget, 100)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        .healcode-widget *, .healcode-widget input, .healcode-widget select, .healcode-widget textarea, .healcode-widget button {
          font-size: 0.85em !important;
        }
        .healcode-widget .healcode-pricing-option-text-link {
          padding: 0.5rem 1rem !important;
          font-size: 0.95em !important;
        }
        .healcode-widget label, .healcode-widget h1, .healcode-widget h2, .healcode-widget h3, .healcode-widget h4, .healcode-widget h5, .healcode-widget h6 {
          font-size: 0.95em !important;
        }
      `}</style>
      <Script
        src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window && (window as any).HealCodeWidget) {
            (window as any).HealCodeWidget.init && (window as any).HealCodeWidget.init();
          }
        }}
      />
      <div 
        ref={containerRef}
        className={className}
      />
    </>
  );
} 