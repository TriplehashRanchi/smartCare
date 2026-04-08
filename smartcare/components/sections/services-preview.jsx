"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench, Snowflake, Wind, Droplets, ThermometerSnowflake, Zap,
  ArrowRight, ShieldCheck, Clock3, Star, CheckCircle2, Phone,
} from "lucide-react";
import { business } from "@/lib/data";

const featuredServices = [
  {
    id: "ac-repair",
    icon: Wrench,
    title: "AC Repair",
    shortDesc: "Full diagnostic & fix for all AC problems.",
    price: "₹299",
    priceNote: "onwards",
    image: "/svc-repair.png",
    popular: true,
    features: ["Cooling issues fixed", "PCB & wiring", "All AC brands", "Same-day visit"],
    color: "oklch(0.68 0.18 210)",
  },
  {
    id: "ac-servicing",
    icon: Snowflake,
    title: "AC Servicing",
    shortDesc: "Deep clean, anti-fungal wash & performance boost.",
    price: "₹399",
    priceNote: "onwards",
    image: "/svc-service.png",
    popular: false,
    features: ["Full indoor clean", "Filter & coil wash", "Anti-fungal spray", "Cooling restored"],
    color: "oklch(0.65 0.17 225)",
  },
  {
    id: "ac-installation",
    icon: Wind,
    title: "AC Installation",
    shortDesc: "Safe & clean split/window AC setup.",
    price: "₹999",
    priceNote: "onwards",
    image: "/svc-install.png",
    popular: false,
    features: ["Wall mounting", "Vacuum & testing", "Leak check", "Clean finish"],
    color: "oklch(0.62 0.18 242)",
  },
  {
    id: "gas-refill",
    icon: Droplets,
    title: "Gas Refill",
    shortDesc: "Refrigerant leak fix & precision gas refill.",
    price: "₹599",
    priceNote: "onwards",
    image: "/svc-gas.png",
    popular: false,
    features: ["Leak detection", "Copper joint fix", "Vacuuming", "Pressure test"],
    color: "oklch(0.60 0.17 255)",
  },
];

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;

export default function ServicesPreview() {
  return (
    <section id="services-preview" className="relative overflow-hidden py-20 md:py-24">

      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, oklch(0.60 0.18 245 / 0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, oklch(0.65 0.18 210 / 0.05) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left"
        >
          <div>
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 0.3)",
                background: "oklch(0.65 0.18 210 / 0.08)",
                color: "oklch(0.65 0.18 210)",
              }}
            >
              <Star className="h-3.5 w-3.5" />
              Transparent Pricing
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(130deg, oklch(0.75 0.17 200), oklch(0.58 0.19 250))",
                }}
              >
                Service Plans
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              No hidden charges. Clear pricing, expert work, and a 6-month warranty on every job.
            </p>
          </div>

          <Link
            href="/services"
            className="group mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] sm:mt-0"
            style={{
              borderColor: "oklch(0.65 0.18 210 / 0.3)",
              color: "oklch(0.55 0.18 250)",
              background: "oklch(0.65 0.18 210 / 0.06)",
            }}
          >
            See All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* ── Pricing Cards Grid ── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300"
              style={{
                borderColor: svc.popular
                  ? `${svc.color.replace(")", " / 0.45)")}`
                  : `${svc.color.replace(")", " / 0.18)")}`,
                background: "var(--card)",
                boxShadow: svc.popular
                  ? `0 8px 32px ${svc.color.replace(")", " / 0.25)")}, 0 2px 8px oklch(0.08 0.04 260 / 0.1)`
                  : "0 2px 16px oklch(0.08 0.04 260 / 0.06)",
              }}
            >
              {/* Popular badge */}
              {svc.popular && (
                <div
                  className="absolute right-4 top-4 z-20 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white"
                  style={{ background: `linear-gradient(135deg, ${svc.color}, oklch(0.46 0.16 262))` }}
                >
                  Most Popular
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, ${svc.color.replace(")", " / 0.20)")} 0%, oklch(0.08 0.03 260 / 0.55) 100%)`,
                  }}
                />
                {/* Icon on image */}
                <div
                  className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-2xl backdrop-blur-sm"
                  style={{
                    background: `${svc.color.replace(")", " / 0.25)")}`,
                    border: `1px solid ${svc.color.replace(")", " / 0.40)")}`,
                  }}
                >
                  <svc.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold">{svc.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-5">{svc.shortDesc}</p>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span
                    className="text-3xl font-extrabold"
                    style={{ color: svc.color }}
                  >
                    {svc.price}
                  </span>
                  <span className="text-xs text-muted-foreground">{svc.priceNote}</span>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: svc.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="my-4 h-px bg-border" />

                {/* Trust row */}
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" style={{ color: svc.color }} />
                    6-Mo Warranty
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock3 className="h-3 w-3" style={{ color: svc.color }} />
                    Same-day
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                  style={{
                    background: `linear-gradient(135deg, ${svc.color}, oklch(0.46 0.16 262))`,
                    boxShadow: `0 0 14px ${svc.color.replace(")", " / 0.30)")}`,
                  }}
                >
                  Book Now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border p-6 sm:flex-row sm:gap-6"
          style={{
            background: "linear-gradient(135deg, oklch(0.15 0.05 260 / 0.5), oklch(0.12 0.04 260 / 0.3))",
            borderColor: "oklch(0.60 0.18 245 / 0.2)",
          }}
        >
          <div>
            <p className="text-base font-bold text-white">Not sure which service you need?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Call us — we&apos;ll diagnose the issue for free and suggest the right plan.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.46 0.16 262))",
                boxShadow: "0 0 18px oklch(0.55 0.18 250 / 0.40)",
              }}
            >
              <Phone className="h-4 w-4" /> Call Now — Free Diagnosis
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                borderColor: "oklch(0.60 0.18 245 / 0.3)",
                color: "oklch(0.72 0.15 210)",
                background: "oklch(0.60 0.18 245 / 0.06)",
              }}
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
