import { Server, Database, Lock, Zap } from "lucide-react";

const TechArchitecture = () => {
  const techPoints = [
    {
      title: "Cloud-Ready",
      icon: Server,
      desc: "Deployed on AWS, Azure, or Google Cloud for maximum availability.",
    },
    {
      title: "Secure APIs",
      icon: Lock,
      desc: "OAuth2.0 & JWT implemented standards for secure data exchange.",
    },
    {
      title: "Scalable Systems",
      icon: Database,
      desc: "Microservices architecture that grows with your user base.",
    },
    {
      title: "High Performance",
      icon: Zap,
      desc: "Optimized via Edge Computing and CDN for lightning-fast load times.",
    },
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Technology & Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-6 leading-tight">
              Built for Speed, Security, and Scale.
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Our engineering stack is rigorous. We use battle-tested
              technologies to ensure your platform is robust from Day 1.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <point.icon className="w-8 h-8 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{point.title}</h4>
                    <p className="text-sm text-gray-400">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Representation */}
          <div className="relative h-[400px] bg-gradient-to-tr from-blue-900 to-primary rounded-2xl border border-blue-700/50 p-8 flex items-center justify-center shadow-2xl animate-float">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              {/* Abstract Lines */}
              <div className="w-[120%] h-[1px] bg-secondary rotate-45 absolute"></div>
              <div className="w-[120%] h-[1px] bg-secondary -rotate-45 absolute"></div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-6xl font-bold text-white mb-2">99.9%</div>
              <div className="text-secondary font-medium">
                Uptime Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
