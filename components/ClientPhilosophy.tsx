import { Handshake, Heart, MessageSquare, Target } from "lucide-react";
// import Image from "next/image";

const ClientPhilosophy = () => {
  const philosophyPoints = [
    {
      title: "Client-Centric Mindset",
      desc: "We don't just build what you ask for; we build what your business needs to grow.",
      icon: Heart,
    },
    {
      title: "Transparent Communication",
      desc: "No jargon, no hidden costs. Just clear, honest updates at every stage.",
      icon: MessageSquare,
    },
    {
      title: "Long-Term Partnership",
      desc: "Our relationship doesn't end at deployment. We are here for the long haul.",
      icon: Handshake,
    },
    {
      title: "Outcome Focused",
      desc: "We measure our success by the tangible results and ROI we deliver for you.",
      icon: Target,
    },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-secondary font-bold text-xs uppercase tracking-wider mb-4">
              Client-First Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight mb-6">
              More Than Just a Vendor.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                A Strategic Partner.
              </span>
            </h2>
            <p className="text-foreground-light text-lg leading-relaxed mb-8">
              We believe that great software is built on great relationships.
              Our philosophy is simple: we treat your business as if it were our
              own. This ownership mindset drives every architectural decision
              and line of code we write.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {philosophyPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary border border-gray-100">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-snug">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-slide-in-right delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/client-philosophy.png"
                alt="Strategic Partnership"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Glass Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/40 shadow-lg">
                <p className="font-heading font-medium text-primary text-lg italic">
                  "Success is not just about delivering features. It's about
                  solving real problems and enabling sustainable growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPhilosophy;
