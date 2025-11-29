import { Github, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-[#FF2D55]/20 bg-[#09080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/l2-removebg-preview-20-282-29.png" alt="Notilus Logo" className="h-10 w-10" />
              <span className="font-display text-xl font-bold tracking-wider bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
                NOTILUS
              </span>
            </div>
            <p className="text-sm text-white/50 mb-4">The browser built for developers who demand more.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Extensions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Themes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FF2D55]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">© 2025 Notilus. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-white/30">
            <span className="text-[#FF2D55]">★</span>
            <span>FOR DEVELOPERS</span>
            <span className="text-[#FF2D55]">★</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-[#FF2D55] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
