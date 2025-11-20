import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We Tripled Our Revenue Without Hiring Anyone.",
      text: "Popey AI became our secret weapon. We went from turning down 5 projects a month to accepting everything. Our profit margins increased by 40% because we're no longer paying NYC designer rates. The Virtual Assistant alone is worth the entire investment.",
      author: "Marcus Chen",
      role: "Creative Director, BrandForge NYC",
    },
    {
      quote: "They Saved Our Reputation (and a $50K Client).",
      text: "We had a massive client project and our senior designer quit mid-way. Popey AI jumped in, matched our style perfectly, and delivered in 72 hours. Our client never knew. That's trust. Now they handle 80% of our production work.",
      author: "Sarah Mitchell",
      role: "Owner, Pixel & Print Studio, Melbourne",
    },
    {
      quote: "The ROI Is Insane.",
      text: "We generate an extra $12,000 in monthly revenue from projects we couldn't handle before. The Virtual Assistant manages everything, so I'm actually running my business instead of drowning in emails. Best decision we've made.",
      author: "Raj Patel",
      role: "Founder, UrbanEdge Design, London",
    },
    {
      quote: "Finally, I Can Focus on Growth.",
      text: "I spent 60% of my time managing projects and 40% growing the business. Now it's flipped. Popey AI's VA handles all coordination, the design team delivers flawlessly, and I'm closing new clients every week. This is what scaling actually looks like.",
      author: "Amanda Torres",
      role: "Principal, Creative Pulse Agency, Dubai",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-highlight">
            REAL RESULTS FROM REAL AGENCIES
          </h2>
          <p className="text-xl text-muted-foreground">
            Success stories from agencies that scaled smart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-primary/30" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                  {testimonial.quote}
                </h3>
                <p className="text-base text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
