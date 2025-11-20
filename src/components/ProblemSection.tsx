import { X } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "You're turning down profitable projects because your team is maxed out",
    "Client deadlines are crushing you, and quality is slipping",
    "Hiring is too expensive, too slow, and too risky",
    "You're doing design work instead of growing your business",
    "Your margins are shrinking because you can't scale efficiently",
    "Freelancers are unreliable, and local agencies are overpriced",
    "You're juggling too many tools, vendors, and headaches",
  ];

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-highlight"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            Does This Sound Familiar?
          </h2>
          
          <div className="space-y-4 mb-10">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-sm hover-lift border border-border/50 hover:border-destructive/50 transition-all duration-300"
                data-aos="fade-right"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <p className="text-base md:text-lg text-foreground">{problem}</p>
              </div>
            ))}
          </div>
          
          <div 
            className="text-center p-8 bg-background rounded-xl shadow-lg border-2 border-primary/30"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
              Here's the truth: <strong className="text-primary-light drop-shadow-[0_0_10px_rgba(79,136,73,0.6)]">Your competitors are already outsourcing.</strong> They're winning bigger contracts, delivering faster, and sleeping better at night.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow-[0_0_15px_rgba(79,136,73,0.6)]">
              You should too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
