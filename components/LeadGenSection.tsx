"use client";
import React, { useState } from "react";

const LeadGenSection = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.name.split(" ")[0],
          lastName: formData.name.split(" ").slice(1).join(" ") || "",
          email: formData.email,
          projectType: "General Inquiry",
          message: `Phone: ${formData.phone}\n\n${formData.message}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#0F2A44] to-[#05111D] relative overflow-hidden text-white"
    >
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: CTA Text */}
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight !text-white">
              Let’s Build Something <br />
              <span className="text-secondary">Extraordinary</span> Together
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Ready to transform your business with scalable technology? Share
              your vision with us, and we'll help you bring it to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                  📧
                </span>
                <div>
                  <p className="text-sm text-blue-300">Email Us</p>
                  <a
                    href="mailto:contact@anivera.com"
                    className="text-white font-semibold hover:text-secondary transition-colors"
                  >
                    contact@anivera.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (Option A: Inline) */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-fade-in-up delay-200">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-secondary font-semibold hover:text-primary underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-slate-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-slate-50 focus:bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-slate-50 focus:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all text-gray-900 resize-none placeholder:text-gray-400 bg-slate-50 focus:bg-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-secondary hover:bg-teal-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenSection;
