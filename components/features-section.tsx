"use client"

import { Cpu, Shield, Palette, Terminal, Bot, Gauge } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "System Monitor",
    description: "Real-time CPU, RAM, GPU, Battery, and network monitoring built right into your browser.",
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description: "Access PowerShell, Bash, or any terminal directly from your sidebar.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Built-in AI powered by Groq with contextual assistance and auto-summarization.",
  },
  {
    icon: Gauge,
    title: "Lighthouse Audits",
    description: "Integrated Lighthouse for instant performance, SEO, and accessibility analysis.",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Built-in ad blocker, tracker protection, and IA content filtering.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description: "Multiple themes, custom wallpapers, and personalized workflows.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101018] via-[#09080D] to-[#09080D]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF2D55]/40 bg-[#FF2D55]/10 mb-6">
            <span className="text-sm font-medium text-[#FF2D55] tracking-wider">FRESH FEATURES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">BUILT FOR</span>
            <br />
            <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
              DEVELOPERS
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Every feature designed with developers in mind. No compromises, just pure productivity.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-xl glass border border-[#FF2D55]/20 hover:border-[#FF2D55]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#FF2D55]/40" />
              <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[#FF2D55]/40" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[#FF2D55]/40" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#FF2D55]/40" />

              <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D55]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-[#FF2D55]/15 border border-[#FF2D55]/30 mb-4 group-hover:neon-glow transition-all">
                  <feature.icon className="w-6 h-6 text-[#FF2D55]" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
              {/* Animated border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
