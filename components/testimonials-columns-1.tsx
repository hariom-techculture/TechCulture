"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Testimonial {
  message: string;
  image: string;
  name: string;
  title: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling to true immediately when scroll starts
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a new timeout to detect when scrolling stops
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // 150ms delay after scroll stops

      setScrollTimeout(timeout);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);
   
  return (
    <div className={`relative h-[75vh] overflow-hidden ${props.className}`}>
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          // Pause animation when scrolling
          ...(isScrolling && { 
            duration: 0,
            repeat: 0 
          })
        }}
        style={{
          // Pause the animation using CSS when scrolling
          animationPlayState: isScrolling ? 'paused' : 'running'
        }}
        className="flex flex-col gap-8 pb-8"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ message, image, name, title }, i) => (
                <div
                  className="glass-card p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-md backdrop-blur-xl bg-white/60 dark:bg-black/10 w-full max-w-md"
                  key={i}
                >
                  <div className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {message}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-white/20 dark:border-white/10"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-lg tracking-tight leading-5 text-gray-900 dark:text-white">
                        {name}
                      </div>
                      <div className="text-sm opacity-70 tracking-tight text-gray-600 dark:text-gray-400">
                        {title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};