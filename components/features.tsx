"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Users, 
  DollarSign, 
  FolderKanban, 
  MessageSquare, 
  FileText, 
  Globe2 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Intelligent Client Management",
    description: "Our AI-powered CRM doesn't just store contacts—it understands relationships. Automatically track communication history, predict follow-up timing, and receive smart suggestions for nurturing leads. Client birthdays, project milestones, and renewal dates are never missed.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: DollarSign,
    title: "Automated Financial Operations",
    description: "Generate professional invoices in seconds, automatically send payment reminders, and reconcile transactions across multiple currencies. Our AI categorizes expenses, predicts cash flow, and prepares export-ready reports for tax season—no matter which country you're filing in.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: FolderKanban,
    title: "Smart Project Orchestration",
    description: "Break down complex projects into manageable tasks with AI-generated timelines and milestone suggestions. Automatically assign work, track progress, and alert you to potential bottlenecks before they become problems.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Unified Communication Hub",
    description: "Consolidate emails, messages, and client communications in one place. AI-powered sentiment analysis helps you prioritize urgent conversations, while smart templates and suggested responses keep your communication professional and consistent.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: FileText,
    title: "Knowledge Base & Document AI",
    description: "Store contracts, proposals, and reference materials in a searchable knowledge base. Our document AI can summarize lengthy PDFs, extract key terms, and even draft new documents based on your existing templates.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Globe2,
    title: "Time Zone Intelligence",
    description: "Schedule meetings across time zones without the mental math. krinAI automatically detects optimal meeting windows, sends calendar invites in each participant's local time, and adjusts for daylight saving changes.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
];

export function Features() {
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
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Everything You Need.{" "}
            <span className="gradient-text">Nothing You Don't.</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Powerful features designed specifically for location-independent entrepreneurs. 
            Each tool is crafted to save time, reduce complexity, and help you scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-background mb-5 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
