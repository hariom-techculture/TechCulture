"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Database,
  Users,
  BarChart3,
  Workflow,
  Settings,
  Shield,
  Zap,
  TrendingUp,
  Target,
} from "lucide-react"

export default function EnterprisePage() {
  const offerings = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "ERP Systems",
      description: "Comprehensive Enterprise Resource Planning solutions to streamline all business processes.",
      features: ["Financial Management", "Supply Chain Management", "Human Resources", "Manufacturing Planning"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Solutions",
      description: "Customer Relationship Management systems to enhance customer experiences and drive sales.",
      features: ["Sales Automation", "Customer Service", "Marketing Campaigns", "Analytics & Reporting"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools to make data-driven business decisions.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Automated business processes to improve efficiency and reduce manual errors.",
      features: ["Process Automation", "Document Management", "Approval Workflows", "Integration Services"],
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Productivity",
      description: "Streamlined processes and automation lead to significant productivity improvements.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Better Decision Making",
      description: "Real-time insights and analytics enable informed strategic decisions.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security features protect your sensitive business data.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Systems designed to grow with your business and adapt to changing needs.",
    },
  ]

  const industries = [
    { name: "Manufacturing", icon: <Settings className="w-6 h-6" /> },
    { name: "Healthcare", icon: <Shield className="w-6 h-6" /> },
    { name: "Finance", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Retail", icon: <Users className="w-6 h-6" /> },
    { name: "Education", icon: <Database className="w-6 h-6" /> },
    { name: "Government", icon: <Workflow className="w-6 h-6" /> },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Enterprise <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive enterprise systems that streamline operations, boost productivity, and drive business
                growth. Transform your organization with integrated solutions designed for scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Get Enterprise Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="glass">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Database className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise Excellence</h3>
                    <p className="text-muted-foreground">
                      Integrated systems that unify your business operations and accelerate growth.
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
              Our Enterprise <span className="text-primary">Offerings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete enterprise solutions that integrate seamlessly with your existing infrastructure and scale with
              your business.
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

      {/* Industries We Serve */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our enterprise solutions are tailored to meet the unique requirements of various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="glass glass-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{industry.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
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
              Enterprise <span className="text-primary">Benefits</span>
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

      {/* Implementation Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Implementation <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to enterprise system implementation that minimizes disruption and maximizes success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Analyze current systems and business requirements" },
              { step: "2", title: "Planning", description: "Design implementation strategy and timeline" },
              { step: "3", title: "Implementation", description: "Deploy and configure enterprise systems" },
              { step: "4", title: "Training & Support", description: "User training and ongoing support services" },
            ].map((phase, index) => (
              <Card key={index} className="glass text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
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
                    Fragmented systems across 15 facilities leading to inefficiencies and poor visibility into
                    operations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Implemented integrated ERP system with real-time dashboards, automated workflows, and centralized
                    data management.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Results</h4>
                  <p className="text-foreground font-semibold text-sm">
                    40% increase in operational efficiency, 30% reduction in processing time, unified global operations.
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
                Transform Your <span className="text-primary">Enterprise</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ready to streamline your operations and boost productivity? Let's discuss how our enterprise solutions
                can transform your business.
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
