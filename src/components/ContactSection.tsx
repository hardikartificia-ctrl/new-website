import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, CheckCircle2, ArrowRight, X } from "lucide-react";

export const ContactSection = () => {
  const callBenefits = [
    "Your current workflow and bottlenecks",
    "Your growth goals for the next 6-12 months",
    "How we can become your invisible growth partner",
    "A custom package designed specifically for your needs",
    "Real examples of work we've done for similar agencies",
  ];

  const waitCosts = [
    "Turned-down projects",
    "Stressed team members",
    "Compressed margins",
    "Missed growth opportunities",
  ];

  const partnerBenefits = [
    "Accepted opportunities",
    "Happy clients and team",
    "Healthy profit margins",
    "Sustainable growth",
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary/5 via-primary-light/5 to-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-highlight">
              READY TO SCALE YOUR AGENCY?
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-highlight mb-8">
              Book Your Free Strategy Call
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Let's spend 30 minutes discussing:
            </p>
          </div>

          {/* Benefits list */}
          <div className="bg-background p-8 rounded-2xl shadow-lg mb-10">
            <div className="space-y-4 mb-8">
              {callBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-lg font-semibold text-muted-foreground mb-6">
              No sales pressure. No generic pitches. Just honest conversation and smart solutions.
            </p>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-primary hover:bg-primary-dark text-primary-foreground font-bold shadow-xl hover-lift"
              >
                Book Your Strategy Call Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-muted/50 p-8 rounded-2xl mb-12">
            <p className="text-center text-lg font-semibold mb-6">Or reach out directly:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:business@popeyai.com"
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover-lift"
              >
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">business@popeyai.com</p>
                </div>
              </a>
              <a 
                href="https://wa.me/919104488859"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-background rounded-lg hover-lift"
              >
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+91 9104488859</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-sm text-muted-foreground">Vadodara, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Serving</p>
                  <p className="text-sm text-muted-foreground">USA | UK | Australia | Europe | Middle East | Singapore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Thought */}
          <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 p-8 md:p-12 rounded-2xl border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              ONE FINAL THOUGHT
            </h3>
            <h4 className="text-xl md:text-2xl font-bold text-primary text-center mb-6">
              Your Competitors Are Already Outsourcing
            </h4>
            <p className="text-base md:text-lg text-center mb-8 leading-relaxed">
              The agencies winning bigger contracts, delivering faster, and scaling effortlessly aren't doing it alone.
            </p>
            <p className="text-base md:text-lg text-center mb-8 leading-relaxed">
              They have secret weapons—teams like <strong>Popey AI</strong>—working behind the scenes to multiply their capacity without multiplying their costs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background/80 p-6 rounded-xl">
                <p className="text-lg font-bold mb-4">Every day you wait is a day of:</p>
                <div className="space-y-2">
                  {waitCosts.map((cost, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base">{cost}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary">
                <p className="text-lg font-bold mb-4">Every day you partner with us is a day of:</p>
                <div className="space-y-2">
                  {partnerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm md:text-base">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg md:text-xl mb-4">
                You can keep struggling to do everything in-house.
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary mb-6">
                Or you can start scaling smart.
              </p>
              <p className="text-2xl md:text-3xl font-extrabold">
                The choice is yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
