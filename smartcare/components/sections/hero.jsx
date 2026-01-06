"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/data";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const orbitingItems = [
  "AC Repair",
  "Cooler Repair",
  "AC Installation",
  "Gas Refill"
];

const backgroundImages = [
  "/bg-hero-1.webp",
  "/bg-hero-2.webp",
  "/image.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20 md:pt-32 md:pb-20">

      {/* GLOBAL Background Effects (Subtle grid) */}
      <div className="absolute inset-0 -z-20 bg-background" />
      <div className="absolute inset-0 -z-20 bg-grid opacity-30" />

      {/* Left-Side Only Background Slideshow Container */}
      {/* Positioned absolutely on the left half, faded out towards the right and bottom */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-full -z-10 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }} // Very low opacity ("minimum view")
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[index]}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Masks to blend into background */}
        {/* Fade out to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/40 to-background" />
        {/* Fade out to the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        {/* Fade out to the top for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs md:text-sm font-medium text-primary mb-4 md:mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Top-Rated AC & Refrigerator Repair
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 md:mb-6 leading-[1.15]">
              Expert Repair, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-500 animate-gradient-x">
                Zero Hassle.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-sm md:max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              We fix cooling appliances with premium care. Fast diagnosis, original parts, and a warranty you can trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start w-full px-4 lg:px-0">
              <Button size="lg" className="w-full sm:w-auto h-11 md:h-12 rounded-full px-6 md:px-8 text-sm md:text-base shadow-[0_0_20px_var(--primary)] hover:shadow-[0_0_30px_var(--primary)] transition-shadow">
                <a href="#contact">Book Service Now</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-11 md:h-12 rounded-full px-6 md:px-8 text-sm md:text-base backdrop-blur-sm bg-background/30 hover:bg-background/50">
                <a href={`tel:${business.phone}`}>Emergency Call</a>
              </Button>
            </div>

            <div className="mt-6 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 md:gap-x-6 gap-y-2 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="text-primary h-4 w-4" /> 6 Months Warranty
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="text-yellow-500 h-4 w-4" /> 60 Min Arrival
              </div>
            </div>
          </motion.div>

          {/* Orbiting Animation Section - RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              {/* Static Outer Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              <div className="absolute inset-8 sm:inset-12 md:inset-16 lg:inset-20 rounded-full border border-dashed border-primary/20" />

              {/* Orbit Container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full rounded-full"
              >
                {orbitingItems.map((item, index) => {
                  const angle = (index / orbitingItems.length) * 360;
                  // Responsive orbit radius: smaller on mobile, larger on desktop
                  const orbitRadius = "clamp(100px, 20vw, 220px)";

                  return (
                    <div
                      key={item}
                      className="absolute top-1/2 left-1/2 w-0 h-0" // Centered pivot
                      style={{ transform: `rotate(${angle}deg) translate(${orbitRadius}) rotate(-${angle}deg)` }}
                    >
                      <motion.div
                        // Counter-rotate against the container's continuous rotation
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2" // Center item on pivot
                      >
                        <div className="glass px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full whitespace-nowrap text-[9px] sm:text-[10px] md:text-sm font-semibold shadow-lg border border-primary/20 bg-background/80 backdrop-blur-md text-foreground">
                          <span className="mr-1 sm:mr-1.5 text-primary">❄️</span> {item}
                        </div>
                      </motion.div>
                    </div>
                  )
                })}
              </motion.div>

              {/* Central Graphic */}
              <div className="absolute z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full bg-gradient-to-b from-primary/5 to-transparent border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.1)] backdrop-blur-sm flex items-center justify-center">
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-500 to-purple-600 tracking-tighter shadow-sm">
                    8<span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl align-top text-primary">++</span>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-muted-foreground mt-1">Years of Trust</div>
                </div>
                {/* Inner Pulse */}
                <div className="absolute inset-4 rounded-full bg-primary/5 animate-pulse" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
