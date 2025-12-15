"use client";

import {
  Code2,
  Rocket,
  Smartphone,
  Cloud,
  RefreshCcw,
  Bot,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";

const details = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    icon: Code2,
    image: "/services/custom-software-new.png",
    desc: "Bespoke software solutions tailored to map perfectly to your unique business processes.",
    includes: ["Business Systems", "Internal Tools", "Enterprise Platforms"],
    highlights: ["Clean Architecture", "Secure Code", "Future-proof Stack"],
  },
  {
    id: "saas-engineering",
    title: "SaaS Product Engineering",
    icon: Rocket,
    image: "/services/saas-engineering-new.png",
    desc: "End-to-end engineering for scalable, multi-tenant SaaS products from MVP to exit.",
    includes: [
      "MVP to Scale",
      "Multi-tenant Architecture",
      "Subscription Systems",
    ],
    highlights: ["Performance-driven", "Cost-optimized", "Investor-ready"],
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Applications",
    icon: Smartphone,
    image: "/services/web-mobile-new.png",
    desc: "High-performance consumer and enterprise apps built for engagement and retention.",
    includes: ["React / Next.js", "Android / iOS", "PWA"],
    highlights: ["UX + Performance", "SEO-ready", "Cross-platform"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    icon: Cloud,
    image: "/services/saas-engineering-new.png",
    desc: "Robust cloud infrastructure designed for high availability, security, and auto-scaling.",
    includes: ["AWS / GCP / Azure", "CI/CD Pipelines", "Monitoring & Scaling"],
    highlights: ["High Availability", "Cost Control", "Secure Deployments"],
  },
  {
    id: "automation",
    title: "Automation & Integrations",
    icon: RefreshCcw,
    image: "/services/custom-software-new.png",
    desc: "Connecting your disparate systems to eliminate manual work and accelerate data flow.",
    includes: ["API Development", "CRM / ERP Integration", "Payment Gateways"],
    highlights: ["Reduced Manual Work", "Faster Operations", "Real-time Sync"],
  },
  {
    id: "ai-systems",
    title: "AI-Ready & Data-Driven Systems",
    icon: Bot,
    image: "/services/web-mobile-new.png",
    desc: "Integrating intelligent data processing and AI capabilities into practical business workflows.",
    includes: [
      "AI Integrations",
      "Analytics Dashboards",
      "Workflow Intelligence",
    ],
    highlights: [
      "Actionable Insights",
      "Predictive Models",
      "Smart Automation",
    ],
  },
  {
    id: "security",
    title: "Security, Performance & Optimization",
    icon: Shield,
    image: "/services/custom-software-new.png",
    desc: "Ensuring your digital assets are fortified against threats and optimized for speed.",
    includes: ["Security Audits", "Load Optimization", "Database Tuning"],
    highlights: [
      "Security by Design",
      "Performance Benchmarks",
      "Risk Mitigation",
    ],
  },
];

export default function CoreServicesDetail() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {details.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:gap-16 items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Text Side */}
              <div className="flex-1">
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                        Includes
                      </h4>
                      <ul className="space-y-3">
                        {service.includes.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-600 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                        Why Anivera
                      </h4>
                      <ul className="space-y-3">
                        {service.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-600 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Visual Side (Abstract/Placeholder for now) */}
              <div className="flex-1 w-full mt-10 lg:mt-0">
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-slate-100 rounded-3xl overflow-hidden border border-gray-100 shadow-xl group hover:shadow-2xl transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Icon Badge */}
                    <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-lg border border-white/20 z-10">
                      <service.icon className="w-7 h-7 text-teal-600" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
