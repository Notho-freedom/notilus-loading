"use client"

import { Button } from "@/components/ui/button"
import { Download, Apple, Monitor } from "lucide-react"

const platforms = [
  { icon: Monitor, name: "Windows", version: "10/11 64-bit", primary: true },
  { icon: Apple, name: "macOS", version: "12+ (Intel/ARM)", primary: false },
  { icon: Monitor, name: "Linux", version: "Ubuntu/Debian", primary: false },
]

export function DownloadSection() {
  return (
    <section id="download" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="relative mx-auto w-24 h-24 mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
          <img src="/images/l1-photoroom.png" alt="Notilus Logo" className="relative w-full h-full object-contain" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
          <span className="text-foreground">READY TO</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">LEVEL UP?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          Join thousands of developers who have already made the switch. Download Notilus and experience browsing built
          for you.
        </p>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {platforms.map((platform) => (
            <Button
              key={platform.name}
              size="lg"
              className={`w-full sm:w-auto px-8 py-6 ${
                platform.primary
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-card border border-border hover:border-primary/50 text-foreground"
              }`}
            >
              <platform.icon className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-semibold">{platform.name}</div>
                <div className="text-xs opacity-70">{platform.version}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Free Download
          </span>
          <span>•</span>
          <span>No Ads</span>
          <span>•</span>
          <span>Privacy First</span>
          <span>•</span>
          <span>Open Source Core</span>
        </div>
      </div>
    </section>
  )
}
