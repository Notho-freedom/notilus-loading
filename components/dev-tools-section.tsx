"use client"

import { Code, FileCode, TerminalSquare, GitBranch, Database, Braces } from "lucide-react"

const tools = [
  { icon: Code, name: "VS Code", description: "Direct integration" },
  { icon: TerminalSquare, name: "Terminal", description: "PowerShell & Bash" },
  { icon: FileCode, name: "API Docs", description: "REST client built-in" },
  { icon: GitBranch, name: "Git", description: "Version control" },
  { icon: Database, name: "Databases", description: "Quick connections" },
  { icon: Braces, name: "JSON Tools", description: "Format & validate" },
]

export function DevToolsSection() {
  return (
    <section id="dev-tools" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-l from-primary/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">DEV TOOLS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              <span className="text-foreground">YOUR TOOLS,</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ONE CLICK AWAY
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Access your entire development toolkit from the sidebar. Code editors, terminals, API documentation, and
              more — all integrated seamlessly into your browsing experience.
            </p>

            {/* Tools grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all"
                >
                  <tool.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-foreground">{tool.name}</div>
                  <div className="text-sm text-muted-foreground">{tool.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl blur-3xl" />
            <div className="relative">
              {/* Browser mockup */}
              <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/20">
                <img src="/images/screenshot-202025-11-24-20183648.png" alt="Notilus Dev Tools" className="w-full" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-card border border-primary/50 shadow-xl">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-card border border-accent/50 shadow-xl">
                <TerminalSquare className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
