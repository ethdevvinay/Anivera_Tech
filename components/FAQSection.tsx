"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What industries do you serve?",
      answer:
        "We are industry-agnostic. While we have deep expertise in Retail, Healthcare, and Logistics, our core strength lies in building scalable technology that solves complex problems, regardless of the sector.",
    },
    {
      question: "Do you build custom SaaS platforms?",
      answer:
        "Yes, specializes in building multi-tenant SaaS architectures. We handle everything from the initial database design to subscription management and secure user authentication.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply use the contact form below or book a consultation call. We usually start with a discovery phase to understand your business goals before proposing a technical roadmap.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. We view ourselves as long-term partners. We offer maintenance packages, performance monitoring, and iterative feature development to ensure your software continually evolves.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Common questions about working with Anivera.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
              >
                <span
                  className={`font-semibold text-lg ${
                    openIndex === index ? "text-secondary" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-secondary" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
