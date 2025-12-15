"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "FinEdge Banking Core",
    category: "FinTech / Enterprise",
    description:
      "A complete overhaul of a legacy banking system into a microservices-based architecture. We reduced transaction latency by 40% and enabled real-time fraud detection for over 2 million users.",
    tags: ["React", "Node.js", "Kafka", "PostgreSQL"],
    color: "bg-blue-600",
    image: "/images/work/project-1.png",
  },
  {
    id: 2,
    title: "MedConnect Telehealth",
    category: "Healthcare / Mobile",
    description:
      "An HIPAA-compliant telemedicine platform connecting patients seeking rural care with top specialists. Features include encrypted video consultations and integrated e-prescriptions.",
    tags: ["Flutter", "WebRTC", "Firebase", "Python"],
    color: "bg-teal-500",
    image: "/images/work/project-2.png",
  },
  {
    id: 3,
    title: "Urban Logistics AI",
    category: "Logistics / SaaS",
    description:
      "Route optimization SaaS for last-mile delivery fleets. Utilizing genetic algorithms to reduce fuel consumption by 25% and improve delivery time accuracy.",
    tags: ["Next.js", "Go", "AWS", "Mapbox"],
    color: "bg-orange-500",
    image: "/images/work/project-3.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-6 md:max-w-2xl">
            Real world problems. <br />
            <span className="text-gray-400">Fixed with code.</span>
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Visual Side (Mockup) */}
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.color}`} />
                  {project.category}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-md border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-slate-900 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
