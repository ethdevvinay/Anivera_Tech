"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import CustomCursor from "@/components/ui/CustomCursor";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root>
      <CustomCursor />
      <AnimatedBackground />
      {children as any}
    </ReactLenis>
  );
}
