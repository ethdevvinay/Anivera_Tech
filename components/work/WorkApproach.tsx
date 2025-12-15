"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by understanding your business goals, user needs, and technical constraints through deep-dive workshops.",
  },
  {
    num: "02",
    title: "Strategy & Design",
    desc: "We craft a roadmap and high-fidelity prototypes. This phase aligns stakeholders and validates the user experience before coding begins.",
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "We build in two-week sprints, delivering testable features regularly. This keeps the project flexible and transparent.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Post-launch, we monitor usage, optimize performance, and iterate based on real user data to ensure long-term success.",
  },
];

export default function WorkApproach() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Header */}
          <div className="md:w-1/3">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mt-4 mb-6">
              How We <br /> Deliver Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our process is not just a checklist; it's a mindset. We blend
              creative exploration with engineering rigor to deliver products
              that stand the test of time.
            </p>
          </div>

          {/* Right Steps */}
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-50 opacity-50 select-none font-heading">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
