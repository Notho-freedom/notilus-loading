import { PageHeader } from "@/components/page-header"
import {
  Github,
  Twitter,
  MessageCircle,
  Heart,
  Users,
  Code,
  Rocket,
  Target,
  Eye,
  Sparkles,
  ArrowRight,
  Star,
  GitFork,
  MessageSquare,
} from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Developer-First",
    description:
      "Every feature is designed with developers in mind. We understand your workflow because we're developers too.",
  },
  {
    icon: Eye,
    title: "Privacy by Design",
    description: "Your data belongs to you. No tracking, no selling data, no compromises on privacy.",
  },
  {
    icon: Rocket,
    title: "Performance Obsessed",
    description: "Speed isn't just a feature, it's a requirement. We optimize every byte and millisecond.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Built in the open with community feedback. Your voice shapes the future of Notilus.",
  },
]

const team = [
  {
    name: "Lead Developer",
    role: "Core Architecture",
    avatar: "/developer-male-with-glasses.jpg",
  },
  {
    name: "UI/UX Designer",
    role: "Design System",
    avatar: "/creative-female-designer.jpg",
  },
  {
    name: "Backend Engineer",
    role: "AI Integration",
    avatar: "/engineer-male-focused.jpg",
  },
  {
    name: "DevOps Lead",
    role: "Infrastructure",
    avatar: "/technical-female-professional.jpg",
  },
]

const stats = [
  { label: "GitHub Stars", value: "2.5K+", icon: Star },
  { label: "Contributors", value: "50+", icon: Users },
  { label: "Forks", value: "320+", icon: GitFork },
  { label: "Discord Members", value: "5K+", icon: MessageSquare },
]

const milestones = [
  { date: "Q1 2024", title: "Project Started", description: "Initial concept and architecture design" },
  { date: "Q2 2024", title: "Alpha Release", description: "First internal testing with core features" },
  { date: "Q3 2024", title: "Beta Launch", description: "Public beta with community feedback" },
  { date: "Q4 2024", title: "AI Integration", description: "Groq-powered assistant added" },
  { date: "Q1 2025", title: "v1.0 Release", description: "Stable release with full feature set" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#09080D]">
      <PageHeader
        badge="About Us"
        title="Building the Future of Developer Browsers"
        description="We're a team of passionate developers creating tools that we ourselves want to use every day"
      />

      {/* Mission section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Why We Built Notilus</h2>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>
                  As developers, we spend countless hours in our browsers — debugging, researching, testing, and
                  building. Yet most browsers are designed for general consumers, not for us.
                </p>
                <p>
                  We asked ourselves: what if a browser truly understood developers? What if it had system monitoring
                  built-in, AI assistance at your fingertips, and performance tools that didn't require switching to
                  another app?
                </p>
                <p>
                  That's why we created Notilus — a browser that respects your workflow, protects your privacy, and
                  gives you the power tools you need without getting in your way.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FF2D55]/10 blur-3xl rounded-3xl" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-[#FF2D55]/30">
                <img src="/images/notilus-logo.png" alt="Notilus Logo" className="w-48 h-auto mx-auto mb-6" />
                <div className="text-center">
                  <div className="font-display text-4xl font-bold bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                    NOTILUS
                  </div>
                  <p className="text-white/50">The Developer Browser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#FF2D55]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">The principles that guide everything we build</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF2D55]/50 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF2D55]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#FF2D55]" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-white/50">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-white/60 text-lg">From concept to the browser you use today</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF2D55] via-[#FF2D55]/50 to-transparent" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.date}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#FF2D55] -translate-x-1/2 ring-4 ring-[#09080D]" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-sm text-[#FF2D55] font-medium">{milestone.date}</span>
                  <h4 className="font-display text-lg font-semibold text-white mt-1">{milestone.title}</h4>
                  <p className="text-sm text-white/50 mt-1">{milestone.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community stats */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#FF2D55]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Thousands of developers are already part of the Notilus community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <stat.icon className="w-8 h-8 text-[#FF2D55] mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF2D55]/50 hover:bg-[#FF2D55]/10 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
              <span className="text-white">GitHub</span>
              <ArrowRight className="w-4 h-4 text-white/50" />
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF2D55]/50 hover:bg-[#FF2D55]/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-white">Discord</span>
              <ArrowRight className="w-4 h-4 text-white/50" />
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF2D55]/50 hover:bg-[#FF2D55]/10 transition-colors"
            >
              <Twitter className="w-5 h-5 text-white" />
              <span className="text-white">Twitter</span>
              <ArrowRight className="w-4 h-4 text-white/50" />
            </a>
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#FF2D55]/20 to-[#FF2D92]/10 border border-[#FF2D55]/30 text-center">
            <Code className="w-12 h-12 text-[#FF2D55] mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Want to Contribute?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Notilus is open source. We welcome contributions of all kinds — code, documentation, design, translations,
              and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#09080D] font-semibold hover:bg-white/90 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Read Contributing Guide
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
