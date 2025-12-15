"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ProcessItem {
  id: number | string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

interface ProcessProps {
  items: ProcessItem[];
  title?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const Process = ({
  items,
  title,
  subtitle,
  className,
}: ProcessProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Determine active index based on scroll progress
  useEffect(() => {
    return springProgress.on("change", (latest) => {
      const index = Math.min(
        Math.max(Math.round(latest * (items.length - 1)), 0),
        items.length - 1
      );
      setActiveIndex(index);
    });
  }, [springProgress, items.length]);

  // Transform logic
  // "10%" start allows the first card to be slightly to the right, behind the spacer
  // "-85%" end ensures the last card scrolls fully into view and maybe slightly past center
  const x = useTransform(springProgress, [0, 1], ["0%", "-85%"]);

  if (shouldReduceMotion) {
    return (
      <section className={cn("py-20 bg-primary", className)}>
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-md">
            {subtitle && (
              <span className="text-secondary font-semibold uppercase tracking-widest text-xs block mb-2">
                {subtitle}
              </span>
            )}
            {title && (
              <div className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                {title}
              </div>
            )}
          </div>
          <div className="space-y-8">
            {items.map((step) => (
              <div
                key={step.id}
                className="bg-[#0B1224] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-40`}
                />
                <div className="relative z-10 flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold !text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm !text-gray-300 leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={targetRef}
      className={cn("relative h-[300vh] bg-primary", className)}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Section Title */}
        <div className="absolute top-16 left-6 md:left-20 z-20 max-w-md pointer-events-none">
          {subtitle && (
            <span className="text-secondary font-semibold uppercase tracking-widest text-xs block mb-2">
              {subtitle}
            </span>
          )}
          {title && (
            <div className="text-3xl md:text-5xl font-bold font-heading !text-white leading-tight">
              {title}
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-6 md:left-20 z-20 flex items-center gap-3">
          <span className="text-white/50 text-xs font-mono mr-2">01</span>
          {items.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                // Optional: Scroll to that section (complex implementations needed for true scroll-to-progress)
                // For now, just a visual indicator
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                idx === activeIndex ? "w-12 bg-secondary" : "w-2 bg-white/20"
              )}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
          <span className="text-white/50 text-xs font-mono ml-2">
            0{items.length}
          </span>
        </div>

        {/* Horizontal Track */}
        <motion.div
          style={{ x }}
          className="flex gap-8 px-24 items-center h-full"
        >
          {/* Intro Spacer */}
          <div className="w-[30vw] shrink-0" />

          {items.map((step, idx) => (
            <motion.div
              key={step.id}
              tabIndex={0}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative h-[65vh] w-[500px] shrink-0 rounded-[2rem] bg-[#0B1224] border border-white/10 overflow-hidden group transition-all duration-500 will-change-transform",
                // Visual "Snap" focus: Highlight the active card more prominently
                idx === activeIndex
                  ? "opacity-100 scale-100 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] border-white/20"
                  : "opacity-40 scale-95 blur-[1px] grayscale-[50%]"
              )}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  step.color
                } transition-opacity duration-500 ${
                  idx === activeIndex ? "opacity-100" : "opacity-30"
                }`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center p-12 z-10">
                <div className="mb-8 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-6xl font-bold text-white/10 font-heading">
                    0{idx + 1}
                  </span>
                  <h3 className="text-3xl font-semibold !text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-sm">
                  {step.desc}
                </p>

                {/* Decoration */}
                <div className="absolute bottom-8 right-8">
                  <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center">
                    <div
                      className={cn(
                        "h-1.5 w-1.5 rounded-full bg-secondary transition-all duration-500",
                        idx === activeIndex ? "scale-100" : "scale-0"
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Soft Edge Fade */}
              {/* <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" /> */}
            </motion.div>
          ))}

          {/* Outro Spacer */}
          <div className="w-[10vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};
