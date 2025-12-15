import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecondaryCTA from "@/components/SecondaryCTA";
import WorkHero from "@/components/work/WorkHero";
import FeaturedProjects from "@/components/work/FeaturedProjects";
import ProjectStats from "@/components/work/ProjectStats";
import WorkApproach from "@/components/work/WorkApproach";

export const metadata = {
  title: "Our Work | Anivera",
  description:
    "Explore our portfolio of digital products, from enterprise platforms to innovative mobile apps.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <WorkHero />
        <FeaturedProjects />
        <ProjectStats />
        <WorkApproach />
      </main>
      <SecondaryCTA />
      <Footer />
    </div>
  );
}
