import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyNexora } from "@/components/why-nexora"
import { AnalyticsSection } from "@/components/analytics-section"
import { PlatformSection } from "@/components/platform-section"
import { ChannelsSection } from "@/components/channels-section"
import { SuccessSection } from "@/components/success-section"
import { ScalabilitySection } from "@/components/scalability-section"
import { CtaSection } from "@/components/cta-section"
import { StepsSection } from "@/components/steps-section"
import { SectorsSection } from "@/components/sectors-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyNexora />
      <AnalyticsSection />
      <PlatformSection />
      <ChannelsSection />
      <SuccessSection />
      <ScalabilitySection />
      <CtaSection />
      <StepsSection />
      <SectorsSection />
      <Footer />
    </main>
  )
}
