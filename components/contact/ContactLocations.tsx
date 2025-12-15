"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

const hubs = [
  {
    city: "San Francisco",
    address: "100 Market Street, Suite 500, San Francisco, CA 94105",
    type: "Headquarters",
  },
  {
    city: "London",
    address: "25 Canada Square, Canary Wharf, London E14 5LQ",
    type: "European Hub",
  },
  {
    city: "Singapore",
    address: "10 Bayfront Avenue, Marina Bay Sands, Singapore 018956",
    type: "APAC Hub",
  },
];

export default function ContactLocations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Global Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We operate globally, with key hubs in major technology centers to
            serve our international client base.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/contact/office-intro.png"
              alt="Anivera Office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="font-bold text-lg">Our HQ</div>
              <div className="text-sm opacity-80">
                Designed for collaboration
              </div>
            </div>
          </motion.div>

          {/* List */}
          <div className="space-y-6">
            {hubs.map((hub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {hub.city}
                  </h3>
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded mb-2">
                    {hub.type}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {hub.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
