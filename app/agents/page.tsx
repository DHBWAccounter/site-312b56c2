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
  Star,
  Check,
  Play,
  Zap,
  Cpu,
  Shield
} from "lucide-react";

const agents = [
  {
    id: "strategist",
    name: "StrategyBot Pro",
    tagline: "Your AI Business Strategist.",
    description: "An advanced AI agent that analyzes market trends, competitor data, and your business metrics to provide actionable strategic recommendations.",
    icon: Brain,
    color: "from-violet-500/20 to-violet-600/5",
    accentColor: "text-violet-400",
    borderColor: "hover:border-violet-500/50",
    features: ["Market Analysis", "Competitor Insights", "Growth Forecasting", "Risk Assessment"],
    stats: { users: "12,500+", rating: "4.9", tasks: "2.5M+" },
    featured: true,
    tier: "enterprise",
  },
  {
    id: "coder",
    name: "CodeAssist Elite",
    tagline: "Ship Code Faster.",
    description: "Your AI pair programmer that writes, reviews, and debugs code across 50+ programming languages with context-aware suggestions.",
    icon: Code,
    color: "from-blue-500/20 to-blue-600/5",
    accentColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    features: ["Multi-language Support", "Code Review", "Bug Detection", "Auto Documentation"],
    stats: { users: "28,300+", rating: "4.9", tasks: "15M+" },
    featured: true,
    tier: "pro",
  },
  {
    id: "writer",
    name: "ContentForge AI",
    tagline: "Words That Convert.",
    description: "Generate compelling copy, blog posts, marketing materials, and social content that resonates with your audience and drives engagement.",
    icon: PenTool,
    color: "from-pink-500/20 to-pink-600/5",
    accentColor: "text-pink-400",
    borderColor: "hover:border-pink-500/50",
    features: ["SEO Optimization", "Brand Voice Matching", "Multi-format Output", "A/B Variations"],
    stats: { users: "19,800+", rating: "4.8", tasks: "8M+" },
    featured: true,
    tier: "pro",
  },
  {
    id: "analyst",
    name: "DataMind Analytics",
    tagline: "Data Into Decisions.",
    description: "Transform raw data into beautiful visualizations and actionable insights. Ask questions in plain English and get instant analytical answers.",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-600/5",
    accentColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    features: ["Natural Language Queries", "Auto Visualization", "Trend Detection", "Export Reports"],
    stats: { users: "9,200+", rating: "4.8", tasks: "3.2M+" },
    featured: false,
    tier: "pro",
  },
  {
    id: "support",
    name: "SupportGenius",
    tagline: "24/7 Customer Care.",
    description: "An empathetic AI support agent that handles customer inquiries, resolves issues, and escalates complex cases with human-like understanding.",
    icon: MessageSquare,
    color: "from-orange-500/20 to-orange-600/5",
    accentColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    features: ["Multi-channel Support", "Sentiment Analysis", "Auto Resolution", "Smart Escalation"],
    stats: { users: "15,600+", rating: "4.7", tasks: "25M+" },
    featured: false,
    tier: "starter",
  },
  {
    id: "research",
    name: "ResearchBot X",
    tagline: "Knowledge at Scale.",
    description: "Conduct comprehensive research across millions of sources, summarize findings, and deliver structured reports with citations in minutes.",
    icon: FileSearch,
    color: "from-cyan-500/20 to-cyan-600/5",
    accentColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    features: ["Deep Web Search", "Citation Tracking", "Summary Generation", "Fact Verification"],
    stats: { users: "7,400+", rating: "4.9", tasks: "1.8M+" },
    featured: false,
    tier: "pro",
  },
  {
    id: "creative",
    name: "CreativeStudio AI",
    tagline: "Design Without Limits.",
    description: "Generate stunning visuals, logos, marketing materials, and UI designs with AI that understands aesthetics and brand consistency.",
    icon: Wand2,
    color: "from-rose-500/20 to-rose-600/5",
    accentColor: "text-rose-400",
    borderColor: "hover:border-rose-500/50",
    features: ["Brand Consistency", "Multi-format Export", "Style Transfer", "Rapid Iteration"],
    stats: { users: "22,100+", rating: "4.8", tasks: "12M+" },
    featured: true,
    tier: "enterprise",
  },
  {
    id: "automation",
    name: "WorkflowAutomator",
    tagline: "Automate Everything.",
    description: "Connect your tools and automate complex workflows with an AI agent that learns your processes and optimizes them over time.",
    icon: Cpu,
    color: "from-indigo-500/20 to-indigo-600/5",
    accentColor: "text-indigo-400",
    borderColor: "hover:border-indigo-500/50",
    features: ["500+ Integrations", "Visual Builder", "Error Handling", "Performance Analytics"],
    stats: { users: "11,900+", rating: "4.9", tasks: "50M+" },
    featured: false,
    tier: "enterprise",
  },
];

const categories = [
  { name: "All Agents", id: "all", icon: Bot },
  { name: "Featured", id: "featured", icon: Star },
  { name: "Enterprise", id: "enterprise", icon: Shield },
  { name: "Pro", id: "pro", icon: Zap },
  { name: "Starter", id: "starter", icon: Sparkles },
];

export default function AgentsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const heroRef = useRef<HTMLDivElement>(null);
  const agentsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredAgents = agents.filter((agent) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return agent.featured;
    return agent.tier === activeCategory;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (agentsRef.current) {
      observer.observe(agentsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
          
          {/* Floating Agent Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-20"
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: `${4 + (i % 3)}s`,
                }}
              >
                <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                  {i % 8 === 0 && <Brain className="w-6 h-6 text-violet-400" />}
                  {i % 8 === 1 && <Code className="w-6 h-6 text-blue-400" />}
                  {i % 8 === 2 && <PenTool className="w-6 h-6 text-pink-400" />}
                  {i % 8 === 3 && <BarChart3 className="w-6 h-6 text-emerald-400" />}
                  {i % 8 === 4 && <MessageSquare className="w-6 h-6 text-orange-400" />}
                  {i % 8 === 5 && <Wand2 className="w-6 h-6 text-rose-400" />}
                  {i % 8 === 6 && <Cpu className="w-6 h-6 text-indigo-400" />}
                  {i % 8 === 7 && <FileSearch className="w-6 h-6 text-cyan-400" />}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              {/* Badge */}
              <div className="animate-on-scroll opacity-0 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border animate-fade-in-up">
                <Bot className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground-muted">
                  Meet your AI workforce
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-on-scroll opacity-0 animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
                <span className="block">The Best AI Agents.</span>
                <span className="block gradient-text">Built for Your Business.</span>
                <span className="block text-foreground-muted">Ready to Work.</span>
              </h1>

              {/* Subheadline */}
              <p className="animate-on-scroll opacity-0 animation-delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-foreground-muted leading-relaxed animate-fade-in-up">
                Discover our curated collection of AI agents designed to handle complex tasks, 
                automate workflows, and supercharge your productivity. Each agent is trained for excellence.
              </p>

              {/* CTA Buttons */}
              <div className="animate-on-scroll opacity-0 animation-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                <a
                  href="#agents"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 glow hover:scale-105"
                >
                  Explore Agents
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-xl hover:border-border-hover transition-all duration-200">
                  <Play className="w-5 h-5 text-primary" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="animate-on-scroll opacity-0 animation-delay-400 mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">8</div>
                  <div className="text-sm text-foreground-muted mt-1">AI Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">127K+</div>
                  <div className="text-sm text-foreground-muted mt-1">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">118M+</div>
                  <div className="text-sm text-foreground-muted mt-1">Tasks Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-foreground-muted/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-foreground-muted/50 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Agents Grid Section */}
        <section id="agents" ref={agentsRef} className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Our AI Agent Collection
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Each agent is purpose-built to excel at specific tasks, working 24/7 to deliver results.
              </p>
            </div>

            {/* Category Filter */}
            <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground glow"
                      : "bg-card border border-border text-foreground-muted hover:border-border-hover hover:text-foreground"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Agents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredAgents.map((agent, index) => (
                <div
                  key={agent.id}
                  className={`group relative transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Featured Badge */}
                  {agent.featured && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-xs font-semibold text-white shadow-lg">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Tier Badge */}
                  <div className={`absolute top-4 left-4 z-10 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide ${
                    agent.tier === "enterprise" 
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" 
                      : agent.tier === "pro"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  }`}>
                    {agent.tier}
                  </div>

                  {/* Card */}
                  <div className={`relative h-full p-8 pt-14 rounded-2xl bg-card border border-border ${agent.borderColor} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}>
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-2xl bg-background/80 mb-6 ${agent.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                        <agent.icon className="w-8 h-8" />
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl font-bold mb-1 tracking-tight">
                        {agent.name}
                      </h3>
                      <p className={`text-sm font-medium ${agent.accentColor} mb-4`}>
                        {agent.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                        {agent.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {agent.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className={`w-4 h-4 ${agent.accentColor}`} />
                            <span className="text-foreground-muted">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3 text-xs text-foreground-muted">
                          <span className="flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5" />
                            {agent.stats.tasks}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-yellow-400" />
                            {agent.stats.rating}
                          </span>
                        </div>
                        <button className={`inline-flex items-center gap-1 text-sm font-medium ${agent.accentColor} group-hover:gap-2 transition-all`}>
                          Try Agent
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-500/5 to-background" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">Get Started Today</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to Deploy Your
                <br />
                <span className="gradient-text">AI Workforce?</span>
              </h2>
              
              <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                Start with a free trial and experience the power of AI agents working for you. 
                No credit card required. Cancel anytime.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 glow hover:scale-105"
                >
                  Start Free Trial
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
