"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cloud,
  ShieldCheck,
  Database,
  Cpu,
} from "lucide-react";

export default function ServicesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse spotlight logic
  const x = useSpring(0, { stiffness: 40, damping: 25 });
  const y = useSpring(0, { stiffness: 40, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#020617] text-white pt-20"
    >
      {/* 🌌 Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
      </div>

      {/* 🔦 Dynamic Spotlight */}
      <motion.div
        style={{ x, y, opacity: hovered ? 1 : 0 }}
        className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 z-10"
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT CONTENT */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              End-to-End Engineering
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8">
              We Build The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
                Technology
              </span>{" "}
              That <br />
              Drives Growth.
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-10 border-l-2 border-blue-500/20 pl-6">
              From custom software to cloud infrastructure, our engineering
              teams deliver scalable, secure, and high-performance solutions
              tailored to your business goals.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="#services-overview"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: ABSTRACT TECH VISUAL */}
        <div className="relative hidden lg:block h-[600px] w-full">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />

          {/* Orbiting Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Core */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-45 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center z-20"
            >
              <Code2 className="w-12 h-12 text-white -rotate-45" />
            </motion.div>

            {/* Floating Cards - Parallax */}
            <motion.div
              style={{ y: y1 }}
              className="absolute top-20 right-20 bg-gray-900/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-30"
            >
              <Cloud className="w-8 h-8 text-teal-400 mb-2" />
              <div className="h-2 w-16 bg-gray-700 rounded-full mb-1" />
              <div className="h-2 w-10 bg-gray-700 rounded-full" />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-32 left-10 bg-gray-900/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-10"
            >
              <ShieldCheck className="w-8 h-8 text-indigo-400 mb-2" />
              <div className="h-2 w-20 bg-gray-700 rounded-full mb-1" />
              <div className="h-2 w-12 bg-gray-700 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-40 left-20 bg-gray-900/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-10"
            >
              <Database className="w-6 h-6 text-purple-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 right-32 bg-gray-900/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-10"
            >
              <Cpu className="w-6 h-6 text-pink-400" />
            </motion.div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
              <motion.path
                d="M200,300 Q400,100 600,300"
                fill="none"
                stroke="url(#gradient-line)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d="M250,450 Q400,600 550,450"
                fill="none"
                stroke="url(#gradient-line)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <defs>
                <linearGradient
                  id="gradient-line"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
