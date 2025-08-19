"use client"

import { useEffect, useState } from "react"
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
import { useSite } from "@/context/siteContext"
import axios from "axios"
import { set } from "react-hook-form"

export default function ProjectsPage() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [activeTab, setActiveTab] = useState("completed")
  const [completedProjects, setcCmpletedProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const {
      projectData,
      setProjectData,
      
    } = useSite();

    useEffect(() => {
        const fetchData = async () => {
          if (!projectData) {
            try {
              const res = await axios.get(`${apiBaseUrl}/api/projects`);
              setProjectData(res.data.projects);
              console.log("Project data", res.data.projects);
            } catch (error) {
              console.log(error);
            }
          }
    
          if (projectData) {
            const tempCompleted = projectData.filter(
              (project) => project.status === "completed"
            )
            const tempOngoing = projectData.filter(
              (project) => project.status === "ongoing"
            )
            setcCmpletedProjects(tempCompleted);
            setOngoingProjects(tempOngoing)
          }
        };
    
        fetchData();
      }, [projectData, setProjectData]);

  
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
          <Image
            fill
            alt="referenceImage"
            className="object-cover"
            src="./industry-banner.jpg"
          />
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
                Transforming infrastructure through innovative surveying,
                mapping, and technology solutions across India.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-950/80">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-center space-x-1">
              <div className="flex glass-card rounded-full p-2">
                <Button
                  onClick={() => setActiveTab("completed")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === "completed"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white"
                  }`}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Completed Projects ({completedProjects.length})
                </Button>
                <Button
                  onClick={() => setActiveTab("ongoing")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === "ongoing"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 bg-white"
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
      {projectData && <section className="pt-10 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "completed"
              ? completedProjects
              : ongoingProjects
            ).map((project, index) => (
              <AnimatedSection key={project._id} delay={index * 100}>
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
                        <div className="text-white">{project.icon}</div>
                        <span className="text-white text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge - Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge
                        className={`${getStatusColor(
                          project.status
                        )} bg-white/20 backdrop-blur-sm border border-white/20`}
                      >
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(project.status)}
                          <span>{project.status}</span>
                        </div>
                      </Badge>
                    </div>

                    {/* Project Title - Bottom Left */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-0 right-0 p-6 text-white">
                        <div className="space-y-4">
                          <p className="text-sm leading-relaxed opacity-90 line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex items-center space-x-2 text-sm opacity-80">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-sm">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                                >
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
      </section>}

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
              {
                number: `${completedProjects.length}+`,
                label: "Projects Completed",
                icon: <CheckCircle className="w-8 h-8" />,
              },
              {
                number: `${ongoingProjects.length}+`,
                label: "Active Projects",
                icon: <Clock className="w-8 h-8" />,
              },
              {
                number: "15+",
                label: "States Covered",
                icon: <MapPin className="w-8 h-8" />,
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: <Award className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="glass-card glass-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{stat.icon}</div>
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-repeat opacity-50"
          style={{
            backgroundImage: `url("/home-banner-last.png")`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how our geospatial solutions can streamline your
              operations, enhance data accuracy, and support informed
              decision-making.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
