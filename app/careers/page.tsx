"use client"

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
                <span className="text-gradient">Career</span>
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
      {/* <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-indigo-50">
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
      </section> */}

      {/* Perks Section */}
      {/* <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section> */}

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