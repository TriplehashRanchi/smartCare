import Link from "next/link";
import { business, faqs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";

export default function FAQ() {
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

  const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
  const whatsappHref = `https://wa.me/${business.whatsapp.replace(/\D/g, "")}`;

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-muted/10 to-transparent px-4 py-14 md:px-8 md:py-18 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_18%_0%,hsl(var(--primary)/0.08),transparent_35%)]" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-10 flex flex-col gap-6">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1 text-primary"
                >
                  <HelpCircle className="mr-2 h-3.5 w-3.5" /> FAQ
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-4xl">
                  Frequently Asked <br className="hidden lg:block" /> Questions
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Everything you need to know about our repair services, billing, and warranty.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border bg-card/80 p-6 shadow-sm">
                <p className="text-base font-semibold text-foreground">Why customers trust our process</p>
                <div className="space-y-2.5 text-sm text-muted-foreground sm:text-base">
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                    Clear estimates before work starts
                  </p>
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                    Brand-trained technicians and genuine parts
                  </p>
                  <p className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
                    Support available if you need post-service help
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground">Can&apos;t find the answer?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are here to help. Chat with our team directly.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <Button className="w-full gap-2 rounded-full" variant="default" asChild>
                    <Link href={phoneHref}>
                      <Phone className="h-4 w-4" /> Call Now
                    </Link>
                  </Button>
                  <Button className="w-full gap-2 rounded-full" variant="outline" asChild>
                    <Link href={whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4" /> WhatsApp Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-3xl border bg-card/70 p-3 shadow-sm sm:p-4">
              <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
                {faqs.map((f, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-2xl border bg-background px-4 sm:px-6 transition-all hover:border-primary/40 data-[state=open]:border-primary data-[state=open]:bg-muted/10 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="py-6 text-left hover:no-underline [&[data-state=open]]:text-primary">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-2 text-xs font-semibold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-medium leading-snug">{f.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-11 text-base leading-relaxed text-muted-foreground">
                      <p>{f.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
