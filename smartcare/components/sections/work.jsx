"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="py-24 relative">
      {/* Background blob */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/30 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 border-primary/30 text-primary bg-primary/5">
              Recent Projects
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">Real Results</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            See how we bring appliances back to life with expert repairs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="group h-full glass-card border border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="p-6 relative">

                  {/* Decorative subtle gradient */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150 duration-700" />

                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-transparent rounded-full px-3 py-0.5 text-xs font-semibold">
                      {p.category}
                    </Badge>
                    <div className="bg-white/10 p-2 rounded-full">
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-secondary/50 text-secondary-foreground border border-white/5">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
