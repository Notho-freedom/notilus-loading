"use client"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09080D]/80 backdrop-blur-xl border-b border-[#FF2D55]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/images/l2-removebg-preview-20-282-29.png" alt="Notilus Logo" className="h-10 w-10" />
            <span className="font-display text-xl font-bold tracking-wider bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] bg-clip-text text-transparent">
              NOTILUS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/60 hover:text-[#FF2D55] transition-colors">
              Features
            </a>
            <a href="#dev-tools" className="text-white/60 hover:text-[#FF2D55] transition-colors">
              Dev Tools
            </a>
            <a href="#ai-assistant" className="text-white/60 hover:text-[#FF2D55] transition-colors">
              AI Assistant
            </a>
            <a href="#performance" className="text-white/60 hover:text-[#FF2D55] transition-colors">
              Performance
            </a>
            <a href="#download" className="text-white/60 hover:text-[#FF2D55] transition-colors">
              Download
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-[#FF2D55]/10">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] hover:opacity-90 text-white rounded-lg">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-[#FF2D55]/20">
            <a href="#features" className="block text-white/60 hover:text-[#FF2D55] transition-colors">
              Features
            </a>
            <a href="#dev-tools" className="block text-white/60 hover:text-[#FF2D55] transition-colors">
              Dev Tools
            </a>
            <a href="#ai-assistant" className="block text-white/60 hover:text-[#FF2D55] transition-colors">
              AI Assistant
            </a>
            <a href="#performance" className="block text-white/60 hover:text-[#FF2D55] transition-colors">
              Performance
            </a>
            <a href="#download" className="block text-white/60 hover:text-[#FF2D55] transition-colors">
              Download
            </a>
            <Button className="w-full bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] hover:opacity-90 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
