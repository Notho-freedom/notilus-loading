"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    avatar: "/developer-avatar-male-asian.jpg",
    content:
      "Notilus has completely transformed my development workflow. The integrated dev tools and system monitoring are game-changers. I can't imagine going back to a regular browser.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Full Stack Engineer",
    company: "StartupXYZ",
    avatar: "/developer-avatar-female.jpg",
    content:
      "The AI assistant is incredibly helpful for debugging and understanding complex codebases. It's like having a senior developer always available to help.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    company: "CloudScale",
    avatar: "/developer-avatar-male-black.jpg",
    content:
      "Finally, a browser that understands developers! The performance monitoring and resource management features are exactly what I needed.",
    rating: 5,
  },
  {
    name: "Emma Watson",
    role: "UI/UX Developer",
    company: "DesignStudio",
    avatar: "/developer-avatar-female-blonde.jpg",
    content:
      "The customization options are endless. I love how I can tailor every aspect of the browser to match my workflow and aesthetic preferences.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09080D] via-[#0D0B14] to-[#09080D]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,85,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF2D55]/30 bg-[#FF2D55]/10 mb-6">
            <Quote className="w-4 h-4 text-[#FF2D55]" />
            <span className="text-sm text-[#FF2D55] font-medium tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Loved by </span>
            <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
              Developers
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See what developers around the world are saying about Notilus Browser
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#FF2D55]/20 backdrop-blur-sm">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-[#FF2D55] flex items-center justify-center">
              <Quote className="w-4 h-4 text-white" />
            </div>

            {/* Content */}
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF2D55] text-[#FF2D55]" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-[#FF2D55]/50 mb-4"
                />
                <div className="font-display font-semibold text-white">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-white/50">
                  {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-[#FF2D55]/30 bg-white/5 hover:bg-[#FF2D55]/20 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex ? "w-8 bg-[#FF2D55]" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border border-[#FF2D55]/30 bg-white/5 hover:bg-[#FF2D55]/20 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-[#FF2D55]/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-[#FF2D55]/20" />
    </section>
  )
}
