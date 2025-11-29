import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BrowserShowcase } from "@/components/browser-showcase"
import { DevToolsSection } from "@/components/dev-tools-section"
import { PerformanceSection } from "@/components/performance-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BrowserShowcase />
      <DevToolsSection />
      <PerformanceSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
