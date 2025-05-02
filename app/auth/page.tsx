"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Script from "next/script"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin")

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="signin" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin" className="bg-charcoal text-white data-[state=active]:bg-charcoal/90">Sign In</TabsTrigger>
              <TabsTrigger value="register" className="bg-charcoal text-white data-[state=active]:bg-charcoal/90">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <Card className="bg-cream border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Sign in to your account to book classes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Add your sign in form here */}
                  <p className="text-sm text-charcoal/80">Sign in functionality coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="register">
              <Card className="bg-cream border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>
                    Create an account to start booking classes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[400px] scale-90 origin-top">
                    <Script
                      src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
                      strategy="afterInteractive"
                    />
                    <healcode-widget
                      data-type="registrations"
                      data-widget-partner="object"
                      data-widget-id="22160009f680"
                      data-widget-version="0"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 