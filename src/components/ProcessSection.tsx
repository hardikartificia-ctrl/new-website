import { Search, Link2, Zap, TrendingUp } from "lucide-react";
import processImage from "@/assets/process-section.jpg";

export const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Onboarding",
      description: "Deep-dive consultation to understand your business, workflow analysis, team integration, and brand guidelines review.",
    },
    {
      icon: Link2,
      title: "Seamless Integration",
      description: "Your Virtual Assistant becomes your first point of contact, integrates with your tools (Slack, Asana, Monday), and white-label delivery setup.",
    },
    {
      icon: Zap,
      title: "Execution & Delivery",
      description: "Projects assigned to specialized team members, real-time progress tracking, quality control checkpoints, and coordinated delivery.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Regular strategy calls, performance analytics, service expansion recommendations, and process refinement based on feedback.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-highlight">
              HOW WE MAKE THIS WORK FOR YOU
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Your Workflow, Amplified
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              We don't replace your process. We plug into it.
            </p>
          </div>

          <div
            className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-primary/20"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
            <img src={processImage} alt="Our Process" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-6 bg-gradient-to-br from-primary to-primary-light rounded-full shadow-lg">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="mb-2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-primary/30 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-primary/10 rounded-xl max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-semibold text-foreground">
            You stay in control. <span className="text-primary">We handle everything else.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
