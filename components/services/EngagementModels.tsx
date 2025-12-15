"use client";

import { Check, Clock, Users, Zap } from "lucide-react";

const models = [
  {
    title: "Fixed Scope Projects",
    desc: "Best for well-defined requirements and clear deliverables.",
    icon: Check,
    features: ["Defined timeline", "Fixed budget", "Specific deliverables"],
  },
  {
    title: "Dedicated Team",
    desc: "Extension of your internal team for long-term development.",
    icon: Users,
    features: ["Full control", "Scalable resources", "Direct communication"],
  },
  {
    title: "Long-Term Retainer",
    desc: "Ongoing support and maintenance for existing systems.",
    icon: Clock,
    features: ["Priority support", "Regular updates", "Monthly hours"],
  },
  {
    title: "Consulting & Audit",
    desc: "Expert advice on architecture, security, and strategy.",
    icon: Zap,
    features: ["Architecture review", "Security audit", "Tech strategy"],
  },
];

export default function EngagementModels() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We adapt to your business needs, offering flexible partnership
            structures designed for transparency and results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-teal-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <model.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {model.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                {model.desc}
              </p>
              <ul className="space-y-3">
                {model.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
