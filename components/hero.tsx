"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-20 hidden lg:block animate-float">
        <div className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
          <Globe className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-32 hidden lg:block animate-float animation-delay-300">
        <div className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
          <Zap className="w-8 h-8 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-48 left-32 hidden lg:block animate-float animation-delay-600">
        <div className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
          <Shield className="w-8 h-8 text-primary" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-foreground-muted">
              Trusted by 12,000+ entrepreneurs worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-on-scroll opacity-0 animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Run Your Business from{" "}
            <span className="gradient-text">Anywhere.</span>
            <br />
            <span className="text-foreground">Powered by AI.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-on-scroll opacity-0 animation-delay-200 mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto text-balance leading-relaxed">
            krinAI is the all-in-one business suite built for entrepreneurs who refuse to be tied to a desk. 
            From client management to automated invoicing, our AI-powered tools handle the operational heavy lifting 
            so you can focus on what matters—growing your business and living life on your terms.
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 animation-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 glow hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-xl hover:border-border-hover hover:bg-card/80 transition-all duration-200"
            >
              See Features
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="animate-on-scroll opacity-0 animation-delay-400 mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
