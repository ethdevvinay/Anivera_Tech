import Link from "next/link";
// import Image from "next/image"; // Reverting to standard img for static host reliability if Next Image fails

const AboutShort = () => {
  return (
    <section className="py-24 bg-surface border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Column */}
          <div className="order-2 lg:order-1 relative animate-float">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform scale-75"></div>
            <img
              src="/about-vision.png"
              alt="Digital Vision"
              className="relative z-10 w-full rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700"
            />
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in-up">
            <span className="text-secondary font-bold uppercase tracking-wider text-xs mb-2 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight mb-6">
              Redefining Digital Possibilities
            </h2>
            <p className="text-lg text-foreground-light leading-relaxed mb-8">
              Anivera is a forward-thinking technology partner dedicated to
              building secure, scalable, and intelligent software ecosystems. We
              don't just write code; we engineer future-proof solutions that
              empower businesses to thrive in a rapidly evolving digital
              landscape.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
            >
              <span className="border-b-2 border-secondary pb-1 group-hover:border-transparent transition-all">
                Learn more about our vision
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShort;
