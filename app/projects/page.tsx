"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import {
  ArrowRight,
  Filter,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Code,
  Database,
  Globe,
  HardDrive,
} from "lucide-react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Hardware", "Software", "Enterprise", "GIS"]

  const projects = [
    {
      id: 1,
      title: "Global Manufacturing ERP Transformation",
      client: "Global Manufacturing Corp",
      category: "Enterprise",
      duration: "18 months",
      location: "Mumbai, India",
      team: "25 professionals",
      image: "/placeholder.svg?height=400&width=600&text=Manufacturing+ERP",
      logo: "/placeholder.svg?height=60&width=120&text=GMC",
      challenge:
        "Legacy systems across 15 facilities causing operational inefficiencies and poor visibility into manufacturing processes.",
      solution:
        "Implemented comprehensive ERP system with real-time dashboards, automated workflows, and integrated supply chain management.",
      results: [
        "40% increase in operational efficiency",
        "30% reduction in processing time",
        "Unified operations across all facilities",
        "Real-time visibility into production metrics",
      ],
      technologies: ["SAP", "Azure", "Power BI", "REST APIs"],
      testimonial: {
        quote:
          "TechCulture Solutions transformed our entire manufacturing operation. The results exceeded our expectations.",
        author: "Sarah Johnson",
        position: "CTO, Global Manufacturing Corp",
      },
    },
    {
      id: 2,
      title: "Smart City GIS Analytics Platform",
      client: "Smart City Initiative",
      category: "GIS",
      duration: "12 months",
      location: "Bangalore, India",
      team: "18 professionals",
      image: "/placeholder.svg?height=400&width=600&text=Smart+City+GIS",
      logo: "/placeholder.svg?height=60&width=120&text=SCI",
      challenge:
        "Urban planners needed comprehensive GIS platform to optimize city development and infrastructure planning.",
      solution:
        "Developed integrated GIS platform with spatial analysis, real-time data visualization, and predictive modeling capabilities.",
      results: [
        "25% reduction in planning time",
        "Improved decision-making accuracy",
        "Enhanced citizen services delivery",
        "Optimized resource allocation",
      ],
      technologies: ["ArcGIS", "PostGIS", "React", "Node.js"],
      testimonial: {
        quote:
          "The GIS solution revolutionized our urban planning process. Exceptional technical expertise and support.",
        author: "Michael Chen",
        position: "Director, Smart City Initiative",
      },
    },
    {
      id: 3,
      title: "FinTech Mobile Banking Platform",
      client: "FinTech Startup",
      category: "Software",
      duration: "8 months",
      location: "Delhi, India",
      team: "15 professionals",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Banking",
      logo: "/placeholder.svg?height=60&width=120&text=FTS",
      challenge:
        "Needed scalable mobile banking app to compete with established financial institutions and serve millions of users.",
      solution:
        "Built cross-platform mobile application with advanced security features, real-time transactions, and intuitive user experience.",
      results: [
        "2M+ active users in 6 months",
        "4.8-star app store rating",
        "99.9% uptime achieved",
        "50% faster transaction processing",
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      testimonial: {
        quote: "From concept to deployment, their team delivered beyond our expectations. Highly recommended!",
        author: "Emily Rodriguez",
        position: "CEO, FinTech Startup",
      },
    },
    {
      id: 4,
      title: "Healthcare Infrastructure Modernization",
      client: "Regional Healthcare Network",
      category: "Hardware",
      duration: "14 months",
      location: "Chennai, India",
      team: "20 professionals",
      image: "/placeholder.svg?height=400&width=600&text=Healthcare+Infrastructure",
      logo: "/placeholder.svg?height=60&width=120&text=RHN",
      challenge:
        "Aging IT infrastructure across 12 hospitals causing system downtime and affecting patient care quality.",
      solution:
        "Comprehensive infrastructure overhaul with redundant systems, cloud integration, and 24/7 monitoring capabilities.",
      results: [
        "99.8% system uptime achieved",
        "60% reduction in IT maintenance costs",
        "Improved patient data security",
        "Faster diagnostic processing",
      ],
      technologies: ["VMware", "Cisco", "Dell EMC", "Microsoft Azure"],
      testimonial: {
        quote: "The infrastructure transformation significantly improved our operational efficiency and patient care.",
        author: "Dr. Rajesh Gupta",
        position: "CIO, Regional Healthcare Network",
      },
    },
    {
      id: 5,
      title: "E-commerce Analytics Dashboard",
      client: "Retail Giant",
      category: "Software",
      duration: "6 months",
      location: "Hyderabad, India",
      team: "12 professionals",
      image: "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
      logo: "/placeholder.svg?height=60&width=120&text=RG",
      challenge:
        "Needed comprehensive analytics platform to track sales performance, customer behavior, and inventory management.",
      solution:
        "Developed real-time analytics dashboard with AI-powered insights, predictive analytics, and automated reporting.",
      results: [
        "35% improvement in inventory turnover",
        "Real-time sales tracking",
        "Automated reporting system",
        "Enhanced customer insights",
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      testimonial: {
        quote: "The analytics platform provided invaluable insights that transformed our business operations.",
        author: "Anita Sharma",
        position: "VP Analytics, Retail Giant",
      },
    },
    {
      id: 6,
      title: "Supply Chain Management System",
      client: "Logistics Corporation",
      category: "Enterprise",
      duration: "10 months",
      location: "Pune, India",
      team: "22 professionals",
      image: "/placeholder.svg?height=400&width=600&text=Supply+Chain",
      logo: "/placeholder.svg?height=60&width=120&text=LC",
      challenge:
        "Complex supply chain operations needed integrated system for tracking, optimization, and real-time visibility.",
      solution:
        "Implemented end-to-end supply chain management system with IoT integration, route optimization, and predictive maintenance.",
      results: [
        "30% reduction in delivery time",
        "25% cost savings in operations",
        "Real-time shipment tracking",
        "Improved customer satisfaction",
      ],
      technologies: ["Oracle", "IoT Sensors", "Machine Learning", "Mobile Apps"],
      testimonial: {
        quote:
          "The supply chain system revolutionized our logistics operations and improved customer satisfaction significantly.",
        author: "Vikram Singh",
        position: "Operations Director, Logistics Corporation",
      },
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hardware":
        return <HardDrive className="w-5 h-5" />
      case "Software":
        return <Code className="w-5 h-5" />
      case "Enterprise":
        return <Database className="w-5 h-5" />
      case "GIS":
        return <Globe className="w-5 h-5" />
      default:
        return <CheckCircle className="w-5 h-5" />
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        </ParallaxSection>

        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight">
                Our <span className="text-gradient">Work</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Solutions That Deliver Results - Explore our portfolio of successful projects and transformative
                solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-6 py-3 transition-all duration-300 ${
                    activeFilter === filter ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 200}>
                <Card className="glass-card glass-hover overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 glass-card px-3 py-1 rounded-full">
                        {getCategoryIcon(project.category)}
                        <span className="text-white text-sm font-medium">{project.category}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={project.client}
                        width={100}
                        height={50}
                        className="opacity-90"
                      />
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-primary font-medium mb-4">{project.client}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 glass-card text-xs font-medium text-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-4 rounded-2xl mb-6">
                      <blockquote className="text-sm text-foreground mb-2 italic">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">{project.testimonial.author}</span>
                        <span className="mx-1">•</span>
                        <span>{project.testimonial.position}</span>
                      </div>
                    </div>

                    <Button className="btn-primary w-full rounded-full" asChild>
                      <Link href={`/projects/${project.id}`}>
                        View Full Case Study <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                Project <span className="text-gradient">Impact</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8" /> },
              { number: "98%", label: "Success Rate", icon: <Award className="w-8 h-8" /> },
              { number: "150+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
              { number: "40%", label: "Average ROI Improvement", icon: <TrendingUp className="w-8 h-8" /> },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="glass-card glass-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{stat.icon}</div>
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <Card className="glass-card glow max-w-4xl mx-auto">
              <CardContent className="p-16">
                <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                  Ready to Start Your <span className="text-gradient">Project</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss your requirements and create a solution that drives real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full" asChild>
                    <Link href="/contact">
                      Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" className="btn-secondary px-10 py-4 text-lg font-semibold rounded-full" asChild>
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
