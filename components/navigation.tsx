"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [expandedWidth, setExpandedWidth] = useState(0)
  
  const navRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/technologies", label: "Technologies" },
    { href: "/industries", label: "Industries" },
    { href: "/survey", label: "Survey" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  useEffect(() => {
    if (navRef.current) {
      setExpandedWidth(navRef.current.scrollWidth + 64)
    }
  }, [collapsed, pathname])

  return (
<nav
      className={`fixed z-50 w-full flex justify-between items-center px-10 transition-all duration-500 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <Link href="/" className="text-xl font-bold text-foreground mr-8 z-50">
        TechCulture <span className="text-primary">Solutions</span>
      </Link>

      {/* Desktop Ribbon Nav */}
      <div
        className={`
          hidden lg:flex items-center justify-center
          transition-all duration-700 ease-in-out
          rounded-full px-6 py-3 glass-nav relative
          border border-white/20 dark:border-white/10 shadow-2xl
          ${scrolled ? "backdrop-blur-xl bg-white/10 dark:bg-black/10" : "backdrop-blur-md bg-white/5 dark:bg-black/5"}
        `}
        style={{
          width: collapsed ? "64px" : `${expandedWidth}px`,
          transition: "width 0.6s ease-in-out",
          minWidth: "64px"
        }}
      >
        {/* Measured Inner Content */}
        <div
          ref={navRef}
          className={`flex items-center transition-all duration-500 ease-in-out overflow-hidden gap-6 ${
            collapsed ? "opacity-0 translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"
          }`}
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={`transition-transform duration-500
            h-9 w-9 glass-card hover:glass-hover rounded-full
            z-10 ${collapsed ? "rotate-180" : "rotate-0"}
          `}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center space-x-4 z-50">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="h-9 w-9 glass-card hover:glass-hover"
        >
          {isOpen ? (
            <X className="h-4 w-4 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full mt-4 left-0 right-0 px-10 pt-4 border-t border-white/20 dark:border-white/10 backdrop-blur bg-white/10 dark:bg-black/10 rounded-b-xl z-40 shadow-xl">
          <div className="flex flex-col space-y-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
