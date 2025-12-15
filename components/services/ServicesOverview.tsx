"use client";

import {
  Code2,
  Rocket,
  Smartphone,
  Cloud,
  RefreshCcw,
  Bot,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Custom Software Development",
    icon: Code2,
    href: "#custom-software",
  },
  {
    title: "SaaS Product Engineering",
    icon: Rocket,
    href: "#saas-engineering",
  },
  {
    title: "Web & Mobile Applications",
    icon: Smartphone,
    href: "#web-mobile",
  },
  {
    title: "Cloud & DevOps Solutions",
    icon: Cloud,
    href: "#cloud-devops",
  },
  {
    title: "Automation & Integrations",
    icon: RefreshCcw,
    href: "#automation",
  },
  {
    title: "AI-Ready Systems",
    icon: Bot,
    href: "#ai-systems",
  },
  {
    title: "Security & Optimization",
    icon: Shield,
    href: "#security",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Comprehensive Capabilities
          </h2>
          <p className="text-gray-600">
            We cover the entire digital lifecycle, from initial concept and
            architecture to deployment and scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal-500/30 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>
              <div className="mt-auto flex items-center text-sm text-gray-500 font-medium group-hover:text-teal-600 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
