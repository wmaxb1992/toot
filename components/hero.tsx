import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/serene-pilates-space.png')",
          filter: "brightness(0.9)",
        }}
      />
      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="container-custom relative z-20 text-white">
        <div className="max-w-2xl mx-auto mt-32" style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wide text-center">
            Move with intention
          </h1>
          <p className="text-base md:text-lg mb-8 font-light opacity-90 max-w-lg overflow-hidden text-center mx-auto">
            Transform your body and mind through the power of controlled movement at Studio Seven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <Button size="lg" className="bg-white text-charcoal border-2 border-white hover:bg-white/80 rounded-[200px] btn-3d px-12 py-3" asChild>
              <Link href="/schedule">Book a Class</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-charcoal border-2 border-white hover:bg-white/80 rounded-[200px] btn-3d px-12 py-3"
              asChild
            >
              <Link href="/pricing">View Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
