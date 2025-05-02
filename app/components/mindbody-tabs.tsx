"use client"

import { useState, useEffect, useRef } from "react"

type TabType = "group-classes" | "private" | "my-schedule" | "registrations" | "sign-in"

export default function MindbodyTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("group-classes")
  const [isLoading, setIsLoading] = useState(true)
  const initialLoadDone = useRef(false)

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    if (!initialLoadDone.current) {
      setTimeout(() => {
        setIsLoading(false)
        initialLoadDone.current = true
      }, 1000)
    }
  }, [])

  useEffect(() => {
    if (initialLoadDone.current) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [activeTab])

  const groupClassesHtml = `
    <!-- Mindbody Schedules widget begin -->
    <div class="mindbody-widget" data-widget-type="Schedules" data-widget-id="2223636f680"></div>
    <script async src="https://brandedweb.mindbodyonline.com/embed/widget.js"></script>
    <!-- Mindbody Schedules widget end -->
  `

  const privateHtml = `
    <!-- Mindbody Appointments widget begin -->
    <div class="mindbody-widget" data-widget-type="Appointments" data-widget-id="2228624f680"></div>
    <script async src="https://brandedweb.mindbodyonline.com/embed/widget.js"></script>
    <!-- Mindbody Appointments widget end -->
  `

  const myScheduleHtml = `
    <script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script>
    <healcode-widget data-type="enrollments" data-widget-partner="object" data-widget-id="22105246f680" data-widget-version="0"></healcode-widget>
  `

  const registrationsHtml = `
    <script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script>
    <healcode-widget data-type="registrations" data-widget-partner="object" data-widget-id="22160009f680" data-widget-version="0"></healcode-widget>
  `

  const signInHtml = `
    <script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script>
    <healcode-widget data-version="0.2" data-link-class="loginRegister" data-site-id="126366" data-mb-site-id="5744900" data-bw-identity-site="true" data-type="account-link" data-inner-html="Login | Register"></healcode-widget>
  `

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="flex">
          <button
            className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
              activeTab === "group-classes" ? "bg-white text-primary" : "bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange("group-classes")}
          >
            Group Classes
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
              activeTab === "private" ? "bg-white text-primary" : "bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange("private")}
          >
            Private
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
              activeTab === "my-schedule" ? "bg-white text-primary" : "bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange("my-schedule")}
          >
            My Schedule
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "registrations" ? "bg-black text-white" : "bg-black text-white opacity-80 hover:opacity-100"
            }`}
            onClick={() => handleTabChange("registrations")}
          >
            Register
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === "sign-in" ? "bg-black text-white" : "bg-black text-white opacity-80 hover:opacity-100"
            }`}
            onClick={() => handleTabChange("sign-in")}
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {activeTab === "group-classes" && (
              <div className="h-[600px]">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Group Classes</title>
                        <style>
                          body { margin: 0; padding: 0; font-family: sans-serif; }
                        </style>
                      </head>
                      <body>
                        ${groupClassesHtml}
                      </body>
                    </html>
                  `}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Group Classes"
                />
              </div>
            )}

            {activeTab === "private" && (
              <div className="h-[600px]">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Private</title>
                        <style>
                          body { margin: 0; padding: 0; font-family: sans-serif; }
                        </style>
                      </head>
                      <body>
                        ${privateHtml}
                      </body>
                    </html>
                  `}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Private"
                />
              </div>
            )}

            {activeTab === "my-schedule" && (
              <div className="h-[600px]">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>My Schedule</title>
                        <style>
                          body { margin: 0; padding: 0; font-family: sans-serif; }
                        </style>
                      </head>
                      <body>
                        ${myScheduleHtml}
                      </body>
                    </html>
                  `}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="My Schedule"
                />
              </div>
            )}

            {activeTab === "registrations" && (
              <div className="h-[600px]">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Registrations</title>
                        <style>
                          body { margin: 0; padding: 0; font-family: sans-serif; }
                        </style>
                      </head>
                      <body>
                        ${registrationsHtml}
                      </body>
                    </html>
                  `}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Registrations"
                />
              </div>
            )}

            {activeTab === "sign-in" && (
              <div className="h-[600px]">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Sign In</title>
                        <style>
                          body { 
                            margin: 0; 
                            padding: 0; 
                            font-family: sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                          }
                        </style>
                      </head>
                      <body>
                        ${signInHtml}
                      </body>
                    </html>
                  `}
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Sign In"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
} 