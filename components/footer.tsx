import Link from "next/link"
import { Github, Twitter, MessageCircle, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "AI Assistant", href: "/ai-assistant" },
    { label: "Download", href: "/download" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Extensions", href: "#" },
    { label: "Themes", href: "#" },
    { label: "Community", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#09080D] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF2D55]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF2D92]/5 blur-3xl rounded-full" />
      </div>

      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/images/notilus-logo.png" alt="Notilus Logo" className="h-14 w-auto" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-wider bg-gradient-to-r from-[#FF2D55] via-[#FF6B9D] to-white bg-clip-text text-transparent">
                  NOTILUS
                </span>
                <span className="text-xs text-white/40 tracking-widest uppercase">Developer Browser</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm mb-6 max-w-xs leading-relaxed">
              The browser built for developers who demand more. System monitoring, AI assistant, and integrated dev
              tools — all in one powerful package.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-[#FF2D55] hover:border-[#FF2D55]/50 hover:bg-[#FF2D55]/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider">PRODUCT</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#FF2D55] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider">RESOURCES</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#FF2D55] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#FF2D55] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider">LEGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#FF2D55] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#FF2D55]/10 to-[#FF2D92]/10 border border-[#FF2D55]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-semibold text-white mb-1">Stay Updated</h4>
              <p className="text-sm text-white/50">Get the latest news and updates from Notilus</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF2D55]/50"
              />
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] text-white font-medium hover:shadow-lg hover:shadow-[#FF2D55]/30 transition-shadow">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© 2025 Notilus. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30 tracking-widest">
              <span className="text-[#FF2D55]">&#9733;</span> BUILT FOR DEVELOPERS{" "}
              <span className="text-[#FF2D55]">&#9733;</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            <span>v1.0.0 BETA</span>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#FF2D55]/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FF2D55]/30" />
    </footer>
  )
}
