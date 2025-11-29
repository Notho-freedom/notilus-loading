"use client"

import { Button } from "@/components/ui/button"
import { Download, Play, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

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
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#09080D]" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,#0A0A0F,#1A0A1F,#0A0A1F,#1A0A0F)] bg-[length:400%_400%] animate-gradient opacity-50" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,85,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#FF2D55]/20 blur-[150px] transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#B1165A]/10 blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-[#FF2D55]/10 blur-[80px]" />

      {/* Corner decorations - Notilus style */}
      <div className="absolute top-20 left-8">
        <div className="w-8 h-20 border-l-2 border-t-2 border-[#FF2D55]/40" />
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF2D55]" />
      </div>
      <div className="absolute top-20 right-8">
        <div className="w-8 h-20 border-r-2 border-t-2 border-[#FF2D55]/40" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF2D55]" />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="w-8 h-20 border-l-2 border-b-2 border-[#FF2D55]/40" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF2D55]" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="w-8 h-20 border-r-2 border-b-2 border-[#FF2D55]/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF2D55]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF2D55]/40 bg-[#FF2D55]/10 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2D55] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2D55]" />
          </span>
          <span className="text-sm text-white/80 font-medium tracking-wider">v1.0.0 BETA</span>
          <ChevronRight className="w-4 h-4 text-[#FF2D55]" />
        </div>

        {/* Logo */}
        <div className="relative mx-auto w-36 h-36 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#FF2D55]/30 blur-xl animate-pulse" />
          <img
            src="/images/l1-photoroom.png"
            alt="Notilus Logo"
            className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,45,85,0.5)]"
          />
        </div>

        {/* Main heading - Using Orbitron font */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#FF2D55] via-[#FF6B9D] to-[#FF2D55] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            NOTILUS
          </span>
        </h1>

        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-[#FF2D55]/40 bg-transparent mb-6">
          <span className="font-display text-sm sm:text-base text-[#FF2D55] tracking-[0.3em]">DEVELOPER BROWSER</span>
        </div>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Built for developers who demand more. System monitoring, integrated dev tools, AI assistant, and performance
          optimization — all in one powerful browser.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold group neon-glow rounded-xl"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Notilus
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#FF2D55]/50 hover:bg-[#FF2D55]/10 px-8 py-6 text-lg bg-transparent text-white rounded-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-[#FF2D55]">50K+</div>
            <div className="text-sm text-white/60">Active Developers</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#FF2D55]/30" />
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-[#FF2D55]">40%</div>
            <div className="text-sm text-white/60">Faster Load Times</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#FF2D55]/30" />
          <div>
            <div className="font-display text-3xl sm:text-4xl font-bold text-[#FF2D55]">4.9★</div>
            <div className="text-sm text-white/60">User Rating</div>
          </div>
        </div>

        {/* Browser preview - Updated with new screenshot */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-[#09080D] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-t-xl overflow-hidden border border-[#FF2D55]/30 shadow-2xl shadow-[#FF2D55]/20">
            <img
              src="/images/screenshot-202025-11-26-20185502.png"
              alt="Notilus Browser Interface"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/50">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-[#FF2D55]/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#FF2D55] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
