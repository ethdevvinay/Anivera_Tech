import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import StrategicFoundation from "@/components/about/StrategicFoundation";
import CoreValues from "@/components/about/CoreValues";
import ServicesPreview from "@/components/ServicesPreview";
import TechnologyMindset from "@/components/about/TechnologyMindset";
import IndustriesSection from "@/components/IndustriesSection";
import ProductReadiness from "@/components/ProductReadiness";
import CultureSection from "@/components/about/CultureSection";
import HorizontalProcess from "@/components/about/HorizontalProcess";
import FounderPhilosophy from "@/components/about/FounderPhilosophy";
import AboutTrust from "@/components/about/AboutTrust";

export const metadata = {
  metadataBase: new URL("https://aniveratech.com"),
  title: "About Anivera | Visionary Tech Partners for Scalable Growth",
  description:
    "We are Anivera - a team of engineers, strategists, and innovators dedicated to building secure, future-proof digital platforms. Discover our mission, values, and leadership.",
  keywords: [
    "About Anivera",
    "Tech Leadership",
    "Software Engineering Company",
    "Digital Transformation",
    "Secure Software Development",
  ],
  openGraph: {
    title: "About Anivera | Engineering the Future of Business",
    description:
      "Discover the team and philosophy behind Anivera's scalable technology solutions.",
    type: "website",
    url: "https://anivera.com/about", // Replace with actual URL
    images: [
      {
        url: "/hero-illustration.png", // Or a specific about image
        width: 1200,
        height: 630,
        alt: "Anivera Team & Vision",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <Header />
      <main>
        {/* 1. About Hero */}
        <AboutHero />

        {/* 2. Overview & Strategic Foundation */}
        <StrategicFoundation />

        {/* 3. Founder / Leadership Philosophy (New) */}
        <FounderPhilosophy />

        {/* 4. Core Values */}
        <CoreValues />

        {/* 5. What We Do (Expertise) */}
        <div className="bg-surface">
          <ServicesPreview />
        </div>

        {/* 6. How We Work - Process */}
        <HorizontalProcess />

        {/* 7. Technology Philosophy */}
        <TechnologyMindset />

        {/* 8. Trust & Security (New - Premium) */}
        <AboutTrust />

        {/* 9. Industries We Serve */}
        <IndustriesSection />

        {/* 10. Growth & Scalability */}
        <ProductReadiness />

        {/* 11. Careers & Culture */}
        <CultureSection />
      </main>
      <Footer />
    </div>
  );
}
