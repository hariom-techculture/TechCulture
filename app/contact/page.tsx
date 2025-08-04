"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxSection } from "@/components/parallax-section"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  MessageSquare,
  Calendar,
  Users,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Mon-Fri 9AM-6PM IST",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@techculture.com", "support@techculture.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Tech Street", "Innovation City, IC 12345"],
      description: "Visit us during business hours",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      description: "Closed on Sundays",
    },
  ]

  const offices = [
    {
      city: "Mumbai",
      address: "123 Tech Street, Bandra East, Mumbai 400051",
      phone: "+91 98765 43210",
      email: "mumbai@techculture.com",
      image: "/placeholder.svg?height=200&width=300&text=Mumbai+Office",
    },
    {
      city: "Bangalore",
      address: "456 Innovation Hub, Koramangala, Bangalore 560034",
      phone: "+91 98765 43211",
      email: "bangalore@techculture.com",
      image: "/placeholder.svg?height=200&width=300&text=Bangalore+Office",
    },
    {
      city: "Delhi",
      address: "789 Business Center, Connaught Place, Delhi 110001",
      phone: "+91 98765 43212",
      email: "delhi@techculture.com",
      image: "/placeholder.svg?height=200&width=300&text=Delhi+Office",
    },
  ]

  const services = [
    "Hardware Solutions",
    "Software Development",
    "Enterprise Solutions",
    "GIS Solutions",
    "Consulting Services",
    "Other",
  ]

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <Card className="glass-card glow max-w-2xl mx-auto">
              <CardContent className="p-16">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">Thank You!</h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <Button
                  className="btn-primary rounded-full px-8"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: "",
                      message: "",
                    })
                  }}
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    )
  }

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
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Ready to transform your business? Let's discuss your project and explore how we can help you achieve
                your goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <AnimatedSection animation="fadeInLeft">
              <Card className="glass-card glow">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">
                      Start Your <span className="text-gradient">Project</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Fill out the form below and we'll get back to you within 24 hours to discuss your requirements.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-foreground font-medium mb-2">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass-card border-white/20 dark:border-white/10 bg-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass-card border-white/20 dark:border-white/10 bg-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-foreground font-medium mb-2">Phone</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="glass-card border-white/20 dark:border-white/10 bg-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-medium mb-2">Company</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="glass-card border-white/20 dark:border-white/10 bg-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full glass-card border-white/20 dark:border-white/10 bg-transparent rounded-lg px-4 py-3 text-foreground"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-background text-foreground">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="glass-card border-white/20 dark:border-white/10 bg-transparent"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary rounded-full py-4 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="fadeInRight">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">
                    Contact <span className="text-gradient">Information</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We're here to help you succeed. Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="glass-card glass-hover">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                          <div className="text-primary">{info.icon}</div>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                        <p className="text-primary text-xs mt-2">{info.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Button size="sm" className="btn-secondary rounded-full w-10 h-10 p-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="btn-secondary rounded-full w-10 h-10 p-0">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="btn-secondary rounded-full w-10 h-10 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <Button className="w-full btn-secondary rounded-full justify-start">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule a Meeting
                  </Button>
                  <Button className="w-full btn-secondary rounded-full justify-start">
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Live Chat Support
                  </Button>
                  <Button className="w-full btn-secondary rounded-full justify-start">
                    <Users className="w-5 h-5 mr-3" />
                    Request Demo
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-poppins text-foreground mb-8">
                Our <span className="text-gradient">Offices</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Visit us at any of our locations across India. We're always happy to meet in person.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="glass-card glass-hover overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={office.image || "/placeholder.svg"}
                      alt={`${office.city} Office`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{office.city}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">{office.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-primary" />
                        <p className="text-muted-foreground text-sm">{office.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <p className="text-muted-foreground text-sm">{office.email}</p>
                      </div>
                    </div>
                    <Button className="w-full mt-6 btn-secondary rounded-full">
                      Get Directions <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <Card className="glass-card overflow-hidden">
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Google Maps integration would be implemented here in production
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
