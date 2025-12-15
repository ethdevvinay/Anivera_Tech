"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

const cases = [
  {
    category: "FinTech",
    title: "Modernizing Legacy Banking Core",
    metric: "$500M+",
    metricLabel: "Transactions Processed",
    description:
      "Rebuilt a 15-year-old monolithic processing system into a microservices architecture, reducing downtime by 99%.",
    color: "from-blue-500 to-indigo-600",
    icon: ShieldCheck,
  },
  {
    category: "HealthTech",
    title: "AI-Powered Patient Triage",
    metric: "40%",
    metricLabel: "Efficiency Increase",
    description:
      "Developed a HIPAA-compliant intake portal that uses NLP to prioritize emergency cases for a hospital network.",
    color: "from-teal-400 to-emerald-500",
    icon: Users,
  },
  {
    category: "E-Commerce",
    title: "Global Supply Chain Dashboard",
    metric: "10x",
    metricLabel: "Data Visibility",
    description:
      "Unified data from 50+ logistics partners into a single real-time dashboard for a global retail giant.",
    color: "from-amber-400 to-orange-500",
    icon: TrendingUp,
  },
];

export default function IndustrySuccessStories() {
  return (
    <section className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">
              Impact in Action
            </span>
            <h2 className="text-4xl font-bold font-heading mt-4 !text-gray-100">
              Solving Complex <br /> Industry Challenges
            </h2>
          </div>
          <a
            href="/work"
            className="group flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-all"
          >
            View all Case Studies{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              <div className="flex justify-between items-start mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}
                >
                  {item.category}
                </span>
                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>

              <div className="mb-8">
                <h3 className="text-4xl font-bold font-heading !text-gray-100 mb-1">
                  {item.metric}
                </h3>
                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  {item.metricLabel}
                </p>
              </div>

              <h4 className="text-xl font-bold mb-3 !text-gray-100 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
