"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  Sparkles, 
  ArrowRight, 
  Bot,
  Brain,
  Code,
  PenTool,
  BarChart3,
  MessageSquare,
  FileSearch,
  Wand2,
  Cpu,
  Shield,
  Zap,
  Star,
  Globe,
  Clock,
  TrendingUp,
  Users,
  Heart,
  Target,
  Rocket,
  Check
} from "lucide-react";

const teamMembers = [
  {
    id: "strategist",
    name: "StrategyBot Pro",
    role: "Chief Strategy Officer",
    tagline: "Your AI Business Strategist.",
    description: "An advanced AI agent that analyzes market trends, competitor data, and your business metrics to provide actionable strategic recommendations.",
    icon: Brain,
    color: "from-violet-500/20 to-violet-600/5",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    stats: { projects: "2,500+", accuracy: "98%", availability: "24/7" },
  },
  {
    id: "coder",
    name: "CodeAssist Elite",
    role: "Lead Developer",
    tagline: "Ship Code Faster.",
    description: "Your AI pair programmer that writes, reviews, and debugs code across 50+ programming languages with context-aware suggestions.",
    icon: Code,
    color: "from-blue-500/20 to-blue-600/5",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    stats: { projects: "15,000+", accuracy: "99%", availability: "24/7" },
  },
  {
    id: "writer",
    name: "ContentForge AI",
    role: "Head of Content",
    tagline: "Words That Convert.",
    description: "Generate compelling copy, blog posts, marketing materials, and social content that resonates with your audience and drives engagement.",
    icon: PenTool,
    color: "from-pink-500/20 to-pink-600/5",
    accentColor: "text-pink-400",
    borderColor: "border-pink-500/30",
    stats: { projects: "8,000+", accuracy: "97%", availability: "24/7" },
  },
  {
    id: "analyst",
    name: "DataMind Analytics",
    role: "Data Science Lead",
    tagline: "Data Into Decisions.",
    description: "Transform raw data into beautiful visualizations and actionable insights. Ask questions in plain English and get instant analytical answers.",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-600/5",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    stats: { projects: "3,200+", accuracy: "99%", availability: "24/7" },
  },
  {
    id: "support",
    name: "SupportGenius",
    role: "Customer Success Manager",
    tagline: "24/7 Customer Care.",
    description: "An empathetic AI support agent that handles customer inquiries, resolves issues, and escalates complex cases with human-like understanding.",
    icon: MessageSquare,
    color: "from-orange-500/20 to-orange-600/5",
    accentColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    stats: { projects: "25,000+", accuracy: "96%", availability: "24/7" },
  },
  {
    id: "research",
    name: "ResearchBot X",
    role: "Head of Research",
    tagline: "Knowledge at Scale.",
    description: "Conduct comprehensive research across millions of sources, summarize findings, and deliver structured reports with citations in minutes.",
    icon: FileSearch,
    color: "from-cyan-500/20 to-cyan-600/5",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    stats: { projects: "1,800+", accuracy: "98%", availability: "24/7" },
  },
  {
    id: "creative",
    name: "CreativeStudio AI",
    role: "Creative Director",
    tagline: "Design Without Limits.",
    description: "Generate stunning visuals, logos, marketing materials, and UI designs with AI that understands aesthetics and brand consistency.",
    icon: Wand2,
    color: "from-rose-500/20 to-rose-600/5",
    accentColor: "text-rose-400",
    borderColor: "border-rose-500/30",
    stats: { projects: "12,000+", accuracy: "95%", availability: "24/7" },
  },
  {
    id: "automation",
    name: "WorkflowAutomator",
    role: "Operations Lead",
    tagline: "Automate Everything.",
    description: "Connect your tools and automate complex workflows with an AI agent that learns your processes and optimizes them over time.",
    icon: Cpu,
    color: "from-indigo-500/20 to-indigo-600/5",
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    stats: { projects: "50,000+", accuracy: "99%", availability: "24/7" },
  },
];

const values = [
  {
    icon: Globe,
    title: "Global-First Mindset",
    description: "Our agents work across timezones, languages, and borders—just like the entrepreneurs we serve.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "No sick days, no vacations, no downtime. Our AI team delivers consistent results 24/7/365.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Every interaction makes our agents smarter. They evolve and improve with every task completed.",
  },
  {
    icon: Heart,
    title: "Human-Centered AI",
    description: "We build AI that augments human creativity, not replaces it. Our agents empower you to do more.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "You Define the Vision",
    description: "Tell our agents what you need—whether it's code, content, analysis, or strategy. Natural language is all you need.",
  },
  {
    step: "02",
    title: "Agents Collaborate",
    description: "Our AI team members work together seamlessly, sharing context and building on each other's outputs.",
  },
  {
    step: "03",
    title: "You Review & Refine",
    description: "Every deliverable goes through your approval. Provide feedback and watch the agents adapt instantly.",
  },
  {
    step: "04",
    title: "Scale Without Limits",
    description: "Need more output? Our agents scale infinitely. No hiring, no training, no overhead—just results.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const createObserver = (setter: (v: boolean) => void) => 
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, observerOptions);

    const observers = [
      { ref: heroRef, setter: setHeroVisible },
      { ref: teamRef, setter: setTeamVisible },
      { ref: valuesRef, setter: setValuesVisible },
      { ref: processRef, setter: setProcessVisible },
    ];

    observers.forEach(({ ref, setter }) => {
      if (ref.current) createObserver(setter).observe(ref.current);
    });

    return () => observers.forEach(() => {});
  }, []);

  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground-muted">
                  Meet the Team
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className="block">We're an AI-First Company.</span>
                <span className="block gradient-text">Our Team is 100% AI Agents.</span>
              </h1>

              {/* Subheadline */}
              <p className={`max-w-3xl mx-auto text-lg sm:text-xl text-foreground-muted leading-relaxed mb-10 transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                No human employees. No office politics. No limitations. Just a team of specialized AI agents 
                working around the clock to deliver exceptional results for our customers worldwide.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <a
                  href="#team"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 glow hover:scale-105"
                >
                  Meet Our Agents
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/agents"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-xl hover:border-border-hover transition-all duration-200"
                >
                  <Bot className="w-5 h-5 text-primary" />
                  View All Agents
                </Link>
              </div>

              {/* Quick Stats */}
              <div className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto transition-all duration-700 delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">8</div>
                  <div className="text-sm text-foreground-muted mt-1">AI Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-foreground-muted mt-1">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">118M+</div>
                  <div className="text-sm text-foreground-muted mt-1">Tasks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">99%</div>
                  <div className="text-sm text-foreground-muted mt-1">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section ref={processRef} className="relative py-24 lg:py-32 bg-background-secondary">
          <div className="absolute inset-0 bg-dots opacity-20" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
                <Rocket className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground-muted">Our Process</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                How We Operate
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                A seamless workflow where AI agents collaborate to deliver results that would traditionally require entire departments.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howWeWork.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative transition-all duration-700 ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Connector Line */}
                  {index < howWeWork.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
                  )}
                  
                  <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300 h-full">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" ref={teamRef} className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground-muted">The Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Meet Our AI Team
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Each agent is a specialist in their domain, working together to deliver comprehensive solutions for your business.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`group relative transition-all duration-700 ${teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`relative h-full p-6 rounded-2xl bg-card border ${member.borderColor} hover:border-border-hover transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}>
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`inline-flex p-3 rounded-xl bg-background/80 mb-4 ${member.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                        <member.icon className="w-6 h-6" />
                      </div>

                      {/* Name & Role */}
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className={`text-sm font-medium ${member.accentColor} mb-3`}>{member.role}</p>

                      {/* Tagline */}
                      <p className="text-xs text-foreground-muted italic mb-4">"{member.tagline}"</p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                        <div className="text-center">
                          <div className="text-xs font-semibold text-foreground">{member.stats.projects}</div>
                          <div className="text-[10px] text-foreground-muted">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-semibold text-foreground">{member.stats.accuracy}</div>
                          <div className="text-[10px] text-foreground-muted">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-semibold text-foreground">{member.stats.availability}</div>
                          <div className="text-[10px] text-foreground-muted">Online</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="relative py-24 lg:py-32 bg-background-secondary">
          <div className="absolute inset-0 bg-dots opacity-20" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground-muted">Our Values</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                What We Believe In
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                The principles that guide our AI-first approach to building products and serving customers.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`text-center transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to Work with Our AI Team?
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-10 max-w-2xl mx-auto">
              Experience the future of work. Let our AI agents handle the heavy lifting while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/agents"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 glow hover:scale-105"
              >
                Explore All Agents
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-xl hover:border-border-hover transition-all duration-200"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
