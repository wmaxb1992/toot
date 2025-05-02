import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <IntersectionObserver className="order-2 md:order-1 stagger-card">
            <h2 className="text-3xl md:text-4xl mb-16 font-light section-title">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Our Studio
              </DataSplitting>
            </h2>
            <div className="overflow-hidden font-montserrat">
              <p className="text-charcoal/80 mb-6 text-sm">
                Our classes seamlessly blend traditional Pilates principles with innovative, mindful movements, leaving you feeling revitalised, balanced, and deeply connected to your body.
                With just 8 reformers, each session offers a personalised, boutique experience, featuring high-quality equipment and a thoughtfully curated variety of exercises.
                Experience the transformative difference, inside and out.
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full bg-charcoal text-white hover:bg-charcoal/90 btn-3d"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </IntersectionObserver>
          <IntersectionObserver className="order-1 md:order-2 relative h-[400px] md:h-[500px] stagger-card">
            <div className="w-full h-full transform-gpu transition-all duration-1000 opacity-0 translate-y-4 group-animate-in:opacity-100 group-animate-in:translate-y-0 image-container">
              <Image
                src="/images/dd1.jpeg"
                alt="Studio Seven Pilates Instruction"
                fill
                className="object-cover"
              />
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  )
}
