"use client"

import React, { useEffect, useState } from "react";
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
import { useSite } from "@/context/siteContext";
import axios from "axios";

export default function CareersPage() {
  const { careerData, setCareerData } = useSite();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchData() {
      if (!careerData) {
        try {
          const res = await axios.get(`${apiUrl}/api/jobpost`);
          if (res.data) {
            setCareerData(res.data.jobPosts);
          }
        } catch (err) {
          console.error("Error fetching career data:", err);
        }
      }
    }

    fetchData();
  }, [careerData, setCareerData]);

  // Add this after fetching careerData
  const departments = [
    "All",
    ...new Set(careerData?.map((job) => job.department) || []),
  ];
  const locations = [
    "All",
    ...new Set(careerData?.map((job) => job.location) || []),
  ];

  const filteredJobs = careerData?.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "All" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesDepartment && matchesLocation;
  }) || [];

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
    return (
      icons[department] || <Briefcase className="w-5 h-5 text-indigo-600" />
    );
  };

  const getLevelColor = (experience) => {
    const colors = {
      "Entry Level": "bg-green-100 text-green-800",
      "1-2 years": "bg-blue-100 text-blue-800",
      "2-4 years": "bg-purple-100 text-purple-800",
      "4+ years": "bg-orange-100 text-orange-800",
      Senior: "bg-red-100 text-red-800",
    };
    return colors[experience] || "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      {/* Hero Section */}

      <section className="relative py-20 overflow-hidden pb-20 pt-30 px-6 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50">
        <div className="absolute inset-0">
          <Image
            fill
            alt="careers-banner"
            className="object-cover"
            src="/contact-banner.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto text-center">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
              <span className="text-gradient">Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build the future of technology with us. Discover exciting career
              opportunities and be part of a team that's transforming businesses
              worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Open <span className="text-gradient">Roles</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Find the role where you’ll make your mark.
            </p>
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
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {careerData &&
              filteredJobs.length > 0 &&
              filteredJobs.map((job) => (
                <div
                  key={job.jobId}
                  className={`bg-white p-6 rounded-lg shadow-sm border ${
                    job.featured
                      ? "border-indigo-300 bg-indigo-50"
                      : "border-gray-200"
                  } hover:shadow-md transition-all duration-200`}
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                          {getDepartmentIcon(job.department)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-2">
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" /> {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" /> {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" /> {job.type}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${getLevelColor(
                                job.experienceRequired
                              )}`}
                            >
                              {job.experienceRequired}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                        <p className=" text-sm text-gray-500">
                          Deadline:{" "}
                          {new Date(job.deadline).toLocaleDateString()}
                        </p>
                        <p className=" text-sm text-gray-500">
                          Salary: ${job.salaryRange.min.toLocaleString()} - $
                          {job.salaryRange.max.toLocaleString()}
                        </p>
                      
                      <p className="text-sm text-gray-500">
                        Posted {job.posted} • {job.applicants} applicants
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href={`/careers/${job.jobId}`}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200"
                      >
                        Apply Now
                      </Link>
                      <Link
                        href={`/careers/${job.jobId}/details`}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No matching roles found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or check back later for new
                  opportunities.
                </p>
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
              Ready to Make a
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Difference
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join a team where your work shapes the future and your ideas
              matter. Let’s build something extraordinary together.
            </p>
            <Link
              href="#jobs"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Find Your Role <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}