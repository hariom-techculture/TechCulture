"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
// import {GlowingCard } from "@/components/GlowingCard"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  HardDrive,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Target,
  Clock,
} from "lucide-react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

const services = [
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "Hardware Solutions",
    description: "Enterprise-grade hardware infrastructure designed for scalability and reliability.",
    features: ["Server Infrastructure", "Network Equipment", "Storage Solutions"],
    href: "/services/hardware",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs and objectives.",
    features: ["Mobile App Development", "Enterprise Software", "Legacy Modernization"],
    href: "/services/software",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise systems that streamline operations and boost productivity.",
    features: ["ERP Systems", "CRM Solutions", "Business Intelligence"],
    href: "/services/enterprise",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "GIS Solutions",
    description: "Advanced Geographic Information Systems for spatial data analysis and visualization.",
    features: ["Mapping Solutions", "Spatial Analysis", "Location Intelligence"],
    href: "/services/gis",
    image: "https://picsum.photos/400/300?random=4",
  },
];

const caseStudies = [
  {
    client: "Global Manufacturing Corp",
    challenge: "Legacy system modernization",
    solution: "Cloud-native enterprise platform",
    result: "40% increase in operational efficiency",
    logo: "https://placehold.co/120x60/505050/ffffff?text=GMC",
    image: "https://picsum.photos/300/200?random=5",
  },
  {
    client: "Smart City Initiative",
    challenge: "Urban planning optimization",
    solution: "Advanced GIS analytics platform",
    result: "25% reduction in planning time",
    logo: "https://placehold.co/120x60/505050/ffffff?text=SCI",
    image: "https://picsum.photos/300/200?random=6",
  },
  {
    client: "FinTech Startup",
    challenge: "Scalable mobile banking app",
    solution: "Cross-platform mobile solution",
    result: "2M+ active users in 6 months",
    logo: "https://placehold.co/120x60/505050/ffffff?text=FTS",
    image: "https://picsum.photos/300/200?random=7",
  },
];

const testimonials = [
  {
    quote:
      "TechCulture Solutions transformed our entire IT infrastructure. Their expertise and dedication are unmatched.",
    author: "Sarah Johnson",
    position: "CTO, Global Manufacturing Corp",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=sarahjohnson",
  },
  {
    quote: "The GIS solution they developed revolutionized our urban planning process. Exceptional work!",
    author: "Michael Chen",
    position: "Director, Smart City Initiative",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=michaelchen",
  },
  {
    quote: "From concept to deployment, their team delivered beyond our expectations. Highly recommended!",
    author: "Emily Rodriguez",
    position: "CEO, FinTech Startup",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=emilyrodriguez",
  },
];

const partners = [
  { name: "Planet", logo: "http://techculture.solutions/wp-content/uploads/2019/01/Planet.png" },
  { name: "Parrot", logo: "http://techculture.solutions/wp-content/uploads/2019/01/Parrot.png" },
  { name: "Leica", logo: "http://techculture.solutions/wp-content/uploads/2019/01/Leica.png" },
  { name: "Images", logo: "http://techculture.solutions/wp-content/uploads/2019/01/images.png" },
  { name: "ESRI", logo: "http://techculture.solutions/wp-content/uploads/2019/01/ESRI.png" },
  { name: "Erdas", logo: "http://techculture.solutions/wp-content/uploads/2019/01/Erdas.png" },
  { name: "DJI", logo: "http://techculture.solutions/wp-content/uploads/2019/01/DJI_logo.png" },
  { name: "DigitalGlobe", logo: "http://techculture.solutions/wp-content/uploads/2019/01/DigitalGlobe-White-Logo.png" },
  { name: "DG", logo: "http://techculture.solutions/wp-content/uploads/2019/01/DG.png" },
  { name: "Airbus", logo: "http://techculture.solutions/wp-content/uploads/2019/01/Airbus.png" },
];
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "10+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Expert Team", icon: <Users className="w-6 h-6" /> },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div>
      {/* Hero Section */}
      <section className=" py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 top-0 left-0 opacity-50">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div> */}
          <video src="https://cdn.pixabay.com/video/2025/04/19/272860_large.mp4" autoPlay loop={true}  muted={true} ></video>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-gradient">
                Innovate, Integrate, <span className="text-gradient">Succeed</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-semibold text-black">
                Your Partner in Digital Transformation. We deliver cutting-edge technology solutions that drive growth
                and innovation for enterprises worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="btn-primary px-8 py-4 text-lg font-semibold rounded-full" asChild>
                  <Link href="/services">
                    Explore Our Solutions <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-full bg-[#009ce5]" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card enableGlow glowColor="blue" className="glass-nav-glow backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
      </AnimatedSection>

      {/* Services Overview */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                Our <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology services designed to accelerate your digital transformation journey
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 200} animation="fadeInUp">
                <Card className="glass-nav backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl" >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                        <div className="text-primary">{service.icon}</div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="btn-primary w-full rounded-full" asChild>
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card> 
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                  Why Choose <span className="text-gradient">TechCulture</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  With over a decade of experience in delivering innovative technology solutions, we've helped hundreds
                  of enterprises transform their operations and achieve unprecedented growth.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Expert Team",
                      desc: "Certified professionals with deep industry expertise",
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6" />,
                      title: "Proven Results",
                      desc: "Track record of successful implementations",
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Reliable Support",
                      desc: "24/7 support and maintenance services",
                    },
                    {
                      icon: <Award className="w-6 h-6" />,
                      title: "Quality Assured",
                      desc: "Rigorous testing and quality control processes",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                <div className="glass-card rounded-3xl p-12 glow">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-8 flex items-center justify-center">
                      <Zap className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-6">Innovation Through Technology</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We combine cutting-edge technology with deep industry knowledge to deliver solutions that not only
                      meet your current needs but also prepare you for future challenges.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                Success <span className="text-gradient">Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped businesses transform their operations and achieve remarkable results
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="glass-nav backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.client}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Image
                        src={study.logo || "/placeholder.svg"}
                        alt={study.client}
                        width={80}
                        height={40}
                        className="opacity-90"
                      />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">{study.client}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Result</h4>
                        <p className="text-foreground font-semibold">{study.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card> 
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="text-center mt-16">
              <Button className="btn-secondary rounded-full px-8 py-4" asChild>
                <Link href="/projects">
                  View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="glass-nav backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl">
                <CardContent className="p-16 text-center">
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-3xl font-medium text-foreground mb-10 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <div className="text-primary font-semibold text-lg">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card> 
            </AnimatedSection>

            <div className="flex justify-center mt-10 space-x-4">
              <Button
                className="btn-secondary rounded-full w-12 h-12"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                className="btn-secondary rounded-full w-12 h-12"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold font-poppins text-foreground mb-8">
                Trusted <span className="text-gradient">Technology Partners</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center items-center gap-16">
            {partners.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="glass-card glass-hover p-6 rounded-2xl">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <Card className="glass-nav backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl">
              <CardContent className="p-16">
                <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                  Ready to Transform Your <span className="text-gradient">Business</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss how we can help you achieve your digital transformation goals. Get in touch with our
                  experts today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full" asChild>
                    <Link href="/contact">
                      Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
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
