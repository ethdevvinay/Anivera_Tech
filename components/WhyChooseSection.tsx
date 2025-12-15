import { ShieldCheck, Code2, Users, Rocket } from "lucide-react";
import Image from "next/image";

const WhyChooseSection = () => {
  const points = [
    {
      title: "Scalable & Secure Systems",
      description:
        "Built to handle growth without compromising on data protection.",
      icon: ShieldCheck,
    },
    {
      title: "Business-Driven Engineering",
      description: "We align technical decisions with your business goals.",
      icon: Rocket,
    },
    {
      title: "Clean, Maintainable Code",
      description: "High-quality codebases that are easy to update and extend.",
      icon: Code2,
    },
    {
      title: "Long-Term Partnership Mindset",
      description: "We are committed to your success beyond launch day.",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image/Visual */}
          {/* Left Column: Image/Visual */}
          <div className="relative animate-fade-in-up">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
              <Image
                src="/why-choose-metrics.png"
                alt="Growth Metrics"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex justify-between items-end text-white">
                  <div>
                    <div className="text-3xl font-bold font-heading">10+</div>
                    <div className="text-sm text-gray-300">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold font-heading">99%</div>
                    <div className="text-sm text-gray-300">
                      Client Retention
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Why Anivera
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mt-2 mb-8">
              Partner with Engineering Excellence
            </h2>

            <div className="space-y-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100">
                      <point.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 hover:text-secondary transition-colors cursor-default">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
