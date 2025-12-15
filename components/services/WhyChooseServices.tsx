"use client";

import { CheckCircle2, Star, ShieldCheck, Code } from "lucide-react";

export default function WhyChooseServices() {
  const reasons = [
    {
      title: "Founder-Led Execution",
      desc: "Direct oversight from experienced technical founders.",
      icon: Star,
    },
    {
      title: "Transparent Pricing",
      desc: "Clear costs with no hidden fees or surprises.",
      icon: CheckCircle2,
    },
    {
      title: "Long-Term Partnership",
      desc: "We don't just build; we support your growth.",
      icon: UsersIcon,
    },
    {
      title: "Clean & Secure Code",
      desc: "Enterprise-grade standards from day one.",
      icon: Code,
    },
    {
      title: "Scalable Architecture",
      desc: "Systems built to handle millions of users.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Why Choose Anivera
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine deep technical expertise with a business-first mindset to
            deliver software that truly works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
