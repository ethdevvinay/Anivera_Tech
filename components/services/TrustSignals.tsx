"use client";

import { ShieldCheck, Layers, BookOpen, Clock, Globe } from "lucide-react";

export default function TrustSignals() {
  const deepTrust = [
    { label: "Secure by Design", icon: ShieldCheck },
    { label: "Scalable Architecture", icon: Layers },
    { label: "Transparent Process", icon: BookOpen },
    { label: "Long-Term Support", icon: Clock },
    { label: "Industry-Agnostic", icon: Globe },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest hidden md:block">
            Trusted by growing businesses
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {deepTrust.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-gray-600 text-sm font-medium hover:border-gray-200 transition-colors"
              >
                <item.icon className="w-4 h-4 text-teal-600" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
