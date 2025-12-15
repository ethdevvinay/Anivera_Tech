import { Cloud, Building2, Cpu, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ServicesPreview = () => {
  const services = [
    {
      title: "SaaS Platforms",
      description:
        "Scalable, multi-tenant cloud architectures designed for growth and performance.",
      icon: Cloud,
      image: "/services/saas-engineering-new.png",
    },
    {
      title: "Custom Software",
      description:
        "Robust custom software tailored to optimize complex business workflows.",
      icon: Settings,
      image: "/services/custom-software-new.png",
    },
    {
      title: "Enterprise Systems",
      description:
        "Modernize legacy systems to drive efficiency and innovation.",
      icon: Building2,
      image: "/services/software-dev.png",
    },
    {
      title: "Automation & Integrations",
      description:
        "Streamline operations with intelligent bots and seamless API connectivity.",
      icon: Cpu,
      image: "/services/cloud-devops.png",
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
              className="group relative flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Image Heading */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 font-heading">
                  {service.title}
                </h3>
                <p className="text-foreground-light leading-relaxed text-sm mb-6 flex-1">
                  {service.description}
                </p>
                <span className="text-secondary text-sm font-bold flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
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
