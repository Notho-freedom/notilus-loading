"use client"

import { Gauge, Activity, HardDrive, Wifi, Battery, Layers } from "lucide-react"

const metrics = [
  { icon: Gauge, label: "CPU", value: "32%", color: "text-green-400" },
  { icon: HardDrive, label: "RAM", value: "45%", color: "text-yellow-400" },
  { icon: Activity, label: "GPU", value: "58°C", color: "text-primary" },
  { icon: Wifi, label: "Network", value: "1.1 Gbps", color: "text-blue-400" },
  { icon: Battery, label: "Battery", value: "85%", color: "text-green-400" },
  { icon: Layers, label: "Tabs", value: "12", color: "text-purple-400" },
]

export function PerformanceSection() {
  return (
    <section id="performance" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[200px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Metrics panel mockup */}
              <div className="p-6 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-semibold text-foreground">System Status</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="p-4 rounded-xl bg-background/50 border border-border/30">
                      <div className="flex items-center gap-2 mb-2">
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Usage graph mockup */}
                <div className="mt-6 p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="text-sm text-muted-foreground mb-3">Resource Usage</div>
                  <div className="h-24 flex items-end gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t"
                        style={{ height: `${Math.random() * 60 + 20}%`, opacity: 0.5 + i * 0.02 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">PERFORMANCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                STAY IN CONTROL
              </span>
              <br />
              <span className="text-foreground">OF YOUR SYSTEM</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Monitor your system resources in real-time. Set limits on CPU and RAM usage, track network performance,
              and never let your browser slow you down again.
            </p>

            <ul className="space-y-4">
              {[
                "Real-time CPU, RAM, and GPU monitoring",
                "Network bandwidth visualization",
                "Battery optimization mode",
                "Tab memory management",
                "Resource limiter for heavy sites",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
