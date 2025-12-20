import { notFound } from "next/navigation";
import Link from "next/link";
import { services, business } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.title} | ${business.name}`,
    description: s.short,
  };
}

export default function ServiceDetail({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge variant="secondary" className="rounded-xl">Service</Badge>
        <Button asChild variant="secondary" className="rounded-xl">
          <Link href="/#services">← Back</Link>
        </Button>
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{s.title}</h1>
      <p className="mt-2 text-muted-foreground">{s.short}</p>

      <Card className="mt-8 rounded-3xl p-6">
        <div className="text-lg font-semibold">Included work</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
          {s.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-xl">
            <a href="/#contact">Book This Service</a>
          </Button>
          <Button asChild variant="secondary" className="rounded-xl">
            <a href={`tel:${business.phone}`}>Call Now</a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
