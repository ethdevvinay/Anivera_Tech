"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Cloud,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Building2,
  Factory,
  Truck,
  Home,
  Plane,
  Megaphone,
  Phone,
  Search,
  Zap,
  Hammer,
  FlaskConical,
  Scale,
  Users,
  ShieldCheck,
  Database,
  Rocket,
  Cpu,
  Server,
  Code2,
  LandPlot,
  Ship,
  Clapperboard,
  Anchor,
  Wallet,
  ArrowRight,
} from "lucide-react";

// Categorized Data
const allIndustries = [
  {
    category: "Core Industries",
    items: [
      {
        name: "Information Technology",
        icon: Cpu,
        desc: "Driving digital transformation with cutting-edge IT infrastructure.",
      },
      {
        name: "SaaS & Cloud Platforms",
        icon: Cloud,
        desc: "Scalable cloud-native solutions for modern software businesses.",
      },
      {
        name: "Startups",
        icon: Rocket,
        desc: "Agile MVPs and growth-focused tech for emerging disruptors.",
      },
      {
        name: "Enterprises",
        icon: Briefcase,
        desc: "Robust, secure, and scalable systems for large-scale operations.",
      },
      {
        name: "Retail & E-Commerce",
        icon: ShoppingBag,
        desc: "Omnichannel experiences and seamless payment integrations.",
      },
      {
        name: "Education & EdTech",
        icon: GraduationCap,
        desc: "Interactive learning platforms and administrative management systems.",
      },
      {
        name: "Healthcare & HealthTech",
        icon: HeartPulse,
        desc: "HIPAA-compliant software for patient care and medical data.",
      },
      {
        name: "FinTech & Banking",
        icon: Wallet,
        desc: "Secure transaction processing and financial analytics dashboards.",
      },
      {
        name: "Manufacturing",
        icon: Factory,
        desc: "Industry 4.0 automation and supply chain optimization tools.",
      },
      {
        name: "Logistics",
        icon: Truck,
        desc: "Real-time fleet tracking and intelligent route planning.",
      },
    ],
  },
  {
    category: "Extended Coverage",
    items: [
      {
        name: "Real Estate",
        icon: Home,
        desc: "Property management portals and virtual tour integrations.",
      },
      {
        name: "Travel & Hospitality",
        icon: Plane,
        desc: "Booking engines and guest experience management systems.",
      },
      {
        name: "Media & Marketing",
        icon: Megaphone,
        desc: "AdTech platforms and content management systems (CMS).",
      },
      {
        name: "Telecom",
        icon: Phone,
        desc: "Network management tools and customer self-service portals.",
      },
      {
        name: "Professional Services",
        icon: Search,
        desc: "Custom CRM and project management for service providers.",
      },
      {
        name: "Energy & Utilities",
        icon: Zap,
        desc: "Smart grid monitoring and energy consumption analytics.",
      },
      {
        name: "Construction",
        icon: Hammer,
        desc: "Project planning and resource allocation software.",
      },
      {
        name: "Life Sciences",
        icon: FlaskConical,
        desc: "Lab information systems and research data management.",
      },
      {
        name: "Legal & Compliance",
        icon: Scale,
        desc: "Case management and automated compliance reporting.",
      },
      {
        name: "HR & HRTech",
        icon: Users,
        desc: "Recruitment portals, payroll, and employee engagement tools.",
      },
      {
        name: "Cybersecurity",
        icon: ShieldCheck,
        desc: "Threat detection systems and security operations platforms.",
      },
      {
        name: "IoT & Smart Systems",
        icon: Database,
        desc: "Connected device networking and data ingestion pipelines.",
      },
    ],
  },
];

export default function IndustryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Core Industries", "Extended Coverage"];

  const displayedIndustries =
    activeCategory === "All"
      ? allIndustries.flatMap((section) => section.items)
      : allIndustries.find((c) => c.category === activeCategory)?.items || [];

  return (
    <section id="industries-grid" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-100 px-3 py-1 rounded-full">
              Diverse Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mt-6 mb-6">
              Tailored Soltuions for <br /> Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the nuances of your sector. Our technology is built
              to address specific challenges and unlock new opportunities.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                  : "bg-white text-slate-600 border-gray-200 hover:border-slate-400 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedIndustries.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.name}
                className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100/50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Don't see your industry?</p>
          <a
            href="/contact"
            className="inline-flex items-center text-blue-600 font-bold hover:underline"
          >
            Contact us for a custom solution{" "}
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
