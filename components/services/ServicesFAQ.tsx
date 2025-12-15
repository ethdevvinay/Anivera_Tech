"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faqs = [
  {
    question: "How do you estimate project costs?",
    answer:
      "We provide detailed estimations based on project scope, complexity, and timeline. For defined projects, we offer fixed-price quotes. For evolving products, we recommend a time-and-materials or dedicated team model for maximum flexibility.",
  },
  {
    question: "Do you maintain code ownership?",
    answer:
      "Yes, 100%. Upon final payment, you own the full intellectual property (IP), source code, and assets. We ensure a clean handover with no vendor lock-in.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely. We work with ambitious startups to build MVPs, scale products, and prepare for investment rounds. Our agile approach fits perfectly with the fast-paced startup environment.",
  },
  {
    question: "Can you scale existing systems?",
    answer:
      "Yes. We specialize in legacy modernization and refactoring. We audit your current architecture, identify bottlenecks, and implement solutions to improve performance and scalability without disrupting operations.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "We offer various support packages, including SLA-based maintenance, security patching, and feature enhancements to ensure your software remains healthy and competitive.",
  },
  {
    question: "How do you ensure security?",
    answer:
      "Security is integral to our process. We follow OWASP best practices, conduct code reviews, implement automated security testing, and ensure compliance with relevant data protection regulations (GDPR, HIPAA, etc.).",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Answers to common questions about our services and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
