"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, business } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
  const whatsappText = encodeURIComponent("Hi, I need to contact you for some repairing.");
  const whatsappHref = `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${whatsappText}`;
  const links = navLinks;

  // Scroll-aware transparency
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
  });

  const isHome = pathname === "/";

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-center"
        style={{ paddingTop: scrolled ? "12px" : "20px", paddingBottom: scrolled ? "12px" : "20px", transition: "padding 0.4s ease" }}
      >
        <motion.div
          animate={{
            backdropFilter: scrolled ? "blur(20px)" : isHome ? "blur(0px)" : "blur(20px)",
            background: scrolled
              ? "color-mix(in oklch, var(--background) 88%, transparent)"
              : isHome
              ? "transparent"
              : "color-mix(in oklch, var(--background) 88%, transparent)",
            borderColor: scrolled ? "color-mix(in oklch, var(--border) 80%, transparent)" : "transparent",
            boxShadow: scrolled ? "0 4px 30px color-mix(in oklch, var(--foreground) 6%, transparent)" : "none",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="dark:[--nav-bg:oklch(0.12_0.04_260_/_0.85)] flex items-center justify-between rounded-full border px-6 py-3 w-[95%] max-w-6xl"
          style={{
            background: scrolled
              ? "color-mix(in oklch, var(--background) 88%, transparent)"
              : isHome
              ? "transparent"
              : "color-mix(in oklch, var(--background) 88%, transparent)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span
              className="rounded-full p-1.5 text-xs shadow-[0_0_15px_var(--primary)]"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              <Sparkles className="h-4 w-4" />
            </span>
            <span
              className={`bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent transition-all ${
                !scrolled && isHome ? "drop-shadow-[0_1px_8px_oklch(0.6_0.18_250/0.6)]" : ""
              }`}
            >
              {business.name}
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1 rounded-full p-1"
            style={{
              background: scrolled || !isHome ? "oklch(0.13 0.02 240 / 0.06)" : "oklch(0.98 0 0 / 0.1)",
              border: `1px solid ${scrolled || !isHome ? "oklch(0.13 0.02 240 / 0.08)" : "oklch(0.98 0 0 / 0.15)"}`,
            }}
          >
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    isActive
                      ? "text-white"
                      : scrolled || !isHome
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full shadow-[0_0_10px_var(--primary)]"
                      style={{ background: "var(--primary)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className="rounded-full shadow-[0_0_15px_var(--primary)] hover:shadow-[0_0_25px_var(--primary)] transition-shadow"
          >
            <a href={phoneHref}>
              <Phone className="mr-2 h-3.5 w-3.5" /> Call Now
            </a>
          </Button>
        </motion.div>
      </motion.header>

      {/* ── Mobile Top Bar ── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between px-3 py-3 transition-all duration-400"
        style={{
          background: scrolled || !isHome
            ? "color-mix(in oklch, var(--background) 88%, transparent)"
            : "transparent",
          backdropFilter: scrolled || !isHome ? "blur(16px)" : "none",
          borderBottom: scrolled || !isHome ? "1px solid color-mix(in oklch, var(--border) 60%, transparent)" : "none",
          boxShadow: scrolled ? "0 2px 20px color-mix(in oklch, var(--foreground) 5%, transparent)" : "none",
        }}
      >
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 pr-2 font-bold tracking-tight">
          <span className="shrink-0 rounded-full bg-primary p-1.5 text-xs text-primary-foreground shadow-[0_0_12px_var(--primary)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span
            className={`block truncate bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-sm text-transparent sm:hidden ${
              !scrolled && isHome ? "brightness-125" : ""
            }`}
          >
            SmartCare
          </span>
          <span
            className={`hidden truncate bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-base text-transparent sm:block ${
              !scrolled && isHome ? "brightness-125" : ""
            }`}
          >
            {business.name}
          </span>
        </Link>

        <div className="ml-2 flex shrink-0 items-center gap-1.5">
          <Button asChild size="icon-sm" className="rounded-full shadow-lg shadow-primary/20">
            <a href={phoneHref} aria-label="Call now">
              <Phone className="h-3.5 w-3.5" />
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="rounded-full"
                style={
                  !scrolled && isHome
                    ? { background: "oklch(0.98 0 0 / 0.15)", borderColor: "oklch(0.98 0 0 / 0.3)", color: "white" }
                    : {}
                }
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[82%] max-w-xs p-0">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>{business.name}</SheetTitle>
                <SheetDescription>Navigate quickly through the website.</SheetDescription>
              </SheetHeader>

              <div className="space-y-2 px-4 py-4">
                {links.map((l) => {
                  const isActive = pathname === l.href;
                  return (
                    <SheetClose key={l.href} asChild>
                      <Link
                        href={l.href}
                        className={`block w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                          isActive
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-border text-foreground hover:bg-muted/60"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              <div className="mt-auto grid grid-cols-1 gap-2 border-t p-4">
                <SheetClose asChild>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border bg-background px-4 py-2.5 text-sm font-medium"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </>
  );
}
