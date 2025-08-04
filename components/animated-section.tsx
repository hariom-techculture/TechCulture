"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animations = {
    fadeInUp: isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    fadeInLeft: isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
    fadeInRight: isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
    scaleIn: isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
  }

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${animations[animation]} ${className}`}>
      {children}
    </div>
  )
}
