import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoCta, PageIntro } from "@/components/portalis-site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Portalis" },
      { name: "description", content: "See how Portalis turns a vehicle arrival into a structured, searchable property entry record." },
      { property: "og:title", content: "How Portalis Works" },
      { property: "og:description", content: "From camera capture to a structured entry record in five clear stages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  const steps = [
    ["Vehicle arrives", "A vehicle approaches the property entrance as part of the normal gate workflow."],
    ["Camera captures", "A suitable camera captures the vehicle and number plate at the point of approach."],
    ["Vehicle identified", "Portalis processes the plate information and looks for a relevant registered record."],
    ["Vehicle verified", "The gate team receives useful context such as whether the vehicle is registered, visiting or requires review."],
    ["Entry recorded", "The vehicle event, time and association are organised into a searchable digital record."],
  ];

  return (
    <>
      <PageIntro
        eyebrow="How it works"
        title="Turn the gate into an intelligent entry point."
        copy="A focused five-stage flow helps property teams add clarity to vehicle arrivals without forcing a completely new operating model."
      />

      <section className="site-container py-20 md:py-32">
        <div className="mx-auto max-w-5xl">
          {steps.map(([title, copy], index) => (
            <article
              key={title}
              className="grid gap-5 border-t border-border py-10 md:grid-cols-[8rem_1fr_1fr] md:gap-12 md:py-14"
            >
              <span className="font-mono text-sm text-primary">0{index + 1}</span>
              <h2 className="text-2xl font-light tracking-[-0.04em]">{title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="site-container grid gap-12 py-20 md:grid-cols-2 md:py-28 md:items-center">
          <h2 className="section-title">Designed around existing property infrastructure.</h2>
          <div>
            <p className="text-base leading-8 text-muted-foreground">
              Portalis is designed to work with the realities of residential entrances: existing gates, camera positions, security procedures and property records. The right configuration depends on the site and is established during a property review.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">Plan a property review <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <DemoCta />
    </>
  );
}