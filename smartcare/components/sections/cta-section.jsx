"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone, MessageCircle, ArrowRight,
  ShieldCheck, Clock3, Star, Wrench,
} from "lucide-react";
import { business } from "@/lib/data";

const trust = [
  { icon: Star, label: "500+ Happy Clients" },
  { icon: ShieldCheck, label: "6-Month Warranty" },
  { icon: Clock3, label: "60 Min Arrival" },
  { icon: Wrench, label: "8+ Years Experience" },
];

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
const whatsappHref = `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I need AC/refrigerator service.")}`;

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cta-founder.png"
          alt="SmartCare Founder"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Left dark overlay so text is absolutely readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.06 0.03 260 / 0.98) 0%, oklch(0.06 0.03 260 / 0.96) 38%, oklch(0.06 0.03 260 / 0.80) 58%, oklch(0.06 0.03 260 / 0.30) 78%, oklch(0.06 0.03 260 / 0.05) 100%)",
          }}
        />
      </div>

      {/* ── Decorative neon glow on left ── */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[300px] rounded-full blur-[120px] opacity-15"
        style={{ background: "oklch(0.60 0.18 245)" }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-14">
        <div className="max-w-xl">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 0.35)",
                background: "oklch(0.65 0.18 210 / 0.10)",
                color: "oklch(0.72 0.15 210)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: "oklch(0.72 0.15 210)" }}
              />
              Available Now · Jhumri Telaiya
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Your AC Broke?
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, oklch(0.78 0.16 200), oklch(0.60 0.19 250))",
              }}
            >
              We Fix It Today.
            </span>
          </motion.h2>

          {/* Sub text — minimal, crisp */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-md text-[15px] leading-7"
            style={{ color: "oklch(0.78 0.04 240)" }}
          >
            One call is all it takes. Expert technician at your door within 60 minutes —
            genuine parts, clean work, 6-month warranty.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold"
                style={{
                  borderColor: "oklch(0.98 0 0 / 0.12)",
                  background: "oklch(0.98 0 0 / 0.06)",
                  color: "oklch(0.85 0.04 240)",
                }}
              >
                <t.icon className="h-3 w-3 shrink-0" style={{ color: "oklch(0.68 0.18 210)" }} />
                {t.label}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {/* Primary — Call */}
            <a
              href={phoneHref}
              className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-extrabold text-white transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.46 0.16 262))",
                boxShadow:
                  "0 0 24px oklch(0.55 0.18 250 / 0.55), 0 4px 16px oklch(0.08 0.04 260 / 0.3)",
              }}
            >
              <Phone className="h-4 w-4" />
              Call Now — {business.phone}
            </a>

            {/* Secondary — WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.04]"
              style={{
                borderColor: "oklch(0.98 0 0 / 0.20)",
                background: "oklch(0.98 0 0 / 0.07)",
                color: "oklch(0.90 0.02 240)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>

            {/* Tertiary — Book online */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full border px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.04]"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 0.30)",
                background: "oklch(0.65 0.18 210 / 0.08)",
                color: "oklch(0.72 0.15 210)",
                backdropFilter: "blur(10px)",
              }}
            >
              Book Online
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Founder signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-3"
          >
            <div
              className="h-px flex-1 max-w-[48px]"
              style={{ background: "oklch(0.98 0 0 / 0.15)" }}
            />
            <p
              className="text-[11px] font-medium"
              style={{ color: "oklch(0.55 0.04 240)" }}
            >
              — {business.founderName ?? "Founder"}, SmartCare Services · Trusted since {new Date().getFullYear() - 8}
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── Animated bottom glow line ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, oklch(0.68 0.18 210 / 0.6) 30%, oklch(0.58 0.19 250 / 0.6) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
