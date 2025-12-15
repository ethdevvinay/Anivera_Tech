"use client";

import { motion, useInView, useAnimation, type Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const distance = 50;

  const variants: { hidden: Variant; visible: Variant } = {
    hidden: (() => {
      switch (direction) {
        case "up":
          return { opacity: 0, y: distance };
        case "down":
          return { opacity: 0, y: -distance };
        case "left":
          return { opacity: 0, x: distance };
        case "right":
          return { opacity: 0, x: -distance };
        case "none":
          return { opacity: 0 };
        default:
          return { opacity: 0 };
      }
    })(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={cn("relative w-full", className)} // ✅ ALWAYS FULL WIDTH
    >
      {children}
    </motion.div>
  );
};
