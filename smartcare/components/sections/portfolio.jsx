"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const portfolioItems = [
  { title: "Indoor Unit Spa", note: "Deep foam cleaning & disinfection", image: "/1.jpeg" },
  { title: "Outdoor Optimization", note: "Jet wash & performance tuning", image: "/2.jpeg" },
  { title: "Leakage Masterclass", note: "Nitrogen testing & brazing", image: "/3.jpeg" },
  { title: "Frost Free Fixes", note: "Refrigerator sensor & heater repair", image: "/4.jpeg" },
  { title: "Precision Install", note: "Laser-aligned mounting holes", image: "/5.jpeg" },
  { title: "Drainage unclog", note: "High pressure flush system", image: "/6.jpeg" },
];

export default function Portfolio() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 rounded-full px-4 py-1 border-primary/30 text-primary bg-primary/5"
          >
            Gallery
          </Badge>

          <h2 className="text-4xl font-bold mb-4">
            Work in Action
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Clean workmanship is our signature. Here is what we do best.
          </p>
        </div>

        {/* Mobile arrows */}
        <div className="flex justify-between mb-4 sm:hidden">
          <button
            onClick={() => slide("left")}
            className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => slide("right")}
            className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Slider (mobile) / Grid (desktop) */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar
            sm:grid sm:grid-cols-2 lg:grid-cols-3
            sm:overflow-visible
          "
        >
          {portfolioItems.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="min-w-[280px] snap-center sm:min-w-0"
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
