"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Globe,
  Briefcase,
  Leaf,
  Stethoscope,
  Plane,
  Monitor,
} from "lucide-react";

export default function IndustriesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useSpring(0, { stiffness: 40, damping: 25 });
  const y = useSpring(0, { stiffness: 40, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] text-white pt-32 md:pt-40"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Dynamic Cursor Light */}
      <motion.div
        style={{ x, y, opacity: hovered ? 1 : 0 }}
        className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 z-10"
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Globe className="w-3 h-3 animate-spin-slow" />
              Global Impact
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-8 !text-white">
              Pioneering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Innovation
              </span>{" "}
              Across <br />
              Every Sector.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-10 border-l-2 border-cyan-500/20 pl-6">
              We don’t just build software; we engineer digital ecosystems
              tailored to the unique pulse of your industry. From healthcare to
              finance, our solutions drive tangible growth.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#industries-grid"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-95 duration-200"
              >
                Explore Industries
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block h-[600px] w-full flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[80px]" />

          <motion.div
            style={{ rotate }}
            className="relative w-[450px] h-[450px] border border-white/5 rounded-full flex items-center justify-center"
          >
            {/* Center Hub */}
            <div className="absolute w-28 h-28 bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/20 z-20">
              <Building2 className="w-10 h-10 text-blue-400" />
            </div>

            {/* Orbiting Icons */}
            {[
              { Icon: Factory, color: "text-amber-400", angle: 0 },
              { Icon: Stethoscope, color: "text-red-400", angle: 45 },
              { Icon: Plane, color: "text-sky-400", angle: 90 },
              { Icon: Monitor, color: "text-purple-400", angle: 135 },
              { Icon: Briefcase, color: "text-emerald-400", angle: 180 },
              { Icon: Globe, color: "text-cyan-400", angle: 225 },
              { Icon: Leaf, color: "text-green-400", angle: 270 },
              { Icon: Building2, color: "text-indigo-400", angle: 315 },
            ].map(({ Icon, color, angle }, i) => (
              <div
                key={i}
                className="absolute p-3 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `50%`,
                  left: `50%`,
                  transform: `rotate(${angle}deg) translate(225px) rotate(-${angle}deg)`,
                }}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
            ))}

            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20 animate-spin-slow"
              style={{ animationDuration: "60s" }}
            >
              <circle
                cx="50%"
                cy="50%"
                r="225"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="10 10"
                className="text-gray-700"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
