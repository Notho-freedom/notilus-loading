"use client"

import { useState } from "react"

const screenshots = [
  {
    id: 1,
    title: "Speed Dial Dashboard",
    description: "Your personalized hub for development tools and quick access sites",
    image: "/images/screenshot-202025-11-24-20152543.png",
  },
  {
    id: 2,
    title: "System Widgets",
    description: "Monitor your system resources in real-time while browsing",
    image: "/images/n1.png",
  },
  {
    id: 3,
    title: "Dev Tools Integration",
    description: "Quick access to code editors, terminals, and API documentation",
    image: "/images/notilus.png",
  },
]

export function BrowserShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-sm font-medium text-primary">MAKE IT YOURS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MAKE EVERY PIXEL
            </span>
            <br />
            <span className="text-foreground">PERSONAL</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Match your browser to your setup, your mood, or whatever you're working on with Notilus.
          </p>
        </div>

        {/* Screenshot showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/20">
              <img
                src={screenshots[activeIndex].image || "/placeholder.svg"}
                alt={screenshots[activeIndex].title}
                className="w-full transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Selector */}
          <div className="space-y-4">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary/10 border-primary"
                    : "bg-card/50 border-border/50 hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold ${
                      activeIndex === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-foreground">{screenshot.title}</h3>
                    <p className="text-muted-foreground">{screenshot.description}</p>
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent animate-[progress_5s_ease-in-out_infinite]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
