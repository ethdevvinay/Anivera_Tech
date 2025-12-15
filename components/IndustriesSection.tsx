import {
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Truck,
  Factory,
  Building2,
  Rocket,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const IndustriesSection = () => {
  const industries = [
    { name: "Retail & E-commerce", icon: ShoppingBag },
    { name: "Education & EdTech", icon: GraduationCap },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Finance & FinTech", icon: Building2 },
    { name: "Manufacturing", icon: Factory },
    { name: "Logistics", icon: Truck },
    { name: "Enterprises", icon: Briefcase },
    { name: "Startups", icon: Rocket },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Versatility
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Anivera Technologies delivers scalable, industry-agnostic software
            solutions across startups, enterprises, and organizations in retail,
            healthcare, finance, manufacturing, logistics, education, and many
            more sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12 animate-fade-in-up delay-200">
          {industries.map((item, index) => (
            <Link
              key={index}
              href="/industries"
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-secondary/30"
            >
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors text-center">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center bg-white border border-gray-200 hover:border-secondary text-primary font-bold py-3 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            And many more industries...
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
