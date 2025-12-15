"use client";

import { motion } from "framer-motion";
import { BookOpen, Shield, Cpu, LineChart } from "lucide-react";

const steps = [
  {
    title: "Sector Immersion",
    description:
      "We don't just code; we learn your lingo. Our team conducts deep-dive workshops to understand the specific regulatory, operational, and competitive landscape of your industry.",
    icon: BookOpen,
  },
  {
    title: "Regulatory & Security Audit",
    description:
      "Before a single line of code is written, we map out compliance requirements (HIPAA, PCI-DSS, GDPR, SOC2) to ensure the architecture is secure by design.",
    icon: Shield,
  },
  {
    title: "Adaptive Engineering",
    description:
      "We select the right tech stack for your specific needs—whether it's low-latency C++ for trading or scalable Node.js for high-traffic retail apps.",
    icon: Cpu,
  },
  {
    title: "Continuous Optimization",
    description:
      "Industries evolve, and so do our solutions. We provide ongoing monitoring and feature updates to keep you ahead of market shifts.",
    icon: LineChart,
  },
];

export default function IndustryProcess() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mt-2 mb-4">
            The Anivera Adaptive Framework
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One size never fits all. We adapt our engineering process to the
            unique DNA of your business sector.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon Marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center z-10 shadow-sm">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Spacer for desktop alignment */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className="flex-1 pl-20 md:pl-0">
                  <div
                    className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
