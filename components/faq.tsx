"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is krinAI suitable for non-technical users?",
    answer: "Absolutely. We've designed every feature with simplicity in mind. If you can use email, you can use krinAI. Our AI guides you through setup and offers contextual help throughout the platform.",
  },
  {
    question: "How does pricing work across different currencies?",
    answer: "We bill in USD, but your subscription is automatically converted to your payment method's currency at competitive rates. Your clients can pay invoices in their preferred currency, and krinAI handles the conversion.",
  },
  {
    question: "Can I access krinAI offline?",
    answer: "Core features like note-taking, task management, and document drafting work offline. Changes sync automatically when you reconnect. Perfect for flights or remote locations with spotty internet.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use bank-level 256-bit encryption, two-factor authentication, and regular security audits. Your data is stored in SOC 2 compliant data centers, and you maintain full ownership of your information.",
  },
  {
    question: "Can I migrate from my current tools?",
    answer: "Yes. We offer free migration assistance for annual subscribers. Our team can import your contacts, projects, and historical data from most major CRMs, project management tools, and accounting platforms.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a full refund within 30 days of your first payment if krinAI isn't right for you. No questions asked.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Everything you need to know about krinAI. Can't find the answer you're looking for? Reach out to our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-foreground-muted flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6 text-foreground-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
