import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroCover from "@/assets/hero-cover.jpg";

export const Hero = () => {
  return (
    <section className="overflow-hidden">
      {/* Hero Image */}
      <div className="w-full h-[360px] md:h-[450px] lg:h-[540px]">
        <img src={heroCover} alt="AI-Powered Business Solutions" className="w-full h-full object-cover" />
      </div>

      {/* Hero Content */}
      <div className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 text-highlight drop-shadow-[0_0_30px_rgba(207,233,38,0.5)]"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              Your Design Partner That Never Sleeps
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Scale Your Agency Without Hiring. Deliver More. Earn More. Stress Less.
            </p>

            {/* Secondary headline */}
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-highlight mb-6"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Stop Turning Down Projects. Start Scaling Smart.
            </h2>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Your agency deserves a partner that moves at your speed—without the overhead.
            </p>

            <p
              className="text-base md:text-lg text-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <strong>Popey AI Business Solutions</strong> delivers AI-powered design, video, automation, and dedicated support services from India to agencies, printers, and businesses across the <strong>USA, UK, Australia, Europe, Middle East, and Singapore</strong>.
            </p>

            {/* Value props */}
            <div
              className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base font-medium"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-5 w-5 text-primary drop-shadow-[0_0_10px_rgba(207,233,38,0.8)]" />
                <span>24/7 turnaround</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-5 w-5 text-primary drop-shadow-[0_0_10px_rgba(207,233,38,0.8)]" />
                <span>Your brand, our execution</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-5 w-5 text-primary drop-shadow-[0_0_10px_rgba(207,233,38,0.8)]" />
                <span>One partner, complete solutions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg hover-lift"
                asChild
              >
                <a href="#contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                asChild
              >
                <a href="#packages">Get Custom Quote</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold"
                asChild
              >
                <a href="#services">View Our Work</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              className="pt-8 border-t border-primary/30"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                Trusted by <strong className="text-primary-light drop-shadow-[0_0_10px_rgba(207,233,38,0.6)]">200+ agencies</strong> in <strong className="text-primary-light drop-shadow-[0_0_10px_rgba(207,233,38,0.6)]">15 countries</strong> | <strong className="text-primary-light drop-shadow-[0_0_10px_rgba(207,233,38,0.6)]">50,000+ projects</strong> delivered | Your invisible growth team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
