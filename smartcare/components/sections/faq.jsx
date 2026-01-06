import { faqs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MessageCircle, HelpCircle } from "lucide-react";

export default function FAQ() {
  // 1. SEO: Generate Structured Data automatically from your lib/data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-transparent to-muted/20 px-4 py-12 md:py-16 lg:py-20 md:px-8">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

          {/* LEFT COLUMN: Header & Contact CTA (Sticky on Desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-10 flex flex-col gap-6">
              <div>
                <Badge variant="outline" className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1 text-primary">
                  <HelpCircle className="mr-2 h-3.5 w-3.5" /> FAQ
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Frequently Asked <br className="hidden lg:block" /> Questions
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Everything you need to know about our repair services, billing, and warranty.
                </p>
              </div>

              {/* Premium Feature: Contact Support Block */}
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground">Can't find the answer?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are here to help. Chat with our team directly.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button className="w-full gap-2" variant="default">
                    <Phone className="h-4 w-4" /> Call Now
                  </Button>
                  <Button className="w-full gap-2" variant="outline">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Accordion List */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {faqs.map((f, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-xl bg-background px-6 transition-all hover:border-primary/40 data-[state=open]:border-primary data-[state=open]:bg-muted/10 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline [&[data-state=open]]:text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}