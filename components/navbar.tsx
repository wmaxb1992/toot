"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DataSplitting from "@/components/animations/data-splitting"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Initialize scroll state
    handleScroll()

    window.addEventListener("scroll", handleScroll)

    // Set loaded state after a small delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm animate-in fade-in duration-1000" 
          : isHomePage 
            ? "bg-transparent"
            : "bg-white shadow-sm"
      )}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <Link
          href="/"
          className="transform-gpu transition-all duration-700 hover:scale-[1.02] flex items-center"
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {isLoaded && (
            <>
              <Link
                href="/about"
                className={cn(
                  "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] font-['PT_Sans']",
                  isScrolled || !isHomePage
                    ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                    : "text-white hover:text-white/80"
                )}
                style={{ transitionDelay: "0.1s" }}
              >
                About
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={cn(
                    "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] flex items-center gap-1 font-['PT_Sans']",
                    isScrolled || !isHomePage
                      ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                      : "text-white hover:text-white/80"
                  )}
                  style={{ transitionDelay: "0.2s" }}
                >
                  Classes <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-transparent backdrop-blur-sm border-none">
                  <DropdownMenuItem className="uppercase text-sm text-charcoal hover:text-stone font-['PT_Sans']" asChild>
                    <Link href="/classes">All Classes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="uppercase text-sm text-charcoal hover:text-stone font-['PT_Sans']" asChild>
                    <Link href="/classes/private">Private Classes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="uppercase text-sm text-charcoal hover:text-stone font-['PT_Sans']" asChild>
                    <Link href="/pricing">Pricing</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/schedule"
                className={cn(
                  "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] font-['PT_Sans']",
                  isScrolled || !isHomePage
                    ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                    : "text-white hover:text-white/80"
                )}
                style={{ transitionDelay: "0.3s" }}
              >
                Schedule
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm uppercase tracking-wider transform-gpu transition-all duration-700 hover:translate-y-[-2px] font-['PT_Sans']",
                  isScrolled || !isHomePage
                    ? "text-charcoal hover:text-stone animate-in fade-in duration-1000" 
                    : "text-white hover:text-white/80"
                )}
                style={{ transitionDelay: "0.4s" }}
              >
                Contact
              </Link>
              {isScrolled && (
                <Button
                  variant="outline"
                  className={cn(
                    "rounded-full btn-3d transition-all duration-700 font-['PT_Sans']",
                    "border-charcoal bg-charcoal text-white hover:bg-charcoal/90",
                    "animate-in fade-in slide-in-from-right-4 duration-1000"
                  )}
                  style={{ transitionDelay: "0.5s" }}
                >
                  Book Now
                </Button>
              )}
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden transition-all duration-700",
            isScrolled || !isHomePage
              ? "text-charcoal animate-in fade-in duration-1000" 
              : "text-white"
          )} 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
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
              href="/classes/private"
              className="text-sm uppercase tracking-wider py-2 text-stone/80 hover:text-stone transition-colors pl-4"
              onClick={() => setIsOpen(false)}
            >
              Private Classes
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
              className="text-sm uppercase tracking-wider py-2 text-charcoal hover:text-stone transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/contact"
              className="text-sm uppercase tracking-wider py-2 text-charcoal hover:text-stone transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="rounded-full border-charcoal bg-charcoal text-white hover:bg-charcoal/90 w-full btn-3d"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
