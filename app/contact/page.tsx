import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecondaryCTA from "@/components/SecondaryCTA";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocations from "@/components/contact/ContactLocations";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Contact Us | Anivera Technologies",
  description:
    "Get in touch with Anivera. Let's discuss your project and how we can help you build the future.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactLocations />
        <FAQSection />
      </main>
      <SecondaryCTA />
      <Footer />
    </div>
  );
}
