"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Code, Database, Globe, HardDrive, Users, Clock, Award, Zap } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <HardDrive className="w-12 h-12" />,
      title: "Hardware Solutions",
      description: "Enterprise-grade hardware infrastructure designed for scalability, reliability, and performance.",
      features: [
        "Server Infrastructure Design & Implementation",
        "Network Equipment & Configuration",
        "Storage Solutions & Data Management",
        "Hardware Maintenance & Support",
        "Performance Optimization",
        "Disaster Recovery Planning",
      ],
      href: "/services/hardware",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and objectives.",
      features: [
        "Mobile App Development (iOS & Android)",
        "Web Application Development",
        "Enterprise Software Solutions",
        "Legacy System Modernization",
        "API Development & Integration",
        "Quality Assurance & Testing",
      ],
      href: "/services/software",
      color: "bg-green-500/20 text-green-400",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise systems that streamline operations and boost productivity.",
      features: [
        "ERP System Implementation",
        "CRM Solutions & Customization",
        "Business Intelligence & Analytics",
        "Workflow Automation",
        "Data Migration & Integration",
        "Training & Change Management",
      ],
      href: "/services/enterprise",
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "GIS Solutions",
      description: "Advanced Geographic Information Systems for spatial data analysis and visualization.",
      features: [
        "Custom GIS Application Development",
        "Spatial Data Analysis & Modeling",
        "Interactive Mapping Solutions",
        "Location Intelligence Platforms",
        "GPS & Survey Data Integration",
        "Geospatial Database Management",
      ],
      href: "/services/gis",
      color: "bg-orange-500/20 text-orange-400",
    },
  ]

  const usps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified professionals with deep industry expertise and proven track record.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "We deliver projects on time and within budget, ensuring your business stays on track.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure exceptional results.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and best practices for optimal solutions.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Driving Your Digital Future with Comprehensive Technology Services
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From hardware infrastructure to custom software development, we provide end-to-end technology solutions
              that transform businesses and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="glass glass-hover group">
                <CardContent className="p-10">
                  <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">Key Offerings:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                    variant="outline"
                    asChild
                  >
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unique approach combines technical expertise with business understanding to deliver solutions that
              truly make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <Card key={index} className="glass text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{usp.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{usp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{usp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Consult & Analyze</h3>
                <p className="text-muted-foreground">
                  We understand your business needs, analyze requirements, and design the optimal solution architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Develop & Build</h3>
                <p className="text-muted-foreground">
                  Our expert team develops and builds your solution using cutting-edge technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="glass text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Deploy & Support</h3>
                <p className="text-muted-foreground">
                  We deploy your solution seamlessly and provide ongoing support to ensure optimal performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Get <span className="text-primary">Started</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your project requirements and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
