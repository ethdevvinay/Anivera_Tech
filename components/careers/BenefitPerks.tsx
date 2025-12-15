"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "Remote-First Hybrid Model",
  "Competitive Salary & Equity",
  "Comprehensive Health Insurance",
  "Annual Learning Stipend",
  "Home Office Setup Budget",
  "Unlimited PTO Policy",
  "Wellness Programs",
  "Regular Team Retreats",
];

export default function BenefitPerks() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 !text-gray-300">
              Invested in Your Growth &<br className="hidden md:block" />
              <span className="text-blue-400"> Wellbeing.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We believe that happy, healthy people do the best work. That's why
              we offer a benefits package designed to support you in every
              aspect of your life, not just your job.
            </p>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-slate-900 transition-all font-semibold">
              View Full Benefits Guide
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold mb-6 !text-white">
              Perks at a Glance
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 font-medium text-sm md:text-base">
                    {perk}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
