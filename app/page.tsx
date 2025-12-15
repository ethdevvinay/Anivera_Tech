import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutShort from "@/components/AboutShort";
import ImpactSection from "@/components/ImpactSection";
import ClientPhilosophy from "@/components/ClientPhilosophy";
import ServicesPreview from "@/components/ServicesPreview";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import ProductReadiness from "@/components/ProductReadiness";
import SecuritySection from "@/components/SecuritySection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SecondaryCTA from "@/components/SecondaryCTA";
import FAQSection from "@/components/FAQSection";
import LeadGenSection from "@/components/LeadGenSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <AboutShort />
        <ImpactSection />
        <ClientPhilosophy />
        <ServicesPreview />
        <IndustriesSection />
        <TechStackSection />
        <ProductReadiness />
        <SecuritySection />
        <ProcessSection />
        <WhyChooseSection />
        <SecondaryCTA />
        <FAQSection />
        <LeadGenSection />
      </main>
      <Footer />
    </div>
  );
}
