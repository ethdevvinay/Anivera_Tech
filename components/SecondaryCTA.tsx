import Link from "next/link";

const SecondaryCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0F2A44] to-[#1A3E61] text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold font-heading mb-8 !text-white">
          Tell us your challenge. We’ll help you design the solution.
        </h2>

        <Link
          href="/contact"
          className="
            inline-block
            bg-secondary
            hover:bg-secondary-dark
            text-white
            hover:text-white
            font-bold
            py-4
            px-10
            rounded-full
            shadow-lg
            hover:shadow-teal-500/30
            transform
            hover:-translate-y-1
            transition-all
            duration-300
            animate-bounce-slow
          "
        >
          Share Your Requirement
        </Link>
      </div>
    </section>
  );
};

export default SecondaryCTA;
