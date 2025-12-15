"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    role: "Senior Full Stack Engineer",
    dept: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    role: "Product Designer (UI/UX)",
    dept: "Design",
    location: "New York, NY / Remote",
    type: "Full-time",
  },
  {
    role: "DevOps Engineer",
    dept: "Engineering",
    location: "London, UK",
    type: "Full-time",
  },
  {
    role: "Marketing Manager",
    dept: "Growth",
    location: "Remote",
    type: "Contract",
  },
];

export default function OpenPositions() {
  return (
    <section id="open-positions" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
            Open Positions
          </h2>
          <p className="text-lg text-gray-600">
            Ready to make an impact? Check out our current openings.
          </p>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {job.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-700">
                    {job.dept}
                  </span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 text-white font-medium group-hover:bg-blue-600 transition-colors shrink-0"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 border border-blue-100 rounded-xl p-8">
          <h4 className="text-xl font-bold text-slate-900 mb-2">
            Don't see the right fit?
          </h4>
          <p className="text-gray-600 mb-6">
            We are always looking for talent. Send us your CV and we'll keep you
            in mind.
          </p>
          <Link
            href="/contact"
            className="text-blue-600 font-bold hover:underline"
          >
            Send Spontaneous Application
          </Link>
        </div>
      </div>
    </section>
  );
}
