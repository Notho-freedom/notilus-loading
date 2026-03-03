"use client"

import { Button } from "@/components/ui/button"
import { Download, Monitor, Apple } from "lucide-react"

const platforms = [
  { icon: Monitor, name: "Windows", version: "10/11 64-bit", available: true, downloadUrl: "/download/Notilus-Browser-Setup-1.0.0.exe" },
  { icon: Apple, name: "macOS", version: "12+ (Intel/ARM)", available: false },
  { icon: Monitor, name: "Linux", version: "Ubuntu/Debian", available: false },
]

export function DownloadSection() {
  return (
    <section id="download" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09080D] to-[#101018]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#FF2D55]/10 blur-[150px]" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8">
        <div className="w-8 h-20 border-l-2 border-t-2 border-[#FF2D55]/40" />
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF2D55]" />
      </div>
      <div className="absolute top-8 right-8">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="relative mx-auto w-28 h-28 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#FF2D55]/30 blur-xl animate-pulse" />
          <img
            src="/images/l1-photoroom.png"
            alt="Notilus Logo"
            className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,45,85,0.5)]"
          />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
          <span className="text-white">READY TO</span>
          <br />
          <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">LEVEL UP?</span>
        </h2>
        <p className="text-lg text-white/60 max-w-xl mx-auto mb-12">
          Join thousands of developers who have already made the switch. Download Notilus and experience browsing built
          for you.
        </p>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 max-w-2xl mx-auto">
          {platforms.map((platform) => (
            <div key={platform.name} className="relative w-full sm:w-auto sm:flex-1 sm:max-w-[200px]">
              {platform.available ? (
                <Button
                  size="lg"
                  asChild
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 rounded-xl bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] hover:opacity-90 text-white neon-glow flex items-center justify-center sm:justify-start"
                >
                  <a href={platform.downloadUrl} download className="flex items-center justify-center sm:justify-start w-full">
                    <platform.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div className="text-center sm:text-left">
                      <div className="font-semibold">{platform.name}</div>
                      <div className="text-xs opacity-70">{platform.version}</div>
                    </div>
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  disabled
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 rounded-xl glass border border-white/10 text-white/40 cursor-not-allowed opacity-60 flex items-center justify-center sm:justify-start"
                >
                  <platform.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="text-center sm:text-left flex-1">
                    <div className="font-semibold">{platform.name}</div>
                    <div className="text-xs opacity-70">{platform.version}</div>
                  </div>
                  <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50 flex-shrink-0">Bientôt</span>
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <Download className="w-4 h-4 text-[#FF2D55]" />
            Free Download
          </span>
          <span className="text-[#FF2D55]/50">•</span>
          <span>No Ads</span>
          <span className="text-[#FF2D55]/50">•</span>
          <span>Privacy First</span>
          <span className="text-[#FF2D55]/50">•</span>
          <span>Open Source Core</span>
        </div>
      </div>
    </section>
  )
}
