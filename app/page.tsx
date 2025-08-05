"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
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
  Layers,
  Building2,
  Network,
  MapPin,
  Cpu,
  Smartphone,
  BarChart3,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react"
import { TestimonialsColumn } from "@/components/testimonials-columns-1"
import { LogoCarousel, LogoColumn } from "@/components/logo-carousel"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "GIS Platform Development",
      description: "Custom GIS platforms for data integration, mapping, and spatial analysis enabling smart decision-making and real-time monitoring.",
      features: ["Data Integration", "Real-time Monitoring", "Smart Decision Making", "Asset Management"],
      href: "/services",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "3D Geospatial Modelling",
      description: "3D geospatial models and BIM solutions using GIS, drone, and LiDAR data enhanced with AI for smart cities and infrastructure planning.",
      features: ["3D Modeling", "BIM Solutions", "AI Enhancement", "Smart Cities"],
      href: "/services",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Urban Planning & Development",
      description: "GIS, 3D modeling, and AI solutions for smarter infrastructure, zoning, land use, and sustainable growth for cities and public agencies.",
      features: ["Infrastructure Planning", "Zoning Analysis", "Land Use Optimization", "Sustainable Growth"],
      href: "/services",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Utility Asset Management",
      description: "Tailored solutions for electricity, water, telecom, gas & heating industries with uptime resilience and mobile field app support.",
      features: ["Uptime Resilience", "Auto-generated Schematics", "Conflict-free Edits", "Mobile Field Apps"],
      href: "/services",
      color: "from-orange-500 to-red-500",
    },
  ]

  const caseStudies = [
    {
      client: "L&T Constructions - Infrastructure Projects",
      challenge: "Complex water and sewer network mapping across multiple cities requiring precise DGPS surveying and ABD drawings",
      solution: "Comprehensive topographical survey using DGPS technology and preparation of detailed As-Built Drawings (ABD) for infrastructure planning",
      result: "Successfully completed 8 major infrastructure projects across Rajasthan with 100% accuracy in utility mapping",
     id: 1, img: "https://placehold.co/120x60/0052CC/ffffff?text=L&T",
      category: "Infrastructure",
      impact: "8 Projects",
    },
    {
      client: "BharatNet - Government Initiative",
      challenge: "Feasibility survey for nationwide broadband connectivity requiring DGPS and 360° videography across multiple states",
      solution: "Advanced DGPS surveying combined with 360° videography technology for comprehensive route planning and feasibility assessment",
      result: "Covered 2 major states (Punjab & Uttarakhand) with 95% accuracy in route optimization and infrastructure planning",
     id: 1, img: "https://placehold.co/120x60/FF6B35/ffffff?text=BharatNet",
      category: "Government",
      impact: "2 States",
    },
    {
      client: "RailTel - Railway Infrastructure",
      challenge: "Underground fiber survey and asset management along railway tracks requiring precise GPS mapping and ABD drawings",
      solution: "Comprehensive underground fiber survey using DGPS and EPL technology with mobile application for real-time data collection",
      result: "Successfully mapped 500+ km of railway track with 98% accuracy in underground utility detection",
     id: 1, img: "https://placehold.co/120x60/1F4E79/ffffff?text=RailTel",
      category: "Railway",
      impact: "500+ KM",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Expert Team", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> },
  ]

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
  {
    quote: "Their cloud migration strategy was seamless and efficient. We've seen a 40% improvement in operations.",
    author: "David Lee",
    position: "IT Manager, LogisticsPro Inc.",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=davidlee",
  },
  {
    quote: "Excellent team with deep technical knowledge. Our app now runs faster and is more secure.",
    author: "Priya Desai",
    position: "Product Manager, EduTech Labs",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=priyadesai",
  },
  {
    quote: "Their attention to detail and communication set them apart from other vendors we've worked with.",
    author: "James Smith",
    position: "Operations Director, RetailEdge",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=jamessmith",
  },
  {
    quote: "Outstanding support and rapid delivery. We met all our project deadlines ahead of schedule.",
    author: "Aisha Khan",
    position: "Program Lead, HealthConnect",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=aishakhan",
  },
  {
    quote: "We trusted them with our AI integration project, and the results exceeded expectations.",
    author: "Liam Martinez",
    position: "Chief Innovation Officer, AI Fusion Ltd.",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=liammartinez",
  },
  {
    quote: "Their DevOps solution streamlined our deployment process and improved overall stability.",
    author: "Natalie Wong",
    position: "Lead Engineer, CodeCraft Systems",
    rating: 5,
    avatar: "https://i.pravatar.cc/60?u=nataliewong",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const partners = [
  { name: "Planet", id: 1, img: "http://techculture.solutions/wp-content/uploads/2019/01/Planet.png" },
  { name: "Parrot", id: 2, img: "http://techculture.solutions/wp-content/uploads/2019/01/Parrot.png" },
  { name: "Leica", id: 3, img: "http://techculture.solutions/wp-content/uploads/2019/01/Leica.png" },
  { name: "Images", id: 4, img: "http://techculture.solutions/wp-content/uploads/2019/01/images.png" },
  { name: "ESRI", id: 5, img: "http://techculture.solutions/wp-content/uploads/2019/01/ESRI.png" },
  { name: "Erdas", id: 6, img: "http://techculture.solutions/wp-content/uploads/2019/01/Erdas.png" },
  { name: "DJI", id: 7, img: "http://techculture.solutions/wp-content/uploads/2019/01/DJI_logo.png" },
  { name: "DigitalGlobe", id: 8, img: "http://techculture.solutions/wp-content/uploads/2019/01/DigitalGlobe-White-Logo.png" },
  { name: "DG", id: 9, img: "http://techculture.solutions/wp-content/uploads/2019/01/DG.png" },
  { name: "Airbus", id: 10, img: "http://techculture.solutions/wp-content/uploads/2019/01/Airbus.png" },
];
  // const stats = [
  //   { number: "500+", label: "Projects Delivered", icon: <Target className="w-6 h-6" /> },
  //   { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
  //   { number: "10+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
  //   { number: "50+", label: "Expert Team", icon: <Users className="w-6 h-6" /> },
  // ]

  // const firstColumn = testimonials.slice(0, 3)
  // const secondColumn = testimonials.slice(0, 3)
  // const thirdColumn = testimonials.slice(0, 3)

  // const partners = [
  //   { name: "Microsoft", id: 1, img: "https://placehold.co/120x60/0078D4/ffffff?text=Microsoft" },
  //   { name: "Oracle", id: 1, img: "https://placehold.co/120x60/F80000/ffffff?text=Oracle" },
  //   { name: "AWS", id: 1, img: "https://placehold.co/120x60/FF9900/ffffff?text=AWS" },
  //   { name: "Google Cloud", id: 1, img: "https://placehold.co/120x60/4285F4/ffffff?text=Google" },
  //   { name: "IBM", id: 1, img: "https://placehold.co/120x60/0066CC/ffffff?text=IBM" },
  //   { name: "SAP", id: 1, img: "https://placehold.co/120x60/003366/ffffff?text=SAP" },
  // ]

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        {/* Animated Background */}
        <div className="absolute inset-0 ">
          {/* <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
          <video className="-z-50 opacity-55" src="https://cdn.pixabay.com/video/2025/04/19/272860_large.mp4" autoPlay loop={true}  muted={true} ></video>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp" delay={0}>
            {/* <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading Geospatial Technology Solutions
            </Badge> */}
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Transforming
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Infrastructure
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Through Technology
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We deliver cutting-edge geospatial solutions that power smart cities, 
              optimize infrastructure, and drive digital transformation across industries.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Project
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all duration-300">
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div> */}
          </AnimatedSection>

          {/* Stats Preview */}
          {/* <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection> */}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* Modern Services Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Our Solutions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Geospatial Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From GIS platforms to 3D modeling, we provide end-to-end solutions that transform how you manage spatial data and infrastructure.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-full">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white">{service.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 p-0 h-auto" asChild>
                      <Link href={service.href}>
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Success Stories Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Real Projects, <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Real Results</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how we've transformed infrastructure and operations across India with our innovative solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 150} animation="fadeInUp">
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <CardContent className="p-6 relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs font-medium">
                        {study.category}
                      </Badge>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {study.impact}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {study.client}
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Challenge</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Result</h4>
                        <p className="text-sm font-semibold text-green-600 dark:text-green-400 line-clamp-2">{study.result}</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full text-sm font-medium" asChild>
                      <Link href="/projects">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div
            className="absolute inset-0 bg-fixed bg-center bg-repeat opacity-50"
            style={{
            backgroundImage: `url("https://imgs.search.brave.com/lbjzsd5eP2_Of6sM-raUr9gsobGxtVHIJSCLqxIaSjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/NTMzNzUwNC9waG90/by9hdXRvbWF0aW9u/LW9mLWJ1c2luZXNz/LW9yLXJvYm90aWMt/cHJvY2Vzcy1ycGEt/dGVjaG5vbG9neS10/cmFuc2Zlci1vZi1k/YXRhLWJldHdlZW4t/YXBwbGljYXRpb24u/anBnP2I9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz1XT1o3Q2Uz/R2pZLW5uQTFTdXNn/aVZQY0t3Y0I2VjN1/bkZzT3RCOHVnQVln/PQ")`,
            backgroundAttachment: 'fixed',
            backgroundRepeat : "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
            }}
        ></div>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our track record speaks for itself. Here's what we've achieved together.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="scaleIn">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <span className="text-white">{stat.icon}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Testimonials Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Client Testimonials
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex justify-center gap-6 w-full">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Technology Partners
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by Leading <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Providers</span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We collaborate with the world’s top technology companies to deliver robust, scalable, and innovative solutions for our clients.
              </p>
            </div>
          </AnimatedSection>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="fadeInUp">
                <div className="glass-card glass-hover p-6 rounded-2xl flex items-center justify-center h-28 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 contain-content">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div> */}
          
            <LogoCarousel columnCount={5} logos={partners} />
          
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div
            className="absolute inset-0 bg-fixed bg-center bg-repeat opacity-50"
            style={{
            backgroundImage: `url("https://imgs.search.brave.com/lbjzsd5eP2_Of6sM-raUr9gsobGxtVHIJSCLqxIaSjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/NTMzNzUwNC9waG90/by9hdXRvbWF0aW9u/LW9mLWJ1c2luZXNz/LW9yLXJvYm90aWMt/cHJvY2Vzcy1ycGEt/dGVjaG5vbG9neS10/cmFuc2Zlci1vZi1k/YXRhLWJldHdlZW4t/YXBwbGljYXRpb24u/anBnP2I9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz1XT1o3Q2Uz/R2pZLW5uQTFTdXNn/aVZQY0t3Y0I2VjN1/bkZzT3RCOHVnQVln/PQ")`,
            backgroundAttachment: 'fixed',
            backgroundRepeat : "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
            }}
        ></div>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Infrastructure</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how our geospatial solutions can streamline your operations, enhance data accuracy, and support informed decision-making.
            </p>
            
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
