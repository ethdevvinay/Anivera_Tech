import { Box, Layers, PlayCircle } from "lucide-react";

const ProductReadiness = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
          Future-Proof
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mt-2 mb-4">
          Built for Scale
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We don't just build websites; we build platforms. Our architecture is
          designed to support multi-tenant SaaS products from the ground up,
          positioning you for future growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Modular Design",
              desc: "Add new features as micro-apps without breaking the core system.",
              icon: Box,
            },
            {
              title: "Multi-Tenant Ready",
              desc: "Architecture supports multiple organizations or users safely separated.",
              icon: Layers,
            },
            {
              title: "API-First Approach",
              desc: "Ready for mobile apps, 3rd party integrations, and AI agents.",
              icon: PlayCircle,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReadiness;
