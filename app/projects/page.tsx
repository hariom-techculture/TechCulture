"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Building,
  Satellite,
  Wifi,
  Database,
  Globe,
  HardDrive,
  Code,
  Award,
  Users,
  TrendingUp,
  ExternalLink,
} from "lucide-react"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("completed")

  const completedProjects = [
    {
      id: 1,
      title: "Underground Utility Detection",
      description: "GPR EPL and DGPS survey at Chittapur - Depth Upto 3 Mtrs, Corridor Upto 10 Mtrs",
      category: "Survey & Mapping",
      location: "Chittapur",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Satellite className="w-6 h-6" />,
      technologies: ["GPR", "EPL", "DGPS"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Door to Door Consumer Survey",
      description: "Multiple ULBs of UP under JJM Project",
      category: "Survey & Mapping",
      location: "Uttar Pradesh",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Users className="w-6 h-6" />,
      technologies: ["Mobile Survey", "GIS Mapping"],
      status: "Completed"
    },
    {
      id: 3,
      title: "APT Survey",
      description: "Multiple States (Tamil Nadu, Kerala, MP, NE)",
      category: "Survey & Mapping",
      location: "Pan India",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["APT Survey", "Multi-State"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Topographical Survey - Ratangarh",
      description: "Water and Sewer Network using DGPS and preparation of ABD Drawings for L&T Constructions",
      category: "Infrastructure",
      location: "Ratangarh",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Building className="w-6 h-6" />,
      technologies: ["DGPS", "ABD Drawings", "L&T"],
      status: "Completed"
    },
    {
      id: 5,
      title: "Topographical Survey - Sirohi",
      description: "Water and Sewer Network using DGPS and preparation of ABD Drawings for L&T Constructions",
      category: "Infrastructure",
      location: "Sirohi",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Building className="w-6 h-6" />,
      technologies: ["DGPS", "ABD Drawings", "L&T"],
      status: "Completed"
    },
    {
      id: 6,
      title: "Topographical Survey - Fatehpur",
      description: "Water and Sewer Network using DGPS and preparation of ABD Drawings for L&T Constructions",
      category: "Infrastructure",
      location: "Fatehpur",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Building className="w-6 h-6" />,
      technologies: ["DGPS", "ABD Drawings", "L&T"],
      status: "Completed"
    },
    {
      id: 7,
      title: "Topographical Survey - Laxmangarh",
      description: "Water and Sewer Network using DGPS and preparation of ABD Drawings for L&T Constructions",
      category: "Infrastructure",
      location: "Laxmangarh",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Building className="w-6 h-6" />,
      technologies: ["DGPS", "ABD Drawings", "L&T"],
      status: "Completed"
    },
    {
      id: 8,
      title: "Topographical Survey - Bharatpur",
      description: "Water and Sewer Network using DGPS and preparation of ABD Drawings for L&T Constructions",
      category: "Infrastructure",
      location: "Bharatpur",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Building className="w-6 h-6" />,
      technologies: ["DGPS", "ABD Drawings", "L&T"],
      status: "Completed"
    },
    {
      id: 9,
      title: "Topographical Survey - Gangapur",
      description: "Water and Sewer Network using DGPS and preparation of ABD Drawings for L&T Constructions",
      category: "Infrastructure",
      location: "Gangapur",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Building className="w-6 h-6" />,
      technologies: ["DGPS", "ABD Drawings", "L&T"],
      status: "Completed"
    },
    {
      id: 10,
      title: "Topographical Survey - Hindaun",
      description: "Water and Sewer Network using DGPS and preparation of ABD Drawings for L&T Constructions",
      category: "Infrastructure",
      location: "Hindaun",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Building className="w-6 h-6" />,
      technologies: ["DGPS", "ABD Drawings", "L&T"],
      status: "Completed"
    },
    {
      id: 11,
      title: "OFC Route Survey",
      description: "Route survey and As Built Map preparation of OFC connectivity",
      category: "Telecommunications",
      location: "Multiple Locations",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Wifi className="w-6 h-6" />,
      technologies: ["OFC Survey", "As Built Maps"],
      status: "Completed"
    },
    {
      id: 12,
      title: "Property Survey & GIS Mapping - UK",
      description: "Door to door property survey and GIS mapping, Image procurement, portal development and deployment for calculation of labour cess",
      category: "Government",
      location: "Uttarakhand",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Database className="w-6 h-6" />,
      technologies: ["GIS Mapping", "Portal Development", "Labour Cess"],
      status: "Completed"
    }
  ]

  const ongoingProjects = [
    {
      id: 13,
      title: "BharatNet Feasibility Survey - Punjab",
      description: "Conducting Feasibility survey by using DGPS and 360 videography under BharatNet project",
      category: "Government",
      location: "Punjab",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Wifi className="w-6 h-6" />,
      technologies: ["DGPS", "360 Videography", "BharatNet"],
      status: "Ongoing"
    },
    {
      id: 14,
      title: "BharatNet Feasibility Survey - Uttarakhand",
      description: "Conducting Feasibility survey by using DGPS and 360 videography under BharatNet project",
      category: "Government",
      location: "Uttarakhand",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Wifi className="w-6 h-6" />,
      technologies: ["DGPS", "360 Videography", "BharatNet"],
      status: "Ongoing"
    },
    {
      id: 15,
      title: "GPR Survey - JJM Project UP",
      description: "Conducting GPR Survey for detection of underground utilities and preparation of Drawings under JJM Project in multiple cities of Uttar Pradesh",
      category: "Government",
      location: "Uttar Pradesh",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Satellite className="w-6 h-6" />,
      technologies: ["GPR Survey", "JJM Project", "Multiple Cities"],
      status: "Ongoing"
    },
    {
      id: 16,
      title: "DFCC Railway Track Survey",
      description: "Survey of Underground Fiber and Components (Poles / Splice / Chambers / Loops, etc.) using GPS-enabled Mobile Application along DFCC Railway Track from Rewari to Makarpura",
      category: "Railway",
      location: "Rewari to Makarpura",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <HardDrive className="w-6 h-6" />,
      technologies: ["GPS Mobile App", "DFCC Railway", "Fiber Survey"],
      status: "Ongoing"
    },
    {
      id: 17,
      title: "QR Code Asset Survey - DFCC",
      description: "QR Code Pasting and Survey of Assets with various Photo's along with Lat. Long and assets description thru Mobile application from Rewari to Makarpura DFCC Railway track",
      category: "Railway",
      location: "Rewari to Makarpura",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Code className="w-6 h-6" />,
      technologies: ["QR Codes", "Mobile App", "Asset Survey"],
      status: "Ongoing"
    },
    {
      id: 18,
      title: "RailTel Underground Fiber Survey",
      description: "Survey of Underground Fiber and Components (Poles, Splice, Chambers, Loops, etc.) using DGPS and EPL (Electronic Pipe Locator). As-built Drawings (ABD) to be prepared",
      category: "Telecommunications",
      location: "Multiple Locations",
      image: "https://imgs.search.brave.com/YrW0F4EHHKu_RWV2Bxj8VOEKBM5PPADe8RMvvMTLJrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8wMi9w/aWxvdC1wcm9qZWN0/LXdvcmQtY29uY2Vw/dHMtYmFubmVyLXZl/Y3Rvci0yOTExMjkw/Mi5qcGc",
      icon: <Wifi className="w-6 h-6" />,
      technologies: ["DGPS", "EPL", "RailTel", "ABD Drawings"],
      status: "Ongoing"
    }
  ]

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  }

  const getStatusIcon = (status: string) => {
    return status === "Completed" ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative  overflow-hidden pb-20 pt-30 px-6">
        {/* <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        </ParallaxSection> */}
        <div className="absolute inset-0">
          <Image fill alt="referenceImage" className="object-cover" src="./industry-banner.jpg" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
                Our <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-200">
                Transforming infrastructure through innovative surveying, mapping, and technology solutions across India.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="pt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-center mb-16">
              <div className="flex glass-card rounded-full p-2">
                <Button
                  onClick={() => setActiveTab("completed")}
                  className={`rounded-full px-8 py-3 transition-all duration-300 ${
                    activeTab === "completed" 
                      ? "btn-primary" 
                      : "bg-transparent hover:bg-white/10 border text-black"
                  }`}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Completed Projects ({completedProjects.length})
                </Button>
                <Button
                  onClick={() => setActiveTab("ongoing")}
                  className={`rounded-full px-8 py-3 transition-all duration-300 ${
                    activeTab === "ongoing" 
                      ? "btn-primary" 
                      : "bg-transparent hover:bg-white/10 border text-black"
                  }`}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Ongoing Projects ({ongoingProjects.length})
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pt-10 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "completed" ? completedProjects : ongoingProjects).map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Category Badge - Top Left */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        <div className="text-white">
                          {project.icon}
                        </div>
                        <span className="text-white text-sm font-medium">{project.category}</span>
                      </div>
                    </div>
                    
                    {/* Status Badge - Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={`${getStatusColor(project.status)} bg-white/20 backdrop-blur-sm border border-white/20`}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(project.status)}
                          <span>{project.status}</span>
                        </div>
                      </Badge>
                    </div>
                    
                    {/* Project Title - Bottom Left */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-0 right-0 p-6 text-white">
                        <div className="space-y-4">
                          <p className="text-sm leading-relaxed opacity-90 line-clamp-3">{project.description}</p>
                          
                          <div className="flex items-center space-x-2 text-sm opacity-80">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Technologies</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                Project <span className="text-gradient">Impact</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: `${completedProjects.length}+`, label: "Projects Completed", icon: <CheckCircle className="w-8 h-8" /> },
              { number: `${ongoingProjects.length}+`, label: "Active Projects", icon: <Clock className="w-8 h-8" /> },
              { number: "15+", label: "States Covered", icon: <MapPin className="w-8 h-8" /> },
              { number: "98%", label: "Client Satisfaction", icon: <Award className="w-8 h-8" /> },
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
      {/* <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <Card className="glass-card glow max-w-4xl mx-auto">
              <CardContent className="p-16">
                <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                  Ready to Start Your <span className="text-gradient">Project</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss your surveying, mapping, or infrastructure requirements and create a solution that delivers results.
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
      </section> */}
    </div>
  )
}
