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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,113,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,113,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[150px] transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-32 h-32 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-20 right-8 w-32 h-32 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-primary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground">v1.0.0 BETA</span>
          <ChevronRight className="w-4 h-4 text-primary" />
        </div>

        {/* Logo */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
          <img
            src="/images/l1-photoroom.png"
            alt="Notilus Logo"
            className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(236,72,113,0.5)]"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            THE DEVELOPER
          </span>
          <br />
          <span className="text-foreground">BROWSER</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Built for developers who demand more. System monitoring, integrated dev tools, and performance optimization —
          all in one powerful browser.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Notilus
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Active Developers</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary">40%</div>
            <div className="text-sm text-muted-foreground">Faster Load Times</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary">4.9★</div>
            <div className="text-sm text-muted-foreground">User Rating</div>
          </div>
        </div>

        {/* Browser preview */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-t-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/20">
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
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
