"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CareersHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950 text-white pt-32 md:pt-40"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-100" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              We Are Hiring
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 !text-gray-300">
              Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Future
              </span>{" "}
              With Us.
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-lg mb-10">
              Join a team of visionaries, engineers, and creators who are
              redefining what's possible in digital technology. Your best work
              starts here.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#open-positions"
                className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 active:scale-95 duration-200"
              >
                View Open Roles
              </Link>
              <Link
                href="#culture"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                Our Culture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Visual: Abstract Team/Connection */}
        <motion.div
          style={{ y }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Main Image Frame */}
          <div className="absolute right-0 top-10 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10">
            <img
              src="/images/careers/hero-visual.png"
              alt="Anivera Team Culture"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
          </div>

          {/* Floating Elements about Culture */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 bg-white text-slate-900 p-4 rounded-xl shadow-xl z-20 max-w-[180px]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Impact
            </p>
            <p className="text-sm font-semibold">
              Working on global scale problems.
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 right-10 bg-slate-800 text-white border border-white/10 p-4 rounded-xl shadow-xl z-20 max-w-[180px]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-green-400 mb-1">
              Growth
            </p>
            <p className="text-sm font-semibold">
              Continuous learning budget & mentorship.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
