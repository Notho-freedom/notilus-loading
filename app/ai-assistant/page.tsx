import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  MessageSquare,
  Code,
  FileText,
  Shield,
  Zap,
  Brain,
  RefreshCw,
  Database,
  Lock,
  Cpu,
} from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: MessageSquare,
    title: "Contextual Chat",
    description:
      "Ask questions about the current webpage, get summaries, or dive deep into technical content. The AI understands your browsing context.",
  },
  {
    icon: Code,
    title: "Code Analysis",
    description:
      "Paste code snippets and get instant explanations, bug detection, and optimization suggestions. Supports all major languages.",
  },
  {
    icon: FileText,
    title: "Auto-Summaries",
    description:
      "Automatically generate summaries of long articles, documentation, or research papers with key points highlighted.",
  },
  {
    icon: Shield,
    title: "Privacy Protection",
    description:
      "Filter sensitive content before sending to the AI. Keep your private data safe while still getting intelligent assistance.",
  },
  {
    icon: Database,
    title: "Memory System",
    description:
      "The AI remembers context from your browsing session, GitHub repos, and previous conversations for more relevant responses.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Switch Models",
    description:
      "Automatically switches between AI models when rate limits are reached, ensuring uninterrupted assistance.",
  },
]

const models = [
  { name: "llama-3.3", provider: "Meta", speed: "Fast", quality: "High" },
  { name: "llama-3.1", provider: "Meta", speed: "Fast", quality: "High" },
  { name: "llama-3.2", provider: "Meta", speed: "Very Fast", quality: "Medium" },
  { name: "gemma-7b", provider: "Google", speed: "Very Fast", quality: "Good" },
  { name: "gemma2-9b", provider: "Google", speed: "Fast", quality: "High" },
  { name: "mistral-8x7b", provider: "Mistral", speed: "Medium", quality: "Excellent" },
]

const useCases = [
  {
    title: "Debugging Assistant",
    description:
      "Paste your error messages and get instant solutions. The AI analyzes stack traces, suggests fixes, and explains the root cause.",
    example: "\"I'm getting a TypeError: Cannot read property 'map' of undefined\"",
  },
  {
    title: "Documentation Helper",
    description:
      "Navigate complex API documentation with ease. Ask questions in natural language and get targeted answers.",
    example: '"How do I implement authentication with NextAuth?"',
  },
  {
    title: "Code Reviewer",
    description: "Get your code reviewed for best practices, potential bugs, and performance optimizations.",
    example: '"Review this React component for performance issues"',
  },
  {
    title: "Learning Companion",
    description: "Understand new concepts, frameworks, and technologies with personalized explanations and examples.",
    example: '"Explain how React Server Components work"',
  },
]

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-[#09080D]">
      <PageHeader
        badge="AI Powered"
        title="Your Intelligent Coding Partner"
        description="Meet the AI assistant built specifically for developers. Powered by Groq for lightning-fast responses."
      />

      {/* Hero showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/30 mb-6">
                <Zap className="w-4 h-4 text-[#FF2D55]" />
                <span className="text-sm text-[#FF2D55]">Powered by Groq</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Lightning-Fast AI Responses
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Groq's LPU inference engine delivers responses up to 10x faster than traditional GPUs. Get instant code
                analysis, debugging help, and documentation summaries without waiting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00FF88]/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#00FF88]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Ultra-Low Latency</div>
                    <div className="text-sm text-white/50">Average response time under 100ms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00FFFF]/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[#00FFFF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Privacy First</div>
                    <div className="text-sm text-white/50">Sensitive data never leaves your browser</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFAA00]/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-[#FFAA00]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Context-Aware</div>
                    <div className="text-sm text-white/50">Understands your browsing context and code</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FF2D55]/20 blur-3xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-[#FF2D55]/30 shadow-2xl">
                <img
                  src="/images/screenshot-202025-11-29-20224853.png"
                  alt="AI Assistant Settings"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#FF2D55]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Powerful Capabilities</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to supercharge your development workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF2D55]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF2D55]/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-[#FF2D55]" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{cap.title}</h3>
                <p className="text-white/50 text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available models */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Model</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Select from a variety of AI models optimized for different tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model) => (
              <div
                key={model.name}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#FF2D55]/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-semibold text-white">{model.name}</span>
                  <span className="text-xs text-white/40 px-2 py-1 rounded bg-white/5">{model.provider}</span>
                </div>
                <div className="flex gap-4 text-xs">
                  <div>
                    <span className="text-white/40">Speed: </span>
                    <span className="text-[#00FF88]">{model.speed}</span>
                  </div>
                  <div>
                    <span className="text-white/40">Quality: </span>
                    <span className="text-[#00FFFF]">{model.quality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#FF2D55]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Developers Use It</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real-world scenarios where the AI assistant shines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
              >
                <h3 className="font-display text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/60 mb-4">{useCase.description}</p>
                <div className="p-4 rounded-lg bg-[#09080D] border border-[#FF2D55]/20">
                  <span className="text-sm text-[#FF2D55] font-mono">{useCase.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#FF2D55]/20 to-[#FF2D92]/10 border border-[#FF2D55]/30">
            <Sparkles className="w-12 h-12 text-[#FF2D55] mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Start Coding Smarter Today</h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Get access to the AI assistant and all other powerful features. Free to download.
            </p>
            <Link href="/download">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] text-white px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF2D55]/30 transition-shadow"
              >
                Download Notilus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
