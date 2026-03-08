"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  Sparkles, 
  ArrowRight, 
  Zap,
  Brain,
  LineChart,
  MessageSquare,
  FileText,
  Users,
  DollarSign,
  Workflow,
  Star,
  Check,
  Play
} from "lucide-react";

const products = [
  {
    id: "crm",
    name: "ClientFlow AI",
    tagline: "Relationships, Automated.",
    description: "An intelligent CRM that doesn't just store contacts—it understands relationships. Predict follow-ups, automate nurturing, and never miss a beat.",
    icon: Users,
    color: "from-blue-500/20 to-blue-600/5",
    accentColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    features: ["Smart Lead Scoring", "Automated Follow-ups", "Relationship Insights", "Multi-channel Tracking"],
    stats: { users: "8,500+", rating: "4.9" },
    featured: true,
  },
  {
    id: "finance",
    name: "FinanceHub",
    tagline: "Money, Mastered.",
    description: "From invoicing to tax preparation, handle all your financial operations across currencies and countries with AI-powered automation.",
    icon: DollarSign,
    color: "from-emerald-500/20 to-emerald-600/5",
    accentColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    features: ["Multi-currency Support", "Auto Invoicing", "Expense Categorization", "Tax Prep Assistant"],
    stats: { users: "6,200+", rating: "4.8" },
    featured: true,
  },
  {
    id: "projects",
    name: "ProjectOrchestrator",
    tagline: "Projects, Perfected.",
    description: "AI-generated timelines, smart task assignment, and predictive bottleneck detection keep your projects on track, automatically.",
    icon: Workflow,
    color: "from-purple-500/20 to-purple-600/5",
    accentColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    features: ["AI Timeline Generation", "Resource Allocation", "Progress Prediction", "Risk Alerts"],
    stats: { users: "5,800+", rating: "4.9" },
    featured: true,
  },
  {
    id: "comms",
    name: "CommCenter",
    tagline: "Conversations, Unified.",
    description: "All your communications in one place with AI-powered sentiment analysis, smart replies, and priority inbox management.",
    icon: MessageSquare,
    color: "from-orange-500/20 to-orange-600/5",
    accentColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    features: ["Unified Inbox", "Sentiment Analysis", "Smart Templates", "Priority Sorting"],
    stats: { users: "4,500+", rating: "4.7" },
    featured: false,
  },
  {
    id: "docs",
    name: "DocuMind AI",
    tagline: "Documents, Decoded.",
    description: "Store, search, and understand your documents with AI. Summarize PDFs, extract key terms, and generate new docs from templates.",
    icon: FileText,
    color: "from-pink-500/20 to-pink-600/5",
    accentColor: "text-pink-400",
    borderColor: "hover:border-pink-500/50",
    features: ["AI Summarization", "Template Generation", "Smart Search", "Version Control"],
    stats: { users: "7,100+", rating: "4.8" },
    featured: false,
  },
  {
    id: "analytics",
    name: "InsightEngine",
    tagline: "Data, Demystified.",
    description: "Transform raw data into actionable insights. AI-powered analytics that tell you what is working and what needs attention.",
    icon: LineChart,
    color: "from-cyan-500/20 to-cyan-600/5",
    accentColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    features: ["Predictive Analytics", "Custom Dashboards", "Anomaly Detection", "Export Reports"],
    stats: { users: "5,300+", rating: "4.9" },
    featured: false,
  },
];

const categories = [
  { name: "All Products", id: "all", icon: Sparkles },
  { name: "Featured", id: "featured", icon: Star },
  { name: "Communication", id: "communication", icon: MessageSquare },
  { name: "Finance", id: "finance", icon: DollarSign },
  { name: "Productivity", id: "productivity", icon: Zap },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return product.featured;
    if (activeCategory === "communication") return ["crm", "comms"].includes(product.id);
    if (activeCategory === "finance") return product.id === "finance";
    if (activeCategory === "productivity") return ["projects", "docs", "analytics"].includes(product.id);
    return true;
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

    if (productsRef.current) {
      observer.observe(productsRef.current);
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
          
          {/* Floating Product Icons */}
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
                  {i % 6 === 0 && <Users className="w-6 h-6 text-primary" />}
                  {i % 6 === 1 && <DollarSign className="w-6 h-6 text-accent" />}
                  {i % 6 === 2 && <Workflow className="w-6 h-6 text-primary" />}
                  {i % 6 === 3 && <MessageSquare className="w-6 h-6 text-accent" />}
                  {i % 6 === 4 && <FileText className="w-6 h-6 text-primary" />}
                  {i % 6 === 5 && <LineChart className="w-6 h-6 text-accent" />}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              {/* Badge */}
              <div className="animate-on-scroll opacity-0 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground-muted">
                  Introducing our product suite
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-on-scroll opacity-0 animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
                <span className="block">Powerful Tools.</span>
                <span className="block gradient-text">Seamless Integration.</span>
                <span className="block text-foreground-muted">Infinite Possibilities.</span>
              </h1>

              {/* Subheadline */}
              <p className="animate-on-scroll opacity-0 animation-delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-foreground-muted leading-relaxed animate-fade-in-up">
                Discover our suite of AI-powered tools designed to transform how you work. 
                Each product integrates perfectly with the others, creating an ecosystem that grows with you.
              </p>

              {/* CTA Buttons */}
              <div className="animate-on-scroll opacity-0 animation-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 glow hover:scale-105"
                >
                  Explore Products
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
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">6</div>
                  <div className="text-sm text-foreground-muted mt-1">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">37K+</div>
                  <div className="text-sm text-foreground-muted mt-1">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">4.8</div>
                  <div className="text-sm text-foreground-muted mt-1">Avg Rating</div>
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

        {/* Products Grid Section */}
        <section id="products" ref={productsRef} className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Our Product Suite
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Each tool is designed to work independently or as part of an integrated ecosystem.
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-white shadow-lg">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative h-full p-8 rounded-2xl bg-card border border-border ${product.borderColor} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}>
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-2xl bg-background/80 mb-6 ${product.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                        <product.icon className="w-8 h-8" />
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl font-bold mb-1 tracking-tight">
                        {product.name}
                      </h3>
                      <p className={`text-sm font-medium ${product.accentColor} mb-4`}>
                        {product.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className={`w-4 h-4 ${product.accentColor}`} />
                            <span className="text-foreground-muted">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-foreground-muted">
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {product.stats.users}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-yellow-400" />
                            {product.stats.rating}
                          </span>
                        </div>
                        <button className={`inline-flex items-center gap-1 text-sm font-medium ${product.accentColor} group-hover:gap-2 transition-all`}>
                          Learn More
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

        {/* Featured Product Spotlight */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Most Popular</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  <span className="gradient-text">ClientFlow AI</span>
                  <br />
                  <span className="text-foreground-muted">Your AI-Powered CRM</span>
                </h2>
                
                <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                  The foundation of your business operations. ClientFlow AI doesn't just manage contacts—it 
                  understands relationships, predicts needs, and automates the tedious work so you can focus 
                  on what matters most: building genuine connections.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "AI-powered lead scoring and prioritization",
                    "Automated follow-up sequences with smart timing",
                    "Relationship strength indicators",
                    "Multi-channel communication tracking",
                    "Predictive insights for client needs"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 glow hover:scale-105">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-xl hover:border-border-hover transition-all duration-200">
                    View Demo
                  </button>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
                
                {/* Main Card */}
                <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">ClientFlow AI</div>
                        <div className="text-xs text-foreground-muted">Dashboard</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs text-foreground-muted">Live</span>
                    </div>
                  </div>

                  {/* Mock Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Active Clients", value: "247", change: "+12%" },
                      { label: "Pipeline Value", value: "$84K", change: "+23%" },
                      { label: "Response Rate", value: "94%", change: "+5%" },
                    ].map((stat, i) => (
                      <div key={i} className="p-3 rounded-xl bg-background/50">
                        <div className="text-xs text-foreground-muted mb-1">{stat.label}</div>
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-accent">{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mock Activity Feed */}
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-foreground-muted mb-2">Recent Activity</div>
                    {[
                      { name: "Sarah Chen", action: "opened proposal", time: "2m ago", color: "text-blue-400" },
                      { name: "Mike Johnson", action: "scheduled meeting", time: "15m ago", color: "text-emerald-400" },
                      { name: "Emma Wilson", action: "replied to email", time: "1h ago", color: "text-purple-400" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-background/30">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-xs font-medium">
                          {activity.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm truncate">
                            <span className="font-medium">{activity.name}</span>
                            <span className="text-foreground-muted"> {activity.action}</span>
                          </div>
                          <div className={`text-xs ${activity.color}`}>{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI Suggestion */}
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium mb-1">AI Suggestion</div>
                        <div className="text-xs text-foreground-muted">
                          Follow up with Sarah Chen about the proposal. Best time: Tomorrow 10 AM EST.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Built to Work <span className="gradient-text">Together</span>
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Every product in our suite integrates seamlessly. Data flows automatically, 
                workflows connect effortlessly, and your productivity multiplies.
              </p>
            </div>

            {/* Integration Visual */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center Hub */}
              <div className="relative flex justify-center mb-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Connected Products */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {products.slice(0, 6).map((product, index) => (
                  <div
                    key={product.id}
                    className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`inline-flex p-2 rounded-lg bg-background mb-3 ${product.accentColor}`}>
                      <product.icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-medium">{product.name}</div>
                    <div className="text-xs text-foreground-muted mt-1">
                      Syncs with {products.length - 1} products
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-accent/20 border border-border p-12 lg:p-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid opacity-10" />
              
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                  Start your free trial today. No credit card required. 
                  Get full access to all products for 14 days.
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
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card/50 border border-border rounded-xl hover:border-border-hover transition-all duration-200"
                  >
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}