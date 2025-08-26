"use client"

import type React from "react"

import { useEffect, useState } from "react"
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
import { useSite } from "@/context/siteContext"
import axios from "axios"

export default function ContactPage() {
  const { settingsData, setSettingsData } = useSite();

  useEffect(() => {
    async function fetchData() {
      if (!settingsData) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
          );
          if (res.status === 200) {
            setSettingsData(res.data.data);
          }
        } catch (error) {
          console.log(error);
        }
      }

      if(settingsData){
        
      }

    }
    fetchData();
  }, [settingsData, setSettingsData]);

  let contactInfo = [];
  if(settingsData){ contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: [settingsData.contactNo],
      description: "Mon-Fri 9AM-6PM IST",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [settingsData.email],
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: [settingsData.registeredAddress],
      description: "Visit us during business hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Corporate Office",
      details: [settingsData.officeAddress],
      description: "Visit us during business hours",
    },
  ];}

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

    if(!formData.company || !formData.email || !formData.message || !formData.name || !formData.phone || !formData.service){
      alert("Please fill all required fields")
      setIsSubmitting(false)
      return
    }

    try{
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contacts`,
        formData
      );

      if (response.status === 201) {
        console.log("Form submitted successfully")
        setIsSubmitted(true); 
      } else {
        console.error("Error submitting form", response.data)
        setIsSubmitted(false); 
      }

    }
    catch(error){
      console.log(error);
    }

   setIsSubmitting(false)
     
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

 

 

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
        <div className="max-w-7xl mx-auto text-center">
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
      <section className="pb-20 pt-30 px-6 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50 relative overflow-hidden">
        {/* <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        </ParallaxSection> */}
        <div className="absolute inset-0">
          <Image
            fill
            alt="referenceImage"
            className="object-cover"
            src="./contact-banner.png"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight text-white">
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                Ready to transform your business? Let's discuss your project and
                explore how we can help you achieve your goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <AnimatedSection animation="fadeInLeft">
              <Card className="glass-nav-glow backdrop-blur-3xl bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl h-full">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">
                      Start Your <span className="text-gradient">Project</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Fill out the form below and we'll get back to you within
                      24 hours to discuss your requirements.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-foreground font-medium mb-2">
                          Name *
                        </label>
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
                        <label className="block text-foreground font-medium mb-2">
                          Email *
                        </label>
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
                        <label className="block text-foreground font-medium mb-2">
                          Phone
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="glass-card border-white/20 dark:border-white/10 bg-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-medium mb-2">
                          Company
                        </label>
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
                      <label className="block text-foreground font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full glass-card border-white/20 dark:border-white/10 bg-transparent rounded-md shadow px-4 py-3 text-foreground"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="bg-transparent text-foreground "
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Message *
                      </label>
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
                      className="w-full btn-primary rounded-md py-6 text-lg font-semibold max-w-[40%]"
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
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">
                    Contact <span className="text-gradient">Information</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We're here to help you succeed. Reach out to us through any
                    of the following channels.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="glass-nav-glow backdrop-blur-3xl bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl"
                    >
                      <CardContent className="py-4 px-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                          <div className="text-primary">{info.icon}</div>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-muted-foreground text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                        <p className="text-primary text-xs mt-2">
                          {info.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-10 px-6 space-y-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">
            Head <span className="text-gradient">office</span>
          </h2>
          <AnimatedSection>
            <Card className="glass-card p-0 overflow-hidden">
              <div className="relative h-96">
                {settingsData ? (
                  <div
                    className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
                    dangerouslySetInnerHTML={{
                      __html: settingsData.registeredIframe,
                    }}
                  />
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.056200150182!2d77.2225690760672!3d28.628077684281838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd33b95c2ef1%3A0xfe68a915348015f8!2sRohit%20House%2C%202%2C%20Tolstoy%20Rd%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1754302489577!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>
            </Card>
          </AnimatedSection>
        </div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">
            Corporate <span className="text-gradient">office</span>
          </h2>
          <AnimatedSection>
            <Card className="glass-card p-0 overflow-hidden">
              <div className="relative h-96">
                {settingsData ? (
                  <div
                    className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
                    dangerouslySetInnerHTML={{
                      __html: settingsData.officeIframe,
                    }}
                  />
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.336032841482!2d77.35435776491295!3d28.627244195359893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54f9814a4c1%3A0x729f42021b824a36!2sCorenthum%20Building%2C%2034%2F2%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1756187696071!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
