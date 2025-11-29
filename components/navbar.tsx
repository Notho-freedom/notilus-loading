"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/images/l2-removebg-preview-20-282-29.png" alt="Notilus Logo" className="h-10 w-10" />
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NOTILUS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#dev-tools" className="text-muted-foreground hover:text-foreground transition-colors">
              Dev Tools
            </a>
            <a href="#performance" className="text-muted-foreground hover:text-foreground transition-colors">
              Performance
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Download Now</Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#dev-tools" className="block text-muted-foreground hover:text-foreground transition-colors">
              Dev Tools
            </a>
            <a href="#performance" className="block text-muted-foreground hover:text-foreground transition-colors">
              Performance
            </a>
            <a href="#download" className="block text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Download Now</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
