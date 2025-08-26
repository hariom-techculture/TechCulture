"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";
import { ParallaxSection } from "@/components/parallax-section";
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
  X,
  Building,
  Satellite,
} from "lucide-react";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { Marquee } from "@/components/marquee";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import { useSite } from "@/context/siteContext";
import axios from "axios";

interface Service {
  _id?: string;
  title?: string;
  description?: string;
  features?: string[];
  image?: string;
  category?: string;
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [slicedServiceData, setSlicedServiceData] = useState<Service[]>([]);
  const [slicedProjectData, setSlicedProjectData] = useState([]);
  const [enquiryForm, setEnquiryFrom] = useState({
    name : "",
    email : "",
    phone: "",
    message: "",
  })
  const {
    projectData,
    setProjectData,
    serviceData,
    setServiceData,
    testimonialData,
    setTestimonialData,
    settingsData,
    setSettingsData,
  } = useSite();

  useEffect(() => {
    async function fetchData() {
      if (!settingsData) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
          );
          if (res.status === 200) {
            setSettingsData(res.data.data);
            console.log("im data in the page ", res.data.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [settingsData, setSettingsData]);

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
        const slicedData = projectData.slice(0, 4);
        console.log("project sliced data", slicedData);
        setSlicedProjectData(slicedData);
      }
    };

    fetchData();
  }, [projectData, setProjectData]);

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceData) {
        try {
          const res = await axios.get(`${apiBaseUrl}/api/services`);
          setServiceData(res.data.services);
        } catch (error) {
          console.log(error);
        }
      }
      // Ensure serviceData sliced and can render only 4
      if (serviceData) {
        const slicedData = serviceData.slice(0, 4);
        console.log("Service sliced data", slicedData);
        setSlicedServiceData(slicedData);
      }
    };

    fetchServiceData();
  }, [serviceData, setServiceData]);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      if (!testimonialData) {
        try {
          const res = await axios.get(`${apiBaseUrl}/api/testimonials`);
          setTestimonialData(res.data.testimonials);
          console.log("Testimonial data", res.data.testimonials);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchTestimonialData();
  }, [testimonialData, setTestimonialData]);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setShowCookieConsent(false);
    }

    // Show enquiry popup after 45 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenEnquiryPopup");
      if (!hasSeenPopup) {
        setShowEnquiryPopup(true);
        sessionStorage.setItem("hasSeenEnquiryPopup", "true");
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const servicesIcon = [
    {
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Network className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const firstColumn =
    !testimonialData || testimonialData.length === 0
      ? []
      : testimonialData.slice(0, 3);
  const secondColumn =
    !testimonialData || testimonialData.length === 0
      ? []
      : testimonialData.slice(3, 6);
  const thirdColumn =
    !testimonialData || testimonialData.length === 0
      ? []
      : testimonialData.slice(0, 3);


    const handleInputChange = (e)=>{
      setEnquiryFrom({
        ...enquiryForm,
        [e.target.name]: e.target.value,
      });
    }

    const handleSubmit = async (e)=>{
      try{
        e.preventDefault();
        const res = await axios.post(`${apiBaseUrl}/api/enquiries`, enquiryForm);
        if (res.status === 201) {
          alert("Enquiry submitted successfully!");
          setEnquiryFrom({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setShowEnquiryPopup(false);
        } else {
          alert("Failed to submit enquiry. Please try again.");
        }
      }
      catch (error) {
        console.error("Error submitting enquiry form:", error);
      }
    }

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <video
            className="-z-50 w-full h-full object-cover"
            src="https://cdn.pixabay.com/video/2025/04/19/272860_large.mp4"
            autoPlay
            loop
            muted
          ></video>
          {/* Enhanced overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/35"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <h1 className="mb-8 sm:mb-10 leading-[0.9] tracking-tight">
              <span
                className="block font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textShadow:
                    "3px 3px 12px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 1), 0px 0px 20px rgba(0, 0, 0, 0.5)",
                  letterSpacing: "-0.04em",
                }}
              >
                TRANSFORMING
              </span>
              <span
                className="block font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textShadow:
                    "3px 3px 12px rgba(0, 0, 0, 0.9), 1px 1px 3px rgba(0, 0, 0, 1), 0px 0px 20px rgba(0, 0, 0, 0.5)",
                  letterSpacing: "-0.03em",
                }}
              >
                INFRASTRUCTURE
              </span>
              <span className="block bg-gradient-to-b from-white  to-gray-800 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                THROUGH TECHNOLOGY
              </span>
            </h1>

            {/* Accent line */}
            <div
              className="mx-auto mb-6 sm:mb-8 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{
                width: "150px",
              }}
            ></div>

            {/* Subtitle */}
            <div
              className="text-xs sm:text-sm md:text-base text-white/70 font-mono tracking-[0.2em] uppercase font-bold"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              PRECISION • INNOVATION • TRANSFORMATION
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* about us section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
            {/* Image Section */}
            <AnimatedSection animation="fadeInLeft">
              <div className="relative flex ">
                <Image
                  src="/about2.png"
                  alt="TechCulture Solutions Team"
                  width={500} // Increased from 350
                  height={350}
                  className="rounded-lg w-full h-auto max-w-md sm:max-w-lg object-cover shadow-2xl border border-white/20 backdrop-blur-sm"
                />
              </div>
            </AnimatedSection>

            {/* Text Section */}
            <AnimatedSection animation="fadeInRight">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                  We believe in the transformative power of{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    geospatial intelligence
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  We are a leading geospatial technology company specializing in
                  GIS, Remote Sensing, and Surveying Services. We deliver
                  innovative spatial solutions that help clients transform
                  location-based data into actionable insights.
                </p>

                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Established with the vision to bring precision and
                  intelligence to spatial decision-making, we have successfully
                  delivered projects across government, infrastructure,
                  utilities, and environmental sectors. Our team is driven by
                  domain expertise, innovation, and a commitment to quality.
                </p>

                <Button
                  variant="default"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section className="py-12 px-4 from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Geospatial Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From GIS platforms to 3D modeling, we provide end-to-end
                solutions that transform how you manage spatial data and
                infrastructure.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData &&
              slicedServiceData.map((service, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 100}
                  animation="fadeInUp"
                >
                  <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50 z-10" />
                    {/* Colored border at top */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${servicesIcon[index].color} z-20`}
                    ></div>

                    {/* Service Image Background */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-60 z-10"></div> */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          service.image || "/contact-banner.png"
                        })`,
                        filter: "brightness(0.9) contrast(1.1)",
                      }}
                    ></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 dark:bg-black/20 transform xl:translate-y-[90%] xl:group-hover:translate-y-0 transition-transform duration-500 z-10"></div>

                    <CardContent className="relative h-full p-6 flex flex-col z-10">
                      <div className="flex items-start">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${servicesIcon[index].color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                        >
                          <span className="text-white">
                            {servicesIcon[index].icon}
                          </span>
                        </div>
                        <h3 className="flex-1 text-lg font-bold text-white ml-4 group-hover:text-blue-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <div className="mt-auto transform xl:translate-y-[100%] xl:group-hover:translate-y-0 transition-transform duration-500 delay-100 translate-y-0 opacity-100 xl:opacity-0 xl:group-hover:opacity-100">
                        <p className="text-sm text-gray-300 mt-6 mb-4 leading-relaxed backdrop-blur-sm">
                          {service.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-xs text-gray-300"
                            >
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="w-full text-sm font-medium bg-white/10 border-white/20 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                          asChild
                        >
                          <Link href={service.image}>
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
          </div>
          <AnimatedSection
            animation="fadeInUp"
            delay={4 * 100}
            className="mt-12 text-center"
          >
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <Link href="/services">
                Explore All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Modern Success Stories Section */}
      <section className="py-24 px-4 bg-gradient-to-br bg-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              >
                Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Real Projects,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">
                  Real Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how we've transformed infrastructure and operations
                across India with our innovative solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projectData &&
              slicedProjectData.map((project, index) => (
                <AnimatedSection key={project._id} delay={index * 100}>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ">
                    <div className="relative h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50 z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover xl:group-hover:scale-110 xl:transition-transform duration-700"
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

                      {/* Project Title - Bottom Left */}
                      <div className="absolute bottom-4 left-4 right-4 z-30">
                        <h3 className=" text-xl font-bold text-white drop-shadow-lg ">
                          {project.title}
                        </h3>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent xl:opacity-0 xl:group-hover:opacity-100 xl:transition-opacity duration-500 z-20">
                        <div className="absolute bottom-12 left-0 right-0 p-6 text-white z-20">
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

          <AnimatedSection animation="fadeInUp" className="mt-16 text-center">
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <WorkExperienceSection />

      {/* Modern Testimonials Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                Client Testimonials
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                What Our{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex justify-center gap-6 w-full">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </section>
      {/* Technology Partners Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <Badge
                variant="secondary"
                className="mb-4 px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              >
                Technology Partners
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by Leading{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technology Providers
                </span>
              </h2>
              <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We collaborate with the world’s top technology companies to
                deliver robust, scalable, and innovative solutions for our
                clients.
              </p>
            </div>
          </AnimatedSection>

          {/* <LogoCarousel columnCount={5} logos={partners} /> */}
          {settingsData && (
            <Marquee>
              {settingsData.clients.map((Logo, index) => (
                <div
                  key={index}
                  className="relative min-h-[80px] w-[180px] mx-8 flex items-center justify-start"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={Logo}
                      alt={Logo}
                      width={120}
                      height={60}
                      className="w-auto h-16 object-contain "
                    />
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  </div>
                </div>
              ))}
            </Marquee>
          )}
        </div>
      </section>

      {/* Modern Contact Form Section */}

      <section className="py-12 px-4 relative overflow-hidden min-h-screen bg-white">
        {/* Enhanced background with gradients */}
        <div className="absolute inset-0 bg-gradient-to-br bg-white dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/50"></div>

        <div className="max-w-7xl mx-auto relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  h-full">
            {/* Left side with enhanced content */}
            <AnimatedSection animation="fadeInLeft" className="h-full">
              <div className="relative h-full">
                {/* Floating elements */}
                {/* <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl rotate-12 filter blur-lg"></div> */}
                {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-md"></div> */}

                <div className="relative z-10 mb-8">
                  {/* Tech-inspired subtitle */}
                  <div
                    className="text-sm font-mono tracking-[0.2em] uppercase text-blue-600/80 dark:text-blue-400/80 mb-4"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    GET IN TOUCH
                  </div>

                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Let's Start Your{" "}
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Digital Transformation
                    </span>
                  </h2>

                  <p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Ready to revolutionize your business operations? Our team of
                    geospatial experts is here to transform your vision into
                    reality with cutting-edge technology solutions.
                  </p>

                  {/* Feature highlights */}
                </div>

                {/* Enhanced image max-w-7xl */}
                <div className="relative mt-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-xl transform rotate-1"></div>
                  <Image
                    src="/contact-banner.png"
                    alt="Digital Transformation Visualization"
                    width={600}
                    height={400}
                    className="relative rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right side with enhanced glass form */}
            <AnimatedSection animation="fadeInRight" className="h-full">
              <div className="relative h-full">
                {/* Glass morphism max-w-7xl */}
                <div className="relative p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden h-full">
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-2xl"></div>

                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>

                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>

                  {/* Form content */}
                  <div className="relative z-10 mt-5">
                    <div className="text-center mb-8">
                      <h3
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        Start Your Journey
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Fill out the form below and we'll get back to you within
                        24 hours
                      </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={enquiryForm.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-xl border border-white/30 dark:border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={enquiryForm.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-xl border border-white/30 dark:border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={enquiryForm.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-white/30 dark:border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                          Project Details
                        </label>
                        <textarea
                          rows={5}
                          id="message"
                          name="message"
                          value={enquiryForm.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border border-white/30 dark:border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none"
                          placeholder="Tell us about your project requirements, timeline, and goals..."
                        ></textarea>
                      </div>

                      {/* Enhanced submit button */}
                      <button
                        type="submit"
                        className="w-full relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group"
                        style={{
                          background:
                            "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                        }}
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Send Message</span>
                          <svg
                            className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      {/* Trust indicators */}
                      <div className="text-center pt-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-2">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Your information is secure and encrypted</span>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
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
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how our geospatial solutions can streamline your
              operations, enhance data accuracy, and support informed
              decision-making.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 glass-nav dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We use cookies to enhance your experience. By continuing to
                visit this site you agree to our use of cookies.{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  setShowCookieConsent(false);
                  localStorage.setItem("cookieConsent", "false");
                }}
              >
                Decline
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                onClick={() => {
                  setShowCookieConsent(false);
                  localStorage.setItem("cookieConsent", "true");
                }}
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Enquiry Form */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowEnquiryPopup(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <X />
            </button>

            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Get a Free Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leave your details and we'll get back to you shortly!
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleInputChange}
                    value={enquiryForm.name}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    value={enquiryForm.email}
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    id="phone"
                    name="phone"
                    onChange={handleInputChange}
                    value={enquiryForm.phone}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleInputChange}
                    value={enquiryForm.message}
                    placeholder="How can we help you?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
