"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screenshots = [
  {
    id: 1,
    title: "Speed Dial Dashboard",
    description: "Your personalized hub for development tools, quick access sites, and system widgets",
    image: "/images/screenshot-202025-11-29-20224906.png",
  },
  {
    id: 2,
    title: "Dev Tools Sidebar",
    description: "Quick access to Code Editor, Terminal, API Docs, and more from the sidebar",
    image: "/images/screenshot-202025-11-24-20183648.png",
  },
  {
    id: 3,
    title: "Split View & YouTube Music",
    description: "Multitask with split view - browse while listening to music",
    image: "/images/screenshot-202025-11-29-20231556.png",
  },
  {
    id: 4,
    title: "System Widgets Panel",
    description: "Monitor your system resources in real-time while browsing",
    image: "/images/screenshot-202025-11-24-20152543.png",
  },
  {
    id: 5,
    title: "Gaming Themes",
    description: "Customize your browser with stunning wallpapers and themes",
    image: "/images/notilus.png",
  },
]

export function BrowserShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % screenshots.length)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09080D] via-[#101018] to-[#09080D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF2D55]/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF2D55]/40 bg-[#FF2D55]/10 mb-6">
            <span className="text-sm font-medium text-[#FF2D55] tracking-wider">MAKE IT YOURS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
              MAKE EVERY PIXEL
            </span>
            <br />
            <span className="text-white">PERSONAL</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Match your browser to your setup, your mood, or whatever you're working on with Notilus.
          </p>
        </div>

        {/* Screenshot showcase */}
        <div className="relative">
          {/* Main preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D55]/20 to-[#B1165A]/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border border-[#FF2D55]/30 shadow-2xl shadow-[#FF2D55]/20">
              <img
                src={screenshots[activeIndex].image || "/placeholder.svg"}
                alt={screenshots[activeIndex].title}
                className="w-full transition-opacity duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09080D] via-transparent to-transparent opacity-60" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">{screenshots[activeIndex].title}</h3>
                <p className="text-white/70">{screenshots[activeIndex].description}</p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-[#FF2D55]/30 hover:border-[#FF2D55] transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass border border-[#FF2D55]/30 hover:border-[#FF2D55] transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Thumbnail selector */}
          <div className="flex justify-center gap-3 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-8 bg-[#FF2D55]" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
