"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench, Snowflake, Wind, Droplets, Zap, ThermometerSnowflake,
  Settings, Waves, Thermometer, Shield, CheckCircle2, ArrowRight,
  ShieldCheck, Clock3, Star, BadgeCheck, Phone, Sparkles,
} from "lucide-react";
import { business } from "@/lib/data";

const allServices = [
  // ── AC Services ────────────────────────────────────────────
  {
    id: "ac-repair",
    category: "AC Services",
    icon: Wrench,
    title: "AC Repair",
    desc: "Complete diagnosis and repair for all types of air conditioners including split, window, inverter & cassette ACs.",
    price: "₹299",
    priceNote: "onwards",
    image: "/svc-repair.png",
    popular: true,
    features: ["Cooling issues fixed", "PCB & wiring repair", "All major brands", "Same-day service"],
    color: "oklch(0.68 0.18 210)",
  },
  {
    id: "ac-servicing",
    category: "AC Services",
    icon: Snowflake,
    title: "AC Deep Servicing",
    desc: "Full indoor and outdoor unit cleaning, anti-fungal wash, filter cleaning and performance tuning to restore optimum cooling.",
    price: "₹399",
    priceNote: "onwards",
    image: "/svc-service.png",
    popular: false,
    features: ["Indoor unit deep clean", "Filter & coil wash", "Anti-fungal spray", "Cooling restored"],
    color: "oklch(0.65 0.17 225)",
  },
  {
    id: "ac-installation",
    category: "AC Services",
    icon: Wind,
    title: "AC Installation",
    desc: "Safe and clean split, window or tower AC installation with proper wall mounting, vacuuming, leak test and full performance check.",
    price: "₹999",
    priceNote: "onwards",
    image: "/svc-install.png",
    popular: false,
    features: ["Wall drilling & mounting", "Proper vacuuming", "Copper line fitting", "Full performance test"],
    color: "oklch(0.62 0.18 242)",
  },
  {
    id: "gas-refill",
    category: "AC Services",
    icon: Droplets,
    title: "Gas Refill",
    desc: "Gas leak detection, copper joint repair and precision refrigerant refill with pressure testing to ensure maximum cooling efficiency.",
    price: "₹599",
    priceNote: "onwards",
    image: "/svc-gas.png",
    popular: false,
    features: ["Leak detection", "Copper joint fix", "Gas vacuuming", "Pressure testing"],
    color: "oklch(0.60 0.17 255)",
  },
  {
    id: "power-issues",
    category: "AC Services",
    icon: Zap,
    title: "AC Power Issues",
    desc: "Fix AC that won't turn on, keeps tripping or has intermittent power problems. Fuse, MCB, capacitor & PCB diagnosis included.",
    price: "₹249",
    priceNote: "onwards",
    image: "/svc-repair.png",
    popular: false,
    features: ["Fuse & MCB check", "Capacitor replacement", "PCB diagnosis", "Wiring inspection"],
    color: "oklch(0.62 0.16 268)",
  },
  {
    id: "water-leakage",
    category: "AC Services",
    icon: Waves,
    title: "Water Leakage Fix",
    desc: "Resolve indoor AC water dripping issues with drain line cleaning, slope correction, tray cleaning and insulation checks.",
    price: "₹299",
    priceNote: "onwards",
    image: "/svc-service.png",
    popular: false,
    features: ["Drain blockage removed", "Slope correction", "Tray & pipe clean", "Insulation check"],
    color: "oklch(0.62 0.18 220)",
  },
  {
    id: "ac-smell",
    category: "AC Services",
    icon: Snowflake,
    title: "AC Bad Smell Fix",
    desc: "Remove foul or musty odors from your AC with deep coil cleaning, anti-bacterial treatment and drain sanitisation.",
    price: "₹349",
    priceNote: "onwards",
    image: "/svc-service.png",
    popular: false,
    features: ["Filter deep clean", "Coil sanitisation", "Anti-bacterial spray", "Odor eliminated"],
    color: "oklch(0.66 0.17 205)",
  },
  {
    id: "compressor-repair",
    category: "AC Services",
    icon: Settings,
    title: "Compressor Repair",
    desc: "Expert diagnosis and repair of AC compressor issues including start capacitor failure, overload protection and motor testing.",
    price: "₹699",
    priceNote: "onwards",
    image: "/svc-repair.png",
    popular: false,
    features: ["Compressor testing", "Capacitor check", "Overload protection", "Replacement support"],
    color: "oklch(0.58 0.19 248)",
  },
  {
    id: "inverter-ac-service",
    category: "AC Services",
    icon: Sparkles,
    title: "Inverter AC Service",
    desc: "Specialized servicing for variable-speed inverter AC units including PCB diagnostics, sensor check and refrigerant optimization.",
    price: "₹499",
    priceNote: "onwards",
    image: "/svc-service.png",
    popular: false,
    features: ["PCB diagnostics", "Sensor calibration", "Refrigerant check", "Efficiency tuning"],
    color: "oklch(0.63 0.18 235)",
  },
  {
    id: "amc",
    category: "AC Services",
    icon: Shield,
    title: "Annual Maintenance (AMC)",
    desc: "Full-year AC care plan with 2 scheduled services, priority repair visits, filter replacement and performance monitoring.",
    price: "₹1,999",
    priceNote: "per year",
    image: "/svc-install.png",
    popular: true,
    features: ["2 full services/year", "Priority repair visit", "Filter replacement", "Performance report"],
    color: "oklch(0.65 0.18 215)",
  },

  // ── Refrigerator Services ───────────────────────────────────
  {
    id: "fridge-repair",
    category: "Refrigerator",
    icon: ThermometerSnowflake,
    title: "Refrigerator Repair",
    desc: "Complete refrigerator troubleshooting and repair for all brands — cooling issues, compressor, thermostat, relay & more.",
    price: "₹399",
    priceNote: "onwards",
    image: "/svc-fridge.png",
    popular: false,
    features: ["Not cooling fixed", "Compressor check", "Thermostat & relay", "All brands"],
    color: "oklch(0.63 0.17 240)",
  },
  {
    id: "fridge-gas",
    category: "Refrigerator",
    icon: Droplets,
    title: "Fridge Gas Refill",
    desc: "Refrigerator refrigerant leak detection, copper joint repair and precision gas refilling for restored temperature control.",
    price: "₹799",
    priceNote: "onwards",
    image: "/svc-gas.png",
    popular: false,
    features: ["Leak detection", "Copper joint fix", "Gas vacuuming", "Temperature test"],
    color: "oklch(0.60 0.17 252)",
  },
  {
    id: "fridge-ice-buildup",
    category: "Refrigerator",
    icon: Thermometer,
    title: "Ice Buildup Fix",
    desc: "Remove excessive ice formation in freezer and fridge compartments. Defrost heater and thermostat diagnosis included.",
    price: "₹349",
    priceNote: "onwards",
    image: "/svc-fridge.png",
    popular: false,
    features: ["Defrost diagnosis", "Heater check", "Thermostat test", "Full defrost done"],
    color: "oklch(0.65 0.16 228)",
  },
  {
    id: "fridge-not-cooling",
    category: "Refrigerator",
    icon: ThermometerSnowflake,
    title: "Fridge Not Cooling",
    desc: "Expert diagnosis for refrigerators that are not cooling or not maintaining temperature — compressor, fan motor & gas check.",
    price: "₹449",
    priceNote: "onwards",
    image: "/svc-fridge.png",
    popular: false,
    features: ["Full diagnosis", "Fan motor check", "Compressor test", "Gas level check"],
    color: "oklch(0.62 0.18 243)",
  },
  {
    id: "fridge-door-seal",
    category: "Refrigerator",
    icon: Shield,
    title: "Door Seal & Sound Fix",
    desc: "Fix noisy, vibrating refrigerators and replace damaged door gaskets for better energy efficiency and performance.",
    price: "₹299",
    priceNote: "onwards",
    image: "/svc-fridge.png",
    popular: false,
    features: ["Door gasket replaced", "Vibration fix", "Level adjustment", "Sound testing"],
    color: "oklch(0.60 0.16 260)",
  },
];

const categories = ["All", "AC Services", "Refrigerator"];
const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;

const stats = [
  { icon: Star, value: "500+", label: "Satisfied Customers" },
  { icon: ShieldCheck, value: "6 Mo.", label: "Repair Warranty" },
  { icon: Clock3, value: "60 Min", label: "Avg Arrival Time" },
  { icon: BadgeCheck, value: "8+ Yrs", label: "In Business" },
];

export default function ServicesFull() {
  return (
    <div className="min-h-screen pt-24 pb-20 md:pt-28 md:pb-24">

      {/* ── Page Hero ── */}
      <div
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.04 260 / 0.04) 0%, oklch(0.60 0.18 245 / 0.06) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.60 0.18 245 / 0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 0.3)",
                background: "oklch(0.65 0.18 210 / 0.08)",
                color: "oklch(0.58 0.18 245)",
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              All Services — Transparent Pricing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Every Service We{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(130deg, oklch(0.75 0.17 200), oklch(0.58 0.19 250))",
                }}
              >
                Offer
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground sm:text-lg">
              AC repair, servicing, installation, gas refill, refrigerator repair & more — all at transparent, honest pricing.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto mb-1 h-5 w-5" style={{ color: "oklch(0.65 0.18 210)" }} />
                <p className="text-xl font-extrabold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Service Cards ── */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 mt-12">

        {/* Category headers */}
        {["AC Services", "Refrigerator"].map((cat) => {
          const catServices = allServices.filter((s) => s.category === cat);
          return (
            <div key={cat} className="mb-16">

              {/* Category label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex items-center gap-4"
              >
                <div
                  className="h-1 w-8 rounded-full"
                  style={{
                    background: "linear-gradient(to right, oklch(0.68 0.18 210), oklch(0.58 0.19 250))",
                  }}
                />
                <h2 className="text-2xl font-extrabold tracking-tight">{cat}</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="rounded-full border px-3 py-0.5 text-xs font-semibold text-muted-foreground">
                  {catServices.length} services
                </span>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {catServices.map((svc, i) => (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    whileHover={{ y: -5, scale: 1.015 }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300"
                    style={{
                      borderColor: svc.popular
                        ? `${svc.color.replace(")", " / 0.40)")}`
                        : `${svc.color.replace(")", " / 0.16)")}`,
                      background: "var(--card)",
                      boxShadow: svc.popular
                        ? `0 8px 28px ${svc.color.replace(")", " / 0.20)")}`
                        : "0 2px 12px oklch(0.08 0.04 260 / 0.05)",
                    }}
                  >
                    {/* Popular badge */}
                    {svc.popular && (
                      <div
                        className="absolute right-3 top-3 z-20 rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white"
                        style={{ background: `linear-gradient(135deg, ${svc.color}, oklch(0.46 0.16 262))` }}
                      >
                        ⭐ Popular
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                        style={{ transition: "transform 0.5s ease" }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, ${svc.color.replace(")", " / 0.18)")} 0%, oklch(0.07 0.03 260 / 0.60) 100%)`,
                        }}
                      />
                      {/* Icon */}
                      <div
                        className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl backdrop-blur-sm"
                        style={{
                          background: `${svc.color.replace(")", " / 0.28)")}`,
                          border: `1px solid ${svc.color.replace(")", " / 0.45)")}`,
                        }}
                      >
                        <svc.icon className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="text-base font-extrabold">{svc.title}</h3>
                      <p className="mt-1 text-[11px] leading-5 text-muted-foreground line-clamp-2">{svc.desc}</p>

                      {/* Price */}
                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold" style={{ color: svc.color }}>
                          {svc.price}
                        </span>
                        <span className="text-[10px] text-muted-foreground">{svc.priceNote}</span>
                      </div>

                      {/* Feature list */}
                      <ul className="mt-3 space-y-1">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: svc.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Divider */}
                      <div className="my-3 h-px bg-border" />

                      {/* Trust pills */}
                      <div className="flex flex-wrap gap-1.5">
                        <span
                          className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                          style={{
                            background: `${svc.color.replace(")", " / 0.10)")}`,
                            color: svc.color,
                            border: `1px solid ${svc.color.replace(")", " / 0.22)")}`,
                          }}
                        >
                          ✓ 6-Mo Warranty
                        </span>
                        <span
                          className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                          style={{
                            background: `${svc.color.replace(")", " / 0.10)")}`,
                            color: svc.color,
                            border: `1px solid ${svc.color.replace(")", " / 0.22)")}`,
                          }}
                        >
                          ✓ Same-day
                        </span>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-2xl py-2.5 text-xs font-bold text-white transition-all duration-300 hover:opacity-90"
                        style={{
                          background: `linear-gradient(135deg, ${svc.color}, oklch(0.46 0.16 262))`,
                          boxShadow: `0 0 12px ${svc.color.replace(")", " / 0.28)")}`,
                        }}
                      >
                        Book Now <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border p-8 text-center sm:flex-row sm:text-left"
          style={{
            background: "linear-gradient(135deg, oklch(0.14 0.05 260 / 0.5), oklch(0.11 0.04 260 / 0.3))",
            borderColor: "oklch(0.60 0.18 245 / 0.22)",
          }}
        >
          <div>
            <p className="text-xl font-extrabold text-white">Need a custom service package?</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Call us directly for AMC plans, bulk servicing, or any repair not listed above.
            </p>
          </div>
          <a
            href={phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.46 0.16 262))",
              boxShadow: "0 0 22px oklch(0.55 0.18 250 / 0.40)",
            }}
          >
            <Phone className="h-4 w-4" /> Call {business.phone}
          </a>
        </motion.div>

      </div>
    </div>
  );
}
