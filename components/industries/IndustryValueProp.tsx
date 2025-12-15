"use client";

import { motion } from "framer-motion";
import { Copy, RefreshCw, Zap, TrendingUp } from "lucide-react";

export default function IndustryValueProp() {
  const benefits = [
    {
      title: "Cross-Industry Innovation",
      description:
        "We successfully apply high-frequency trading latency optimizations to healthcare data pipelines, and e-commerce personalization engines to EdTech learning paths. Innovation has no borders.",
      icon: RefreshCw,
    },
    {
      title: "Compliance as Code",
      description:
        "From PCI-DSS in FinTech to HIPAA in Healthcare, we embed regulatory compliance directly into our DevOps workflows, ensuring security is never an afterthought.",
      icon: Copy,
    },
    {
      title: "Accelerated Time-to-Market",
      description:
        "By reusing battle-tested architectural patterns across sectors, we reduce development cycles by up to 40% while increasing reliability.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full"
            >
              The Advantage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold font-heading text-slate-900 mt-6 mb-6"
            >
              The Power of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Cross-Pollination
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed"
            >
              Specialists often have tunnel vision. As generalists with deep
              expertise, we bring a fresh perspective to your industry's oldest
              problems. We don't just build what you ask for; we build what you
              didn't know was possible.
            </motion.p>

            <div className="space-y-8">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-600/5 rounded-xl flex items-center justify-center text-blue-600">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Abstract Visual */}
          <div className="order-1 lg:order-2 relative h-[600px] flex items-center justify-center">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />

            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {/* Central connector */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-slate-200"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-full border border-dashed border-slate-200"
              />

              {/* Cards floating in orbit */}
              <motion.div
                className="absolute top-1/4 left-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[200px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="h-2 w-8 bg-green-400 rounded-full mb-2" />
                <p className="text-xs font-semibold text-slate-700">
                  HealthTech Security
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  99.9% Compliance
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 right-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[200px]"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="h-2 w-8 bg-indigo-400 rounded-full mb-2" />
                <p className="text-xs font-semibold text-slate-700">
                  AdTech Performance
                </p>
                <p className="text-[10px] text-gray-400 mt-1">50ms Latency</p>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl flex items-center justify-center z-10"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <TrendingUp className="w-12 h-12 text-white" />
              </motion.div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line
                  x1="25%"
                  y1="30%"
                  x2="50%"
                  y2="50%"
                  stroke="#CBD5E1"
                  strokeDasharray="4 4"
                />
                <line
                  x1="75%"
                  y1="70%"
                  x2="50%"
                  y2="50%"
                  stroke="#CBD5E1"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
