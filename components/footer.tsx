"use client"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { useEffect } from "react";
import axios from "axios";
import { useSite } from "@/context/siteContext";

export function Footer() {
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
            console.log("im data ", res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [settingsData, setSettingsData]);
  return (
    <footer className="py-16 px-6 border-t border-border/20 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-foreground mb-4">
              TechCulture <span className="text-primary">Solutions</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Innovating the future, one solution at a time. Your trusted
              partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/hardware"
                  className="text-muted-foreground hover:text-primary"
                >
                  Hardware Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software"
                  className="text-muted-foreground hover:text-primary"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enterprise"
                  className="text-muted-foreground hover:text-primary"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gis"
                  className="text-muted-foreground hover:text-primary"
                >
                  GIS Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            {settingsData && (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {settingsData.contactNo}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {settingsData.email}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {settingsData.address}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground">
            © 2025 TechCulture Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
