import { PageHeader } from "@/components/page-header"
import {
  Terminal,
  Shield,
  Palette,
  Layers,
  Monitor,
  Gauge,
  Lock,
  Globe,
  Wifi,
  HardDrive,
  BarChart3,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const mainFeatures = [
  {
    icon: Monitor,
    title: "Real-Time System Monitor",
    description:
      "Track CPU, RAM, GPU temperature, network bandwidth, and battery in real-time. Never lose control of your system resources while browsing or debugging.",
    features: [
      "CPU Usage Tracking",
      "RAM Management",
      "GPU Temperature",
      "Network Monitoring",
      "Battery Status",
      "Tab Counter",
    ],
    image: "/images/screenshot-202025-11-24-20152543.png",
    color: "#00FF88",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Assistant",
    description:
      "Get intelligent help with debugging, code understanding, and web research. Powered by Groq for lightning-fast responses with contextual awareness.",
    features: [
      "Contextual Chat",
      "Code Analysis",
      "Auto-Summaries",
      "Multi-Model Support",
      "Privacy Protection",
      "Memory System",
    ],
    image: "/images/screenshot-202025-11-29-20224853.png",
    color: "#FF2D55",
  },
  {
    icon: Gauge,
    title: "Lighthouse Integration",
    description:
      "Built-in performance auditing with Lighthouse. Analyze any website for performance, accessibility, SEO, and best practices without leaving the browser.",
    features: [
      "Quick Wins",
      "AI Recommendations",
      "History Tracking",
      "Automated Analysis",
      "Score Tracking",
      "Action Plans",
    ],
    image: "/images/screenshot-202025-11-29-20231356.png",
    color: "#00FFFF",
  },
  {
    icon: Terminal,
    title: "Integrated Dev Tools",
    description:
      "Access your favorite development tools right from the sidebar. Quick launch VS Code, Terminal, API docs, and more without switching windows.",
    features: [
      "VS Code Integration",
      "PowerShell Terminal",
      "API Documentation",
      "Quick Launch",
      "Custom Tools",
      "Keyboard Shortcuts",
    ],
    image: "/images/screenshot-202025-11-24-20183648.png",
    color: "#FFAA00",
  },
]

const additionalFeatures = [
  {
    icon: Palette,
    title: "Customizable Themes",
    description:
      "Choose from a library of themes or create your own. Dynamic wallpapers and color schemes to match your style.",
  },
  {
    icon: Shield,
    title: "Privacy Protection",
    description: "Built-in ad blocker, tracker protection, and VPN support. Your data stays yours.",
  },
  {
    icon: Layers,
    title: "Tab Management",
    description: "Advanced tab groups, workspaces, and session management for complex projects.",
  },
  {
    icon: Globe,
    title: "Speed Dial",
    description: "Quick access to your most-used sites with beautiful visual bookmarks and smart suggestions.",
  },
  {
    icon: Wifi,
    title: "Network Tools",
    description: "Built-in network analyzer, request logger, and bandwidth monitoring for debugging.",
  },
  {
    icon: HardDrive,
    title: "Resource Limiter",
    description: "Control how much CPU and RAM the browser can use. Perfect for running alongside heavy apps.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Track your browsing habits, time spent, and productivity metrics with detailed reports.",
  },
  {
    icon: Lock,
    title: "Secure Sync",
    description: "End-to-end encrypted sync for bookmarks, history, and settings across all devices.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#09080D]">
      <PageHeader
        badge="Features"
        title="Everything You Need"
        description="Discover all the powerful features that make Notilus the ultimate browser for developers"
      />

      {/* Main features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center mb-32 last:mb-0`}
            >
              {/* Content */}
              <div className="flex-1">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">{feature.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: feature.color }} />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-3xl opacity-30"
                  style={{ backgroundColor: feature.color }}
                />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional features grid */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#FF2D55]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">And So Much More</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Every feature designed with developers in mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF2D55]/50 hover:bg-[#FF2D55]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF2D55]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF2D55]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#FF2D55]" />
                </div>
                <h4 className="font-display font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Workflow?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Download Notilus today and experience the future of developer browsing
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] text-white font-semibold text-lg hover:shadow-lg hover:shadow-[#FF2D55]/30 transition-shadow"
          >
            Download Now - It's Free
          </Link>
        </div>
      </section>
    </div>
  )
}
