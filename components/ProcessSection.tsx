import { MessageSquare, PenTool, Hammer, LineChart } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      title: "Understand Business Needs",
      description: "We dive deep into your requirements to define clear goals.",
      icon: MessageSquare,
    },
    {
      title: "Design & Architecture",
      description: "Creating a blueprint for scalable and secure systems.",
      icon: PenTool,
    },
    {
      title: "Build & Scale",
      description: "Agile development with clean code and rigorous testing.",
      icon: Hammer,
    },
    {
      title: "Support & Optimize",
      description:
        "Continuous monitoring and improvements for peak performance.",
      icon: LineChart,
    },
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Our Approach
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            A structured workflow designed to reduce risk and maximize value at
            every stage of development.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-blue-800/50 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 bg-surface-dark rounded-full border-4 border-blue-800 flex items-center justify-center mb-6 shadow-xl shadow-black/20 relative z-10 group hover:border-secondary hover:shadow-secondary/20 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-secondary group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-blue-100/80 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
