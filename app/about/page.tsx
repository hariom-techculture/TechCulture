"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"

import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Shield, 
  Zap, 
  TrendingUp, 
  Map, 
  Satellite, 
  Globe, 
  Database,
  Camera,
  Play,
  Star,
  MessageCircle,
  ChefHat,
  Trophy,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Bot
} from "lucide-react"

export default function AboutPage() {

  const services = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "GIS Implementation",
      description: "We develop custom GIS tools and apps for mapping, spatial analysis, real-time data collection, and smart infrastructure management.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "GIS Tool/App Development",
      description: "Custom geospatial applications and tools tailored to your specific business needs and workflows.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Field Surveying & Mapping",
      description: "Comprehensive surveying services using advanced technology for accurate spatial data collection.",
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Remote Sensing Solutions",
      description: "Satellite imagery analysis and remote sensing technologies for environmental monitoring and assessment.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Foundation & First Steps",
      description: "Started our journey with a vision to revolutionize GIS technology and spatial data analysis."
    },
    {
      year: "2019",
      title: "Technology Breakthrough",
      description: "Developed our first proprietary mapping algorithm that improved location accuracy by 300%."
    },
    {
      year: "2020",
      title: "Market Expansion",
      description: "Expanded operations to 5 countries and established partnerships with major tech companies."
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Integrated machine learning capabilities into our GIS platform for predictive spatial analytics."
    },
    {
      year: "2022",
      title: "Global Recognition",
      description: "Received the Innovation Award for Excellence in Geospatial Technology from the International GIS Society."
    },
    {
      year: "2023",
      title: "Sustainability Focus",
      description: "Launched green mapping initiatives to help organizations reduce their environmental footprint."
    }
  ];

  const stats = [
    { number: "500+", label: "Completed Projects" },
    { number: "50+", label: "Expert Team Members" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years of Experience" },
  ]

  return (
    <div className="">
      <section className="pb-20 pt-30 px-6 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            fill
            alt="referenceImage"
            className="object-cover"
            src="./about-banner.png"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className=" max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
                About Our <span className="text-gradient">Company</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                TechCulture Solutions Private Limited is a leading provider of
                cutting-edge solutions in GIS, Remote Sensing, and Geospatial
                Technologies.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div className="relative">
                <Image
                  src="https://imgs.search.brave.com/BvEbduhIXv-32Rh0QUqg2f2sw8K7urlzjqJnsII5QQo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzk3LzgxLzc3/LzM2MF9GXzEzOTc4/MTc3NTNfVGo4RVFa/NW13d0hpY0lKQkI1/aGEyVFI4SG1hdzNO/dGguanBn"
                  alt="TechCulture Solutions Team"
                  width={600}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  We believe in the transformative power of{" "}
                  <span className="text-gradient">geospatial intelligence</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We are a leading geospatial technology company specializing in
                  GIS, Remote Sensing, and Surveying Services. We deliver
                  innovative spatial solutions that help clients transform
                  location-based data into actionable insights.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Established with the vision to bring precision and
                  intelligence to spatial decision-making, we have successfully
                  delivered projects across government, infrastructure,
                  utilities, and environmental sectors. Our team is driven by
                  domain expertise, innovation, and a commitment to quality.
                </p>

                {/* Statistics */}
                {/* <div className="grid grid-cols-2 gap-6 mt-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Our <span className="text-gradient">Vision</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We aim to shape the future of geospatial intelligence and
                  digital transformation through innovation, integrity, and
                  impact.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  At TechCulture Solutions, we envision becoming a pioneering
                  force in the GIS and digital mapping sector by integrating
                  technology, strategy, and people-first values. Our vision is
                  to empower public utilities, infrastructure, and enterprises
                  with data-driven, sustainable solutions.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">
                    🚀 LONG TERM HOPE
                  </h3>
                  <p className="text-gray-600">
                    To become India's most trusted GIS-based service provider
                    for urban utilities, smart infrastructure, and remote
                    sensing solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm mt-3">
                  <h3 className="font-bold text-gray-900 mb-3">
                    🎯 COMPANY GOALS
                  </h3>
                  <p className="text-gray-600">
                    T Delivering scalable, accurate, and innovative geospatial
                    solutions across India and abroad through cutting-edge
                    technology and a skilled workforce.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="relative flex justify-end">
                <Image
                  src="https://imgs.search.brave.com/BvEbduhIXv-32Rh0QUqg2f2sw8K7urlzjqJnsII5QQo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzk3LzgxLzc3/LzM2MF9GXzEzOTc4/MTc3NTNfVGo4RVFa/NW13d0hpY0lKQkI1/aGEyVFI4SG1hdzNO/dGguanBn"
                  alt="Our Vision for the Future"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div> */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full">
                    <Play className="w-8 h-8 text-orange-500" />
                  </div>
                </div> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are driven by innovation and powered by intelligence. Our
                mission is to deliver technology-driven solutions that enable
                smarter governance, efficient infrastructure, and a sustainable
                future.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
            <AnimatedSection delay={200}>
              <Card className="glass-nav-glow backdrop-blur-3xl bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Bot className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    AI-Enabled Geospatial Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    Harnessing the power of Artificial Intelligence to automate
                    spatial analysis, pattern detection, and decision-making in
                    urban planning, disaster management, and land-use
                    optimization.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <Card className="glass-nav-glow backdrop-blur-3xl bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Digitizing Infrastructure for Smarter Cities
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    Empowering smart cities and public utilities with integrated
                    GIS, remote sensing, IoT, and AI for intelligent asset
                    management, real-time monitoring, and predictive
                    maintenance.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <Card className="glass-nav-glow backdrop-blur-3xl bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Insight-Driven Governance
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    Delivering data-driven solutions to government and
                    enterprise clients using AI algorithms for advanced data
                    visualization, analytics, and risk assessment to support
                    evidence-based policy making.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <Card className="glass-nav-glow backdrop-blur-3xl bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Satellite className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Innovating with Drones & Automation
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    Leveraging drone technology combined with AI-powered
                    analytics for high-precision mapping, surveillance, and
                    large-scale environmental monitoring.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At TechCulture Solutions Private Limited, we deliver modern
                geospatial technology, software, and field engineering solutions
                tailored to your sector. Our services are designed to streamline
                operations, enhance data accuracy, and support informed
                decision-making.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="glass-nav-glow backdrop-blur-3xl bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-xl transition-shadow h-full text-center">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-orange-500">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* our journey // Company timeline */}
      <section className="pt-20 pb-48 px-6 bg-gradient-to-br from-sky-400 via-sky-200 to-sky-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-52">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
                Navigate through our path of innovation and growth in GIS
                technology.
              </p>
            </div>
          </AnimatedSection>

          {/* Road Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Road Path SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 1200"
              preserveAspectRatio="none"
              style={{ minHeight: "1000px" }}
            >
              {/* Road Background */}
              <path
                d="M50 50 Q150 150 100 250 T200 400 Q250 500 150 600 T100 800 Q150 900 200 1000 T150 1150"
                stroke="#374151"
                strokeWidth="60"
                fill="none"
                className="opacity-80"
              />

              {/* Road Surface */}
              <path
                d="M50 50 Q150 150 100 250 T200 400 Q250 500 150 600 T100 800 Q150 900 200 1000 T150 1150"
                stroke="#4B5563"
                strokeWidth="40"
                fill="none"
              />

              {/* Road Center Lines */}
              <path
                d="M50 50 Q150 150 100 250 T200 400 Q250 500 150 600 T100 800 Q150 900 200 1000 T150 1150"
                stroke="#FBBF24"
                strokeWidth="2"
                fill="none"
                strokeDasharray="15,10"
                className="animate-pulse"
              />
            </svg>

            {/* Milestone Markers */}
            <div className="relative z-20 space-y-32">
              {milestones.map((milestone, index) => {
                const positions = [
                  { x: "15%", side: "right" },
                  { x: "20%", side: "left" },
                  { x: "55%", side: "right" },
                  { x: "20%", side: "left" },
                  { x: "38%", side: "right" },
                  { x: "35%", side: "left" },
                ];

                const position = positions[index];

                return (
                  <AnimatedSection key={index} delay={index * 300}>
                    <div
                      className="relative flex items-center"
                      style={{ marginLeft: position.x }}
                    >
                      {/* Road Marker */}
                      <div className="relative">
                        {/* GPS Pin */}
                        <div
                          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center relative z-30 animate-bounce"
                          style={{ animationDelay: `${index * 0.5}s` }}
                        >
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>

                        {/* Milestone Card */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-1/2 ${
                            position.side === "left" ? "right-20" : "left-20"
                          } w-80`}
                        >
                          <Card className="bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <CardContent className="p-6">
                              {/* Year Badge */}
                              <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-4 shadow-lg">
                                {milestone.year}
                              </div>

                              {/* Content */}
                              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                {milestone.title}
                              </h3>
                              <p className=" leading-relaxed">
                                {milestone.description}
                              </p>

                              {/* Distance Marker */}
                              <div className="mt-4 text-xs text-gray-400 flex items-center">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                Milestone {index + 1}
                              </div>
                            </CardContent>
                          </Card>

                          {/* Connection Line */}
                          <div
                            className={`absolute top-1/2 transform -translate-y-1/2 ${
                              position.side === "left"
                                ? "left-full"
                                : "right-full"
                            } w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Road Signs */}
            <div className="absolute top-10 right-10 z-20">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg transform rotate-3 shadow-lg">
                <div className="text-sm font-bold">Innovation Highway</div>
              </div>
            </div>

            <div className="absolute bottom-10 -left-30 z-20">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg transform -rotate-2 shadow-lg">
                <div className="text-sm font-bold">Future Ahead</div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        `}</style>
      </section>
    </div>
  );
}