"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { ShieldCheck, Lock, Fingerprint, Server } from "lucide-react";
import { motion } from "framer-motion";

const AboutTrust = () => {
  const trustFeatures = [
    {
      title: "Encryption Standard",
      desc: "AES-256 bit encryption for data at rest and in transit.",
      icon: Lock,
    },
    {
      title: "Identity Protection",
      desc: "Multi-factor authentication and strict access controls.",
      icon: Fingerprint,
    },
    {
      title: "Resilient Infrastructure",
      desc: "99.9% uptime SLA with geo-redundant data centers.",
      icon: Server,
    },
  ];

  return (
    <section className="py-24 bg-[#0B1221] relative overflow-hidden text-white">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal direction="right">
            <div className="mb-8 p-3 inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Uncompromising Security
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 !text-white">
              Trust is our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Foundation
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
              In a digital-first world, trust isn't optional. We embed
              enterprise-grade security into the DNA of every product we build,
              ensuring your data—and your reputation—are always protected.
            </p>

            <div className="space-y-6">
              {trustFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/30">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold !text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Visual */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-md aspect-square"
              >
                {/* Spinning rings effect container */}
                <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-teal-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                {/* Main Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] bg-black/50 backdrop-blur-sm">
                  <img
                    src="/trust-security.png"
                    alt="Security Core"
                    className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-[#0B1221] border border-teal-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm font-bold !text-white">
                    System Secure
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
