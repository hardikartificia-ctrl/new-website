import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How is this different from hiring a freelancer?",
      answer: "Freelancers are individuals with limited capacity and availability. We're a full team with project managers, quality control specialists, and guaranteed turnaround times. Plus, your dedicated VA ensures consistency and reliability.",
    },
    {
      question: "Can you match our brand style?",
      answer: "Absolutely. Send us your brand guidelines, past work samples, or style references. We adapt to your aesthetic—not the other way around. Our designers study your style before starting any project.",
    },
    {
      question: "What if the work needs revisions?",
      answer: "We work until you're satisfied. Your VA manages the revision process seamlessly, ensuring clear communication and fast turnarounds.",
    },
    {
      question: "Is my client data secure?",
      answer: "Yes. We sign NDAs, use secure file transfer protocols, and never share your work. Your clients will never know we exist unless you want them to.",
    },
    {
      question: "What if I need something urgently?",
      answer: "Rush projects are built into our workflow. Contact your VA, and we'll prioritize accordingly. Emergency protocols available for critical deadlines.",
    },
    {
      question: "How does the Virtual Assistant integration work?",
      answer: "Your VA becomes your primary point of contact. They use your communication tools (email, Slack, WhatsApp, etc.) and manage everything from client inquiries to final delivery. Seamless extension of your team.",
    },
    {
      question: "Can you handle high-volume work?",
      answer: "Yes. Our largest clients send us 200+ tasks per month. We scale infrastructure based on your needs.",
    },
    {
      question: "Do you work with small businesses too?",
      answer: "Absolutely. Whether you're a solo freelancer or a 50-person agency, we build packages that fit your scale and budget.",
    },
    {
      question: "What if we need services you haven't mentioned?",
      answer: "Tell us what you need. If it's creative, operational, or automation-related, we can likely handle it. Our packages are customizable.",
    },
    {
      question: "How do we get started?",
      answer: "Book a strategy call. We'll analyze your needs, show you relevant work samples, and design a custom package. No pressure, no hard sell—just solutions.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-highlight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
