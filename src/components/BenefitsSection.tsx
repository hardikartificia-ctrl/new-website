import { Rocket, DollarSign, Bot, Globe, Repeat, Users, Clock, Shield, Target } from "lucide-react";
import benefitsImage from "@/assets/benefit-section.jpg";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Speed That Shocks Clients",
      description: "Our AI-enhanced workflows deliver in days what used to take weeks. Rush projects? We've got protocols for that.",
    },
    {
      icon: DollarSign,
      title: "Economics That Make Sense",
      description: "World-class talent at India pricing. Your margins improve while your quality increases.",
    },
    {
      icon: Bot,
      title: "AI-Enhanced Quality",
      description: "We use the latest AI tools to eliminate tedious work, so our specialists focus on perfection, not repetition.",
    },
    {
      icon: Globe,
      title: "Global Standards, Local Economics",
      description: "We understand Western design sensibilities, communication styles, and business practices—at a fraction of the cost.",
    },
    {
      icon: Repeat,
      title: "Flexibility Without Compromise",
      description: "Need 10 projects this month and 50 next month? We scale with you, no questions asked.",
    },
    {
      icon: Users,
      title: "White-Label Ready",
      description: "We're invisible. Your clients never know we exist. It's your brand. Your win. Your reputation.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Time zones work in your favor. While you sleep, we're creating. 24/7 support available.",
    },
    {
      icon: Shield,
      title: "NDA Protection & Confidentiality",
      description: "Your clients' projects are sacred. We sign NDAs and operate under strict confidentiality.",
    },
    {
      icon: Target,
      title: "Your Success = Our Success",
      description: "We don't just complete tasks—we become strategic partners invested in your growth.",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-highlight">
              WHY AGENCIES CHOOSE POPEY AI
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              "We're Not Just Cheaper. We're Better."
            </p>
          </div>

          <div
            className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-primary/20"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
            <img src={benefitsImage} alt="Benefits of AI Solutions" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-background to-muted/20 rounded-xl shadow-md hover-lift border border-border/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
