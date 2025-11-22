import { useState } from "react";
import { Palette, Video, Cog, HeadphonesIcon, Briefcase, Building, Target, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import servicesImage from "@/assets/services-section.jpg";

export const ServicesSection = () => {
    const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

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
            icon: Target,
            title: "AI-Powered Lead Generation",
            subtitle: "Fill Your Pipeline with High-Quality Leads—Automatically",
            description: "Stop chasing cold leads and start attracting qualified prospects who are ready to buy.",
            price: "$199/month",
            features: [
                "AI-Powered Lead Qualification",
                "Multi-Channel Campaign Management",
                "Instant Lead Nurturing & Chatbots",
                "Real-Time Analytics & Reporting",
                "Smart CRM Integration",
            ],
        },
        {
            icon: Search,
            title: "AEO Services (Answer Engine Optimization)",
            subtitle: "Dominate AI-Powered Search Results & Answer Engines",
            description: "Get featured in ChatGPT, Gemini, Perplexity, and Claude responses.",
            pricingTiers: [
                { name: "Starter", price: "$99 / £79 / AUD 149/mo" },
                { name: "Growth", price: "$199 / £159 / AUD 299/mo" },
                { name: "Kickstart", price: "$599–$749 one-time" },
            ],
            features: [
                "AI-Enhanced SEO + Answer Engine Optimization",
                "Schema Markup & Rich Snippets",
                "Citation Tracking Across AI Platforms",
                "Competitor AI Citation Analysis",
                "Authoritative Guest Posts & Backlinks",
            ],
        },
    ];

    const packages = [
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
            pricing: {
                basic: "$199/month",
                standard: "$349/month",
                premium: "$599/month",
                details: "Includes up to 40 design requests per month, 2-day turnaround, and dedicated account manager.",
            },
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
            pricing: {
                basic: "$199/month",
                standard: "$349/month",
                premium: "$599/month",
                details: "Includes up to 30 video projects per month, same-day edits for urgent content, and priority support.",
            },
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
            pricing: {
                basic: "$199/month",
                standard: "$349/month",
                premium: "$599/month",
                details: "Includes custom automation workflows, API integrations, and 24/7 monitoring with monthly optimization reports.",
            },
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
            pricing: {
                basic: "$199/month",
                standard: "$349/month",
                premium: "$599/month",
                details: "All-inclusive package with unlimited revisions, 24-hour turnaround, and dedicated team of 3-5 specialists.",
            },
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
            pricing: {
                basic: "Custom Pricing",
                standard: "Starting at $20,000/month",
                premium: "Contact for Quote",
                details: "Enterprise solutions are tailored to your specific needs. Includes dedicated account executive, custom SLAs, and white-label options.",
            },
        },
        {
            icon: Target,
            title: "LEAD GENERATION PACKAGE",
            subtitle: "Perfect for: Businesses looking to scale their customer acquisition",
            description: "Typical includes:",
            features: [
                "AI-powered lead qualification system",
                "Multi-channel campaign setup (Email, Social, Paid Ads)",
                "Automated lead nurturing sequences",
                "CRM integration and management",
                "Real-time analytics dashboard",
                "Monthly strategy optimization sessions",
            ],
            pricing: {
                basic: "$199/month",
                standard: "$349/month",
                premium: "$599/month",
                details: "Includes 100-500 qualified leads per month, automated follow-up systems, and dedicated lead generation specialist.",
            },
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
                            SERVICES & PACKAGES
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
                        <img src={servicesImage} alt="AI Services" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>

                <Tabs defaultValue="services" className="w-full">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
                        <TabsTrigger value="services" className="text-lg font-bold">
                            Individual Services
                        </TabsTrigger>
                        <TabsTrigger value="packages" className="text-lg font-bold">
                            Packages
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="services">
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
                                        </div>
                                        <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                                        <CardDescription className="text-lg font-semibold text-foreground">
                                            {service.subtitle}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-base text-muted-foreground mb-6">
                                            {service.description}
                                        </p>
                                        {service.price && (
                                            <div className="mb-4 p-3 bg-primary/10 rounded-lg text-center">
                                                <p className="text-2xl font-bold text-primary">{service.price}</p>
                                            </div>
                                        )}
                                        {service.pricingTiers && (
                                            <div className="mb-4 space-y-2">
                                                {service.pricingTiers.map((tier, idx) => (
                                                    <div key={idx} className="p-2 bg-primary/5 rounded">
                                                        <p className="text-xs font-semibold text-muted-foreground">{tier.name}</p>
                                                        <p className="text-sm font-bold text-primary">{tier.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
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
                    </TabsContent>

                    <TabsContent value="packages">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {packages.map((pkg, index) => (
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
                                                <pkg.icon className="h-8 w-8 text-primary-light drop-shadow-[0_0_10px_rgba(79,136,73,0.6)]" />
                                            </div>
                                            <CardTitle className="text-xl md:text-2xl">{pkg.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-lg font-semibold text-foreground">
                                            {pkg.subtitle}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-base text-muted-foreground mb-6">
                                            {pkg.description}
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-primary font-bold mt-1">•</span>
                                                    <span className="text-sm md:text-base">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            onClick={() => setSelectedPackage(index)}
                                            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 transition-all duration-300"
                                        >
                                            View Pricing
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="text-center mt-12 p-6 bg-primary/10 rounded-xl max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl font-semibold text-foreground">
                        Your clients see agency-grade work. <span className="text-primary">You see profit margins that finally make sense.</span>
                    </p>
                </div>
            </div>

            {/* Pricing Dialog */}
            <Dialog open={selectedPackage !== null} onOpenChange={() => setSelectedPackage(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-primary">
                            {selectedPackage !== null && packages[selectedPackage].title}
                        </DialogTitle>
                        <DialogDescription className="text-lg">
                            {selectedPackage !== null && packages[selectedPackage].subtitle}
                        </DialogDescription>
                    </DialogHeader>
                    {selectedPackage !== null && (
                        <div className="space-y-6 py-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-sm text-muted-foreground mb-2">Basic</p>
                                    <p className="text-2xl font-bold text-primary">{packages[selectedPackage].pricing.basic}</p>
                                </div>
                                <div className="p-4 bg-primary/10 rounded-lg text-center border-2 border-primary">
                                    <p className="text-sm text-muted-foreground mb-2">Standard</p>
                                    <p className="text-2xl font-bold text-primary">{packages[selectedPackage].pricing.standard}</p>
                                    <p className="text-xs text-primary mt-1">MOST POPULAR</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-sm text-muted-foreground mb-2">Premium</p>
                                    <p className="text-2xl font-bold text-primary">{packages[selectedPackage].pricing.premium}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-lg">
                                <p className="text-sm text-foreground">{packages[selectedPackage].pricing.details}</p>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    onClick={() => setSelectedPackage(null)}
                                    variant="outline"
                                    className="flex-1"
                                >
                                    Close
                                </Button>
                                <Button
                                    onClick={() => {
                                        window.location.href = "#contact";
                                        setSelectedPackage(null);
                                    }}
                                    className="flex-1 bg-primary hover:bg-primary-light"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};
