"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { business, navLinks, services } from "@/lib/data";
import {
  Phone, Mail, MapPin, MessageCircle, Snowflake,
  Instagram, Facebook, Youtube, Twitter,
  ArrowUpRight, ShieldCheck, Clock3, Star, Wrench,
  ChevronRight,
} from "lucide-react";

const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
const whatsappHref = `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I need AC/refrigerator service.")}`;
const emailHref = `mailto:${business.email}`;

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "My Work", href: "/work" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "AC Repair", href: "/services#ac-repair" },
  { label: "AC Servicing", href: "/services#ac-servicing" },
  { label: "AC Installation", href: "/services#ac-installation" },
  { label: "Gas Refill", href: "/services#gas-refill" },
  { label: "Power Issues", href: "/services#power-issues" },
  { label: "Refrigerator Repair", href: "/services#fridge-repair" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", color: "oklch(0.66 0.22 330)" },
  { icon: Facebook, label: "Facebook", href: "#", color: "oklch(0.55 0.18 250)" },
  { icon: Youtube, label: "YouTube", href: "#", color: "oklch(0.60 0.22 25)" },
  { icon: Twitter, label: "Twitter / X", href: "#", color: "oklch(0.80 0.02 240)" },
];

const trust = [
  { icon: Star, label: "500+ Happy Clients" },
  { icon: ShieldCheck, label: "6-Mo Warranty" },
  { icon: Clock3, label: "60 Min Arrival" },
  { icon: Wrench, label: "8+ Yrs Exp." },
];

const ACCENT = "oklch(0.65 0.18 210)";
const ACCENT2 = "oklch(0.58 0.19 250)";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t" style={{ borderColor: "oklch(0.65 0.18 210 / 0.12)" }}>

      {/* ── Deep dark background ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "oklch(0.09 0.03 260)" }}
      />
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full blur-[160px] opacity-[0.07]"
        style={{ background: ACCENT }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full blur-[120px] opacity-[0.05]"
        style={{ background: ACCENT2 }}
      />

      {/* ════════════════════════════
          TOP STRIP — Brand promise
      ════════════════════════════ */}
      <div
        className="border-b"
        style={{ borderColor: "oklch(0.65 0.18 210 / 0.10)" }}
      >
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2.5">
              {trust.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold"
                  style={{
                    borderColor: "oklch(0.65 0.18 210 / 0.18)",
                    background: "oklch(0.65 0.18 210 / 0.06)",
                    color: "oklch(0.80 0.04 240)",
                  }}
                >
                  <t.icon className="h-3 w-3 shrink-0" style={{ color: ACCENT }} />
                  {t.label}
                </div>
              ))}
            </div>

            {/* Quick contact */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:scale-[1.04]"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
                  boxShadow: `0 0 16px oklch(0.55 0.18 250 / 0.35)`,
                }}
              >
                <Phone className="h-3.5 w-3.5" /> {business.phone}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-[1.04]"
                style={{
                  borderColor: "oklch(0.65 0.18 210 / 0.25)",
                  color: "oklch(0.75 0.06 240)",
                  background: "oklch(0.65 0.18 210 / 0.06)",
                }}
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════
          MAIN FOOTER BODY
      ════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* ── Column 1: Brand ── */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
                  boxShadow: `0 0 18px oklch(0.55 0.18 250 / 0.35)`,
                }}
              >
                <Snowflake className="h-5 w-5 text-white" style={{ animation: "spin 5s linear infinite" }} />
              </div>
              <div>
                <p className="text-base font-extrabold tracking-tight text-white">{business.name}</p>
                <p className="text-[10px] font-medium" style={{ color: ACCENT }}>AC & Refrigerator Experts</p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6" style={{ color: "oklch(0.60 0.04 240)" }}>
              Professional AC repair, servicing, installation & refrigerator repair in Jhumri Telaiya.
              Fast response. Genuine parts. 6-month warranty on every job.
            </p>

            {/* Address */}
            <div className="mt-5 flex items-start gap-2.5" style={{ color: "oklch(0.55 0.04 240)" }}>
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
              <p className="text-xs leading-5">{business.city}, India</p>
            </div>
            <a
              href={emailHref}
              className="mt-2 flex items-center gap-2.5 text-xs transition-colors hover:opacity-80"
              style={{ color: "oklch(0.55 0.04 240)" }}
            >
              <Mail className="h-4 w-4 shrink-0" style={{ color: ACCENT }} />
              {business.email}
            </a>

            {/* Social icons */}
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-2xl border transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: "oklch(0.98 0 0 / 0.10)",
                    background: "oklch(0.98 0 0 / 0.04)",
                  }}
                >
                  <s.icon
                    className="h-4 w-4 transition-colors duration-300"
                    style={{ color: "oklch(0.55 0.04 240)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = s.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.04 240)")}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <p
              className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.15em]"
              style={{ color: ACCENT }}
            >
              Company
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-1.5 text-sm transition-all duration-200"
                    style={{ color: "oklch(0.62 0.04 240)" }}
                  >
                    <ChevronRight
                      className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: ACCENT }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div>
            <p
              className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.15em]"
              style={{ color: ACCENT }}
            >
              Services
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-1.5 text-sm transition-all duration-200"
                    style={{ color: "oklch(0.62 0.04 240)" }}
                  >
                    <ChevronRight
                      className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: ACCENT }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Legal + Newsletter ── */}
          <div>
            <p
              className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.15em]"
              style={{ color: ACCENT }}
            >
              Legal
            </p>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-1.5 text-sm transition-all duration-200"
                    style={{ color: "oklch(0.62 0.04 240)" }}
                  >
                    <ChevronRight
                      className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{ color: ACCENT }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Book card */}
            <div
              className="mt-8 rounded-2xl border p-4"
              style={{
                borderColor: "oklch(0.65 0.18 210 / 0.18)",
                background: "oklch(0.65 0.18 210 / 0.06)",
              }}
            >
              <p className="text-xs font-bold text-white">Same-Day Booking</p>
              <p className="mt-0.5 text-[10px]" style={{ color: "oklch(0.58 0.04 240)" }}>
                Mon – Sat · 8 AM – 9 PM
              </p>
              <a
                href={phoneHref}
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
                  boxShadow: `0 0 12px oklch(0.55 0.18 250 / 0.30)`,
                }}
              >
                <Phone className="h-3 w-3" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════
          BOTTOM BAR
      ════════════════════════════ */}
      <div
        className="border-t"
        style={{ borderColor: "oklch(0.65 0.18 210 / 0.10)" }}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-14">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

            {/* Copyright */}
            <p className="text-[11px]" style={{ color: "oklch(0.42 0.03 240)" }}>
              © {year} <span className="font-semibold" style={{ color: "oklch(0.55 0.04 240)" }}>{business.name}</span>. All rights reserved. Built with ❄️ in Jharkhand, India.
            </p>

            {/* Legal quick links */}
            <div className="flex items-center gap-5">
              {legalLinks.slice(0, 3).map((l, i) => (
                <span key={l.label} className="flex items-center gap-5">
                  {i > 0 && (
                    <span className="h-3 w-px" style={{ background: "oklch(0.98 0 0 / 0.08)" }} />
                  )}
                  <Link
                    href={l.href}
                    className="text-[11px] transition-colors hover:text-white"
                    style={{ color: "oklch(0.42 0.03 240)" }}
                  >
                    {l.label}
                  </Link>
                </span>
              ))}
            </div>

            {/* Made with love */}
            <p className="text-[11px]" style={{ color: "oklch(0.38 0.03 240)" }}>
              Powered by{" "}
              <span
                className="font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(130deg, ${ACCENT}, ${ACCENT2})` }}
              >
                SmartCare
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Top neon accent line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{
          background: `linear-gradient(to right, transparent 0%, ${ACCENT} 30%, ${ACCENT2} 70%, transparent 100%)`,
          opacity: 0.5,
        }}
      />
    </footer>
  );
}
