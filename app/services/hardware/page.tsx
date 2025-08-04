"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, HardDrive, Server, Network, Database, Shield, Zap, Clock, Users } from "lucide-react"

export default function HardwarePage() {
  const offerings = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Server Infrastructure",
      description: "High-performance server solutions designed for enterprise workloads and scalability.",
      features: ["Rack & Blade Servers", "Virtualization Solutions", "Load Balancing", "High Availability Setup"],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Equipment",
      description: "Robust networking solutions for seamless connectivity and optimal performance.",
      features: ["Switches & Routers", "Wireless Solutions", "Network Security", "Bandwidth Management"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Storage Solutions",
      description: "Scalable storage systems for data management, backup, and disaster recovery.",
      features: ["SAN & NAS Solutions", "Backup Systems", "Data Archiving", "Cloud Storage Integration"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Hardware",
      description: "Advanced security appliances to protect your infrastructure and data.",
      features: ["Firewalls", "Intrusion Detection", "VPN Gateways", "Access Control Systems"],
    },
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enhanced Performance",
      description: "Optimized hardware configurations for maximum efficiency and speed.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Improved Security",
      description: "Enterprise-grade security features to protect your critical assets.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reduced Downtime",
      description: "Reliable hardware solutions with built-in redundancy and failover capabilities.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "24/7 technical support and maintenance services from certified professionals.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Assessment & Planning",
      description:
        "We analyze your current infrastructure and business requirements to design the optimal hardware solution.",
    },
    {
      step: "2",
      title: "Procurement & Setup",
      description: "We source the best hardware components and configure them according to your specifications.",
    },
    {
      step: "3",
      title: "Implementation & Testing",
      description: "Our team implements the solution and conducts thorough testing to ensure optimal performance.",
    },
    {
      step: "4",
      title: "Monitoring & Support",
      description: "We provide ongoing monitoring, maintenance, and support to keep your systems running smoothly.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hardware <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Enterprise-grade hardware infrastructure designed for scalability, reliability, and peak performance.
                Build a solid foundation for your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Get Free Assessment <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="glass">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <HardDrive className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Infrastructure Excellence</h3>
                    <p className="text-muted-foreground">
                      From servers to storage, we deliver hardware solutions that power your business growth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Hardware <span className="text-primary">Offerings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive hardware solutions tailored to meet your specific business requirements and growth
              objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="glass glass-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <div className="text-primary">{offering.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{offering.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Hardware Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to hardware implementation that ensures optimal results and minimal disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="glass text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Case Study Spotlight</h2>
                <img
                  src="/placeholder.svg?height=60&width=200&text=Global+Manufacturing"
                  alt="Global Manufacturing Corp"
                  className="h-12 mx-auto opacity-80"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                  <p className="text-muted-foreground text-sm">
                    Aging server infrastructure causing frequent downtime and performance issues across 15 manufacturing
                    facilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Implemented redundant server clusters with virtualization, upgraded network infrastructure, and
                    deployed centralized storage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Results</h4>
                  <p className="text-foreground font-semibold text-sm">
                    99.9% uptime achieved, 60% reduction in IT maintenance costs, 40% improvement in system performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Upgrade Your <span className="text-primary">Infrastructure</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let our hardware experts assess your current setup and design a solution that meets your performance and
                scalability needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
