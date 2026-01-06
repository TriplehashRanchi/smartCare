import { business, navLinks } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t mt-12 md:mt-16 lg:mt-20 overflow-hidden">
      {/* Footer Gradient Background */}
      <div className="absolute inset-0 bg-secondary/30 -z-20" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl tracking-tight">
              <span className="bg-primary text-primary-foreground rounded-full p-1.5">
                <Sparkles className="h-5 w-5" />
              </span>
              <span>{business.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Professional AC and Refrigerator repair services tailored for your home needs. Fast, reliable, and affordable.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">AC Repair</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refrigerator Fix</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Annual Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Phone:</span>
                <a href={`tel:${business.phone}`} className="hover:text-primary transition">{business.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Email:</span>
                <a href={`mailto:${business.email}`} className="hover:text-primary transition">{business.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-medium text-foreground">Loc:</span>
                <span>{business.city}, India</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 md:my-10 bg-border/50" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <div>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
