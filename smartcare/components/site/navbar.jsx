"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { navLinks, business } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles, Home, Wrench, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

function scrollToHash(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(() => navLinks, []);

  // Map icons to links for bottom nav
  const icons = {
    "#home": Home,
    "#services": Wrench,
    "#work": Briefcase,
    "#contact": Mail,
    // fallback
    "default": Sparkles
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const ids = links.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive("#" + visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      obs.disconnect();
    };
  }, [links]);

  return (
    <>
      {/* Desktop Floating Pill Navbar (Hidden on Mobile) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${scrolled ? "w-[90%] max-w-4xl" : "w-[95%] max-w-6xl"
          }`}
      >
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="bg-primary text-primary-foreground rounded-full p-1.5 shadow-[0_0_15px_var(--primary)] text-xs">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              {business.name}
            </span>
          </Link>

          <nav className="flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-white/5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollToHash(l.href)}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition duration-300 ${active === l.href
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {active === l.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="rounded-full shadow-[0_0_15px_var(--primary)] hover:shadow-[0_0_25px_var(--primary)] transition-shadow">
              <a href={`tel:${business.phone}`}>
                <Phone className="mr-2 h-3.5 w-3.5" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Top Header (Standard App Bar) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 glass border-b px-4 py-3 flex items-center justify-between transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight">
          <span className="bg-primary text-primary-foreground rounded-full p-1.5 shadow-[0_0_12px_var(--primary)] text-xs">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            {business.name}
          </span>
        </Link>
        <Button asChild size="sm" className="rounded-full h-9 px-3 sm:px-4 text-xs font-semibold shadow-lg shadow-primary/20">
          <a href={`tel:${business.phone}`}>
            <Phone className="h-3.5 w-3.5 sm:mr-2" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </Button>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t pb-safe">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          {links.map((l) => {
            const Icon = icons[l.href] || icons.default;
            const isActive = active === l.href;
            
            return (
              <button
                key={l.href}
                onClick={() => scrollToHash(l.href)}
                className={`relative flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl transition-all duration-300 active:scale-95 ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground active:bg-muted/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className={`h-5 w-5 relative z-10 ${isActive ? "text-primary" : ""}`} />
                <span className={`text-[10px] font-medium relative z-10 ${isActive ? "text-primary" : ""}`}>
                  {l.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

