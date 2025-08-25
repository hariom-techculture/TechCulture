"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  MapPin,
  Mail,
  Phone,
  Award,
  Target,
  Building2,
  Compass,
  Globe,
  Network,
  Zap,
  Shield,
  Code,
  Database,
  Settings,
  UserCheck,
  Briefcase,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { useSite } from "@/context/siteContext";
import axios from "axios";

interface Employee {
  name: string;
  designation: string;
  department: string;
  description?: string;
  profilePicture?: string;
}

interface EmployeesByDepartment {
  [key: string]: Employee[];
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactElement;
}

export default function TeamPage() {
  const { teamData, setTeamData } = useSite();
  // Initialize all state at the top
  const [employees, setEmployees] = useState<EmployeesByDepartment>({});
  const [categories, setCategories] = useState<Array<{id: string, label: string, icon: React.ReactElement}>>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  // First useEffect to fetch data if not available
  useEffect(() => {
    async function fetchData() {
      if (!teamData) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/employees`
          );
          console.log("team data", res.data.employees);
          setTeamData(res.data.employees);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, []); // Only run once on mount

  // Second useEffect to process data when teamData changes
  useEffect(() => {
    if (teamData) {
      // Get unique departments and ensure they are strings
      const departments = [...new Set(teamData.map((member: Employee) => member.department))] as string[];
      
      // Create categories array with icons
      const newCategories = departments.map((dept: string) => ({
        id: dept.toLowerCase(),
        label: dept,
        icon: getDepartmentIcon(dept)
      }));
      
      setCategories(newCategories);
      
      // Set active category if not set
      if (!activeCategory && departments.length > 0) {
        setActiveCategory(departments[0].toLowerCase());
      }

      // Group employees by department
      const groupedEmployees = departments.reduce<EmployeesByDepartment>((acc, dept: string) => {
        const deptKey = dept.toLowerCase();
        acc[deptKey] = teamData.filter(
          (member: Employee) => member.department.toLowerCase() === deptKey
        );
        return acc;
      }, {});

      setEmployees(groupedEmployees);
    }
  }, [teamData, activeCategory]); // Depend on teamData and activeCategory

  // Function to get icon based on department name
  const getDepartmentIcon = (department: string) => {
    switch (department.toLowerCase()) {
      case 'management':
        return <Building2 className="w-5 h-5" />;
      case 'team':
        return <Users className="w-5 h-5" />;
      case 'field':
        return <Compass className="w-5 h-5" />;
      case 'development':
        return <Code className="w-5 h-5" />;
      case 'design':
        return <Eye className="w-5 h-5" />;
      case 'marketing':
        return <Target className="w-5 h-5" />;
      case 'sales':
        return <Briefcase className="w-5 h-5" />;
      case 'hr':
        return <UserCheck className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

 
  const currentTeam = employees[activeCategory] || [];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative pb-20 pt-30 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            fill
            alt="referenceImage"
            className="object-cover"
            src="/team-banner.jpg"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              The People Behind
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            Meet the passionate professionals who bring innovation, expertise,
            and dedication to every project we undertake.
          </p>
        </div>
      </section>

      {/* Team Categories Navigation */}
      <section className="py-8 px-4 sticky top-0 z-40 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {categories.find((cat) => cat.id === activeCategory)?.label}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The best person in every position
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
            {currentTeam.map((member: Employee, index: number) => {
              const gradients = [
                'from-blue-600 to-purple-600',
                'from-green-600 to-teal-600',
                'from-purple-600 to-pink-600',
                'from-orange-600 to-red-600',
                'from-indigo-600 to-blue-600'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900"
                >
                  {/* Gradient border at top */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}
                  ></div>

                  <CardContent className="p-8 text-center">
                    {/* Avatar */}
                    <div className="relative mx-auto mb-6 w-24 h-24">
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} p-1`}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                          <Image
                            src={member.profilePicture || `https://i.pravatar.cc/400?u=${member.name}`}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Icon overlay */}
                      <div
                        className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}
                      >
                        <span className="text-white text-xs">
                          {getDepartmentIcon(member.department)}
                        </span>
                      </div>
                    </div>

                    {/* Name and Position */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className={`mb-4 bg-gradient-to-r ${gradient} text-white`}
                    >
                      {member.designation}
                    </Badge>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 transition-opacity duration-300">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Join Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Amazing Team
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for innovation and excellence. Explore career opportunities with us.
          </p>
          <Link
            href={"/careers"}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}

