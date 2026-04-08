"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Snowflake,
  Wind,
  Droplets,
  Zap,
  ThermometerSnowflake,
  ShieldCheck,
  ArrowRight,
  Star,
  Clock3,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const journey = [
  {
    step: "01",
    icon: Wrench,
    title: "AC Repair",
    desc: "Complete diagnosis & repair for all AC types — cooling issues, noise, PCB & wiring.",
    tag: "Most Popular",
    color: "210",    // hue
    colorfull: "oklch(0.68 0.18 210)",
  },
  {
    step: "02",
    icon: Snowflake,
    title: "AC Servicing",
    desc: "Deep indoor/outdoor cleaning, anti-fungal wash, filter cleaning & performance tuning.",
    tag: "Regular Care",
    color: "225",
    colorfull: "oklch(0.65 0.17 225)",
  },
  {
    step: "03",
    icon: Wind,
    title: "AC Installation",
    desc: "Safe mounting, vacuuming, leak check & full performance test. Clean finish guaranteed.",
    tag: "New Setup",
    color: "242",
    colorfull: "oklch(0.62 0.18 242)",
  },
  {
    step: "04",
    icon: Droplets,
    title: "Gas Refill",
    desc: "Refrigerant leak detection, copper joint repair, vacuum & precision gas refill.",
    tag: "Cooling Fix",
    color: "255",
    colorfull: "oklch(0.60 0.17 255)",
  },
  {
    step: "05",
    icon: Zap,
    title: "Power Issues",
    desc: "AC not turning on? We fix fuse/MCB, capacitor, PCB diagnosis & wiring repairs.",
    tag: "Quick Fix",
    color: "268",
    colorfull: "oklch(0.62 0.16 268)",
  },
  {
    step: "06",
    icon: ThermometerSnowflake,
    title: "Fridge Repair",
    desc: "Not cooling, ice buildup, gas leak, thermostat & relay — all fridge issues resolved.",
    tag: "Fridge Care",
    color: "240",
    colorfull: "oklch(0.63 0.17 240)",
  },
];

const highlights = [
  { icon: Star, value: "500+", label: "Happy Customers" },
  { icon: Clock3, value: "60 Min", label: "Avg. Arrival" },
  { icon: ShieldCheck, value: "6 Mo.", label: "Warranty" },
  { icon: BadgeCheck, value: "8+ Yrs", label: "Experience" },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden py-20 md:py-28">

      {/* ── Background Effects ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/services-bg.png"
          alt=""
          fill
          className="object-cover opacity-20 dark:opacity-15"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-background/65 dark:bg-background/72" />
        {/* Ambient glows */}
        <div
          className="pointer-events-none absolute -top-32 left-1/4 h-[400px] w-[400px] rounded-full blur-[140px] opacity-15"
          style={{ background: "oklch(0.6 0.18 245)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 right-0 h-[320px] w-[320px] rounded-full blur-[120px] opacity-10"
          style={{ background: "oklch(0.65 0.18 210)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── HERO ROW: Heading + Technician ── */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 0.35)",
                background: "oklch(0.65 0.18 210 / 0.1)",
                color: "oklch(0.65 0.18 210)",
              }}
            >
              <MapPin className="h-3.5 w-3.5" />
              Our Service Journey
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              We Repair,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(130deg, oklch(0.75 0.17 200), oklch(0.58 0.19 250))",
                }}
              >
                You Relax.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              From a quick repair to a complete installation — we travel your journey step by step.
              Trusted by 500+ families across Jhumri Telaiya.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border p-3"
                  style={{
                    borderColor: "oklch(0.65 0.18 210 / 0.15)",
                    background: "oklch(0.65 0.18 210 / 0.06)",
                  }}
                >
                  <h.icon className="mb-1.5 h-4 w-4" style={{ color: "oklch(0.65 0.18 210)" }} />
                  <p className="text-base font-bold">{h.value}</p>
                  <p className="text-[10px] text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.46 0.16 262))",
                color: "#fff",
                boxShadow: "0 0 22px oklch(0.55 0.18 250 / 0.40)",
              }}
            >
              Book a Service
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right — Technician card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="absolute -inset-5 rounded-[2.8rem] blur-2xl opacity-25"
                style={{ background: "radial-gradient(ellipse, oklch(0.58 0.19 245), transparent 70%)" }}
              />
              <div
                className="absolute -inset-3 rounded-[2.5rem] border border-dashed opacity-25"
                style={{ borderColor: "oklch(0.6 0.18 250)" }}
              />
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  width: "330px",
                  height: "410px",
                  border: "1px solid oklch(0.6 0.18 250 / 0.22)",
                  boxShadow: "0 24px 64px oklch(0.08 0.04 260 / 0.5)",
                }}
              >
                <Image
                  src="/technician.png"
                  alt="SmartCare Expert Technician"
                  fill
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, oklch(0.10 0.04 260 / 0.88) 0%, transparent 55%)",
                  }}
                />
                <div
                  className="absolute bottom-5 left-4 right-4 rounded-2xl px-4 py-3 backdrop-blur-md"
                  style={{
                    background: "oklch(0.14 0.05 260 / 0.82)",
                    border: "1px solid oklch(0.6 0.18 250 / 0.2)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full shrink-0"
                      style={{ background: "linear-gradient(135deg, oklch(0.65 0.18 210), oklch(0.55 0.18 250))" }}
                    >
                      <Wrench className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Expert Technician</p>
                      <p className="text-[10px]" style={{ color: "oklch(0.65 0.15 210)" }}>SmartCare · 8+ Years</p>
                    </div>
                    <div
                      className="ml-auto flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                      style={{
                        background: "oklch(0.55 0.18 250 / 0.2)",
                        color: "oklch(0.72 0.15 210)",
                        border: "1px solid oklch(0.55 0.18 250 / 0.3)",
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.72 0.15 210)" }} />
                      Online
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 backdrop-blur-md shadow-xl"
                style={{ background: "oklch(0.14 0.05 260 / 0.92)", border: "1px solid oklch(0.6 0.18 250 / 0.25)" }}
              >
                <p className="text-xs font-bold text-white">Same Day Service</p>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <Clock3 className="h-3 w-3" style={{ color: "oklch(0.65 0.18 210)" }} />
                  <p className="text-[10px]" style={{ color: "oklch(0.65 0.15 210)" }}>60 min arrival</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 backdrop-blur-md shadow-xl"
                style={{ background: "oklch(0.14 0.05 260 / 0.92)", border: "1px solid oklch(0.6 0.18 250 / 0.25)" }}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" style={{ color: "oklch(0.65 0.18 210)" }} />
                  <div>
                    <p className="text-xs font-bold text-white">6-Month Warranty</p>
                    <p className="text-[10px]" style={{ color: "oklch(0.65 0.15 210)" }}>On every repair</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════ */}
        {/* ── JOURNEY ROAD (Desktop + Mobile) ────── */}
        {/* ══════════════════════════════════════════ */}

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "oklch(0.62 0.18 242 / 0.35)",
              background: "oklch(0.62 0.18 242 / 0.08)",
              color: "oklch(0.62 0.18 242)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.62 0.18 242)" }} />
            Your Complete Service Journey
          </div>
        </motion.div>

        {/* ── DESKTOP JOURNEY (hidden on mobile) ── */}
        <div className="hidden lg:block">
          <div className="relative">

            {/* ── Top row: cards on top (odd indices 0,2,4) ── */}
            <div className="grid grid-cols-6 gap-0 mb-0">
              {journey.map((svc, i) => (
                <div key={svc.step} className="flex justify-center px-2">
                  {i % 2 === 0 ? (
                    <JourneyCard svc={svc} i={i} />
                  ) : (
                    <div className="h-[200px]" /> /* spacer for alternating */
                  )}
                </div>
              ))}
            </div>

            {/* ── The Glowing Road ── */}
            <div className="relative my-2">
              {/* Road track */}
              <div
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] rounded-full"
                style={{
                  background: "linear-gradient(to right, oklch(0.68 0.18 210), oklch(0.62 0.18 242), oklch(0.58 0.19 255), oklch(0.62 0.16 268))",
                  boxShadow: "0 0 16px oklch(0.60 0.18 245 / 0.6), 0 0 32px oklch(0.60 0.18 245 / 0.3)",
                }}
              />

              {/* Animated travelling dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full shadow-lg"
                style={{
                  background: "white",
                  boxShadow: "0 0 12px oklch(0.68 0.18 210), 0 0 24px oklch(0.62 0.18 242)",
                  left: 0,
                }}
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
              />

              {/* Step nodes */}
              <div className="relative grid grid-cols-6 gap-0 h-14">
                {journey.map((svc, i) => (
                  <motion.div
                    key={svc.step}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className="flex items-center justify-center"
                  >
                    {/* Node pulse ring */}
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-3 rounded-full opacity-30"
                        style={{ background: svc.colorfull }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.0, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <div
                        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-xs font-extrabold text-white shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${svc.colorfull}, oklch(0.46 0.16 262))`,
                          boxShadow: `0 0 16px ${svc.colorfull.replace(")", " / 0.6)")}`,
                          border: "2px solid oklch(0.98 0 0 / 0.25)",
                        }}
                      >
                        {svc.step}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Bottom row: cards on bottom (even indices 1,3,5) ── */}
            <div className="grid grid-cols-6 gap-0">
              {journey.map((svc, i) => (
                <div key={svc.step} className="flex justify-center px-2">
                  {i % 2 !== 0 ? (
                    <JourneyCard svc={svc} i={i} />
                  ) : (
                    <div className="h-[200px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE JOURNEY (vertical timeline, shown on mobile/tablet) ── */}
        <div className="block lg:hidden">
          <div className="relative pl-10">
            {/* Vertical road line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-[3px] rounded-full"
              style={{
                background: "linear-gradient(to bottom, oklch(0.68 0.18 210), oklch(0.58 0.19 255), oklch(0.62 0.16 268))",
                boxShadow: "0 0 12px oklch(0.60 0.18 245 / 0.5)",
              }}
            />

            {/* Animated travelling dot (vertical) */}
            <motion.div
              className="absolute left-[10px] h-3 w-3 rounded-full"
              style={{
                background: "white",
                boxShadow: "0 0 10px oklch(0.65 0.18 210)",
                top: 0,
              }}
              animate={{ top: ["0%", "95%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />

            {journey.map((svc, i) => (
              <motion.div
                key={svc.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-6 last:mb-0"
              >
                {/* Node */}
                <div
                  className="absolute -left-10 top-6 flex h-9 w-9 items-center justify-center rounded-full text-xs font-extrabold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${svc.colorfull}, oklch(0.46 0.16 262))`,
                    boxShadow: `0 0 14px ${svc.colorfull.replace(")", " / 0.5)")}`,
                    border: "2px solid oklch(0.98 0 0 / 0.2)",
                  }}
                >
                  {svc.step}
                </div>

                <JourneyCard svc={svc} i={i} mobile />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Journey Card sub-component ── */
function JourneyCard({ svc, i, mobile = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      whileHover={{ y: mobile ? 0 : -6, scale: 1.02 }}
      className="group relative w-full overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 cursor-default"
      style={{
        borderColor: `${svc.colorfull.replace(")", " / 0.15)")}`,
        background: "linear-gradient(135deg, oklch(0.15 0.05 260 / 0.65) 0%, oklch(0.11 0.04 260 / 0.40) 100%)",
        boxShadow: `0 4px 20px oklch(0.08 0.04 260 / 0.25)`,
        minHeight: mobile ? "auto" : "190px",
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${svc.colorfull.replace(")", " / 0.12)")} 0%, transparent 70%)`,
        }}
      />

      {/* Top row: icon + tag */}
      <div className="relative z-10 mb-3 flex items-start justify-between gap-2">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: `${svc.colorfull.replace(")", " / 0.14)")}`,
            border: `1px solid ${svc.colorfull.replace(")", " / 0.28)")}`,
          }}
        >
          <svc.icon className="h-5 w-5" style={{ color: svc.colorfull }} />
        </div>
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shrink-0"
          style={{
            background: `${svc.colorfull.replace(")", " / 0.12)")}`,
            color: svc.colorfull,
            border: `1px solid ${svc.colorfull.replace(")", " / 0.22)")}`,
          }}
        >
          {svc.tag}
        </span>
      </div>

      <h3 className="relative z-10 text-base font-extrabold tracking-tight">{svc.title}</h3>
      <p className="relative z-10 mt-1.5 text-xs leading-5 text-truncate line-clamp-3">{svc.desc}</p>

      {/* Bottom CTA link (on hover) */}
      <Link
        href="/contact"
        className="relative z-10 mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{ color: svc.colorfull }}
      >
        Book now <ArrowRight className="h-3 w-3" />
      </Link>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-2xl"
        style={{ background: `linear-gradient(to right, transparent, ${svc.colorfull}, transparent)` }}
      />
    </motion.div>
  );
}
