const TechStackSection = () => {
  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "Google Cloud",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Tailwind CSS",
    "GraphQL",
  ]; // Add actual logos if available later

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-gray-400 font-semibold uppercase tracking-widest text-xs">
          Powering Solutions With Modern Tech
        </span>
      </div>

      {/* Marquee Effect */}
      <div className="relative flex overflow-x-hidden group py-4 bg-surface rounded-xl mx-4">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default font-heading mx-4"
            >
              {tech}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {technologies.map((tech, index) => (
            <span
              key={`dup-${index}`}
              className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default font-heading mx-4"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex gap-12 items-center">
          {technologies.map((tech, index) => (
            <span
              key={`dup2-${index}`}
              className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default font-heading mx-4"
            >
              {tech}
            </span>
          ))}
          {technologies.map((tech, index) => (
            <span
              key={`dup3-${index}`}
              className="text-2xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default font-heading mx-4"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
