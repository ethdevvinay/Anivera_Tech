"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Layers, Monitor, Smartphone } from "lucide-react";

export default function WorkHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#050505] text-white pt-32 md:pt-40"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[400px] bg-blue-900/10 rounded-[100%] blur-[120px] -rotate-12 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[400px] bg-teal-900/10 rounded-[100%] blur-[120px] rotate-12 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-end pb-20">
        {/* Left: Text */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/10 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Layers className="w-3 h-3" />
              Our Portfolio
            </div>

            <h1 className="text-6xl md:text-8xl font-bold font-heading leading-tight mb-8 tracking-tight !text-gray-300">
              Work That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
                Speaks
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl border-l-[3px] border-teal-500/30 pl-6">
              We don't just write code; we architect experiences. From
              disruptive startups to global enterprises, explore how we
              transform visionary ideas into digital reality.
            </p>
          </motion.div>
        </div>

        {/* Right: Abstract Stats/Visual */}
        <motion.div
          style={{ y, opacity }}
          className="hidden lg:flex justify-end relative h-[500px]"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />
            <img
              src="/images/work/hero-visual.png"
              alt="Digital Innovation"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-float"
            />

            {/* Floating Stats Cards Overlay */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-10 -left-10 bg-gray-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-20 flex gap-4 items-center"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-white">
                  150+
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Web Platforms
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-20 -right-5 bg-gray-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-20 flex gap-4 items-center"
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-white">
                  80+
                </div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Mobile Apps
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDownRight className="w-4 h-4" />
      </div>
    </section>
  );
}
