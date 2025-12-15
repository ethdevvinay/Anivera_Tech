"use client";

import { motion } from "framer-motion";
import { Handshake, Zap, Scale, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const iconVariants = {
  idle: { scale: 1 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring" as const, stiffness: 300 },
  },
};

const CoreValues = () => {
  const values = [
    {
      title: "Transparency",
      desc: "We believe in clear and open communication. No hidden costs, no unnecessary complexity, only honest collaboration.",
      icon: Handshake,
    },
    {
      title: "Ownership",
      desc: "We treat every product as our own, taking responsibility for quality, performance, and long-term success.",
      icon: Zap,
    },
    {
      title: "Quality First",
      desc: "We never compromise on standards. Scalability, security, and reliability are built into everything we deliver.",
      icon: Scale,
    },
    {
      title: "Growth Mindset",
      desc: "Technology evolves constantly, and so do we. Continuous learning and improvement are part of our culture.",
      icon: Heart,
    },
  ];

  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold uppercase tracking-widest text-xs">
              Our Culture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              Values That Drive{" "}
              <span className="text-secondary">Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our values define how we work, how we collaborate, and how we
              deliver meaningful technology for our partners.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {values.map((val, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <motion.div
                  variants={iconVariants}
                  className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300"
                >
                  <val.icon className="w-7 h-7" />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {val.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values in Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-primary rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-20 mix-blend-overlay"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold !text-white mb-2">
                See Our Values in Action
              </h3>
              <p className="text-blue-100/80">
                Join a team that prioritizes quality and transparency.
              </p>
            </div>
            <Link
              href="/careers"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Join the Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
