"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { Search, PenTool, Layout, Rocket, ChevronRight } from "lucide-react";

const AboutProcess = () => {
  const steps = [
    {
      title: "Discover",
      desc: "We begin by deeply understanding your goals, users, and business context to define the right direction.",
      icon: Search,
    },
    {
      title: "Design",
      desc: "We design scalable architectures and intuitive experiences aligned with your long-term vision.",
      icon: PenTool,
    },
    {
      title: "Build",
      desc: "Our engineers build clean, secure, and maintainable systems with performance at the core.",
      icon: Layout,
    },
    {
      title: "Scale",
      desc: "We launch confidently and support continuous growth through optimization and evolution.",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-secondary font-bold uppercase tracking-widest text-xs">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              From Concept to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-teal-200">
                Scalable Reality
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A structured, transparent process designed to deliver reliable
              technology and long-term business value.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="group relative h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-secondary/50 transition-all duration-300">
                {/* Visual Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-secondary text-primary font-bold text-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-secondary" />
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors">
                  {step.desc}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center text-secondary text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
