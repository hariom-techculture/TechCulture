"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  Eye
} from "lucide-react"
import Link from "next/link"

type TeamCategory = "management" | "team" | "field";

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>("management")

  const teamCategories = [
    { id: "management", label: "Management", icon: <Building2 className="w-5 h-5" /> },
    { id: "team", label: "Our Team", icon: <Users className="w-5 h-5" /> },
    { id: "field", label: "Field Team", icon: <Compass className="w-5 h-5" /> }
  ]

  const teamData: Record<TeamCategory, Array<{
    name: string;
    position: string;
    avatar: string;
    bio: string;
    specialties: string[];
    icon: React.ReactElement;
    gradient: string;
  }>> = {
    management: [
      {
        name: "Shubham Garg",
        position: "Director",
        avatar: "https://i.pravatar.cc/400?u=shubham",
        bio: "Visionary leader with 15+ years in geospatial technology and business strategy",
        specialties: ["Strategic Planning", "Business Development", "Innovation"],
        icon: <Award className="w-6 h-6" />,
        gradient: "from-blue-600 to-purple-600"
      },
      {
        name: "Himanshu Garg",
        position: "Director",
        avatar: "https://i.pravatar.cc/400?u=himanshu",
        bio: "Expert in operations management and technology implementation across multiple domains",
        specialties: ["Operations", "Technology", "Leadership"],
        icon: <Target className="w-6 h-6" />,
        gradient: "from-purple-600 to-pink-600"
      },
      {
        name: "Arpan Srivastava",
        position: "BDM",
        avatar: "https://i.pravatar.cc/400?u=arpan",
        bio: "Results-driven business development expert with strong client relationship skills",
        specialties: ["Client Relations", "Market Analysis", "Growth Strategy"],
        icon: <Briefcase className="w-6 h-6" />,
        gradient: "from-green-600 to-blue-600"
      },
      {
        name: "Sarita Thakur",
        position: "HR Manager",
        avatar: "https://i.pravatar.cc/400?u=sarita",
        bio: "Human resources specialist focused on talent development and organizational growth",
        specialties: ["Talent Management", "Team Development", "Culture Building"],
        icon: <UserCheck className="w-6 h-6" />,
        gradient: "from-orange-600 to-red-600"
      },
      {
        name: "Satyaveer Singh",
        position: "CTO",
        avatar: "https://i.pravatar.cc/400?u=satyaveer",
        bio: "Technology architect with deep expertise in GIS platforms and software development",
        specialties: ["GIS Architecture", "Software Development", "Innovation"],
        icon: <Code className="w-6 h-6" />,
        gradient: "from-indigo-600 to-purple-600"
      },
      {
        name: "Pooja Verma",
        position: "Project Manager",
        avatar: "https://i.pravatar.cc/400?u=pooja",
        bio: "Experienced project manager ensuring seamless delivery of complex geospatial projects",
        specialties: ["Project Planning", "Quality Assurance", "Team Coordination"],
        icon: <Settings className="w-6 h-6" />,
        gradient: "from-teal-600 to-green-600"
      }
    ],
    team: [
      {
        name: "Bikas Chanda",
        position: "Sr. GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=bikas",
        bio: "Senior GIS expert specializing in advanced spatial analysis and data modeling",
        specialties: ["Spatial Analysis", "Data Modeling", "GIS Applications"],
        icon: <Globe className="w-6 h-6" />,
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        name: "Sandeep Sagar",
        position: "Sr. GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=sandeep",
        bio: "GIS specialist with expertise in remote sensing and geospatial data processing",
        specialties: ["Remote Sensing", "Data Processing", "Cartography"],
        icon: <Database className="w-6 h-6" />,
        gradient: "from-green-500 to-emerald-500"
      },
      {
        name: "Bhawan Sharma",
        position: "TL-GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=bhawan",
        bio: "Team leader with strong technical skills in GIS development and implementation",
        specialties: ["Team Leadership", "GIS Development", "Technical Training"],
        icon: <Network className="w-6 h-6" />,
        gradient: "from-purple-500 to-pink-500"
      },
      {
        name: "Priyanka Kumari",
        position: "TL-GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=priyanka",
        bio: "Technical leader focused on innovative GIS solutions and team mentorship",
        specialties: ["Innovation", "Mentorship", "Solution Design"],
        icon: <Zap className="w-6 h-6" />,
        gradient: "from-yellow-500 to-orange-500"
      },
      {
        name: "Bharti Singh",
        position: "Asst. Project Co-ordinator",
        avatar: "https://i.pravatar.cc/400?u=bharti",
        bio: "Project coordination specialist ensuring smooth workflow and client communication",
        specialties: ["Project Coordination", "Client Communication", "Workflow Management"],
        icon: <Shield className="w-6 h-6" />,
        gradient: "from-red-500 to-pink-500"
      },
      {
        name: "Bhawana Tiwari",
        position: "TL-GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=bhawana",
        bio: "GIS team leader with expertise in urban planning and infrastructure mapping",
        specialties: ["Urban Planning", "Infrastructure Mapping", "Team Management"],
        icon: <Building2 className="w-6 h-6" />,
        gradient: "from-indigo-500 to-purple-500"
      },
      {
        name: "Shivender Kumar",
        position: "Sr. GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=shivender",
        bio: "Senior engineer specializing in 3D modeling and advanced geospatial analysis",
        specialties: ["3D Modeling", "Geospatial Analysis", "Technical Implementation"],
        icon: <Eye className="w-6 h-6" />,
        gradient: "from-teal-500 to-blue-500"
      },
      {
        name: "Anish Khan",
        position: "TL-AutoCad",
        avatar: "https://i.pravatar.cc/400?u=anish",
        bio: "AutoCAD specialist and team leader for technical drawing and design projects",
        specialties: ["AutoCAD", "Technical Drawing", "Design Management"],
        icon: <Settings className="w-6 h-6" />,
        gradient: "from-gray-500 to-slate-500"
      },
      {
        name: "Sandeep Kaur",
        position: "Sr. GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=sandeepkaur",
        bio: "GIS engineer with strong background in data analysis and visualization",
        specialties: ["Data Analysis", "Visualization", "Quality Control"],
        icon: <Database className="w-6 h-6" />,
        gradient: "from-emerald-500 to-teal-500"
      },
      {
        name: "Ajay Sarkar",
        position: "Sr. GIS Engineer",
        avatar: "https://i.pravatar.cc/400?u=ajay",
        bio: "Senior GIS professional with expertise in large-scale mapping projects",
        specialties: ["Large-scale Mapping", "Project Execution", "Technical Excellence"],
        icon: <Globe className="w-6 h-6" />,
        gradient: "from-cyan-500 to-blue-500"
      }
    ],
    field: [
      {
        name: "Krishanu Das",
        position: "TL-DGPS",
        avatar: "https://i.pravatar.cc/400?u=krishanu",
        bio: "Field operations leader specializing in high-precision DGPS surveying and data collection",
        specialties: ["DGPS Surveying", "Field Operations", "Precision Mapping"],
        icon: <MapPin className="w-6 h-6" />,
        gradient: "from-green-600 to-emerald-600"
      },
      {
        name: "Anup Mondal",
        position: "TL-Field Surveyor",
        avatar: "https://i.pravatar.cc/400?u=anup",
        bio: "Experienced field surveyor with expertise in topographical and infrastructure surveys",
        specialties: ["Topographical Survey", "Infrastructure Mapping", "Field Leadership"],
        icon: <Compass className="w-6 h-6" />,
        gradient: "from-blue-600 to-indigo-600"
      },
      {
        name: "Akash Rajpoot",
        position: "TL-Underground Utility Detection",
        avatar: "https://i.pravatar.cc/400?u=akash",
        bio: "Specialist in underground utility detection and subsurface infrastructure mapping",
        specialties: ["Utility Detection", "Subsurface Mapping", "Safety Protocols"],
        icon: <Network className="w-6 h-6" />,
        gradient: "from-purple-600 to-violet-600"
      }
    ]
  }

  const currentTeam = teamData[activeCategory] || []

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative pb-20 pt-30 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
         <div className="absolute inset-0">
            <Image fill alt="referenceImage" className="object-cover" src="/team-banner.jpg" />
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
            Meet the passionate professionals who bring innovation, expertise, and dedication to every project we undertake.
          </p>
        </div>
      </section>

      {/* Team Categories Navigation */}
      <section className="py-8 px-4 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-1">
            {teamCategories.map((category) => (
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
              {teamCategories.find(cat => cat.id === activeCategory)?.label}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The best person in every position
            </p>
          </div>

          <div className={`grid gap-8 ${
            activeCategory === 'management' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : activeCategory === 'field'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {currentTeam.map((member, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900">
                {/* Gradient border at top */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.gradient}`}></div>
                
                <CardContent className="p-8 text-center">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-6 w-24 h-24">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} p-1`}>
                      <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Icon overlay */}
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center`}>
                      <span className="text-white text-xs">{member.icon}</span>
                    </div>
                  </div>

                  {/* Name and Position */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className={`mb-4 bg-gradient-to-r ${member.gradient} text-white`}>
                    {member.position}
                  </Badge>

                  {/* Bio - Hidden on mobile, shown on hover for larger screens opacity-0 group-hover:opacity-100*/}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4   transition-opacity duration-300 hidden md:block">
                    {member.bio}
                  </p>

                  {/* Specialties  opacity-0  group-hover:opacity-100*/}
                  <div className="space-y-2   transition-opacity duration-300 delay-100 hidden md:block">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
                        {specialty}
                      </div>
                    ))}
                  </div>

                  {/* Mobile view - always show bio and specialties */}
                  <div className="md:hidden">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {member.bio}
                    </p>
                    <div className="space-y-2">
                      {member.specialties.slice(0, 2).map((specialty, idx) => (
                        <div key={idx} className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Amazing Team</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence. 
            Explore career opportunities with us.
          </p>
          <Link href={"/careers"} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  )
} 


// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// const teamData = {
//   management: [
//     {
//       name: "Shubham Garg",
//       position: "Director",
//       avatar: "https://i.pravatar.cc/400?u=shubham",
//       bio: "Visionary leader with 15+ years in geospatial technology and business strategy",
//     },
//     {
//       name: "Himanshu Garg",
//       position: "Director",
//       avatar: "https://i.pravatar.cc/400?u=himanshu",
//       bio: "Expert in operations management and technology implementation across multiple domains",
//     },
//     {
//       name: "Arpan Srivastava",
//       position: "BDM",
//       avatar: "https://i.pravatar.cc/400?u=arpan",
//       bio: "Results-driven business development expert with strong client relationship skills",
//     },
//     {
//       name: "Sarita Thakur",
//       position: "HR Manager",
//       avatar: "https://i.pravatar.cc/400?u=sarita",
//       bio: "Human resources specialist focused on talent development and organizational growth",
//     },
//     {
//       name: "Satyaveer Singh",
//       position: "CTO",
//       avatar: "https://i.pravatar.cc/400?u=satyaveer",
//       bio: "Technology architect with deep expertise in GIS platforms and software development",
//     },
//     {
//       name: "Pooja Verma",
//       position: "Project Manager",
//       avatar: "https://i.pravatar.cc/400?u=pooja",
//       bio: "Experienced project manager ensuring seamless delivery of complex geospatial projects",
//     },
//   ],
//   team: [
//     {
//       name: "Bikas Chanda",
//       position: "Sr. GIS Engineer",
//       avatar: "https://i.pravatar.cc/400?u=bikas",
//       bio: "Senior GIS expert specializing in advanced spatial analysis and data modeling",
//     },
//     {
//       name: "Sandeep Sagar",
//       position: "Sr. GIS Engineer",
//       avatar: "https://i.pravatar.cc/400?u=sandeep",
//       bio: "GIS specialist with expertise in remote sensing and geospatial data processing",
//     },
//     {
//       name: "Bhawan Sharma",
//       position: "TL-GIS Engineer",
//       avatar: "https://i.pravatar.cc/400?u=bhawan",
//       bio: "Team leader with strong technical skills in GIS development and implementation",
//     },
//     {
//       name: "Priyanka Kumari",
//       position: "TL-GIS Engineer",
//       avatar: "https://i.pravatar.cc/400?u=priyanka",
//       bio: "Technical leader focused on innovative GIS solutions and team mentorship",
//     },
//     {
//       name: "Bharti Singh",
//       position: "Asst. Project Co-ordinator",
//       avatar: "https://i.pravatar.cc/400?u=bharti",
//       bio: "Project coordination specialist ensuring smooth workflow and client communication",
//     },
//     {
//       name: "Bhawana Tiwari",
//       position: "TL-GIS Engineer",
//       avatar: "https://i.pravatar.cc/400?u=bhawana",
//       bio: "GIS team leader with expertise in urban planning and infrastructure mapping",
//     },
//   ],
//   field: [
//     {
//       name: "Krishanu Das",
//       position: "TL-DGPS",
//       avatar: "https://i.pravatar.cc/400?u=krishanu",
//       bio: "Field operations leader specializing in high-precision DGPS surveying and data collection",
//     },
//     {
//       name: "Anup Mondal",
//       position: "TL-Field Surveyor",
//       avatar: "https://i.pravatar.cc/400?u=anup",
//       bio: "Experienced field surveyor with expertise in topographical and infrastructure surveys",
//     },
//     {
//       name: "Akash Rajpoot",
//       position: "TL-Underground Utility Detection",
//       avatar: "https://i.pravatar.cc/400?u=akash",
//       bio: "Specialist in underground utility detection and subsurface infrastructure mapping",
//     },
//   ],
// };

// const allMembers = [
//   ...teamData.management,
//   ...teamData.team,
//   ...teamData.field,
// ];
// // Mobile layout (2 columns)
// const mobileColumnData = [
//   {
//     members: [allMembers[0], allMembers[2], allMembers[4], allMembers[6], allMembers[8], allMembers[10], allMembers[12], allMembers[14]],
//     topGap: "pt-4",
//   },
//   {
//     members: [allMembers[1], allMembers[3], allMembers[5], allMembers[7], allMembers[9], allMembers[11], allMembers[13]],
//     topGap: "pt-16",
//   },
// ];

// // Tablet layout (4 columns)
// const tabletColumnData = [
//   {
//     members: [allMembers[0], allMembers[4], allMembers[8], allMembers[12]],
//     topGap: "pt-8",
//   },
//   {
//     members: [allMembers[1], allMembers[5], allMembers[9], allMembers[13]],
//     topGap: "pt-0",
//   },
//   {
//     members: [allMembers[2], allMembers[6], allMembers[10], allMembers[14]],
//     topGap: "pt-16",
//   },
//   {
//     members: [allMembers[3], allMembers[7], allMembers[11]],
//     topGap: "pt-24",
//   },
// ];

// // Desktop layout (7 columns - original)
// const desktopColumnData = [
//   {
//     members: [allMembers[0], allMembers[1], allMembers[2]],
//     topGap: "pt-24",
//   },
//   {
//     members: [allMembers[3], allMembers[4]],
//     topGap: "pt-0",
//   },
//   {
//     members: [allMembers[5], allMembers[6]],
//     topGap: "pt-32",
//   },
//   {
//     members: [allMembers[7]],
//     topGap: "pt-72",
//   },
//   {
//     members: [allMembers[8], allMembers[9]],
//     topGap: "pt-32",
//   },
//   {
//     members: [allMembers[10], allMembers[11]],
//     topGap: "pt-0",
//   },
//   {
//     members: [allMembers[12], allMembers[13], allMembers[14]],
//     topGap: "pt-24",
//   },
// ];

// export default function TeamSection() {
//   const [hoveredMember, setHoveredMember] = useState<string | null>(null);
//   const [screenSize, setScreenSize] = useState("desktop");

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setScreenSize("mobile");
//       } else if (window.innerWidth < 1024) {
//         setScreenSize("tablet");
//       } else {
//         setScreenSize("desktop");
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getColumnData = () => {
//     switch (screenSize) {
//       case "mobile":
//         return mobileColumnData;
//       case "tablet":
//         return tabletColumnData;
//       default:
//         return desktopColumnData;
//     }
//   };

//   const getGridCols = () => {
//     switch (screenSize) {
//       case "mobile":
//         return "grid-cols-2";
//       case "tablet":
//         return "grid-cols-4";
//       default:
//         return "grid-cols-7";
//     }
//   };

//   const getImageSize = () => {
//     switch (screenSize) {
//       case "mobile":
//         return "w-32 h-32 sm:w-36 sm:h-36";
//       case "tablet":
//         return "w-36 h-36 md:w-40 md:h-40";
//       default:
//         return "w-40 h-40 lg:w-50 lg:h-50";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950">
//       <section className="relative pb-20 pt-30 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             fill
//             alt="referenceImage"
//             className="object-cover"
//             src="/team-banner.jpg"
//           />
//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
//             <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
//               The People Behind
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Our Success
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
//             Meet the passionate professionals who bring innovation, expertise,
//             and dedication to every project we undertake.
//           </p>
//         </div>
//       </section>

//       {/* Team Grid Section */}
//       <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
//         {/* Background decoration */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.1),transparent_50%)]" />

//         <div className="relative container mx-auto">
//           {/* Team Grid */}
//           <div
//             className={`grid ${getGridCols()} gap-2 sm:gap-4 lg:gap-1 mb-16 sm:mb-20 lg:mb-24`}
//           >
//             {getColumnData().map((column, columnIndex) => (
//               <div
//                 key={columnIndex}
//                 className={`flex flex-col items-center ${column.topGap}`}
//               >
//                 {column.members.map((member, memberIndex) => {
//                   const isHovered = hoveredMember === member.name;

//                   return (
//                     <div
//                       key={member.name}
//                       className={`relative transition-all duration-500 ease-out cursor-pointer mb-4 sm:mb-6 transform hover:scale-110 sm:hover:scale-125`}
//                       style={{
//                         zIndex: isHovered ? 50 : 10,
//                       }}
//                       onMouseEnter={() => setHoveredMember(member.name)}
//                       onMouseLeave={() => setHoveredMember(null)}
//                     >
//                       <div
//                         className={`relative ${getImageSize()} transition-all duration-500`}
//                       >
//                         <img
//                           src={member.avatar || "/placeholder.svg"}
//                           alt={member.name}
//                           className="w-full h-full object-cover rounded-2xl shadow-lg"
//                         />

//                         <div
//                           className={`absolute inset-0 bg-black/70 rounded-2xl flex flex-col justify-center items-center text-white text-center p-2 sm:p-3 transition-opacity duration-300 ${
//                             isHovered ? "opacity-100" : "opacity-0"
//                           }`}
//                         >
//                           <h3 className="font-semibold text-xs sm:text-sm lg:text-base leading-tight mb-1">
//                             {member.name}
//                           </h3>
//                           <p className="text-xs sm:text-sm leading-tight">
//                             {member.position}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>

//           {/* Central content - moved to separate container to avoid overlap */}
//           <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
//             <div className="mb-4">
//               <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
//                 Testimonials
//               </span>
//             </div>

//             <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//               Trusted by leaders
//             </h1>
//             <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
//               from various industries
//             </h2>

//             <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 lg:mb-10 leading-relaxed max-w-lg mx-auto px-4">
//               Learn why professionals trust our solutions to complete their
//               customer journeys.
//             </p>

//             <Button
//               size="lg"
//               className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium group text-sm sm:text-base"
//             >
//               Read Success Stories
//               <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
