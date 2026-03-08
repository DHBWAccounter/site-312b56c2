"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Clock, DollarSign, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12,000+",
    label: "entrepreneurs across 84 countries",
    color: "text-primary",
  },
  {
    icon: Clock,
    value: "15+ hours",
    label: "saved per week on average",
    color: "text-accent",
  },
  {
    icon: DollarSign,
    value: "$2.3M+",
    label: "in invoices processed monthly",
    color: "text-primary",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "uptime guaranteed",
    color: "text-accent",
  },
];

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Trusted by Entrepreneurs <span className="gradient-text">Worldwide</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-background mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
