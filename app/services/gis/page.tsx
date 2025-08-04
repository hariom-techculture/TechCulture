"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Map,
  Satellite,
  Navigation,
  BarChart3,
  Database,
  Zap,
  Shield,
  Users,
  Clock,
} from "lucide-react"

export default function GISPage() {
  const offerings = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "Custom GIS Applications",
      description: "Tailored Geographic Information System applications for specific industry needs.",
      features: ["Web-based GIS Platforms", "Mobile GIS Applications", "Desktop GIS Solutions", "API Development"],
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Spatial Data Analysis",
      description: "Advanced spatial analysis and modeling for informed decision-making.",
      features: ["Spatial Statistics", "Predictive Modeling", "Network Analysis", "Terrain Analysis"],
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Interactive Mapping",
      description: "Dynamic, interactive maps with real-time data visualization capabilities.",
      features: ["Real-time Data Visualization", "Custom Map Styling", "Layer Management", "Interactive Dashboards"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Location Intelligence",
      description: "Transform location data into actionable business insights and strategies.",
      features: ["Market Analysis", "Site Selection", "Risk Assessment", "Performance Analytics"],
    },
  ]

  const applications = [
    {
      title: "Urban Planning",
      description: "Smart city solutions for urban development and infrastructure planning.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Environmental Monitoring",
      description: "Track environmental changes and assess ecological impacts.",
      icon: <Satellite className="w-6 h-6" />,
    },
    {
      title: "Asset Management",
      description: "Manage and track physical assets across geographic locations.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Emergency Response",
      description: "Coordinate emergency services and disaster response efforts.",
      icon: <Navigation className="w-6 h-6" />,
    },
    {
      title: "Transportation",
      description: "Optimize routes, manage fleets, and improve logistics operations.",
      icon: <Map className="w-6 h-6" />,
    },
    {
      title: "Agriculture",
      description: "Precision agriculture solutions for crop monitoring and yield optimization.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enhanced Decision Making",
      description: "Visual insights from spatial data enable better strategic decisions.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Improved Efficiency",
      description: "Streamlined workflows and automated processes increase operational efficiency.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Better Collaboration",
      description: "Shared mapping platforms improve team collaboration and communication.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Insights",
      description: "Live data feeds provide up-to-date information for immediate action.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                GIS <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Advanced Geographic Information Systems for spatial data analysis and visualization. Transform location
                data into powerful insights that drive informed decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Explore GIS Solutions <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View GIS Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="glass">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Spatial Intelligence</h3>
                    <p className="text-muted-foreground">
                      Unlock the power of location data with advanced GIS technologies and spatial analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our GIS <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive GIS solutions that transform spatial data into actionable insights for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="glass glass-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <div className="text-primary">{offering.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{offering.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              GIS <span className="text-primary">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our GIS solutions serve diverse industries and applications, providing spatial intelligence across
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="glass glass-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <div className="text-primary">{app.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{app.title}</h3>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              GIS <span className="text-primary">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              GIS <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage industry-leading GIS technologies and platforms to deliver robust spatial solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "ArcGIS", description: "Enterprise GIS platform" },
              { name: "QGIS", description: "Open-source GIS software" },
              { name: "PostGIS", description: "Spatial database extension" },
              { name: "Leaflet", description: "Interactive mapping library" },
              { name: "OpenLayers", description: "Web mapping library" },
              { name: "GeoServer", description: "Open-source server" },
              { name: "MapBox", description: "Custom mapping platform" },
              { name: "Google Earth Engine", description: "Planetary-scale analysis" },
            ].map((tech, index) => (
              <Card key={index} className="glass text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Case Study Spotlight</h2>
                <img
                  src="/placeholder.svg?height=60&width=200&text=Smart+City+Initiative"
                  alt="Smart City Initiative"
                  className="h-12 mx-auto opacity-80"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                  <p className="text-muted-foreground text-sm">
                    City planners needed a comprehensive GIS platform to optimize urban development and infrastructure
                    planning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Developed an integrated GIS platform with real-time data visualization, spatial analysis, and
                    planning tools.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Results</h4>
                  <p className="text-foreground font-semibold text-sm">
                    25% reduction in planning time, improved decision-making, enhanced citizen services delivery.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Unlock Spatial <span className="text-primary">Intelligence</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ready to harness the power of location data? Let's discuss how our GIS solutions can transform your
                spatial analysis capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">
                    Start GIS Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
