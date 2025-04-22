"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { format, addDays, startOfWeek, isSameDay } from "date-fns"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"

// Update the mockClasses array to include descriptions
const mockClasses = [
  {
    id: "1",
    name: "Mat Pilates",
    instructor: "Emma Wilson",
    time: "7:00 AM - 8:00 AM",
    date: addDays(new Date(), 0),
    spotsAvailable: 8,
    totalSpots: 12,
    description:
      "Foundation class focusing on core strength, flexibility, and proper alignment using your body weight as resistance.",
  },
  {
    id: "2",
    name: "Reformer Basics",
    instructor: "Michael Chen",
    time: "9:30 AM - 10:30 AM",
    date: addDays(new Date(), 0),
    spotsAvailable: 3,
    totalSpots: 6,
    description: "Introduction to the Pilates reformer machine, focusing on proper form and fundamental movements.",
  },
  {
    id: "3",
    name: "Pilates Fusion",
    instructor: "Sarah Johnson",
    time: "5:30 PM - 6:30 PM",
    date: addDays(new Date(), 0),
    spotsAvailable: 5,
    totalSpots: 10,
    description:
      "Blend of traditional Pilates with elements of yoga and functional training for a comprehensive workout.",
  },
  {
    id: "4",
    name: "Advanced Reformer",
    instructor: "David Miller",
    time: "7:00 PM - 8:00 PM",
    date: addDays(new Date(), 0),
    spotsAvailable: 2,
    totalSpots: 6,
    description: "Challenging class for experienced practitioners, incorporating complex movements and flow sequences.",
  },
  {
    id: "5",
    name: "Mat Pilates",
    instructor: "Emma Wilson",
    time: "8:30 AM - 9:30 AM",
    date: addDays(new Date(), 1),
    spotsAvailable: 10,
    totalSpots: 12,
    description:
      "Foundation class focusing on core strength, flexibility, and proper alignment using your body weight as resistance.",
  },
  {
    id: "6",
    name: "Reformer Basics",
    instructor: "Michael Chen",
    time: "10:00 AM - 11:00 AM",
    date: addDays(new Date(), 1),
    spotsAvailable: 4,
    totalSpots: 6,
    description: "Introduction to the Pilates reformer machine, focusing on proper form and fundamental movements.",
  },
  {
    id: "7",
    name: "Pilates Fusion",
    instructor: "Sarah Johnson",
    time: "4:30 PM - 5:30 PM",
    date: addDays(new Date(), 1),
    spotsAvailable: 7,
    totalSpots: 10,
    description:
      "Blend of traditional Pilates with elements of yoga and functional training for a comprehensive workout.",
  },
  {
    id: "8",
    name: "Mat Pilates",
    instructor: "Emma Wilson",
    time: "7:00 AM - 8:00 AM",
    date: addDays(new Date(), 2),
    spotsAvailable: 9,
    totalSpots: 12,
    description:
      "Foundation class focusing on core strength, flexibility, and proper alignment using your body weight as resistance.",
  },
  {
    id: "9",
    name: "Advanced Reformer",
    instructor: "David Miller",
    time: "6:00 PM - 7:00 PM",
    date: addDays(new Date(), 2),
    spotsAvailable: 1,
    totalSpots: 6,
    description: "Challenging class for experienced practitioners, incorporating complex movements and flow sequences.",
  },
  {
    id: "10",
    name: "Reformer Basics",
    instructor: "Michael Chen",
    time: "9:30 AM - 10:30 AM",
    date: addDays(new Date(), 3),
    spotsAvailable: 5,
    totalSpots: 6,
    description: "Introduction to the Pilates reformer machine, focusing on proper form and fundamental movements.",
  },
  {
    id: "11",
    name: "Pilates Fusion",
    instructor: "Sarah Johnson",
    time: "5:30 PM - 6:30 PM",
    date: addDays(new Date(), 3),
    spotsAvailable: 8,
    totalSpots: 10,
    description:
      "Blend of traditional Pilates with elements of yoga and functional training for a comprehensive workout.",
  },
  {
    id: "12",
    name: "Mat Pilates",
    instructor: "Emma Wilson",
    time: "8:30 AM - 9:30 AM",
    date: addDays(new Date(), 4),
    spotsAvailable: 11,
    totalSpots: 12,
    description:
      "Foundation class focusing on core strength, flexibility, and proper alignment using your body weight as resistance.",
  },
  {
    id: "13",
    name: "Advanced Reformer",
    instructor: "David Miller",
    time: "7:00 PM - 8:00 PM",
    date: addDays(new Date(), 4),
    spotsAvailable: 3,
    totalSpots: 6,
    description: "Challenging class for experienced practitioners, incorporating complex movements and flow sequences.",
  },
  {
    id: "14",
    name: "Reformer Basics",
    instructor: "Michael Chen",
    time: "10:00 AM - 11:00 AM",
    date: addDays(new Date(), 5),
    spotsAvailable: 2,
    totalSpots: 6,
    description: "Introduction to the Pilates reformer machine, focusing on proper form and fundamental movements.",
  },
  {
    id: "15",
    name: "Pilates Fusion",
    instructor: "Sarah Johnson",
    time: "4:30 PM - 5:30 PM",
    date: addDays(new Date(), 6),
    spotsAvailable: 6,
    totalSpots: 10,
    description:
      "Blend of traditional Pilates with elements of yoga and functional training for a comprehensive workout.",
  },
]

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTab, setSelectedTab] = useState("week")
  const [weekDates, setWeekDates] = useState<Date[]>([])
  const [animateClasses, setAnimateClasses] = useState(false)

  useEffect(() => {
    // Generate array of dates for the week view
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 }) // Start from Monday
    const dates = Array.from({ length: 7 }, (_, i) => addDays(startDate, i))
    setWeekDates(dates)

    // Initialize animations for elements already in view
    const handleScroll = throttle(() => {
      document.querySelectorAll(".stagger-card:not(.animate)").forEach((element) => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          element.classList.add("animate")
        }
      })
    }, 100)

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Trigger initial animation
    setTimeout(() => {
      handleScroll()
      setAnimateClasses(true)
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Filter classes based on selected date
  const filteredClasses = selectedDate ? mockClasses.filter((cls) => isSameDay(cls.date, selectedDate)) : []

  const handleBookClass = (classId: string) => {
    // In a real implementation, this would call the MindBody API to book the class
    console.log(`Booking class with ID: ${classId}`)
    alert("This would connect to the MindBody API to book your class.")
  }

  // Reset animation when date changes
  useEffect(() => {
    setAnimateClasses(false)
    setTimeout(() => {
      setAnimateClasses(true)
    }, 50)
  }, [selectedDate])

  return (
    <div className="pt-20 min-h-screen bg-cream">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-2 section-title">
            <DataSplitting type="words" delay={0.2} stagger={0.1}>
              Class Schedule
            </DataSplitting>
          </h1>
          <div className="overflow-hidden mb-8">
            <DataSplitting type="words" delay={0.5} stagger={0.03} as="p" className="text-charcoal/80">
              Browse our weekly schedule and book your next class.
            </DataSplitting>
          </div>

          <IntersectionObserver className="stagger-card">
            <Tabs defaultValue="week" className="mb-8" onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="week">Week View</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>

              <TabsContent value="week" className="pt-6">
                <div className="grid grid-cols-7 gap-1 mb-6">
                  {weekDates.map((date, index) => (
                    <Button
                      key={index}
                      variant={isSameDay(date, selectedDate || new Date()) ? "default" : "outline"}
                      className={`flex flex-col items-center justify-center rounded-full w-12 h-12 transform-gpu transition-all duration-300 ${
                        isSameDay(date, selectedDate || new Date())
                          ? "bg-charcoal text-white"
                          : "bg-white hover:bg-charcoal hover:text-white"
                      }`}
                      onClick={() => setSelectedDate(date)}
                    >
                      <span className="text-xs">{format(date, "EEE d")}</span>
                    </Button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="calendar" className="pt-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="mx-auto border rounded-none bg-white p-4"
                />
              </TabsContent>
            </Tabs>
          </IntersectionObserver>

          <div className="mb-4">
            <h2 className="text-xl font-medium">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Classes for {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "Today"}
              </DataSplitting>
            </h2>
          </div>

          {filteredClasses.length > 0 ? (
            <div className="space-y-4">
              {filteredClasses.map((cls, index) => (
                <div
                  key={cls.id}
                  className={`transform-gpu transition-all duration-500 ${
                    animateClasses ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Card className="border-none shadow-sm transform-gpu hover:shadow-md transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{cls.name}</CardTitle>
                          <CardDescription>{cls.instructor}</CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{cls.time}</p>
                          <p className="text-sm text-charcoal/70">
                            {cls.spotsAvailable} of {cls.totalSpots} spots available
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-charcoal/80 mb-4">{cls.description}</p>
                      <Button
                        onClick={() => handleBookClass(cls.id)}
                        className={`rounded-none btn-3d ${
                          cls.spotsAvailable > 0
                            ? "bg-charcoal text-white hover:bg-charcoal/90"
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                        disabled={cls.spotsAvailable === 0}
                      >
                        {cls.spotsAvailable > 0 ? "Book Class" : "Class Full"}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 pb-6 text-center">
                <p className="text-charcoal/70">No classes scheduled for this date.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
