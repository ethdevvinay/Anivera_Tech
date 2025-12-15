"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { Target, Compass, Flag } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

/* -------------------- Motion Variants -------------------- */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as Transition["ease"],
    },
  }),
};

const hoverCard: Variants = {
  hover: {
    y: -6,
    boxShadow: "0 40px 80px -30px rgba(0,0,0,0.25)",
    transition: {
      duration: 0.35,
      ease: "easeOut" as Transition["ease"],
    },
  },
};

/* -------------------- Component -------------------- */

const StrategicFoundation = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-secondary/10 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HERO ROW */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          {/* IMAGE COLUMN */}
          <div className="w-full flex justify-center lg:justify-start">
            <ScrollReveal direction="right" className="w-full">
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <div className="relative rounded-[32px] p-[1px] bg-gradient-to-br from-primary/40 to-secondary/40">
                  <div
                    className="relative h-[440px] min-h-[440px] w-full rounded-[30px] overflow-hidden bg-white"
                    style={{ isolation: "isolate" }}
                  >
                    <img
                      src="/strategic-foundation.png"
                      alt="Strategic Foundation"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 -right-8 hidden md:flex items-center gap-3 px-5 py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100"
                >
                  <Target className="w-6 h-6 text-secondary" />
                  <span className="text-sm font-semibold text-primary">
                    Strategy-Driven Engineering
                  </span>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* CONTENT COLUMN */}
          <motion.div
            className="w-full"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex mb-5 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold tracking-wider text-xs uppercase">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-6xl font-bold font-heading text-primary leading-tight mb-8">
              Engineering the
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Future of Business
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mb-6 leading-relaxed">
              Anivera Technologies partners with ambitious organizations to
              engineer high-performance software, scalable cloud systems, and
              resilient digital infrastructure.
            </p>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              We combine deep technical expertise with strategic clarity to
              deliver systems that create durable, measurable business impact.
            </p>
          </motion.div>
        </div>

        {/* PURPOSE / VISION / MISSION */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Compass,
              title: "Why We Exist",
              text: "To eliminate friction between business ambition and technical execution through clarity, precision, and discipline.",
              color: "from-blue-500/10 to-blue-500/0",
              iconColor: "text-blue-600",
            },
            {
              icon: Target,
              title: "Our Vision",
              text: "To become a global benchmark for engineering excellence by building secure, resilient, future-ready ecosystems.",
              color: "from-teal-500/10 to-teal-500/0",
              iconColor: "text-teal-600",
            },
            {
              icon: Flag,
              title: "Our Mission",
              list: [
                "Engineer secure, scalable platforms",
                "Champion continuous learning",
                "Build transparent partnerships",
                "Deliver measurable outcomes",
              ],
              color: "from-indigo-500/10 to-indigo-500/0",
              iconColor: "text-indigo-600",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="relative"
            >
              <motion.div
                variants={hoverCard}
                className="h-full rounded-3xl p-8 bg-white border border-gray-100 backdrop-blur-xl"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color}`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-md ${item.iconColor}`}
                  >
                    <item.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4">
                    {item.title}
                  </h3>

                  {item.text && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  )}

                  {item.list && (
                    <ul className="space-y-3 text-sm text-gray-600">
                      {item.list.map((l, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicFoundation;
