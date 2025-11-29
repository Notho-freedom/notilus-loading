"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/ai-assistant", label: "AI Assistant" },
  { href: "/download", label: "Download" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09080D]/95 backdrop-blur-xl border-b border-[#FF2D55]/30 shadow-lg shadow-[#FF2D55]/10"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FF2D55] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/images/notilus-logo.png"
                alt="Notilus Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#FF2D55]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wider bg-gradient-to-r from-[#FF2D55] via-[#FF6B9D] to-white bg-clip-text text-transparent">
                NOTILUS
              </span>
              <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">Developer Browser</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  pathname === link.href ? "text-[#FF2D55]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF2D55] rounded-full" />
                )}
                <span className="absolute inset-0 bg-[#FF2D55]/0 group-hover:bg-[#FF2D55]/10 rounded-lg transition-colors" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-white/60 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-[#FF2D55]/30"
            >
              Sign In
            </Button>
            <Link href="/download">
              <Button className="relative overflow-hidden bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] hover:shadow-lg hover:shadow-[#FF2D55]/30 text-white rounded-lg group">
                <span className="relative z-10 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF2D92] to-[#FF2D55] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 text-white rounded-lg border border-[#FF2D55]/30 bg-[#FF2D55]/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-2 border-t border-[#FF2D55]/20 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-[#FF2D55]/20 text-[#FF2D55] border-l-2 border-[#FF2D55]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full border-[#FF2D55]/30 text-white/60 hover:text-white hover:bg-[#FF2D55]/10 bg-transparent"
              >
                Sign In
              </Button>
              <Link href="/download" className="block">
                <Button className="w-full bg-gradient-to-r from-[#FF2D55] to-[#FF2D92] text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
