"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const Counter = ({
  from = 0,
  to,
  duration = 2.5,
  suffix = "",
  decimals = 0,
  className,
}: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!nodeRef.current || !isInView) return;

    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = value.toFixed(decimals) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [from, to, duration, isInView, decimals, suffix]);

  return (
    <span ref={nodeRef} className={className}>
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default Counter;
