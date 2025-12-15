"use client";
import { ScrollReveal } from "../ui/ScrollReveal";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const CultureSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
              <img
                src="/about-culture.png"
                alt="Anivera Culture"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="font-bold text-lg">Innovation Hub</p>
                <p className="text-sm text-blue-100">Where ideas scale</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Join Our Team
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mt-2 mb-6">
                A Culture of Innovation & Ownership
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Anivera, we foster an environment where curiosity is
                encouraged and ownership is expected. We are a team of lifelong
                learners who are passionate about pushing the boundaries of what
                is possible.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Continuous learning and development budgets",
                  "Remote-first, flexible working environment",
                  "Opportunity to work on cutting-edge tech scale",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group"
              >
                <span className="border-b-2 border-primary group-hover:border-secondary transition-colors">
                  View Open Positions
                </span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
