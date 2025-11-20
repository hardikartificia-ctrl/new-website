import { CheckCircle2 } from "lucide-react";
import solutionImage from "@/assets/problem-solution.jpg";

export const SolutionSection = () => {
  const benefits = [
    "Accept every project that comes your way",
    "Deliver 3x faster with AI-enhanced workflows",
    "Cut costs by up to 70% compared to local hiring",
    "Scale instantly without recruitment headaches",
    "Focus on what you do best: strategy, clients, and growth",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div
            className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-primary/20 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
            <img src={solutionImage} alt="AI Automation Solutions" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left mb-8">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-highlight"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                YOUR SOLUTION: POPEY AI BUSINESS SOLUTIONS
              </h2>
              <p
                className="text-xl md:text-2xl font-semibold text-primary-light mb-4 drop-shadow-[0_0_10px_rgba(79,136,73,0.6)]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We're Not Just a Service Provider. We're Your Secret Weapon.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-primary/10 to-primary-light/5 p-8 rounded-2xl shadow-lg border border-primary/30 mb-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p
                className="text-lg md:text-xl text-foreground leading-relaxed mb-8"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Popey AI Business Solutions is your invisible creative team—powered by cutting-edge AI and staffed by elite designers, editors, automation specialists, and dedicated project managers based in India.
              </p>

              <p
                className="text-lg font-semibold text-foreground mb-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                We integrate seamlessly into your workflow so you can:
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
                    data-aos="fade-left"
                    data-aos-delay={800 + index * 100}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary-light flex-shrink-0 mt-1 drop-shadow-[0_0_10px_rgba(79,136,73,0.8)]" />
                    <p className="text-base md:text-lg text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="text-center lg:text-left p-8 bg-primary/10 rounded-xl border-2 border-primary/50 shadow-lg shadow-primary/20"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <p className="text-xl md:text-2xl font-bold text-foreground">
                We handle the execution. <span className="text-primary-light drop-shadow-[0_0_15px_rgba(79,136,73,0.8)]">You take the credit.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
