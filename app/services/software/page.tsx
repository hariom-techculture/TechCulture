"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Database,
  Cog,
  Zap,
  Shield,
  Users,
  Clock,
} from "lucide-react"

export default function SoftwarePage() {
  const offerings = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["Native iOS & Android Apps", "Cross-Platform Solutions", "UI/UX Design", "App Store Optimization"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: [
        "Progressive Web Apps",
        "Single Page Applications",
        "E-commerce Platforms",
        "Content Management Systems",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Enterprise Software",
      description: "Scalable enterprise solutions designed to streamline business operations.",
      features: [
        "Custom Business Applications",
        "Workflow Management",
        "Integration Solutions",
        "Reporting & Analytics",
      ],
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Legacy Modernization",
      description: "Transform outdated systems into modern, efficient, and maintainable solutions.",
      features: ["System Migration", "Code Refactoring", "Architecture Modernization", "Cloud Migration"],
    },
  ]

  const technologies = [
    { name: "React", logo: "/placeholder.svg?height=40&width=40&text=React" },
    { name: "Node.js", logo: "/placeholder.svg?height=40&width=40&text=Node" },
    { name: "Python", logo: "/placeholder.svg?height=40&width=40&text=Python" },
    { name: "Java", logo: "/placeholder.svg?height=40&width=40&text=Java" },
    { name: "Flutter", logo: "/placeholder.svg?height=40&width=40&text=Flutter" },
    { name: "AWS", logo: "/placeholder.svg?height=40&width=40&text=AWS" },
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Faster Time-to-Market",
      description: "Agile development methodologies ensure rapid delivery without compromising quality.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Scalable",
      description: "Built with security best practices and designed to scale with your business growth.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with user experience and accessibility in mind.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Comprehensive maintenance and support services to keep your software running smoothly.",
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
                Software <span className="text-primary">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Custom software solutions tailored to your business needs and objectives. From mobile apps to enterprise
                systems, we build software that drives innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="glass">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Code className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Innovation Through Code</h3>
                    <p className="text-muted-foreground">
                      Transforming ideas into powerful software solutions that drive business success.
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
              Our Development <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we deliver comprehensive software development services across all platforms
              and technologies.
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

      {/* Technologies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technologies We <span className="text-primary">Master</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof software
              solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity"
                />
                <span className="text-sm text-muted-foreground">{tech.name}</span>
              </div>
            ))}
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

      {/* Development Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Development <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven agile methodology that ensures quality, transparency, and timely delivery of your software
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Discovery", description: "Requirements gathering and project planning" },
              { step: "2", title: "Design", description: "UI/UX design and system architecture" },
              { step: "3", title: "Development", description: "Agile development with regular updates" },
              { step: "4", title: "Testing", description: "Comprehensive QA and user testing" },
              { step: "5", title: "Deployment", description: "Launch and ongoing maintenance" },
            ].map((phase, index) => (
              <Card key={index} className="glass text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
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
                  src="/placeholder.svg?height=60&width=200&text=FinTech+Startup"
                  alt="FinTech Startup"
                  className="h-12 mx-auto opacity-80"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                  <p className="text-muted-foreground text-sm">
                    Needed a scalable mobile banking app to compete with established financial institutions and serve
                    2M+ users.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Developed a cross-platform mobile app with advanced security features, real-time transactions, and
                    intuitive UX.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Results</h4>
                  <p className="text-foreground font-semibold text-sm">
                    2M+ active users in 6 months, 4.8-star app store rating, 99.9% uptime achieved.
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
                Ready to Build Your <span className="text-primary">Software Solution</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your project requirements and create a custom software solution that drives your business
                forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
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
