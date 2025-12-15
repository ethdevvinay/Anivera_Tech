import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecondaryCTA from "@/components/SecondaryCTA";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryGrid from "@/components/industries/IndustryGrid";
import IndustryValueProp from "@/components/industries/IndustryValueProp";
import IndustrySuccessStories from "@/components/industries/IndustrySuccessStories";
import IndustryProcess from "@/components/industries/IndustryProcess";

export default function Industries() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <IndustriesHero />
        <IndustryGrid />
        <IndustryValueProp />
        <IndustrySuccessStories />
        <IndustryProcess />
      </main>
      <SecondaryCTA />
      <Footer />
    </div>
  );
}
