"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Globe, Users } from "lucide-react";
// Reusing the Counter component
import Counter from "../ui/Counter";

const stats = [
  {
    label: "Lines of Code",
    value: 2,
    suffix: "M+",
    icon: Code,
    decimals: 1,
  },
  {
    label: "Global Clients",
    value: 45,
    suffix: "",
    icon: Globe,
    decimals: 0,
  },
  {
    label: "Design Awards",
    value: 12,
    suffix: "",
    icon: Users, // Using generic icon if award icon missing
    decimals: 0,
  },
  // Fun stat
  {
    label: "Caffeine Consumed",
    value: 15,
    suffix: "k+",
    icon: Coffee,
    decimals: 0,
  },
];

export default function ProjectStats() {
  return (
    <section className="py-20 bg-slate-900 text-white border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded-full mb-4 text-gray-400">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2 text-white">
                <Counter
                  to={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
