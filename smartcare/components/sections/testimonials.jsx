"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ArrowUpRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 bg-gray-50/50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 font-medium uppercase tracking-wider text-primary">
            Client Stories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by your <span className="text-primary">Neighbors</span>
          </h2>
        </div>

        {/* Responsive Layout: Carousel on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-4 px-4 hide-scrollbar pt-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative min-w-[85%] snap-center md:min-w-0"
            >
              {/* 1. The Orange/Yellow Outline Stroke Effect */}
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-[1rem] rounded-bl-[1rem] border border-orange-400/50 opacity-60 transition-transform duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3" />

              {/* 2. The Main Card (Darker Shape) */}
              <div className="relative h-full flex flex-col rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-[1rem] rounded-bl-[1rem] bg-card border border-white/5 px-6 pb-6 pt-10 text-card-foreground shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">

                {/* 3. The Big Quote Icon (Background Watermark) */}
                <Quote className="absolute right-4 top-4 h-16 w-16 rotate-12 text-primary/5" />

                {/* 4. Floating Avatar (Popping out top-left) */}
                <div className="absolute -top-8 left-6">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-background bg-gradient-to-br from-gray-100 to-gray-200 shadow-md">
                    <User className="h-8 w-8 text-slate-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-4 flex h-full flex-col">
                  {/* Name & Role */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold">{t.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="h-0.5 w-3 bg-orange-400" />
                      <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wide">
                        Verified Customer
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground italic">
                    "{t.text}"
                  </p>

                  {/* Stars & CTA */}
                  <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                      ))}
                    </div>

                    <Button
                      size="sm"
                      className="h-7 rounded-full bg-primary/10 hover:bg-primary/20 text-primary gap-1 px-3 text-[10px] font-bold shadow-none"
                    >
                      Verify <ArrowUpRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}