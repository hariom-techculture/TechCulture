"use client"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react"
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
              {settingsData?.linkedin && (
                <Link
                  href={settingsData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
              {settingsData?.twitter && (
                <Link
                  href={settingsData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              )}
              {settingsData?.facebook && (
                <Link
                  href={settingsData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              )}
              {settingsData?.instagram && (
                <Link
                  href={settingsData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              )}
              {/* Fallback Github link if no social links are provided */}
              {!settingsData?.linkedin && !settingsData?.twitter && !settingsData?.facebook && !settingsData?.instagram && (
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Core Services
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
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
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
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-muted-foreground">
                    {settingsData.officeAddress && (
                      <div className="mb-2">
                        <div className="font-medium">Office:</div>
                        <div>{settingsData.officeAddress}</div>
                      </div>
                    )}
                    {settingsData.registeredAddress && (
                      <div>
                        <div className="font-medium">Registered:</div>
                        <div>{settingsData.registeredAddress}</div>
                      </div>
                    )}
                    {!settingsData.officeAddress && !settingsData.registeredAddress && (
                      <span>Address not available</span>
                    )}
                  </div>
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
