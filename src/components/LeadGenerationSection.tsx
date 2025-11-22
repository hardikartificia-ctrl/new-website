import { Target, TrendingUp, Users, Zap, BarChart, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LeadGenerationSection = () => {
    const leadGenFeatures = [
        {
            icon: Target,
            title: "AI-Powered Lead Qualification",
            description: "Automatically identify and prioritize high-quality leads using advanced AI algorithms that analyze behavior, engagement, and conversion potential.",
        },
        {
            icon: TrendingUp,
            title: "Conversion Optimization",
            description: "Maximize your conversion rates with data-driven insights and automated A/B testing that continuously improves your lead generation funnels.",
        },
        {
            icon: Users,
            title: "Multi-Channel Campaigns",
            description: "Reach your ideal customers across email, social media, paid ads, and content marketing with coordinated, AI-optimized campaigns.",
        },
        {
            icon: Zap,
            title: "Instant Lead Nurturing",
            description: "Engage leads immediately with intelligent chatbots and automated email sequences that guide prospects through your sales funnel 24/7.",
        },
        {
            icon: BarChart,
            title: "Real-Time Analytics",
            description: "Track lead performance with comprehensive dashboards showing ROI, conversion metrics, and campaign effectiveness in real-time.",
        },
        {
            icon: MessageSquare,
            title: "Smart CRM Integration",
            description: "Seamlessly integrate with your existing CRM systems to centralize lead data, automate follow-ups, and never miss an opportunity.",
        },
    ];

    const benefits = [
        "Generate 3-5x more qualified leads per month",
        "Reduce cost per lead by up to 60%",
        "Increase conversion rates by 40-80%",
        "Save 20+ hours per week on manual lead management",
    ];

    return (
        <section id="lead-generation" className="section-padding bg-background relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1200">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-highlight">
                        AI-POWERED LEAD GENERATION
                    </h2>
                    <p className="text-xl md:text-2xl text-primary-light font-semibold mb-6 drop-shadow-[0_0_10px_rgba(79,136,73,0.6)]">
                        Fill Your Pipeline with High-Quality Leads—Automatically
                    </p>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Stop chasing cold leads and start attracting qualified prospects who are ready to buy.
                        Our AI-powered lead generation system works 24/7 to identify, attract, and nurture your ideal customers—
                        so you can focus on closing deals, not finding them.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {leadGenFeatures.map((feature, index) => (
                        <Card
                            key={index}
                            className="hover-lift border-2 border-border/50 hover:border-primary/80 transition-all duration-300 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="1000"
                        >
                            <CardHeader>
                                <div className="mb-4">
                                    <div className="p-4 bg-primary/10 rounded-lg inline-block shadow-inner">
                                        <feature.icon className="h-10 w-10 text-primary-light drop-shadow-[0_0_10px_rgba(79,136,73,0.6)]" />
                                    </div>
                                </div>
                                <CardTitle className="text-xl md:text-2xl mb-3">{feature.title}</CardTitle>
                                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* Results Section */}
                <div
                    className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-2xl"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-highlight">
                                What You Can Expect
                            </h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                                        </div>
                                        <span className="text-lg font-semibold text-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center lg:text-left">
                            <div className="bg-background/60 backdrop-blur-sm p-8 rounded-xl border border-primary/20 shadow-lg">
                                <p className="text-lg text-muted-foreground mb-4">
                                    Our proven lead generation system combines cutting-edge AI technology with proven marketing strategies to deliver consistent, predictable results.
                                </p>
                                <p className="text-xl font-bold text-primary mb-6">
                                    Stop Wondering Where Your Next Client Will Come From
                                </p>
                                <Button
                                    onClick={() => window.location.href = "#contact"}
                                    className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50"
                                >
                                    Start Generating Leads Today
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="mt-16" data-aos="fade-up" data-aos-duration="1200">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-highlight">
                        How It Works
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Discovery", desc: "We analyze your target market and ideal customer profile" },
                            { step: "2", title: "Strategy", desc: "AI creates optimized campaigns across multiple channels" },
                            { step: "3", title: "Automation", desc: "Smart systems capture and nurture leads automatically" },
                            { step: "4", title: "Results", desc: "You receive qualified leads ready to convert" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-muted/50 rounded-xl hover:bg-primary/10 transition-all duration-300"
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
