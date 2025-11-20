import { Palette, Video, Cog, HeadphonesIcon, Briefcase, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import servicesImage from "@/assets/services-section.jpg";

export const ServicesPackagesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "AI-Powered Graphic Design & Outsourcing",
      subtitle: "Every Design Asset Your Agency Needs—Delivered Flawlessly, On Time, Every Time",
      description: "Your clients demand perfection. Your deadlines demand speed. We deliver both.",
      features: [
        "Brand Identity & Logo Design",
        "Print Design (Print-Ready Perfection)",
        "Marketing Collateral & Digital Assets",
        "Specialized Design Services",
        "AI-Powered Creative Automation",
      ],
    },
    {
      icon: Video,
      title: "AI-Powered Video Creation, Editing & Animation",
      subtitle: "From Concept to Final Render—We Turn Your Vision Into Scroll-Stopping Video Content",
      description: "Video drives results. We make it effortless for you to deliver.",
      features: [
        "Video Production & Editing",
        "Social Media & Short-Form Content",
        "Explainer & Product Videos",
        "Motion Graphics & Animation",
        "Advanced Animation Services",
      ],
    },
    {
      icon: Cog,
      title: "AI-Powered Automation & Workflows",
      subtitle: "Work Smarter, Not Harder—We Automate the Boring Stuff So You Can Focus on Growth",
      description: "Stop wasting time on repetitive tasks. Let AI do the heavy lifting.",
      features: [
        "Custom AI Chatbots & Customer Support",
        "Business Process Automation",
        "AI-Powered Data & Analytics",
        "Marketing Automation & Lead Generation",
        "Integration & Deployment",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Virtual Assistant Services",
      subtitle: "Your 24/7 Operations Manager—So You Can Finally Stop Managing Projects and Start Growing Your Business",
      description: "The secret weapon that makes everything else work seamlessly.",
      features: [
        "Client Communication & Project Coordination",
        "Administrative & Operational Support",
        "Creative Brief Management",
        "Quality Control & Delivery Coordination",
        "Strategic Support & Business Growth",
      ],
    },
    {
      icon: Palette,
      title: "DESIGN-FOCUSED PACKAGE",
      subtitle: "Perfect for: Design agencies, branding studios, creative shops",
      description: "Typical includes:",
      features: [
        "Graphic design services (logos, print, marketing materials)",
        "Dedicated Virtual Assistant for project coordination",
        "Client communication and deadline management",
        "File organization and delivery coordination",
      ],
    },
    {
      icon: Video,
      title: "VIDEO-FOCUSED PACKAGE",
      subtitle: "Perfect for: Video production agencies, content creators, social media agencies",
      description: "Typical includes:",
      features: [
        "Video editing and motion graphics services",
        "Social media content creation",
        "Dedicated Virtual Assistant for workflow management",
        "Content scheduling and platform coordination",
      ],
    },
    {
      icon: Cog,
      title: "AUTOMATION-FOCUSED PACKAGE",
      subtitle: "Perfect for: Marketing agencies, tech companies, efficiency-driven businesses",
      description: "Typical includes:",
      features: [
        "AI automation setup and deployment",
        "Process optimization and workflow integration",
        "Dedicated Virtual Assistant for operations management",
        "Ongoing automation monitoring and support",
      ],
    },
    {
      icon: Briefcase,
      title: "FULL-SERVICE PACKAGE",
      subtitle: "Perfect for: Growing agencies, multi-service shops, ambitious businesses",
      description: "Typical includes:",
      features: [
        "Complete graphic design services",
        "Full video production and editing",
        "AI automation and intelligent workflow systems",
        "Dedicated Virtual Assistant for end-to-end management",
        "Priority support and expedited turnaround",
      ],
    },
    {
      icon: Building,
      title: "ENTERPRISE CUSTOM SOLUTION",
      subtitle: "Perfect for: Large agencies, franchises, corporations with complex needs",
      description: "Typical includes:",
      features: [
        "Fully customized service mix",
        "Dedicated team of specialists (5-10 people)",
        "White-label branding and delivery systems",
        "Direct integration with your internal systems",
        "SLA agreements and guaranteed response times",
        "Executive-level strategic consultation",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className="text-center lg:text-left"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-highlight">
              SERVICES
            </h2>
            <p className="text-xl md:text-2xl text-primary-light font-semibold drop-shadow-[0_0_10px_rgba(79,136,73,0.6)]">
              Your Complete Creative & Operational Solution
            </p>
          </div>

          <div
            className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-primary/20"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10"></div>
            <img src={servicesImage} alt="AI Services" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift border-2 border-border/50 hover:border-primary/80 transition-all duration-300 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shadow-inner">
                    <service.icon className="h-8 w-8 text-primary-light drop-shadow-[0_0_10px_rgba(79,136,73,0.6)]" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-lg font-semibold text-foreground">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-primary/10 rounded-xl max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-semibold text-foreground">
            Your clients see agency-grade work. <span className="text-primary">You see profit margins that finally make sense.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
