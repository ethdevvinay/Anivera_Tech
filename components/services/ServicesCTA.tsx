"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-[#0B1221] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight !text-white">
          Let’s Build Technology That <br />
          <span className="text-teal-400">Actually Works</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ready to transform your business with scalable, secure software?
          Partner with our engineering team to turn your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-teal-500 text-white font-bold hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95 duration-200"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/contact"
            className="group px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
          >
            Request a Proposal
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
