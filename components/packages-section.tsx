import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

const packages = [
  {
    title: "Single Class",
    price: "$35",
    description: "Perfect for first-time visitors or occasional drop-ins.",
    features: ["Access to any class format", "Equipment provided", "Valid for 30 days", "No commitment"],
    popular: false,
    link: "/pricing/single",
  },
  {
    title: "Class Pack",
    price: "$160",
    description: "Our most popular option for regular practitioners.",
    features: ["5 classes", "Access to all class formats", "Valid for 60 days", "Discounted rate per class"],
    popular: true,
    link: "/pricing/pack",
  },
  {
    title: "Monthly Unlimited",
    price: "$250",
    description: "Best value for dedicated Pilates enthusiasts.",
    features: ["Unlimited classes", "Priority booking", "One complimentary guest pass", "Monthly auto-renewal"],
    popular: false,
    link: "/pricing/unlimited",
  },
]

export default function PackagesSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-light tracking-wide section-title">
            <DataSplitting type="words" delay={0.2} stagger={0.1}>
              Pricing Packages
            </DataSplitting>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto overflow-hidden">
            <DataSplitting type="words" delay={0.5} stagger={0.03} as="span">
              Choose the package that fits your schedule and commitment level. All packages give you access to our
              state-of-the-art studio and expert instruction.
            </DataSplitting>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <IntersectionObserver
              key={index}
              className="stagger-card"
              threshold={0.1}
              rootMargin="0px 0px -50px 0px"
              triggerOnce={true}
            >
              <Card className={`border-none relative transform-gpu ${pkg.popular ? "shadow-lg" : "shadow-sm"}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-charcoal text-white text-xs px-3 py-1">Most Popular</div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-medium">{pkg.title}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-dots">{pkg.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/80 mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-charcoal mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full rounded-none btn-3d ${
                      pkg.popular
                        ? "bg-charcoal text-white hover:bg-charcoal/90"
                        : "bg-white border border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                    }`}
                    asChild
                  >
                    <Link href={pkg.link}>Purchase Package</Link>
                  </Button>
                </CardFooter>
              </Card>
            </IntersectionObserver>
          ))}
        </div>
      </div>
    </section>
  )
}
