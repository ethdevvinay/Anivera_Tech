import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F2A44] to-[#05111D] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-heading !text-white mb-6 leading-tight">
          Ready to build scalable technology with Anivera?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Let's transform your vision into a secure, future-proof reality.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-teal-400 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1"
        >
          Contact Us
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
