"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { business } from "@/lib/data";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  SendHorizonal,
  ShieldCheck,
} from "lucide-react";

const issueOptions = [
  "AC not cooling",
  "Gas leak / refill",
  "Water leakage",
  "AC installation",
  "Refrigerator issue",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", issueType: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [selectedIssue, setSelectedIssue] = useState("");

  const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
  const whatsappText = encodeURIComponent("Hi, I need to contact you for some repairing.");
  const whatsappHref = `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${whatsappText}`;

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", text: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");

      setStatus({ type: "success", text: "Message sent! We will contact you shortly." });
      setForm({ name: "", phone: "", issueType: "", message: "" });
      setSelectedIssue("");
    } catch (err) {
      setStatus({ type: "error", text: "Could not send. Please call/WhatsApp instead." });
    }
  }

  function handleIssuePick(issue) {
    setSelectedIssue(issue);
    setForm((prev) => ({
      ...prev,
      issueType: issue,
      message: prev.message || `${issue}. `,
    }));
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-muted/20">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_75%_10%,hsl(var(--primary)/0.1),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-14 md:pt-32 md:pb-18">
        <Badge variant="secondary" className="rounded-full px-4 py-1">Contact</Badge>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Book a service
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Share your issue and location. For urgent work, call/WhatsApp.
        </p>

        <div className="mt-7 grid gap-5 lg:mt-10 lg:grid-cols-12">
          <Card className="rounded-3xl border bg-card/90 p-5 shadow-sm sm:p-7 lg:col-span-7">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" /> Fast response
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <ShieldCheck className="h-3.5 w-3.5" /> Trusted technician
              </span>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4">
              <Input
                className="h-12 rounded-xl"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                className="h-12 rounded-xl"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />

              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Select issue type
                </p>
                <div className="flex flex-wrap gap-2">
                  {issueOptions.map((issue) => (
                    <button
                      key={issue}
                      type="button"
                      onClick={() => handleIssuePick(issue)}
                      className={`rounded-full border px-3 py-1.5 text-xs transition-colors sm:text-sm ${selectedIssue === issue
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"
                        }`}
                    >
                      {issue}
                    </button>
                  ))}
                </div>
              </div>

              <Textarea
                className="min-h-36 rounded-xl"
                placeholder="Problem (e.g., AC not cooling, gas leak, water leakage...)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                required
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Describe the problem clearly for faster support.</span>
                <span>{form.message.length}/500</span>
              </div>

              <Button className="h-12 rounded-full text-base" type="submit" disabled={status.type === "loading"}>
                <SendHorizonal className="h-4 w-4" />
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status.text ? (
                <div
                  className={`rounded-xl border px-3 py-2 text-sm ${status.type === "success"
                    ? "text-green-600"
                    : status.type === "error"
                      ? "text-red-600"
                      : "text-muted-foreground"
                    }`}
                >
                  {status.text}
                </div>
              ) : null}
            </form>
          </Card>

          <Card className="rounded-3xl border bg-card/90 p-5 shadow-sm sm:p-7 lg:col-span-5">
            <div className="text-2xl font-semibold tracking-tight">Direct Contact</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Prefer instant help? Reach us directly with one tap.
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href={phoneHref}
                className="rounded-2xl border bg-background p-4 transition hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 p-2 text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{business.phone}</p>
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="rounded-2xl border bg-background p-4 transition hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 p-2 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="truncate font-medium text-foreground">{business.email}</p>
                  </div>
                </div>
              </a>

              <div className="rounded-2xl border bg-background p-4">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-primary/10 p-2 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Service location</p>
                    <p className="font-medium text-foreground">{business.city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button asChild variant="secondary" className="h-11 rounded-full">
                <a href={phoneHref}>
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </Button>
              <Button asChild className="h-11 rounded-full">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-6 space-y-2 rounded-2xl border bg-background p-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />
                Mon-Sat: 8:00 AM - 9:00 PM
              </p>
              <p>
                Tip: Add your service area and Google Maps link in data for a fully dynamic contact card.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
