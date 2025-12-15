import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import TrustSignals from "@/components/services/TrustSignals";
import CoreServicesDetail from "@/components/services/CoreServicesDetail";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseServices from "@/components/services/WhyChooseServices";
import EngagementModels from "@/components/services/EngagementModels";
import TechStackSection from "@/components/TechStackSection";
import ServicesSecurity from "@/components/services/ServicesSecurity";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";
import HorizontalProcess from "@/components/about/HorizontalProcess";
import ServicesOverview from "@/components/services/ServicesOverview";

export const metadata: Metadata = {
  title: "Services | Anivera - Scalable Software Engineering",
  description:
    "Explore Anivera's comprehensive technology services including custom software development, SaaS engineering, cloud solution, and AI integrations.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <Header />
      <main>
        {/* 1. Hero */}
        <ServicesHero />

        {/* 2. Trust Signals */}
        <TrustSignals />

        {/* 3. Services Overview Grid */}
        <ServicesOverview />

        {/* 4. Core Services Detail */}
        <CoreServicesDetail />

        {/* 5. Industries */}
        <IndustriesSection />

        {/* 6. Process */}
        <HorizontalProcess />

        {/* 7. Why Choose Anivera */}
        <WhyChooseServices />

        {/* 8. Engagement Models */}
        <EngagementModels />

        {/* 9. Tech Stack */}
        <TechStackSection />

        {/* 10. Security Mini */}
        <ServicesSecurity />

        {/* 11. FAQ */}
        <ServicesFAQ />

        {/* 12. CTA */}
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
