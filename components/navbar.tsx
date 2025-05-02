"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      // Show navbar 1 second after scroll starts
      if (isHomePage && !showNavbar) {
        setTimeout(() => {
          setShowNavbar(true)
        }, 1000)
      }
    }

    // Initialize scroll state
    handleScroll()
    window.addEventListener("scroll", handleScroll)

    // Show navbar after logo animation on homepage
    if (isHomePage) {
      const timer = setTimeout(() => {
        setShowNavbar(true)
      }, 2500)  // Changed to 2500ms to match logo dissolve and fade

      return () => {
        clearTimeout(timer)
        window.removeEventListener("scroll", handleScroll)
      }
    } else {
      setShowNavbar(true)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isHomePage, showNavbar])

  if (isHomePage && !showNavbar) {
    return null
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm animate-in fade-in duration-1000" 
          : isHomePage 
            ? "bg-transparent"
            : "bg-white shadow-sm",
        isHomePage && showNavbar && "animate-in fade-in slide-in-from-top duration-1000"
      )}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <button
          type="button"
          onClick={() => { window.location.href = "/"; }}
          className="transform-gpu transition-all duration-700 hover:scale-[1.02] flex items-center bg-transparent border-none p-0 m-0"
          style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
        >
          <Image
            src="/images/studio-seven-logo.png"
            alt="Studio Seven"
            width={500}
            height={94}
            className={cn(
              "h-8 md:h-10 w-auto transition-all duration-700",
              isScrolled || !isHomePage ? "filter-none" : "brightness-0 invert"
            )}
            style={{
              filter: isScrolled || !isHomePage ? 'none' : 'brightness(0) invert(1)'
            }}
            priority
            quality={100}
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className={cn(
              "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] font-['PT_Sans'] relative",
              isScrolled || !isHomePage
                ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                : "text-white hover:text-white/80",
              pathname === "/about" && "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-current"
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger 
              className={cn(
                "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] flex items-center gap-1 font-['PT_Sans'] relative",
                isScrolled || !isHomePage
                  ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                  : "text-white hover:text-white/80",
                pathname.startsWith("/classes") && "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-current"
              )}
              style={{ transitionDelay: "0.2s" }}
            >
              Classes <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className={cn(
                (isScrolled || !isHomePage)
                  ? "bg-white border border-gray-200 shadow-lg"
                  : "bg-transparent backdrop-blur-sm border-none"
              )}
            >
              <DropdownMenuItem className="uppercase text-sm text-charcoal hover:text-stone font-['PT_Sans']" asChild>
                <Link href="/classes">All Classes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="uppercase text-sm text-charcoal hover:text-stone font-['PT_Sans']" asChild>
                <Link href="/pricing">Pricing</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/schedule"
            className={cn(
              "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] font-['PT_Sans'] relative",
              isScrolled || !isHomePage
                ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                : "text-white hover:text-white/80",
              pathname === "/schedule" && "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-current"
            )}
            style={{ transitionDelay: "0.3s" }}
          >
            Schedule
          </Link>

          <Link
            href="/contact"
            className={cn(
              "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] font-['PT_Sans'] relative",
              isScrolled || !isHomePage
                ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                : "text-white hover:text-white/80",
              pathname === "/contact" && "after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-current"
            )}
            style={{ transitionDelay: "0.4s" }}
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-white hover:text-white/80 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white z-50 shadow-md animate-in fade-in slide-in-from-top duration-300">
          <div className="container-custom py-6 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-sm uppercase tracking-wider py-2 text-charcoal hover:text-stone transition-colors font-['PT_Sans']"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/classes"
              className="text-sm uppercase tracking-wider py-2 text-charcoal hover:text-stone transition-colors font-['PT_Sans']"
              onClick={() => setIsOpen(false)}
            >
              Classes
            </Link>
            <Link
              href="/pricing"
              className="text-sm uppercase tracking-wider py-2 text-stone/80 hover:text-stone transition-colors pl-4"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/schedule"
              className="text-sm uppercase tracking-wider py-2 text-charcoal hover:text-stone transition-colors font-['PT_Sans']"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/contact"
              className="text-sm uppercase tracking-wider py-2 text-charcoal hover:text-stone transition-colors font-['PT_Sans']"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
