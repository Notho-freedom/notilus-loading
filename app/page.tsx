import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BrowserShowcase } from "@/components/browser-showcase"
import { DevToolsSection } from "@/components/dev-tools-section"
import { AIAssistantSection } from "@/components/ai-assistant-section"
import { LighthouseSection } from "@/components/lighthouse-section"
import { PerformanceSection } from "@/components/performance-section"
import { DownloadSection } from "@/components/download-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <BrowserShowcase />
      <DevToolsSection />
      <AIAssistantSection />
      <LighthouseSection />
      <PerformanceSection />
      <ComparisonSection />
      <TestimonialsSection />
      <DownloadSection />
    </div>
  )
}
