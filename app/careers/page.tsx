import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecondaryCTA from "@/components/SecondaryCTA";
import CareersHero from "@/components/careers/CareersHero";
import CultureSection from "@/components/careers/CultureSection";
import BenefitPerks from "@/components/careers/BenefitPerks";
import OpenPositions from "@/components/careers/OpenPositions";

export const metadata = {
  title: "Careers | Join Anivera",
  description:
    "Join our team of visionaries and builders. Explore career opportunities at Anivera Technologies.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <CareersHero />
        <CultureSection />
        <BenefitPerks />
        <OpenPositions />
      </main>
      <SecondaryCTA />
      <Footer />
    </div>
  );
}
