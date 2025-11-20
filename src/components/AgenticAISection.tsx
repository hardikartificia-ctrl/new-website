import { useState } from "react";
import { Bot, Zap, DollarSign, TrendingUp, Search, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "./ConsultationDialog";

export const AgenticAISection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const automationAreas = [
    "Sales pipeline & lead management",
    "Customer onboarding journeys",
    "Marketing campaigns & social media",
    "24/7 customer support chatbots",
    "HR, finance & invoicing workflows",
    "Content creation & research bots",
    "Multi-platform integrations & APIs",
  ];

  const benefits = [
    "Save up to 60% of workforce time",
    "Triple your project velocity",
    "Zero operational errors",
    "24/7 automated operations",
    "Instant ROI with affordable pricing",
  ];

  return (
    <section id="agentic-ai" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
      <div className="container-custom relative">
        <div 
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-highlight">
            Agentic AI Automation & AEO Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with ready-to-deploy intelligent AI agents. Automate workflows, boost productivity, 
            and scale at India's most affordable prices—designed for rapid ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* AI Agent Automation */}
          <Card 
            className="border-2 border-border/50 hover:border-primary/80 transition-all duration-300 bg-card/80 backdrop-blur-sm shadow-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Bot className="h-8 w-8 text-primary-light" />
                </div>
                <div>
                  <CardTitle className="text-2xl">AI Agent Automation</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Deploy pre-built intelligent workflows
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">We Automate:</h3>
                <ul className="space-y-2">
                  {automationAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Pricing Options:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Prebuilt Pack</p>
                      <p className="text-sm text-muted-foreground">25 AI agents ready to deploy</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$299</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-highlight/5 rounded-lg border border-highlight/30">
                    <div>
                      <p className="font-medium text-foreground">Lifetime Support</p>
                      <p className="text-sm text-muted-foreground">Ongoing updates & optimization</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$442</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Custom Build</p>
                      <p className="text-sm text-muted-foreground">Tailored enterprise solutions</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$899+</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AEO Services */}
          <Card 
            className="border-2 border-border/50 hover:border-primary/80 transition-all duration-300 bg-card/80 backdrop-blur-sm shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Search className="h-8 w-8 text-primary-light" />
                </div>
                <div>
                  <CardTitle className="text-2xl">AEO Services</CardTitle>
                  <CardDescription className="text-base mt-1">
                    AI-Enhanced SEO + Answer Engine Optimization
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Dominate ChatGPT, Gemini, Perplexity, Claude, and traditional search rankings. Future-proof your business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Get featured in AI-generated responses</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Schema markup & rich snippets</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Conversational query optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Full technical & content audit</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Monthly Packages:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Starter</p>
                      <p className="text-sm text-muted-foreground">Essential AEO setup</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$399/mo</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-highlight/5 rounded-lg border border-highlight/30">
                    <div>
                      <p className="font-medium text-foreground">Growth</p>
                      <p className="text-sm text-muted-foreground">Advanced optimization</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$799/mo</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Enterprise</p>
                      <p className="text-sm text-muted-foreground">Complete AEO dominance</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$1,499/mo</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/30">
                    <div>
                      <p className="font-medium text-foreground">Prebuilt Pack</p>
                      <p className="text-sm text-muted-foreground">One-time setup package</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$599</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-highlight/5 rounded-lg border border-highlight/30">
                    <div>
                      <p className="font-medium text-foreground">Lifetime Support</p>
                      <p className="text-sm text-muted-foreground">Continuous updates</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$899</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Custom Build</p>
                      <p className="text-sm text-muted-foreground">Tailored AEO strategy</p>
                    </div>
                    <p className="text-xl font-bold text-highlight">$1,299+</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="text-center space-y-6 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-highlight mb-3">
              Ready to Scale Your Business?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book a free 30-minute strategy call to discover which AI agents and AEO tactics will give you the biggest ROI—fast.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg hover-lift"
              onClick={() => setIsDialogOpen(true)}
            >
              <Zap className="mr-2 h-5 w-5" />
              Book Strategy Call
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <a href="#packages">
                <DollarSign className="mr-2 h-5 w-5" />
                View All Packages
              </a>
            </Button>
          </div>
        </div>

        <ConsultationDialog 
          open={isDialogOpen} 
          onOpenChange={setIsDialogOpen} 
        />
      </div>
    </section>
  );
};
