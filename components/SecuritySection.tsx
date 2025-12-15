import { Shield, Lock, FileCheck } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-white to-blue-50/50">
        <div className="flex-shrink-0 animate-pulse-slow relative">
          <Shield className="w-24 h-24 text-secondary/20" />
          <Lock className="w-12 h-12 text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold font-heading text-primary mb-3 flex items-center justify-center md:justify-start gap-2">
            <FileCheck className="w-6 h-6 text-secondary" />
            Security by Design
          </h3>
          <p className="text-gray-600 mb-6">
            Security isn't an afterthought; it's our baseline. We implement
            strict data protection standards, secure SDLC practices, and regular
            vulnerability assessments to keep your business safe.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {[
              "GDPR Compliant",
              "OWASP Top 10",
              "Encrypted Data",
              "Secure SDLC",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
