"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] text-white pt-32 md:pt-40">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <MessageSquare className="w-3 h-3" />
              Let's Connect
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8 !text-gray-300">
              Start The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-500">
                Conversation
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-lg mb-10 border-l-[3px] border-blue-500/30 pl-6">
              Whether you have a groundbreaking idea or a complex technical
              challenge, our team is ready to listen, strategize, and build.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Email Us
                  </div>
                  <div className="text-white font-semibold">
                    hello@anivera.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Call Us
                  </div>
                  <div className="text-white font-semibold">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/contact/hero-visual.png"
              alt="Global Connection"
              className="w-full h-full object-cover animate-pulse-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
