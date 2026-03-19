"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  PenTool,
  ArrowRight,
  ArrowLeft,
  Star,
  Check,
  Play,
  Zap,
  FileText,
  MessageSquare,
  Megaphone,
  Hash,
  Target,
  Sparkles,
  Globe,
  Users,
  TrendingUp,
  Layers,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Blog Post Generation",
    description: "Create SEO-optimized blog posts on any topic with proper structure, headers, and engaging content that ranks.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Content",
    description: "Generate platform-specific content for Twitter, LinkedIn, Instagram, and more with optimal formatting and hashtags.",
  },
  {
    icon: Megaphone,
    title: "Marketing Copy",
    description: "Craft compelling ad copy, email campaigns, landing pages, and sales funnels that convert visitors into customers.",
  },
  {
    icon: Hash,
    title: "SEO Optimization",
    description: "Built-in SEO best practices ensure your content ranks high on search engines and drives organic traffic.",
  },
  {
    icon: Target,
    title: "Brand Voice Matching",
    description: "Train the AI on your brand guidelines to maintain consistent tone, style, and messaging across all content.",
  },
  {
    icon: Layers,
    title: "Multi-format Output",
    description: "Export content in various formats including Markdown, HTML, PDF, or directly to your CMS integration.",
  },
];

const useCases = [
  {
    title: "Content Marketing Teams",
    description: "Scale your content production 10x without sacrificing quality. Generate blog posts, whitepapers, and case studies in minutes.",
    stat: "10x",
    statLabel: "Faster Content",
  },
  {
    title: "E-commerce Businesses",
    description: "Create product descriptions, category pages, and promotional content that drives sales and improves conversion rates.",
    stat: "35%",
    statLabel: "Higher Conversions",
  },
  {
    title: "Marketing Agencies",
    description: "Deliver more client work in less time. Generate campaign copy, social content, and reports with consistent quality.",
    stat: "3x",
    statLabel: "More Clients Served",
  },
  {
    title: "Solo Entrepreneurs",
    description: "Compete with larger teams by producing professional content across all channels without hiring writers.",
    stat: "80%",
    statLabel: "Time Saved",
  },
];

const capabilities = [
  {
    category: "Content Types",
    items: ["Blog Posts", "Social Media Posts", "Email Campaigns", "Product Descriptions", "Ad Copy", "Press Releases", "Whitepapers", "Case Studies"],
  },
  {
    category: "Languages",
    items: ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Dutch", "Japanese", "Chinese", "Korean"],
  },
  {
    category: "Integrations",
    items: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Buffer", "Hootsuite", "Notion", "Google Docs"],
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: [
      "50,000 words/month",
      "10 brand voices",
      "Basic SEO optimization",
      "5 content templates",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing teams and businesses",
    features: [
      "250,000 words/month",
      "Unlimited brand voices",
      "Advanced SEO tools",
      "50+ content templates",
      "A/B variation generator",
      "API access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited words",
      "Custom AI training",
      "Dedicated account manager",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const testimonials = [
  {
    quote: "ContentForge AI has transformed our content marketing. We went from publishing 4 blog posts a month to 20, and the quality is consistently excellent.",
    author: "Sarah Chen",
    role: "Head of Marketing",
    company: "TechFlow Inc.",
    avatar: "SC",
  },
  {
    quote: "The brand voice matching feature is incredible. It sounds exactly like our team wrote it. Our engagement rates have doubled since we started using it.",
    author: "Marcus Johnson",
    role: "Content Director",
    company: "GrowthLabs",
    avatar: "MJ",
  },
  {
    quote: "As a solo founder, I can't afford a content team. ContentForge AI lets me compete with companies 10x my size. It's a game-changer.",
    author: "Emily Rodriguez",
    role: "Founder & CEO",
    company: "NomadScale",
    avatar: "ER",
  },
];

export default function ContentForgeAIPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              {/* Back Link */}
              <Link
                href="/agents"
                className="animate-on-scroll opacity-0 mb-6 inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors animate-fade-in-up"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Agents
              </Link>

              {/* Badge */}
              <div className="animate-on-scroll opacity-0 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 animate-fade-in-up">
                <PenTool className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-400">
                  AI Content Agent
                </span>
              </div>

              {/* Icon */}
              <div className="animate-on-scroll opacity-0 animation-delay-100 mb-8 inline-flex p-6 rounded-3xl bg-gradient-to-br from-pink-500/20 to-rose-500/10 border border-pink-500/20 animate-fade-in-up">
                <PenTool className="w-16 h-16 text-pink-400" />
              </div>

              {/* Headline */}
              <h1 className="animate-on-scroll opacity-0 animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
                <span className="block">ContentForge AI</span>
                <span className="block text-pink-400">Words That Convert.</span>
              </h1>

              {/* Subheadline */}
              <p className="animate-on-scroll opacity-0 animation-delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-foreground-muted leading-relaxed mb-8 animate-fade-in-up">
                Generate compelling copy, blog posts, marketing materials, and social content 
                that resonates with your audience and drives engagement.
              </p>

              {/* CTA Buttons */}
              <div className="animate-on-scroll opacity-0 animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-xl hover:border-pink-500/50 transition-all duration-200">
                  <Play className="w-5 h-5 text-pink-400" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="animate-on-scroll opacity-0 animation-delay-400 mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-pink-400">19,800+</div>
                  <div className="text-sm text-foreground-muted mt-1">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-pink-400">4.8</div>
                  <div className="text-sm text-foreground-muted mt-1 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-pink-400">8M+</div>
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

        {/* Features Section */}
        <section ref={featuresRef} className="relative py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Powerful Features for{" "}
                <span className="text-pink-400">Content Excellence</span>
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Everything you need to create, optimize, and scale your content production.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-pink-500/10 text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Built for{" "}
                <span className="text-pink-400">Every Team</span>
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                From solo entrepreneurs to enterprise marketing teams, ContentForge AI adapts to your needs.
              </p>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="group relative p-8 rounded-2xl bg-card border border-border hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-xl font-bold tracking-tight">
                      {useCase.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-400">{useCase.stat}</div>
                      <div className="text-xs text-foreground-muted">{useCase.statLabel}</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="relative py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Comprehensive{" "}
                <span className="text-pink-400">Capabilities</span>
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                A versatile AI agent that handles all your content needs across languages, formats, and platforms.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((capability) => (
                <div
                  key={capability.category}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <h3 className="text-lg font-bold mb-6 text-pink-400">
                    {capability.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {capability.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Loved by{" "}
                <span className="text-pink-400">Content Creators</span>
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Join thousands of teams already using ContentForge AI to transform their content strategy.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-foreground-muted">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Simple, Transparent{" "}
                <span className="text-pink-400">Pricing</span>
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Choose the plan that fits your content needs. All plans include a 14-day free trial.
              </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative p-8 rounded-2xl transition-all duration-300 ${
                    tier.popular
                      ? "bg-gradient-to-b from-pink-500/10 to-rose-500/5 border-2 border-pink-500/50 scale-105"
                      : "bg-card border border-border hover:border-pink-500/30"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-xs font-semibold text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-foreground-muted">{tier.period}</span>
                    </div>
                    <p className="text-sm text-foreground-muted mt-2">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                      tier.popular
                        ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg shadow-pink-500/25"
                        : "bg-card border border-border text-foreground hover:border-pink-500/50"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-pink-500/5 border border-pink-500/20 p-12 lg:p-16">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl" />

              <div className="relative text-center max-w-3xl mx-auto">
                <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Ready to Transform Your Content?
                </h2>
                <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                  Join 19,800+ content creators and marketing teams who are already using 
                  ContentForge AI to create better content, faster.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#pricing"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg shadow-pink-500/25 hover:scale-105"
                  >
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    href="/agents"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-xl hover:border-pink-500/50 transition-all duration-200"
                  >
                    Explore Other Agents
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
