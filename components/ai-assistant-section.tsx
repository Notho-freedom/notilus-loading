"use client"

import { Bot, Sparkles, MessageSquare, Shield, Settings } from "lucide-react"

const aiFeatures = [
  { icon: MessageSquare, label: "Contextual Chat", description: "AI understands page context" },
  { icon: Sparkles, label: "Auto Summaries", description: "Automatic content summarization" },
  { icon: Shield, label: "IA Protection", description: "Filter sensitive content" },
  { icon: Settings, label: "Model Selection", description: "Choose from multiple AI models" },
]

export function AIAssistantSection() {
  return (
    <section id="ai-assistant" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09080D] to-[#101018]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#FF2D55]/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF2D55]/40 bg-[#FF2D55]/10 mb-6">
              <Bot className="w-4 h-4 text-[#FF2D55]" />
              <span className="text-sm font-medium text-[#FF2D55] tracking-wider">AI ASSISTANT</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black mb-6">
              <span className="text-white">YOUR INTELLIGENT</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
                CODING COMPANION
              </span>
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Powered by Groq AI with multiple model support. Get contextual assistance, automatic summaries, and
              intelligent responses while you browse and code.
            </p>

            {/* AI Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {aiFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="p-4 rounded-xl glass border border-[#FF2D55]/20 hover:border-[#FF2D55]/40 transition-all"
                >
                  <feature.icon className="w-6 h-6 text-[#FF2D55] mb-2" />
                  <div className="font-semibold text-white">{feature.label}</div>
                  <div className="text-sm text-white/50">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - AI Settings Screenshot */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D55]/20 to-[#B1165A]/10 rounded-2xl blur-3xl" />
            <div className="relative rounded-xl overflow-hidden border border-[#FF2D55]/30 shadow-2xl shadow-[#FF2D55]/20">
              <img
                src="/images/screenshot-202025-11-29-20224853.png"
                alt="Notilus AI Assistant Settings"
                className="w-full"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 p-4 rounded-xl glass border border-[#FF2D55]/50 shadow-xl animate-float">
              <Sparkles className="w-6 h-6 text-[#FF2D55]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
