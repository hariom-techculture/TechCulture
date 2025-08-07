"use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { AnimatedSection } from "@/components/animated-section"
// import { ParallaxSection } from "@/components/parallax-section"
// import {
//   ArrowRight,
//   MapPin,
//   Clock,
//   Users,
//   Search,
//   Briefcase,
//   GraduationCap,
//   Heart,
//   Coffee,
//   Zap,
//   Shield,
//   TrendingUp,
//   Award,
//   Code,
//   Database,
//   Globe,
// } from "lucide-react"

// export default function CareersPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedDepartment, setSelectedDepartment] = useState("All")
//   const [selectedLocation, setSelectedLocation] = useState("All")

//   const departments = ["All", "Engineering", "Sales", "Marketing", "Operations", "HR"]
//   const locations = ["All", "Mumbai", "Bangalore", "Delhi", "Remote"]

//   const benefits = [
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Health & Wellness",
//       description: "Comprehensive health insurance, wellness programs, and mental health support.",
//     },
//     {
//       icon: <GraduationCap className="w-8 h-8" />,
//       title: "Learning & Development",
//       description: "Continuous learning opportunities, certifications, and skill development programs.",
//     },
//     {
//       icon: <Coffee className="w-8 h-8" />,
//       title: "Work-Life Balance",
//       description: "Flexible working hours, remote work options, and generous vacation policies.",
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Recognition & Rewards",
//       description: "Performance bonuses, employee recognition programs, and career advancement opportunities.",
//     },
//   ]

//   const jobs = [
//     {
//       id: 1,
//       title: "Senior Full Stack Developer",
//       department: "Engineering",
//       location: "Mumbai",
//       type: "Full-time",
//       experience: "5-8 years",
//       description:
//         "Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and cloud platforms.",
//       requirements: [
//         "5+ years of full-stack development experience",
//         "Proficiency in React, Node.js, and TypeScript",
//         "Experience with cloud platforms (AWS/Azure)",
//         "Strong problem-solving and communication skills",
//       ],
//       posted: "2 days ago",
//     },
//     {
//       id: 2,
//       title: "GIS Solutions Architect",
//       department: "Engineering",
//       location: "Bangalore",
//       type: "Full-time",
//       experience: "7-10 years",
//       description: "Lead the design and implementation of complex GIS solutions for smart city and enterprise clients.",
//       requirements: [
//         "7+ years of GIS development experience",
//         "Expertise in ArcGIS, QGIS, and PostGIS",
//         "Experience with spatial databases and web mapping",
//         "Strong analytical and project management skills",
//       ],
//       posted: "1 week ago",
//     },
//     {
//       id: 3,
//       title: "DevOps Engineer",
//       department: "Engineering",
//       location: "Remote",
//       type: "Full-time",
//       experience: "4-6 years",
//       description:
//         "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability and scalability.",
//       requirements: [
//         "4+ years of DevOps experience",
//         "Proficiency in Docker, Kubernetes, and Terraform",
//         "Experience with AWS/Azure cloud platforms",
//         "Knowledge of monitoring and logging tools",
//       ],
//       posted: "3 days ago",
//     },
//     {
//       id: 4,
//       title: "Business Development Manager",
//       department: "Sales",
//       location: "Delhi",
//       type: "Full-time",
//       experience: "6-9 years",
//       description:
//         "Drive business growth by identifying new opportunities, building client relationships, and closing enterprise deals.",
//       requirements: [
//         "6+ years of B2B sales experience",
//         "Experience in IT services or technology sales",
//         "Strong networking and relationship building skills",
//         "Proven track record of meeting sales targets",
//       ],
//       posted: "5 days ago",
//     },
//     {
//       id: 5,
//       title: "UI/UX Designer",
//       department: "Engineering",
//       location: "Mumbai",
//       type: "Full-time",
//       experience: "3-5 years",
//       description:
//         "Create intuitive and engaging user experiences for our web and mobile applications across various industries.",
//       requirements: [
//         "3+ years of UI/UX design experience",
//         "Proficiency in Figma, Adobe Creative Suite",
//         "Strong portfolio showcasing design projects",
//         "Understanding of user-centered design principles",
//       ],
//       posted: "1 week ago",
//     },
//     {
//       id: 6,
//       title: "Digital Marketing Specialist",
//       department: "Marketing",
//       location: "Bangalore",
//       type: "Full-time",
//       experience: "2-4 years",
//       description:
//         "Develop and execute digital marketing strategies to increase brand awareness and generate qualified leads.",
//       requirements: [
//         "2+ years of digital marketing experience",
//         "Experience with SEO, SEM, and social media marketing",
//         "Knowledge of marketing automation tools",
//         "Strong analytical and creative skills",
//       ],
//       posted: "4 days ago",
//     },
//   ]

//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch =
//       job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.description.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
//     const matchesLocation = selectedLocation === "All" || job.location === selectedLocation
//     return matchesSearch && matchesDepartment && matchesLocation
//   })

//   const getDepartmentIcon = (department: string) => {
//     switch (department) {
//       case "Engineering":
//         return <Code className="w-4 h-4" />
//       case "Sales":
//         return <TrendingUp className="w-4 h-4" />
//       case "Marketing":
//         return <Globe className="w-4 h-4" />
//       case "Operations":
//         return <Database className="w-4 h-4" />
//       case "HR":
//         return <Users className="w-4 h-4" />
//       default:
//         return <Briefcase className="w-4 h-4" />
//     }
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden pb-20 pt-30 px-6 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50">
//         <div className="absolute inset-0">
//           <Image fill alt="careers-banner" className="object-cover" src="/contact-banner.png" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
//         </div>

//         <div className="relative container mx-auto text-center">
//           <AnimatedSection animation="fadeInUp" delay={0}>
//             <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
//               Join Our <span className="text-gradient">Team</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
//               Build the future of technology with us. Discover exciting career opportunities and be part of a team
//               that's transforming businesses worldwide.
//             </p>
//             <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full" asChild>
//               <Link href="#open-positions">
//                 View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
//               </Link>
//             </Button>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Why Join Us */}
//       <section className="py-32 px-6">
//         <div className="container mx-auto">
//           <AnimatedSection>
//             <div className="text-center mb-20">
//               <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
//                 Why Choose <span className="text-gradient">TechCulture</span>?
//               </h2>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                 We believe in creating an environment where innovation thrives, careers grow, and people make a real
//                 impact.
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <AnimatedSection key={index} delay={index * 200}>
//                 <Card className="glass-card glass-hover text-center group">
//                   <CardContent className="p-8">
//                     <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <div className="text-primary">{benefit.icon}</div>
//                     </div>
//                     <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
//                     <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
//                   </CardContent>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Company Culture */}
//       <section className="py-32 px-6">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-20 items-center">
//             <AnimatedSection animation="fadeInLeft">
//               <div>
//                 <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
//                   Our <span className="text-gradient">Culture</span>
//                 </h2>
//                 <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
//                   <p>
//                     At TechCulture Solutions, we foster a culture of innovation, collaboration, and continuous learning.
//                     Our team is our greatest asset, and we're committed to creating an environment where everyone can
//                     thrive.
//                   </p>
//                   <p>
//                     We believe in work-life balance, professional growth, and making a meaningful impact through
//                     technology. Join us and be part of a team that's shaping the future of digital transformation.
//                   </p>
//                 </div>
//                 <div className="grid sm:grid-cols-2 gap-6 mt-8">
//                   {[
//                     {
//                       icon: <Zap className="w-6 h-6" />,
//                       title: "Innovation First",
//                       desc: "Encouraging creative solutions and new ideas",
//                     },
//                     {
//                       icon: <Users className="w-6 h-6" />,
//                       title: "Team Collaboration",
//                       desc: "Working together to achieve common goals",
//                     },
//                     {
//                       icon: <TrendingUp className="w-6 h-6" />,
//                       title: "Career Growth",
//                       desc: "Clear paths for professional development",
//                     },
//                     {
//                       icon: <Shield className="w-6 h-6" />,
//                       title: "Job Security",
//                       desc: "Stable employment with competitive benefits",
//                     },
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-start space-x-3">
//                       <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center flex-shrink-0">
//                         <div className="text-primary">{item.icon}</div>
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
//                         <p className="text-muted-foreground text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection animation="fadeInRight">
//               <div className="relative">
//                 <Card className="glass-card glow overflow-hidden">
//                   <div className="relative h-96">
//                     <Image
//                       src="/placeholder.svg?height=400&width=600&text=Team+Culture"
//                       alt="Team Culture"
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                       <div className="glass-card p-6 rounded-2xl">
//                         <h3 className="text-xl font-bold text-white mb-2">Join 50+ Professionals</h3>
//                         <p className="text-white/80 text-sm">
//                           Be part of a diverse team of experts passionate about technology and innovation.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section id="open-positions" className="py-32 px-6">
//         <div className="container mx-auto">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
//                 Open <span className="text-gradient">Positions</span>
//               </h2>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                 Explore exciting career opportunities and find the perfect role that matches your skills and
//                 aspirations.
//               </p>
//             </div>
//           </AnimatedSection>

//           {/* Search and Filters */}
//           <AnimatedSection>
//             <div className="glass-card p-8 rounded-3xl mb-12">
//               <div className="flex flex-col lg:flex-row gap-6">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                   <Input
//                     placeholder="Search positions..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pl-12 glass-card border-white/20 dark:border-white/10 bg-transparent"
//                   />
//                 </div>
//                 <div className="flex flex-wrap gap-4">
//                   <select
//                     value={selectedDepartment}
//                     onChange={(e) => setSelectedDepartment(e.target.value)}
//                     className="glass-card border-white/20 dark:border-white/10 bg-transparent rounded-lg px-4 py-3 text-foreground min-w-[150px]"
//                   >
//                     {departments.map((dept) => (
//                       <option key={dept} value={dept} className="bg-background text-foreground">
//                         {dept}
//                       </option>
//                     ))}
//                   </select>
//                   <select
//                     value={selectedLocation}
//                     onChange={(e) => setSelectedLocation(e.target.value)}
//                     className="glass-card border-white/20 dark:border-white/10 bg-transparent rounded-lg px-4 py-3 text-foreground min-w-[150px]"
//                   >
//                     {locations.map((location) => (
//                       <option key={location} value={location} className="bg-background text-foreground">
//                         {location}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </AnimatedSection>

//           {/* Jobs List */}
//           <div className="space-y-6">
//             {filteredJobs.map((job, index) => (
//               <AnimatedSection key={job.id} delay={index * 100}>
//                 <Card className="glass-card ">
//                   <CardContent className="p-8">
//                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-3 mb-3">
//                           <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
//                             {getDepartmentIcon(job.department)}
//                           </div>
//                           <div>
//                             <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
//                             <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                               <span className="flex items-center space-x-1">
//                                 <Briefcase className="w-3 h-3" />
//                                 <span>{job.department}</span>
//                               </span>
//                               <span className="flex items-center space-x-1">
//                                 <MapPin className="w-3 h-3" />
//                                 <span>{job.location}</span>
//                               </span>
//                               <span className="flex items-center space-x-1">
//                                 <Clock className="w-3 h-3" />
//                                 <span>{job.type}</span>
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
//                         <div className="mb-4">
//                           <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
//                           <ul className="space-y-1">
//                             {job.requirements.slice(0, 2).map((req, idx) => (
//                               <li key={idx} className="text-sm text-muted-foreground flex items-start">
//                                 <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
//                                 {req}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                           <span>Experience: {job.experience}</span>
//                           <span>•</span>
//                           <span>Posted: {job.posted}</span>
//                         </div>
//                       </div>
//                       <div className="flex flex-col space-y-3">
//                         <Button className="btn-primary rounded-full px-6" asChild>
//                           <Link href={`/careers/${job.id}`}>
//                             Apply Now <ArrowRight className="ml-2 w-4 h-4" />
//                           </Link>
//                         </Button>
//                         <Button variant="outline" className="bg-transparent rounded-full px-6">
//                           Learn More
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>

//           {filteredJobs.length === 0 && (
//             <AnimatedSection>
//               <div className="text-center py-16">
//                 <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mx-auto mb-6">
//                   <Search className="w-12 h-12 text-muted-foreground" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-foreground mb-4">No positions found</h3>
//                 <p className="text-muted-foreground mb-8">
//                   Try adjusting your search criteria or check back later for new opportunities.
//                 </p>
//                 <Button
//                   onClick={() => {
//                     setSearchTerm("")
//                     setSelectedDepartment("All")
//                     setSelectedLocation("All")
//                   }}
//                   className="btn-secondary rounded-full"
//                 >
//                   Clear Filters
//                 </Button>
//               </div>
//             </AnimatedSection>
//           )}
//         </div>
//       </section>
//     </div>
//   )
// }


import React, { useState } from "react";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  Search, 
  Briefcase, 
  Heart, 
  Zap, 
  Award,
  Code,
  TrendingUp,
  Globe,
  Database,
  Play,
  Quote,
  Star,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const departments = ["All", "Engineering", "Product", "Design", "Sales", "Marketing", "Operations", "Data"];
  const locations = ["All", "San Francisco", "New York", "London", "Berlin", "Remote"];

  const values = [
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Innovate Relentlessly",
      description: "Push boundaries with bold ideas and fearless execution to shape the future of technology."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Thrive Together",
      description: "Collaboration and diverse perspectives fuel our success and drive meaningful impact."
    },
    {
      icon: <Heart className="w-8 h-8 text-indigo-600" />,
      title: "Care Deeply",
      description: "We’re passionate about our work, our people, and creating a positive global impact."
    },
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: "The freedom to explore new ideas and the support to grow as an engineer make this an incredible place to work.",
      rating: 5,
    },
    {
      name: "Lila Sharma",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b589?w=400&h=400&fit=crop&crop=face",
      quote: "Every day feels like a chance to solve real problems for real people. It’s inspiring.",
      rating: 5,
    },
  ];

  const perks = [
    { title: "Flexible Work", icon: <Clock className="w-6 h-6 text-indigo-600" />, description: "Work remotely or from one of our global offices with flexible hours." },
    { title: "Growth Budget", icon: <Award className="w-6 h-6 text-indigo-600" />, description: "$5,000/year for learning, conferences, and professional development." },
    { title: "Health & Wellness", icon: <Heart className="w-6 h-6 text-indigo-600" />, description: "Comprehensive health plans and wellness stipends." },
    { title: "Equity", icon: <TrendingUp className="w-6 h-6 text-indigo-600" />, description: "Own a piece of our mission with company equity." },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      level: "Senior",
      description: "Build scalable systems and lead complex projects to power our platform’s growth.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      team: "Platform",
      posted: "1 week ago",
      applicants: 85,
      featured: true,
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "San Francisco",
      type: "Full-time",
      level: "Mid-level",
      description: "Craft intuitive user experiences that delight millions of users worldwide.",
      skills: ["Figma", "User Research", "Prototyping"],
      team: "User Experience",
      posted: "3 days ago",
      applicants: 62,
      featured: false,
    },
    {
      id: 3,
      title: "Data Analyst",
      department: "Data",
      location: "London",
      type: "Full-time",
      level: "Mid-level",
      description: "Uncover insights from data to drive strategic decisions and optimize performance.",
      skills: ["SQL", "Python", "Tableau"],
      team: "Analytics",
      posted: "5 days ago",
      applicants: 47,
      featured: false,
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const getDepartmentIcon = (department) => {
    const icons = {
      Engineering: <Code className="w-5 h-5 text-indigo-600" />,
      Product: <Briefcase className="w-5 h-5 text-indigo-600" />,
      Design: <Globe className="w-5 h-5 text-indigo-600" />,
      Sales: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      Marketing: <Globe className="w-5 h-5 text-indigo-600" />,
      Operations: <Database className="w-5 h-5 text-indigo-600" />,
      Data: <Database className="w-5 h-5 text-indigo-600" />,
    };
    return icons[department] || <Briefcase className="w-5 h-5 text-indigo-600" />;
  };

  const getLevelColor = (level) => {
    const colors = {
      Junior: "bg-green-100 text-green-800",
      "Mid-level": "bg-blue-100 text-blue-800",
      "Mid-Senior": "bg-purple-100 text-purple-800",
      Senior: "bg-orange-100 text-orange-800",
      Staff: "bg-red-100 text-red-800",
    };
    return colors[level] || "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      {/* Hero Section */}
      
      <section className="relative py-20 overflow-hidden pb-20 pt-30 px-6 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50">
         <div className="absolute inset-0">
           <Image fill alt="careers-banner" className="object-cover" src="/contact-banner.png" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
         </div>
         <div className="relative container mx-auto text-center">
           <AnimatedSection animation="fadeInUp" delay={0}>
             <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
               Join Our <span className="text-gradient">Team</span>
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
               Build the future of technology with us. Discover exciting career opportunities and be part of a team
               that's transforming businesses worldwide.
             </p>
             <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full" asChild>
               <Link href="#open-positions">
                 View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>

      {/* Values Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Drives Us</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our values shape how we work, innovate, and grow together.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="absolute -top-4 left-6 bg-white p-2 rounded-full shadow-md">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Stories from Our Team</h2>
            <p className="text-lg text-gray-600 mt-4">Hear what it’s like to work with us, straight from the people who do.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Quote className="w-8 h-8 text-indigo-600 mb-4" />
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Perks That Support You</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We’re here to help you thrive, both at work and beyond.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="mb-4">{perk.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600 text-sm">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Open Roles</h2>
            <p className="text-lg text-gray-600 mt-4">Find the role where you’ll make your mark.</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search roles, skills, or teams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className={`bg-white p-6 rounded-lg shadow-sm border ${job.featured ? "border-indigo-300 bg-indigo-50" : "border-gray-200"} hover:shadow-md transition-all duration-200`}>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">{getDepartmentIcon(job.department)}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-2">
                          <span className="flex items-center gap-1"><Building className="w-4 h-4" /> {job.team}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(job.level)}`}>{job.level}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Posted {job.posted} • {job.applicants} applicants</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href={`/careers/${job.id}`} className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200">
                      Apply Now
                    </Link>
                    <Link href={`/careers/${job.id}/details`} className="text-indigo-600 hover:text-indigo-800 font-semibold text-center">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No matching roles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or check back later for new opportunities.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDepartment("All");
                    setSelectedLocation("All");
                  }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedSection animation="fadeInUp" delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join a team where your work shapes the future and your ideas matter. Let’s build something extraordinary together.
              </p>
              <Link href="#jobs" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
                Find Your Role <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}