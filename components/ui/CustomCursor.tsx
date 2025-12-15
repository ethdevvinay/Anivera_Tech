"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999] mix-blend-difference hidden md:block`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        borderColor: isHovered ? "#3B82F6" : "#14B8A6", // Blue when hovered, Teal default
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered
          ? "rgba(59, 130, 246, 0.2)" // Blue glow on hover
          : "transparent",
        boxShadow: isHovered
          ? "0 0 20px rgba(59, 130, 246, 0.5)" // Blue shadow on hover
          : "0 0 10px rgba(20, 184, 166, 0.3)", // Teal shadow default
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CustomCursor;
