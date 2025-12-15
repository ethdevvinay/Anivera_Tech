"use client";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = 80; // Increased for better visibility

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseOpacity: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; // Slightly faster movement
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 3 + 1.5; // Larger particles
        this.baseOpacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        this.pulseSpeed = Math.random() * 0.02 + 0.01;

        // Blue-Teal gradient colors
        const colors = [
          `rgba(59, 130, 246, ${this.baseOpacity})`, // Blue
          `rgba(20, 184, 166, ${this.baseOpacity})`, // Teal
          `rgba(56, 189, 248, ${this.baseOpacity})`, // Sky Blue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Pulsing effect
        const pulse = Math.sin(Date.now() * this.pulseSpeed) * 0.2 + 0.8;
        this.size = (Math.random() * 3 + 1.5) * pulse;
      }

      draw() {
        if (!ctx) return;

        // Draw glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Connect particles with gradient lines
      particles.forEach((a, index) => {
        particles.slice(index + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            // Increased connection distance
            ctx.beginPath();
            const opacity = (1 - distance / 200) * 0.4; // More visible lines
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`); // Blue
            gradient.addColorStop(1, `rgba(20, 184, 166, ${opacity})`); // Teal
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5; // Thicker lines
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 opacity-70"
    />
  );
};

export default AnimatedBackground;
