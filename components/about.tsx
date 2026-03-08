"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Heart, Target } from "lucide-react";

export function About() {
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
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground-muted">Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Built by Nomads,{" "}
              <span className="gradient-text">for Nomads</span>
            </h2>

            <div className="space-y-6 text-foreground-muted leading-relaxed">
              <p>
                krinAI was founded in 2021 by a team of digital nomads who experienced firsthand the friction 
                of running a business across borders. We've dealt with timezone confusion, multi-currency 
                accounting nightmares, and the constant juggling act of client communication while hopping 
                between countries.
              </p>

              <p>
                We built krinAI because existing tools were designed for traditional offices with static teams 
                and predictable schedules. They didn't understand the unique challenges of the location-independent 
                lifestyle—unreliable WiFi, changing tax jurisdictions, international payment processing, and the 
                need to operate lean while scaling globally.
              </p>

              <p>
                Today, our distributed team spans 14 countries. We use krinAI every day to run our own business, 
                which means every feature is battle-tested by people who truly understand the nomad entrepreneur 
                experience. We're not just building software—we're building the infrastructure for the future of work.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">2021</div>
                <div className="text-sm text-foreground-muted mt-1">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">14</div>
                <div className="text-sm text-foreground-muted mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-foreground-muted mt-1">Remote</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-border opacity-30" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/30" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-accent/30" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
                  
                  {/* Main card */}
                  <div className="relative p-8 rounded-3xl bg-card border border-border backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-sm font-semibold">Currently Working From</div>
                    </div>
                    
                    <div className="space-y-3">
                      {["Lisbon", "Bali", "Medellín", "Cape Town", "Tbilisi"].map((city, index) => (
                        <div key={city} className="flex items-center gap-3 text-sm">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span className="text-foreground-muted">{city}</span>
                          {index === 0 && (
                            <span className="ml-auto px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                              Active
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-12 right-0 p-3 rounded-xl bg-card border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-medium">Live Sync</span>
                </div>
              </div>

              <div className="absolute bottom-12 left-0 p-3 rounded-xl bg-card border border-border animate-float animation-delay-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium">AI Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
