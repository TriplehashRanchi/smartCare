"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";

const portfolioItems = [
  { title: "Indoor Unit Spa", note: "Deep foam cleaning & disinfection" },
  { title: "Outdoor Optimization", note: "Jet wash & performance tuning" },
  { title: "Leakage Masterclass", note: "Nitrogen testing & brazing" },
  { title: "Frost Free Fixes", note: "Refrigerator sensor & heater repair" },
  { title: "Precision Install", note: "Laser-aligned mounting holes" },
  { title: "Drainage unclog", note: "High pressure flush system" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 border-primary/30 text-primary bg-primary/5">
            Gallery
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Work in Action</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Clean workmanship is our signature. Here is what we do best.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
          {portfolioItems.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="min-w-[280px] snap-center sm:min-w-0"
            >
              <Card className="group h-full relative overflow-hidden rounded-[2rem] border-none bg-muted/30 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-colors flex items-center justify-center p-6">
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm shadow-inner">
                    <ImageIcon className="h-8 w-8 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent pt-12 pb-6 px-6">
                  <h3 className="font-bold text-base leading-tight mb-1 group-hover:text-primary transition-colors">{it.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {it.note}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
