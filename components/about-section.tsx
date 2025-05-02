import Image from "next/image"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

const aboutCards = [
  {
    title: "Personalized Experience",
    text: "With just 8 reformers, each session is tailored for you in a boutique setting.",
    icon: "🌱",
  },
  {
    title: "Boutique Studio",
    text: "High-quality equipment and a thoughtfully curated variety of exercises.",
    icon: "🏛️",
  },
  {
    title: "Transformative Results",
    text: "Feel revitalized, balanced, and deeply connected to your body.",
    icon: "✨",
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <IntersectionObserver className="order-2 md:order-1 stagger-card">
            <h2 className="text-3xl md:text-4xl mb-8 font-light section-title animate-fade-in-up">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Our Studio
              </DataSplitting>
            </h2>
            <div className="overflow-hidden font-montserrat mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-charcoal/80 text-sm">
                Our classes seamlessly blend traditional Pilates principles with innovative, mindful movements, leaving you feeling revitalised, balanced, and deeply connected to your body.
                With just 8 reformers, each session offers a personalised, boutique experience, featuring high-quality equipment and a thoughtfully curated variety of exercises.
                Experience the transformative difference, inside and out.
              </p>
            </div>
          </IntersectionObserver>
          <IntersectionObserver className="order-1 md:order-2 stagger-card">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative rounded-2xl shadow-lg bg-white overflow-hidden aspect-[1262/1866] w-3/4 mx-auto">
                <Image
                  src="/images/ttyl.png"
                  alt="Studio Seven Pilates Instruction"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  )
}
