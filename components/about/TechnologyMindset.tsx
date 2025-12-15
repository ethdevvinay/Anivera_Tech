"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Shield, Server, Code, RefreshCw } from "lucide-react";

const TechnologyMindset = () => {
  const points = [
    {
      title: "Scalability at Core",
      desc: "Architectures that handle growth effortlessly without performance degradation.",
      icon: Server,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Security First",
      desc: "Enterprise-grade protection baked into every layer of the application.",
      icon: Shield,
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      title: "Clean Architecture",
      desc: "Modular, decoupled systems that are easier to test and extend.",
      icon: Code,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Maintainable Code",
      desc: "Readable, well-documented codebases that reduce technical debt.",
      icon: RefreshCw,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <ScrollReveal direction="right" className="order-2 lg:order-1">
            <div className="relative">
              {/* Image Container with premium shadow and border */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
              >
                <Image
                  src="/tech-architecture.png"
                  alt="Scalable Software Architecture"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                />

                {/* Glass overlay effect on bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white text-sm font-light tracking-wider opacity-90">
                    Visualize. Architect. Build.
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements for depth */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
              >
                <Server className="w-8 h-8 text-secondary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
              >
                <Shield className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right Column: Content */}
          <ScrollReveal direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-block mb-4">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs px-3 py-1 bg-secondary/10 rounded-full">
                  Technology Mindset
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 leading-tight">
                Engineered for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Long Term
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We don't just write code; we build digital assets. Our
                engineering philosophy is grounded in creating systems that are
                robust, secure, and maintainable. We avoid shortcuts that create
                technical debt, ensuring your investment pays dividends for
                years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                {points.map((pt, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-start gap-3"
                  >
                    <div
                      className={`w-12 h-12 ${pt.bg} rounded-xl flex items-center justify-center ${pt.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <pt.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors">
                        {pt.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TechnologyMindset;
