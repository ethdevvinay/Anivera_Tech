"use client";

import { Lock, FileText, UserCheck, Shield } from "lucide-react";

export default function ServicesSecurity() {
  const items = [
    {
      title: "Secure Development",
      desc: "OWASP Top 10 compliance baked into every line of code.",
      icon: Shield,
    },
    {
      title: "Data Protection",
      desc: "End-to-end encryption for sensitive data at rest and in transit.",
      icon: Lock,
    },
    {
      title: "Access Control",
      desc: "Strict role-based access control (RBAC) and MFA implementation.",
      icon: UserCheck,
    },
    {
      title: "Comprehensive Documentation",
      desc: "Full architectural and security documentation for compliance.",
      icon: FileText,
    },
  ];

  return (
    <section className="py-20 bg-[#0B1221] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs mb-2 block">
              Security First
            </span>
            <h2 className="text-3xl font-bold font-heading mb-6 !text-white">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We don't treat security as an afterthought. It is integrated into
              our development lifecycle, ensuring your software is audit-ready
              and resilient against threats.
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-5 h-5 text-teal-400" />
                  <h3 className="font-bold text-lg !text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
