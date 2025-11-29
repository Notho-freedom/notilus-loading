"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Play, ChevronRight, Zap, Shield, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  { icon: Cpu, label: "System Monitor" },
  { icon: Zap, label: "AI Assistant" },
  { icon: Shield, label: "Privacy First" },
]

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#09080D]" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,#0A0A0F,#1A0A1F,#0A0A1F,#1A0A0F)] bg-[length:400%_400%] animate-gradient opacity-50" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,85,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FF2D55]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#FF2D55]/20 blur-[150px] transition-transform duration-1000 ease-out"
        style={{ transform: `translate(calc(-50% + ${mousePosition.x}px), ${mousePosition.y}px)` }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B1165A]/10 blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-[#FF2D55]/10 blur-[80px]" />

      {/* Corner decorations - Enhanced Notilus style */}
      <div className="absolute top-24 left-4 md:left-8">
        <div className="w-8 h-20 border-l-2 border-t-2 border-[#FF2D55]/40" />
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF2D55]" />
      </div>
      <div className="absolute top-24 right-4 md:right-8">
        <div className="w-8 h-20 border-r-2 border-t-2 border-[#FF2D55]/40" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF2D55]" />
      </div>
      <div className="absolute bottom-8 left-4 md:left-8">
        <div className="w-8 h-20 border-l-2 border-b-2 border-[#FF2D55]/40" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF2D55]" />
      </div>
      <div className="absolute bottom-8 right-4 md:right-8">
        <div className="w-8 h-20 border-r-2 border-b-2 border-[#FF2D55]/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF2D55]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF2D55]/40 bg-[#FF2D55]/10 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]" />
          </span>
          <span className="text-sm text-white/80 font-medium tracking-wider">v1.0.0 BETA</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="text-sm text-[#FF2D55]">Now Available</span>
          <ChevronRight className="w-4 h-4 text-[#FF2D55]" />
        </div>

        <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#FF2D55]/30 blur-2xl animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-[#FF2D55]/20 blur-xl" />
          <img
            src="/images/notilus-logo.png"
            alt="Notilus Logo"
            className="relative w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,45,85,0.6)]"
          />
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#FF2D55] via-[#FF6B9D] to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            NOTILUS
          </span>
        </h1>

        {/* Tagline */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-lg border border-[#FF2D55]/40 bg-[#FF2D55]/5 mb-6">
          <span className="w-1 h-1 bg-[#FF2D55] rounded-full" />
          <span className="font-display text-sm sm:text-base text-[#FF2D55] tracking-[0.3em]">
            THE DEVELOPER BROWSER
          </span>
          <span className="w-1 h-1 bg-[#FF2D55] rounded-full" />
        </div>

        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          Built for developers who demand more. Real-time system monitoring, integrated dev tools, AI-powered assistant,
          and performance optimization — all in one powerful browser.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
            >
              <feature.icon className="w-4 h-4 text-[#FF2D55]" />
              {feature.label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/download">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] hover:shadow-2xl hover:shadow-[#FF2D55]/30 text-white px-8 py-6 text-lg font-semibold rounded-xl group"
            >
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Notilus
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF2D92] to-[#FF2D55] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-[#FF2D55]/50 hover:bg-[#FF2D55]/10 px-8 py-6 text-lg bg-transparent text-white rounded-xl group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center mb-16">
          <div className="group">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-[#FF2D55] transition-colors">
              50K+
            </div>
            <div className="text-sm text-white/50">Active Developers</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#FF2D55]/50 to-transparent" />
          <div className="group">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-[#FF2D55] transition-colors">
              40%
            </div>
            <div className="text-sm text-white/50">Faster Load Times</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#FF2D55]/50 to-transparent" />
          <div className="group">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-[#FF2D55] transition-colors">
              4.9★
            </div>
            <div className="text-sm text-white/50">User Rating</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-[#FF2D55]/50 to-transparent" />
          <div className="group">
            <div className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-[#FF2D55] transition-colors">
              24/7
            </div>
            <div className="text-sm text-white/50">AI Support</div>
          </div>
        </div>

        {/* Browser preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF2D55]/20 via-[#FF2D92]/20 to-[#FF2D55]/20 blur-3xl opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09080D] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden border border-[#FF2D55]/30 shadow-2xl shadow-[#FF2D55]/20">
            {/* Browser chrome */}
            <div className="bg-[#101018] border-b border-[#FF2D55]/20 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-4 py-1.5 text-sm text-white/50 text-center">
                notilus://speed-dial
              </div>
            </div>
            <img
              src="/images/screenshot-202025-11-29-20224906.png"
              alt="Notilus Browser Interface"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 tracking-wider uppercase">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-[#FF2D55]/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#FF2D55] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
