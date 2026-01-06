"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wrench, Thermometer, Droplets, Zap } from "lucide-react";

const icons = {
  ac: Wrench,
  compressor: Zap,
  gas: Droplets,
  leakage: Thermometer,
};

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 border-primary/30 text-primary bg-primary/5">
            Our Expertise
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">Premium Repair Services</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-2">
            We don't just fix appliances; we restore their performance. Choose a service below.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 pb-20 md:pb-0">
          {services.map((s, idx) => {
            const Icon = Object.entries(icons).find(([k]) => s.slug.includes(k))?.[1] || Wrench;

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full glass-card hover:bg-card/60 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 active:scale-[0.98] border border-white/5 hover:border-primary/30">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-secondary flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 md:mb-6 leading-relaxed">
                    {s.short}
                  </p>

                  <ul className="space-y-2 mb-6 md:mb-8">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-center text-xs text-muted-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors p-2 -ml-2 rounded-lg active:bg-primary/10"
                  >
                    View details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
