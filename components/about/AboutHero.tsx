"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse spotlight
  const x = useSpring(0, { stiffness: 40, damping: 25 });
  const y = useSpring(0, { stiffness: 40, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], ["0%", "12%"]);
  const textY = useTransform(scrollY, [0, 500], ["0%", "35%"]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#020617] text-white"
    >
      {/* 🌌 Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050B1E] to-[#020617]" />

        {/* Aurora (softened) */}
        <div className="absolute top-1/4 -left-24 w-[520px] h-[520px] bg-blue-600/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[140px]" />

        {/* Grid (lighter) */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </motion.div>

      {/* 🌟 Spotlight */}
      <motion.div
        style={{
          x,
          y,
          opacity: hovered ? 0.6 : 0,
        }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-teal-400/20 rounded-full blur-[120px] pointer-events-none z-10 transition-opacity duration-500"
      />

      {/* 🧠 Main Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24">
        <motion.div style={{ y: textY, opacity }} className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs tracking-widest text-teal-200 uppercase">
              About Anivera
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white"
            >
              Global Vision.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"
            >
              Executed with Precision.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed border-l-2 border-teal-400/30 pl-6"
          >
            Anivera Technologies is a technology-driven company building
            scalable, secure, and future-ready digital solutions for businesses
            across industries.
          </motion.p>
        </motion.div>
      </div>

      {/* 📊 Footer Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 w-full border-t border-white/10 bg-black/30 backdrop-blur-md z-20"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Founded", val: "2024" },
              { label: "Global Reach", val: "8+ Countries" },
              { label: "Uptime", val: "99.99%" },
              { label: "Team", val: "Elite Engineers" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-lg font-semibold text-teal-200">
                  {stat.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
