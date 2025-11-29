"use client"

import { Code, FileCode, TerminalSquare, GitBranch, Database, Settings } from "lucide-react"

const tools = [
  { icon: Code, name: "Code Editor", description: "VS Code integration" },
  { icon: TerminalSquare, name: "Terminal", description: "PowerShell & Bash" },
  { icon: FileCode, name: "API Docs", description: "REST client built-in" },
  { icon: GitBranch, name: "Git", description: "Version control" },
  { icon: Database, name: "Databases", description: "Quick connections" },
  { icon: Settings, name: "Settings", description: "Full customization" },
]

export function DevToolsSection() {
  return (
    <section id="dev-tools" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09080D] to-[#101018]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-[#FF2D55]/50 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-l from-[#FF2D55]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF2D55]/40 bg-[#FF2D55]/10 mb-6">
              <span className="text-sm font-medium text-[#FF2D55] tracking-wider">DEV TOOLS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black mb-6">
              <span className="text-white">YOUR TOOLS,</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
                ONE CLICK AWAY
              </span>
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Access your entire development toolkit from the sidebar. Code editors, terminals, API documentation, and
              more — all integrated seamlessly into your browsing experience.
            </p>

            {/* Tools grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group p-4 rounded-xl glass border border-[#FF2D55]/20 hover:border-[#FF2D55]/50 transition-all"
                >
                  <tool.icon className="w-8 h-8 text-[#FF2D55] mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-white">{tool.name}</div>
                  <div className="text-sm text-white/50">{tool.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D55]/20 to-[#B1165A]/10 rounded-2xl blur-3xl" />
            <div className="relative">
              {/* Browser mockup with new screenshot */}
              <div className="rounded-xl overflow-hidden border border-[#FF2D55]/30 shadow-2xl shadow-[#FF2D55]/20">
                <img
                  src="/images/screenshot-202025-11-29-20224815.png"
                  alt="Notilus Dev Tools Settings"
                  className="w-full"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-4 rounded-xl glass border border-[#FF2D55]/50 shadow-xl animate-float">
                <Code className="w-6 h-6 text-[#FF2D55]" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl glass border border-[#FF6B9D]/50 shadow-xl">
                <TerminalSquare className="w-6 h-6 text-[#FF6B9D]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
