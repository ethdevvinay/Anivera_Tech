import { Cloud, Building2, Cpu, Settings } from "lucide-react";
import Link from "next/link";

const ServicesPreview = () => {
  const services = [
    {
      title: "SaaS Platforms",
      description:
        "Scalable, multi-tenant cloud architectures designed for growth and performance.",
      icon: Cloud,
    },
    {
      title: "Custom Software",
      description:
        "Robust custom software tailored to optimize complex business workflows.",
      icon: Settings,
    },
    {
      title: "Enterprise Systems",
      description:
        "Modernize legacy systems to drive efficiency and innovation.",
      icon: Building2,
    },
    {
      title: "Automation & Integrations",
      description:
        "Streamline operations with intelligent bots and seamless API connectivity.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that empower businesses
            to lead in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              href="/services"
              key={index}
              className="group relative p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500 shadow-inner">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 font-heading">
                  {service.title}
                </h3>
                <p className="text-foreground-light leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
                <span className="text-secondary text-sm font-bold flex items-center gap-2 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore Solution <span className="text-lg">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
