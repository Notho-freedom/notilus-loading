"use client"

import { Gauge, Lightbulb, AlertTriangle, CheckCircle, TrendingUp, Zap } from "lucide-react"

const auditCategories = [
  { icon: Zap, label: "Quick Wins", value: "4", color: "text-[#00FF88]" },
  { icon: AlertTriangle, label: "Security Issues", value: "18", color: "text-[#FF453A]" },
  { icon: TrendingUp, label: "Performance", value: "35/100", color: "text-[#FFAA00]" },
  { icon: CheckCircle, label: "Accessibility", value: "21 issues", color: "text-[#00FFFF]" },
]

export function LighthouseSection() {
  return (
    <section id="lighthouse" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101018] via-[#09080D] to-[#09080D]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#FF2D55]/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - Lighthouse Screenshot */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D55]/20 to-[#B1165A]/10 rounded-2xl blur-3xl" />
            <div className="relative rounded-xl overflow-hidden border border-[#FF2D55]/30 shadow-2xl shadow-[#FF2D55]/20">
              <img
                src="/images/screenshot-202025-11-29-20231356.png"
                alt="Notilus Lighthouse Integration"
                className="w-full"
              />
            </div>

            {/* Floating element */}
            <div className="absolute -bottom-4 -left-4 p-4 rounded-xl glass border border-[#00FF88]/50 shadow-xl">
              <Gauge className="w-6 h-6 text-[#00FF88]" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF2D55]/40 bg-[#FF2D55]/10 mb-6">
              <Lightbulb className="w-4 h-4 text-[#FF2D55]" />
              <span className="text-sm font-medium text-[#FF2D55] tracking-wider">NOTILUS LIGHTHOUSE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
                INSTANT AUDITS
              </span>
              <br />
              <span className="text-white">AT YOUR FINGERTIPS</span>
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Run comprehensive Lighthouse audits on any page with one click. Get actionable insights for performance,
              SEO, accessibility, and security — all integrated natively.
            </p>

            {/* Audit categories */}
            <div className="grid grid-cols-2 gap-4">
              {auditCategories.map((category) => (
                <div key={category.label} className="p-4 rounded-xl glass border border-[#FF2D55]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                    <span className="text-sm text-white/60">{category.label}</span>
                  </div>
                  <div className={`font-display text-2xl font-bold ${category.color}`}>{category.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
