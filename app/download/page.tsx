"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import {
  Download,
  Monitor,
  Apple,
  Terminal,
  Check,
  Shield,
  Zap,
  HardDrive,
  Clock,
  ChevronDown,
  ExternalLink,
} from "lucide-react"

const platforms = [
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    available: true,
    versions: [
      { name: "Windows 11", size: "102 MB", recommended: true },
      { name: "Windows 10", size: "102 MB", recommended: false },
    ],
    requirements: ["Windows 10 or later", "64-bit processor", "4 GB RAM minimum", "1 GB available storage"],
    downloadUrl: "/download/Notilus-Browser-Setup-1.0.0.exe",
  },
  {
    id: "macos",
    name: "macOS",
    icon: Apple,
    available: false,
    versions: [
      { name: "macOS 14 Sonoma", size: "TBD", recommended: true },
      { name: "macOS 13 Ventura", size: "TBD", recommended: false },
      { name: "macOS 12 Monterey", size: "TBD", recommended: false },
    ],
    requirements: ["macOS 12 or later", "Apple Silicon or Intel", "4 GB RAM minimum", "1 GB available storage"],
  },
  {
    id: "linux",
    name: "Linux",
    icon: Terminal,
    available: false,
    versions: [
      { name: ".deb (Ubuntu/Debian)", size: "TBD", recommended: true },
      { name: ".rpm (Fedora/RHEL)", size: "TBD", recommended: false },
      { name: ".tar.gz (Generic)", size: "TBD", recommended: false },
    ],
    requirements: ["Ubuntu 20.04+ or equivalent", "64-bit processor", "4 GB RAM minimum", "1 GB available storage"],
  },
]

const changelog = [
  {
    version: "1.0.0 BETA",
    date: "November 2025",
    changes: [
      "Initial beta release",
      "Real-time system monitoring (CPU, RAM, GPU, Network)",
      "AI Assistant powered by Groq",
      "Integrated Lighthouse auditing",
      "Dev Tools quick access panel",
      "Customizable themes and wallpapers",
      "Speed Dial with quick sites",
      "GitHub authentication integration",
    ],
  },
]

const features = [
  { icon: Shield, label: "Privacy Protected" },
  { icon: Zap, label: "Lightning Fast" },
  { icon: HardDrive, label: "Low Resource Usage" },
  { icon: Clock, label: "Regular Updates" },
]

export default function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("windows")
  const platform = platforms.find((p) => p.id === selectedPlatform)!

  return (
    <div className="min-h-screen bg-[#09080D]">
      <PageHeader
        badge="Free Download"
        title="Download Notilus"
        description="Get started with the browser built for developers. Free to use, no account required."
      />

      {/* Download section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Platform selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => p.available && setSelectedPlatform(p.id)}
                disabled={!p.available}
                className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border transition-all w-full sm:w-auto ${
                  selectedPlatform === p.id
                    ? "bg-[#FF2D55]/20 border-[#FF2D55] text-white"
                    : p.available
                    ? "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
                    : "bg-white/5 border-white/5 text-white/30 cursor-not-allowed opacity-50"
                }`}
              >
                <p.icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">{p.name}</span>
                {!p.available && (
                  <span className="ml-auto sm:ml-2 text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50 flex-shrink-0">Bientôt</span>
                )}
              </button>
            ))}
          </div>

          {/* Download card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF2D55]/50 to-[#FF2D92]/50 blur-xl opacity-30" />
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-[#FF2D55]/30">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left side - download */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#FF2D55]/10 flex items-center justify-center">
                      <platform.icon className="w-8 h-8 text-[#FF2D55]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">Notilus for {platform.name}</h3>
                      <p className="text-white/50">Version 1.0.0 BETA</p>
                    </div>
                  </div>

                  {/* Version dropdown */}
                  <div className="mb-6">
                    <label className="block text-sm text-white/60 mb-2">Select Version</label>
                    <div className="relative">
                      <select
                        disabled={!platform.available}
                        className={`w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white appearance-none focus:outline-none focus:border-[#FF2D55]/50 ${
                          platform.available ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                        }`}
                      >
                        {platform.versions.map((v) => (
                          <option key={v.name} value={v.name}>
                            {v.name} ({v.size}) {v.recommended ? "- Recommended" : ""}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                    </div>
                  </div>

                  {platform.available ? (
                    <Button
                      size="lg"
                      asChild
                      className="w-full bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] text-white py-6 text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF2D55]/30 transition-shadow"
                    >
                      <a href={platform.downloadUrl} download>
                        <Download className="w-5 h-5 mr-2" />
                        Download for {platform.name}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      disabled
                      className="w-full bg-white/5 border border-white/10 text-white/40 py-6 text-lg font-semibold rounded-xl cursor-not-allowed opacity-60"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Bientôt disponible
                    </Button>
                  )}

                  <p className="text-center text-sm text-white/40 mt-4">
                    By downloading, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>

                {/* Right side - requirements */}
                <div>
                  <h4 className="font-display font-semibold text-white mb-4">System Requirements</h4>
                  <ul className="space-y-3 mb-8">
                    {platform.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00FF88]/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#00FF88]" />
                        </div>
                        <span className="text-white/70">{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-3">
                    {features.map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-sm text-white/50">
                        <f.icon className="w-4 h-4 text-[#FF2D55]" />
                        {f.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative downloads */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm mb-4">Other download options</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Portable Version
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Previous Versions
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Source Code (GitHub)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Installation guide */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#FF2D55]/5 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Quick Installation Guide</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#FF2D55]/20 flex items-center justify-center text-[#FF2D55] font-display font-bold mb-4">
                1
              </div>
              <h4 className="font-display font-semibold text-white mb-2">Download</h4>
              <p className="text-sm text-white/50">
                Click the download button above to get the installer for your platform.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#FF2D55]/20 flex items-center justify-center text-[#FF2D55] font-display font-bold mb-4">
                2
              </div>
              <h4 className="font-display font-semibold text-white mb-2">Install</h4>
              <p className="text-sm text-white/50">
                Run the installer and follow the on-screen instructions. Takes less than a minute.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#FF2D55]/20 flex items-center justify-center text-[#FF2D55] font-display font-bold mb-4">
                3
              </div>
              <h4 className="font-display font-semibold text-white mb-2">Launch</h4>
              <p className="text-sm text-white/50">
                Open Notilus and start browsing. Customize your experience in settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">What's New</h2>

          {changelog.map((release) => (
            <div key={release.version} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#FF2D55]/20 text-[#FF2D55] font-display font-semibold text-sm">
                    {release.version}
                  </span>
                  <span className="text-white/40 text-sm">{release.date}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#00FF88]/20 text-[#00FF88] text-sm">Latest</span>
              </div>
              <ul className="space-y-3">
                {release.changes.map((change) => (
                  <li key={change} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] mt-2" />
                    <span className="text-white/70">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/30">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Virus Free</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="text-sm">No Adware</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span className="text-sm">50K+ Downloads</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Open Source</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
