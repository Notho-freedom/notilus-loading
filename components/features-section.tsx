"use client"

import { Code2, Cpu, Shield, Zap, Palette, Terminal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Cpu,
    title: "System Monitor",
    description: "Real-time CPU, RAM, GPU, and network monitoring built right into your browser.",
    color: "from-primary to-accent",
  },
  {
    icon: Terminal,
    title: "Integrated Terminal",
    description: "Access PowerShell, Bash, or any terminal directly from your sidebar.",
    color: "from-accent to-primary",
  },
  {
    icon: Code2,
    title: "Dev Tools Panel",
    description: "Quick access to VS Code, API docs, and your favorite development resources.",
    color: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimized Chromium engine with aggressive resource management for developers.",
    color: "from-accent to-primary",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Built-in ad blocker, tracker protection, and secure browsing by default.",
    color: "from-primary to-accent",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description: "Customize themes, layouts, and workflows to match your development setup.",
    color: "from-accent to-primary",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-sm font-medium text-primary">FRESH FEATURES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">BUILT FOR</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DEVELOPERS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with developers in mind. No compromises, just pure productivity.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="relative p-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
              {/* Animated border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
