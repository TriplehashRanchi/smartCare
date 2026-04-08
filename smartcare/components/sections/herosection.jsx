"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Wrench,
  ShieldCheck,
  Clock3,
  Phone,
  ArrowRight,
  Snowflake,
  Zap,
  Star,
} from "lucide-react";
import { business } from "@/lib/data";

const slides = [
  {
    id: 1,
    tag: "AC Repair & Service",
    headline: "Expert Repair,",
    highlight: "Zero Hassle.",
    sub: "Fast diagnosis, genuine parts & 6-month warranty. All major AC brands serviced across Jhumri Telaiya.",
    image: "/hero-slide-1.png",
    accent: "Same Day Service",
    cta: "Book Repair Now",
  },
  {
    id: 2,
    tag: "AC Installation",
    headline: "Safe & Clean",
    highlight: "AC Installation.",
    sub: "Proper wall mounting, complete vacuuming, full performance test — done right the first time.",
    image: "/hero-slide-2.png",
    accent: "Certified Technicians",
    cta: "Book Installation",
  },
  {
    id: 3,
    tag: "Gas Refill & Cooling",
    headline: "Restore Your",
    highlight: "Perfect Cooling.",
    sub: "Low cooling? We detect refrigerant leaks, fix copper joints, and do precision gas refills.",
    image: "/hero-slide-3.png",
    accent: "Cooling Restored",
    cta: "Get Cooling Fixed",
  },
];

const stats = [
  { icon: Star, value: "500+", label: "Happy Clients" },
  { icon: Wrench, value: "8+", label: "Yrs Experience" },
  { icon: Clock3, value: "60 Min", label: "Avg. Arrival" },
  { icon: ShieldCheck, value: "6 Mo.", label: "Warranty" },
];

const features = [
  { icon: Wrench, title: "All AC Brands", sub: "Certified repair" },
  { icon: Clock3, title: "60 Min Arrival", sub: "Fast response" },
  { icon: ShieldCheck, title: "6-Mo Warranty", sub: "On every repair" },
  { icon: Zap, title: "Same-Day", sub: "Service available" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── BACKGROUND IMAGE SLIDES ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          {slides.map((slide, i) =>
            i === current ? (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* ── Overlay: makes dark bg blend from the image into site background color ── */}
        {/* Left‑to‑right: heavy dark fade on left (text area), transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.12 0.04 260 / 0.96) 0%, oklch(0.12 0.04 260 / 0.80) 40%, oklch(0.12 0.04 260 / 0.45) 70%, oklch(0.12 0.04 260 / 0.20) 100%)",
          }}
        />
        {/* Bottom: fade into site background so hero merges seamlessly into next section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.12 0.04 260 / 0.30) 0%, transparent 20%, transparent 65%, var(--background) 100%)",
          }}
        />
        {/* Top: softer fade so navbar floats cleanly over it */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.12 0.04 260 / 0.55) 0%, transparent 18%)",
          }}
        />
      </div>

      {/* ── Subtle floating particles ── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none z-10"
          style={{
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            left: `${8 + i * 13}%`,
            top: `${20 + (i % 4) * 15}%`,
            background: `oklch(0.65 0.18 210 / ${0.18 + (i % 3) * 0.08})`,
            boxShadow: `0 0 ${10 + i * 2}px oklch(0.65 0.18 210 / 0.4)`,
          }}
          animate={{ y: [0, -(12 + i * 5), 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative z-20 mx-auto flex max-w-7xl flex-col justify-center px-5 sm:px-8 lg:px-14"
        style={{ minHeight: "100svh", paddingTop: "7rem", paddingBottom: "3rem" }}
      >
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Tag */}
                <div
                  className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold backdrop-blur-sm"
                  style={{
                    borderColor: "oklch(0.65 0.18 210 / 0.35)",
                    background: "oklch(0.65 0.18 210 / 0.12)",
                    color: "oklch(0.82 0.12 210)",
                  }}
                >
                  <Snowflake
                    className="h-3.5 w-3.5"
                    style={{ color: "oklch(0.72 0.16 210)", animation: "spin 3s linear infinite" }}
                  />
                  {slides[current].tag}
                </div>

                {/* Headline */}
                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                  {slides[current].headline}
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(130deg, oklch(0.75 0.17 200), oklch(0.6 0.2 245), oklch(0.65 0.18 270))",
                    }}
                  >
                    {slides[current].highlight}
                  </span>
                </h1>

                {/* Sub text */}
                <p
                  className="mt-5 max-w-lg text-base leading-7 sm:text-lg"
                  style={{ color: "oklch(0.82 0.04 240)" }}
                >
                  {slides[current].sub}
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.48 0.16 260))",
                      color: "#fff",
                      boxShadow: "0 0 22px oklch(0.55 0.18 250 / 0.5), 0 4px 14px oklch(0.08 0.04 260 / 0.3)",
                    }}
                  >
                    {slides[current].cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      borderColor: "oklch(0.98 0 0 / 0.22)",
                      background: "oklch(0.98 0 0 / 0.09)",
                      color: "oklch(0.94 0.01 240)",
                    }}
                  >
                    <Phone className="h-4 w-4" />
                    Emergency Call
                  </a>
                </div>

                {/* Feature pills */}
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="flex items-center gap-2 rounded-2xl border px-3 py-2 backdrop-blur-sm"
                      style={{
                        borderColor: "oklch(0.98 0 0 / 0.1)",
                        background: "oklch(0.98 0 0 / 0.07)",
                      }}
                    >
                      <f.icon className="h-3.5 w-3.5 shrink-0" style={{ color: "oklch(0.72 0.16 210)" }} />
                      <div>
                        <p className="text-[11px] font-semibold text-white">{f.title}</p>
                        <p className="text-[9px]" style={{ color: "oklch(0.60 0.04 240)" }}>{f.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT CARD ── */}
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={`card-${current}`}
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -16, scale: 0.97 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div
                className="rounded-3xl p-6 backdrop-blur-xl"
                style={{
                  background: "oklch(0.14 0.05 260 / 0.70)",
                  border: "1px solid oklch(0.6 0.18 250 / 0.22)",
                  boxShadow: "0 12px 48px oklch(0.08 0.04 260 / 0.6), inset 0 1px 0 oklch(0.98 0 0 / 0.08)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium" style={{ color: "oklch(0.72 0.15 210)" }}>Service Highlight</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{slides[current].tag}</h3>
                  </div>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: "oklch(0.55 0.18 250 / 0.15)", border: "1px solid oklch(0.55 0.18 250 / 0.3)" }}
                  >
                    <Snowflake className="h-5 w-5" style={{ color: "oklch(0.72 0.15 210)", animation: "spin 4s linear infinite" }} />
                  </div>
                </div>

                <div className="my-4 h-px rounded" style={{ background: "linear-gradient(to right, oklch(0.55 0.18 250 / 0.35), transparent)" }} />

                <div
                  className="mb-4 rounded-2xl px-4 py-3"
                  style={{ background: "oklch(0.55 0.18 250 / 0.1)", border: "1px solid oklch(0.55 0.18 250 / 0.2)" }}
                >
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: "oklch(0.62 0.06 240)" }}>Current Highlights</p>
                  <p className="mt-1 text-base font-bold" style={{ color: "oklch(0.78 0.15 210)" }}>{slides[current].accent}</p>
                  <p className="mt-1 text-xs leading-5" style={{ color: "oklch(0.62 0.04 240)" }}>
                    Professional AC solutions for home & office — with care and precision.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl p-3.5"
                      style={{ background: "oklch(0.98 0 0 / 0.04)", border: "1px solid oklch(0.98 0 0 / 0.07)" }}
                    >
                      <s.icon className="mb-1.5 h-4 w-4" style={{ color: "oklch(0.72 0.15 210)" }} />
                      <p className="text-base font-bold text-white">{s.value}</p>
                      <p className="text-[10px]" style={{ color: "oklch(0.58 0.04 240)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.46 0.16 262))",
                    color: "#fff",
                    boxShadow: "0 0 18px oklch(0.55 0.18 250 / 0.38)",
                  }}
                >
                  Book a Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence> */}
        </div>

        {/* ── BOTTOM ROW: Dots + Stats ── */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          {/* Slide Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
              style={{ background: "oklch(0.98 0 0 / 0.09)", border: "1px solid oklch(0.98 0 0 / 0.16)", color: "white" }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: "7px",
                    width: i === current ? "26px" : "7px",
                    background: i === current ? "oklch(0.68 0.18 210)" : "oklch(0.98 0 0 / 0.32)",
                    boxShadow: i === current ? "0 0 8px oklch(0.65 0.18 210)" : "none",
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
              style={{ background: "oklch(0.98 0 0 / 0.09)", border: "1px solid oklch(0.98 0 0 / 0.16)", color: "white" }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <span className="text-[11px] font-medium" style={{ color: "oklch(0.52 0.04 240)" }}>
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                {i > 0 && (
                  <div className="hidden h-5 w-px sm:block" style={{ background: "oklch(0.98 0 0 / 0.15)" }} />
                )}
                <div>
                  <p className="text-sm font-bold text-white">{s.value}</p>
                  <p className="text-[10px]" style={{ color: "oklch(0.55 0.04 240)" }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Progress bar (auto-advance indicator) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 h-[2px]"
        style={{ background: "oklch(0.98 0 0 / 0.08)" }}
      >
        <motion.div
          key={current}
          className="h-full rounded-r"
          style={{
            background: "linear-gradient(to right, oklch(0.68 0.18 210), oklch(0.58 0.19 250))",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5.5, ease: "linear" }}
        />
      </div>
    </section>
  );
}