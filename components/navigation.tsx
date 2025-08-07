"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [expandedWidth, setExpandedWidth] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  
  const navRef = useRef<HTMLDivElement>(null)

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
    }
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setDropdownTimeout(timeout)
  }

  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/technologies", label: "Technologies" },
    { href: "/industries", label: "Industries" },
    { href: "/survey", label: "Survey" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { 
      label: "Media", 
      dropdown: [
        { href: "/media/photos", label: "Photo Gallery" },
        { href: "/media/videos", label: "Video Gallery" }
      ]
    },
    // { href: "/insights", label: "Insights" },
    { href: "/team", label: "Our Team" },
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
      setExpandedWidth(navRef.current.scrollWidth + 100   )
    }
  }, [collapsed, pathname])

  return (
    <nav
      className={`fixed z-50 w-full flex justify-between items-center px-10 transition-all duration-500 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <Link href="/" className="text-xl font-bold mr-8 z-50">
        <div className="relative w-[100px] h-[100px]"> {/* Adjust size as needed */}
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Desktop Ribbon Nav */}
      <div
        className={`
          hidden lg:flex items-center justify-center relative
          transition-all duration-700 ease-in-out
          rounded-full px-6 py-3 glass-nav z-40 overflow-visible 
          border border-white/20 dark:border-white/10 shadow-2xl
          ${scrolled ? "backdrop-blur-xl bg-white/60 dark:bg-black/10" : "backdrop-blur-md bg-white/60 dark:bg-black/5"}
        `}
        style={{
          width: collapsed ? "64px" : `${expandedWidth}px`,
          transition: "width 0.6s ease-in-out",
          minWidth: "64px"
        }}
      >
        {/* Toggle Button - Centered when collapsed */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={`h-9 w-9 glass-card hover:glass-hover rounded-full z-50 transition-all duration-300 absolute ${
            collapsed ? "opacity-100" : "opacity-100"
          }`}
          style={{
            left: collapsed ? "50%" : "auto",
            right: collapsed ? "auto" : "12px",
            transform: collapsed ? "translateX(-50%)" : "none"
          }}
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>

        {/* Navigation Content */}
        <div
          ref={navRef}
          className={`flex items-center transition-all duration-500 ease-in-out gap-6 ${
            collapsed ? "opacity-0 translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"
          }`}
          style={{ 
            whiteSpace: "nowrap"
          }}
        >
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group flex items-center gap-1 ${
                      item.dropdown.some(subItem => pathname === subItem.href) ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 glass-nav dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 py-2 z-[9999]">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary ${
                            pathname === subItem.href ? "text-primary bg-gray-100 dark:bg-gray-700" : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            ))}
          </div>
          <ThemeToggle />
        </div>
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
              item.dropdown ? (
                <div key={item.label} className="space-y-2">
                  <span className="text-sm font-medium text-foreground/60">{item.label}</span>
                  <div className="pl-4 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block text-sm font-medium transition-colors hover:text-primary ${
                          pathname === subItem.href ? "text-primary" : "text-foreground/80"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
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
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}