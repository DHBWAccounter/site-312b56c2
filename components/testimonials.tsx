"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "krinAI gave me my life back.",
    author: "Sarah Chen",
    role: "Marketing Consultant",
    location: "Currently in Chiang Mai",
    content: "I was spending 20 hours a week on admin tasks—invoicing, following up with clients, managing my calendar. krinAI's automation cut that down to 3 hours. I actually have time to explore the cities I visit now.",
  },
  {
    quote: "The multi-currency support is a game-changer.",
    author: "Marcus Webb",
    role: "Software Developer",
    location: "Currently in Medellín",
    content: "I have clients in the US, EU, and UK. Before krinAI, I was juggling three different invoicing systems and losing money on conversion fees. Now everything is in one place, and the AI handles currency conversions automatically.",
  },
  {
    quote: "It's like having a virtual assistant who never sleeps.",
    author: "Aisha Patel",
    role: "E-commerce Entrepreneur",
    location: "Currently in Lisbon",
    content: "The AI follow-up reminders have saved me thousands in would-be lost clients. It knows when to nudge a prospect, when to send a payment reminder, and when to back off. It's eerily good at reading the room.",
  },
  {
    quote: "Finally, software that gets the nomad lifestyle.",
    author: "James Okonkwo",
    role: "Business Coach",
    location: "Currently in Cape Town",
    content: "I've tried every productivity tool out there. krinAI is the only one designed for people like us. The timezone features alone are worth the subscription. I'll never accidentally schedule a 3 AM call again.",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            What Entrepreneurs Are{" "}
            <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Join thousands of location-independent professionals who have transformed their businesses with krinAI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Main Quote */}
              <div className="relative">
                <p className="text-2xl font-bold mb-6 leading-tight">
                  "{testimonial.quote}"
                </p>

                {/* Content */}
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-foreground-muted">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
