"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import { ArrowRight, Users, Target, Award, Heart, Lightbulb, Shield, Zap, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver breakthrough solutions.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in everything we do.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer-Centricity",
      description: "Our clients' success is our success. We go above and beyond to exceed expectations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster strong partnerships with our clients.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      bio: "20+ years of experience in enterprise technology solutions and digital transformation.",
      image: "/placeholder.svg?height=300&width=300&text=Rajesh+Kumar",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      position: "CTO",
      bio: "Expert in cloud architecture and emerging technologies with 15+ years of technical leadership.",
      image: "/placeholder.svg?height=300&width=300&text=Priya+Sharma",
      linkedin: "#",
    },
    {
      name: "Amit Patel",
      position: "VP of Engineering",
      bio: "Specializes in software development and agile methodologies with a track record of successful projects.",
      image: "/placeholder.svg?height=300&width=300&text=Amit+Patel",
      linkedin: "#",
    },
    {
      name: "Sneha Reddy",
      position: "Head of GIS Solutions",
      bio: "Leading expert in Geographic Information Systems with extensive experience in spatial analysis.",
      image: "/placeholder.svg?height=300&width=300&text=Sneha+Reddy",
      linkedin: "#",
    },
  ]

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology",
    },
    {
      year: "2016",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered successful ERP implementation",
    },
    { year: "2018", title: "Team Expansion", description: "Grew to 25+ professionals and expanded service offerings" },
    {
      year: "2020",
      title: "Cloud Transformation",
      description: "Pivoted to cloud-first solutions during the pandemic",
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Extended services to clients across Southeast Asia",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated AI and ML capabilities across all service lines",
    },
  ]

  const certifications = [
    { name: "ISO 9001:2015", logo: "/placeholder.svg?height=80&width=80&text=ISO" },
    { name: "Microsoft Gold Partner", logo: "/placeholder.svg?height=80&width=80&text=MS" },
    { name: "AWS Advanced Partner", logo: "/placeholder.svg?height=80&width=80&text=AWS" },
    { name: "Oracle Certified", logo: "/placeholder.svg?height=80&width=80&text=Oracle" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        </ParallaxSection>

        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                The Culture of Technology - Building the future through innovation, expertise, and unwavering commitment
                to excellence.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                  Building Tomorrow's <span className="text-gradient">Technology</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2014, TechCulture Solutions began with a simple yet powerful vision: to bridge the gap
                    between cutting-edge technology and business success. What started as a small team of passionate
                    technologists has grown into a leading provider of comprehensive IT solutions.
                  </p>
                  <p>
                    Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering
                    commitment to our clients' success. We've helped hundreds of organizations across various industries
                    transform their operations, streamline processes, and achieve unprecedented growth.
                  </p>
                  <p>
                    Today, we stand as a trusted partner for businesses seeking to navigate the complex landscape of
                    digital transformation. Our expertise spans hardware solutions, software development, enterprise
                    systems, and GIS technologies.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                <Card className="glass-card glow overflow-hidden">
                  <div className="relative h-96">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Company+Story"
                      alt="TechCulture Solutions Story"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="glass-card p-6 rounded-2xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                            <Target className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                            <p className="text-white/80 text-sm">
                              Empowering businesses through innovative technology solutions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The principles that guide our decisions, shape our culture, and drive our commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="glass-card glass-hover text-center group">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                Leadership <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet the visionaries and experts who drive our company's success and innovation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="glass-card glass-hover overflow-hidden group">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-primary font-medium">{member.position}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={member.linkedin}>View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Key milestones that have shaped our growth and evolution over the years.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className="flex-1">
                      <Card className={`glass-card glass-hover ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                        <CardContent className="p-8">
                          <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-background relative z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins text-foreground mb-8">
                Certifications & <span className="text-gradient">Awards</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Recognition of our commitment to quality, excellence, and industry best practices.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="glass-card glass-hover text-center">
                  <CardContent className="p-8">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card text-center">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Best IT Solutions Provider</h3>
                  <p className="text-muted-foreground">Tech Excellence Awards 2023</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Fastest Growing Company</h3>
                  <p className="text-muted-foreground">Business Today 2022</p>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Best Workplace</h3>
                  <p className="text-muted-foreground">Great Place to Work 2023</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                  Our <span className="text-gradient">Culture</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At TechCulture Solutions, we believe that great technology comes from great people. Our culture is
                    built on collaboration, continuous learning, and innovation.
                  </p>
                  <p>
                    We foster an environment where creativity thrives, ideas are valued, and every team member has the
                    opportunity to grow and make a meaningful impact.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  {[
                    {
                      icon: <Zap className="w-6 h-6" />,
                      title: "Innovation First",
                      desc: "Encouraging creative solutions",
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Team Spirit",
                      desc: "Collaborative work environment",
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6" />,
                      title: "Growth Mindset",
                      desc: "Continuous learning culture",
                    },
                    {
                      icon: <Heart className="w-6 h-6" />,
                      title: "Work-Life Balance",
                      desc: "Supporting personal well-being",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                <Card className="glass-card glow overflow-hidden">
                  <div className="relative h-96">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Company+Culture"
                      alt="Company Culture"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <Card className="glass-card glow max-w-4xl mx-auto">
              <CardContent className="p-16">
                <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                  Join Our <span className="text-gradient">Journey</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Ready to be part of something extraordinary? Explore career opportunities or partner with us to build
                  the future of technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full" asChild>
                    <Link href="/careers">
                      View Careers <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" className="btn-secondary px-10 py-4 text-lg font-semibold rounded-full" asChild>
                    <Link href="/contact">Partner With Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
