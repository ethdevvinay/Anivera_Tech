"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "./ui/ScrollReveal";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <ScrollReveal direction="left">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm">
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  Future-Ready Technology
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary leading-tight mb-6">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Scalable Technology
                </span>{" "}
                Solutions for Modern Businesses
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                We design secure, future-ready software platforms that help
                organizations grow across industries.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-secondary hover:bg-teal-500 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-teal-500/25 transform hover:scale-105"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Illustration */}
          <div className="relative flex items-center justify-center lg:h-[600px]">
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 to-teal-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse-slow"></div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/hero-illustration.png"
                alt="Scalable Tech Architecture"
                width={600}
                height={600}
                priority
                className="object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
