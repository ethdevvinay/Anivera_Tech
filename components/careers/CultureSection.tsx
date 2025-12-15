"use client";

import { motion } from "framer-motion";
import { Users, Zap, Heart, Target } from "lucide-react";

const values = [
  {
    title: "Innovate Fearlessly",
    desc: "We encourage bold ideas. Failure is just a stepping stone to the next breakthrough.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Customers First",
    desc: "Every line of code we write is dedicated to solving real problems for our users.",
    icon: Heart,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Collaborate Openly",
    desc: "No silos. We believe the best solutions come from diverse minds working together.",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Aim for Excellence",
    desc: "Good enough isn't in our vocabulary. We strive for perfection in every pixel.",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">
            Our DNA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-6 mb-6">
            More Than Just a Workplace
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are building a culture where creativity thrives, and people come
            first. Here is what we value most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
