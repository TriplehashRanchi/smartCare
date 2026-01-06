"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { business } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

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

      setStatus({ type: "success", text: "Message sent! I will contact you soon." });
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: "Could not send. Please call/WhatsApp instead." });
    }
  }

  return (
    <section id="contact" className="bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Badge variant="secondary" className="rounded-xl">Contact</Badge>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">Book a service</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Share your issue and location. For urgent work, call/WhatsApp.
        </p>

        <div className="mt-6 md:mt-8 grid gap-4 md:grid-cols-2">
          <Card className="rounded-2xl sm:rounded-3xl p-5 sm:p-6">
            <form onSubmit={onSubmit} className="grid gap-3">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <Textarea
                placeholder="Problem (e.g., AC not cooling, gas leak, water leakage...)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                required
              />
              <Button className="rounded-xl" type="submit" disabled={status.type === "loading"}>
                Send Message
              </Button>

              {status.text ? (
                <div
                  className={`text-sm ${status.type === "success"
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

          <Card className="rounded-2xl sm:rounded-3xl p-5 sm:p-6">
            <div className="text-lg font-semibold">Direct Contact</div>
            <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <div><b>Phone:</b> <a className="underline" href={`tel:${business.phone}`}>{business.phone}</a></div>
              <div><b>Email:</b> <a className="underline" href={`mailto:${business.email}`}>{business.email}</a></div>
              <div><b>City:</b> {business.city}</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary" className="rounded-xl">
                <a href={`tel:${business.phone}`}>Call Now</a>
              </Button>
              <Button asChild className="rounded-xl">
                <a
                  href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-6 rounded-2xl border bg-background p-4 text-sm text-muted-foreground">
              Tip: Add your service area, working hour, and Google Map link here.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
