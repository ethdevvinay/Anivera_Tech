import { Layers, Globe, ShieldCheck, Users } from "lucide-react";
import Counter from "./ui/Counter";

const ImpactSection = () => {
  const stats = [
    {
      label: "Digital Solutions Delivered",
      value: 10,
      suffix: "+",
      decimals: 0,
      icon: Layers,
    },
    {
      label: "Industries Served",
      value: 8,
      suffix: "+",
      decimals: 0,
      icon: Globe,
    },
    {
      label: "Uptime Guaranteed",
      value: 99.9,
      suffix: "%",
      decimals: 1,
      icon: ShieldCheck,
    },
    {
      label: "Client Retention Rate",
      value: 100,
      suffix: "%",
      decimals: 0,
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0F2A44] to-[#1A3E61] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="!text-white font-semibold uppercase tracking-wider text-sm">
            Our Impact
          </span>
          <h2 className="!text-white text-3xl md:text-5xl font-bold font-heading mt-2">
            Delivering Real Value
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-3 text-white">
                <Counter
                  to={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-blue-200 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
