import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

const classes = [
  {
    title: "Mat Pilates",
    description:
      "Foundation class focusing on core strength, flexibility, and proper alignment using your body weight as resistance.",
    duration: "55 min",
    level: "All Levels",
    link: "/classes/mat-pilates",
  },
  {
    title: "Reformer Basics",
    description: "Introduction to the Pilates reformer machine, focusing on proper form and fundamental movements.",
    duration: "55 min",
    level: "Beginner",
    link: "/classes/reformer-basics",
  },
  {
    title: "Advanced Reformer",
    description: "Challenging class for experienced practitioners, incorporating complex movements and flow sequences.",
    duration: "55 min",
    level: "Advanced",
    link: "/classes/advanced-reformer",
  },
  {
    title: "Pilates Fusion",
    description:
      "Blend of traditional Pilates with elements of yoga and functional training for a comprehensive workout.",
    duration: "60 min",
    level: "Intermediate",
    link: "/classes/pilates-fusion",
  },
]

export default function ClassesSection() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-light section-title">
            <DataSplitting type="words" delay={0.2} stagger={0.1}>
              Our Classes
            </DataSplitting>
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto overflow-hidden">
            <DataSplitting type="words" delay={0.5} stagger={0.03} as="span">
              Discover our range of specialized Pilates classes designed to meet you where you are in your movement
              journey and help you progress with confidence.
            </DataSplitting>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, index) => (
            <IntersectionObserver
              key={index}
              className="stagger-card"
              threshold={0.1}
              rootMargin="0px 0px -50px 0px"
              triggerOnce={true}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow transform-gpu">
                <CardHeader>
                  <CardTitle className="text-xl font-medium">{cls.title}</CardTitle>
                  <CardDescription className="flex justify-between">
                    <span>{cls.duration}</span>
                    <span>{cls.level}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal/80">{cls.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full rounded-none border-charcoal text-charcoal hover:bg-charcoal hover:text-white btn-3d"
                    asChild
                  >
                    <Link href={cls.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </IntersectionObserver>
          ))}
        </div>

        <div className="mt-12 text-center">
          <IntersectionObserver className="stagger-card" delay={0.8}>
            <Button className="bg-charcoal text-white hover:bg-charcoal/90 rounded-none btn-3d" asChild>
              <Link href="/classes">View All Classes</Link>
            </Button>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  )
}
