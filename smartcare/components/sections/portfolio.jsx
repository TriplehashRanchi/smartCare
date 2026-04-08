"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const portfolioItems = [
  { title: "Indoor Unit Spa", note: "Deep foam cleaning & disinfection", image: "/1.jpeg" },
  { title: "Outdoor Optimization", note: "Jet wash & performance tuning", image: "/2.jpeg" },
  { title: "Leakage Masterclass", note: "Nitrogen testing & brazing", image: "/3.jpeg" },
  { title: "Frost Free Fixes", note: "Refrigerator sensor & heater repair", image: "/4.jpeg" },
  { title: "Precision Install", note: "Laser-aligned mounting holes", image: "/5.jpeg" },
  { title: "Drainage unclog", note: "High pressure flush system", image: "/6.jpeg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4">
          <Badge
            variant="outline"
            className="mb-4 rounded-full px-4 py-1 border-primary/30 text-primary bg-primary/5"
          >
            Gallery
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Work in Action
          </h2>

          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            Clean workmanship is our signature. Here is what we do best.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="group relative overflow-hidden rounded-[2rem] border-none shadow-md hover:shadow-xl transition-all duration-300">

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="font-bold text-white mb-1">
                    {it.title}
                  </h3>
                  <p className="text-xs text-white/80">
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
