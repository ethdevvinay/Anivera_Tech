import {
  ShieldCheck,
  Layers,
  Globe,
  Handshake,
  CheckCircle,
} from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      title: "Scalable Architecture",
      description:
        "Systems built to grow with your business, handling millions of requests effortlessly.",
      icon: Layers,
    },
    {
      title: "Industry-Agnostic Solutions",
      description:
        "Versatile technology stacks adaptable to healthcare, finance, retail, and more.",
      icon: Globe,
    },
    {
      title: "Security-First Approach",
      description:
        "Enterprise-grade security protocols ensuring your data is always protected.",
      icon: ShieldCheck,
    },
    {
      title: "Long-term Technology Partner",
      description:
        "We don’t just build code; we support your technological evolution for years.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
              Why Leaders Trust Anivera
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In a digital landscape filled with complexity, we bring clarity,
              capability, and commitment. Our engineering-first approach ensures
              that every solution is built on a solid foundation.
            </p>

            <ul className="space-y-4">
              {[
                "99.9% Uptime Guarantee",
                "Agile API-First Development",
                "24/7 Support Integration",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 animate-slide-in-right"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-slide-in-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 text-primary">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
