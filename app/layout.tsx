import type React from "react"
import type { Metadata } from "next"
import { Raleway, Raleway_Dots, Montserrat } from "next/font/google"
import { PT_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import "./animations.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Montserrat for hero text
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

// PT Sans for navbar
const ptSans = PT_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
})

// Raleway for main text
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

// Raleway Dots for accents and special elements
const ralewayDots = Raleway_Dots({
  subsets: ["latin"],
  variable: "--font-raleway-dots",
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Studio Seven | Modern Pilates Studio",
  description: "Join our Pilates classes and transform your body and mind at Studio Seven.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${raleway.variable} ${ralewayDots.variable} ${ptSans.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
