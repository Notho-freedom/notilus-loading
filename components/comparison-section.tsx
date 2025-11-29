import { Check, X } from "lucide-react"

const features = [
  { name: "Built-in System Monitor", notilus: true, chrome: false, firefox: false, opera: true },
  { name: "AI Assistant Integration", notilus: true, chrome: false, firefox: false, opera: false },
  { name: "Integrated Dev Tools Panel", notilus: true, chrome: true, firefox: true, opera: false },
  { name: "Lighthouse Built-in", notilus: true, chrome: false, firefox: false, opera: false },
  { name: "Terminal Access", notilus: true, chrome: false, firefox: false, opera: false },
  { name: "RAM Limiter", notilus: true, chrome: false, firefox: false, opera: true },
  { name: "CPU Usage Control", notilus: true, chrome: false, firefox: false, opera: true },
  { name: "Developer-First Design", notilus: true, chrome: false, firefox: false, opera: false },
  { name: "Customizable Themes", notilus: true, chrome: true, firefox: true, opera: true },
  { name: "Privacy Protection", notilus: true, chrome: false, firefox: true, opera: true },
]

export function ComparisonSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#09080D]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF2D55]/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF2D55]/30 bg-[#FF2D55]/10 mb-6">
            <span className="text-sm text-[#FF2D55] font-medium tracking-wider uppercase">Comparison</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">Notilus</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See how Notilus stacks up against other popular browsers for developers
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[#FF2D55]/20">
                <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                <th className="py-4 px-4">
                  <div className="flex flex-col items-center">
                    <img src="/images/notilus-logo.png" alt="Notilus" className="h-10 w-auto mb-2" />
                    <span className="font-display text-[#FF2D55] font-bold">Notilus</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center text-white/60">Chrome</th>
                <th className="py-4 px-4 text-center text-white/60">Firefox</th>
                <th className="py-4 px-4 text-center text-white/60">Opera GX</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.name} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                  <td className="py-4 px-4 text-white/80">{feature.name}</td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {feature.notilus ? (
                        <div className="w-6 h-6 rounded-full bg-[#00FF88]/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-[#00FF88]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <X className="w-4 h-4 text-white/30" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {feature.chrome ? (
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white/50" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                          <X className="w-4 h-4 text-white/20" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {feature.firefox ? (
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white/50" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                          <X className="w-4 h-4 text-white/20" />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {feature.opera ? (
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white/50" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                          <X className="w-4 h-4 text-white/20" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/50 mb-4">Ready to upgrade your development experience?</p>
          <a
            href="/download"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] text-white font-semibold hover:shadow-lg hover:shadow-[#FF2D55]/30 transition-shadow"
          >
            Try Notilus Free
          </a>
        </div>
      </div>
    </section>
  )
}
