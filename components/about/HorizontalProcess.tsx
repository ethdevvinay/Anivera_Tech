"use client";
import React from "react";
import { Search, PenTool, Layout, Rocket } from "lucide-react";
import { Process } from "@/components/ui/Process";

const HorizontalProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "We begin by understanding your goals, users, and business constraints to establish a clear foundation.",
      icon: Search,
      color: "from-blue-500/20 to-cyan-400/10",
    },
    {
      id: 2,
      title: "Design",
      desc: "We design scalable architectures and intuitive experiences aligned with long-term business outcomes.",
      icon: PenTool,
      color: "from-cyan-400/20 to-teal-400/10",
    },
    {
      id: 3,
      title: "Build",
      desc: "Our engineers develop secure, maintainable systems using best practices and modern technologies.",
      icon: Layout,
      color: "from-teal-400/20 to-emerald-400/10",
    },
    {
      id: 4,
      title: "Scale",
      desc: "We support growth through optimization, monitoring, and continuous improvement.",
      icon: Rocket,
      color: "from-emerald-400/20 to-green-400/10",
    },
  ];

  return (
    <Process
      items={steps}
      subtitle="Our Workflow"
      title={
        <>
          From Concept <br /> to Scale
        </>
      }
    />
  );
};

export default HorizontalProcess;
