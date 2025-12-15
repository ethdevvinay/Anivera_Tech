"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { Quote, UserCheck } from "lucide-react";
import Image from "next/image";

const FounderPhilosophy = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 text-secondary font-bold uppercase tracking-widest text-xs">
                <UserCheck className="w-4 h-4" />
                Leadership Philosophy
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-8 leading-tight">
                Built on Integrity, <br />
                Driven by <span className="text-secondary">Innovation</span>
              </h2>

              <div className="relative p-8 bg-white rounded-3xl border border-gray-100 shadow-xl">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-secondary/20" />

                <blockquote className="relative z-10 text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6 italic">
                  "We founded Anivera with a simple belief: Technology shouldn't
                  just exist—it should solve real problems. We don't chase
                  trends; we build resilient systems that empower businesses to
                  lead their industries with confidence."
                </blockquote>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    F
                  </div>
                  <div>
                    <div className="font-bold text-primary text-lg">
                      Founder Name
                    </div>
                    <div className="text-gray-500 text-sm">
                      Founder & CEO, Anivera
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Abstract Visualization of Leadership/Vision */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-all duration-500">
                <Image
                  src="/leadership-visual.png"
                  alt="Visionary Leadership"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <p className="text-white text-lg font-light tracking-wide">
                    Leading with Purpose & Precision
                  </p>
                </div>
              </div>

              {/* Decorative background element behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary to-primary rounded-2xl -z-10 blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderPhilosophy;
