import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoCta, PageIntro } from "@/components/portalis-site";
import { TechnicalGlyph } from "@/components/portalis-visuals";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Portalis" },
      { name: "description", content: "Explore Portalis vehicle identification, entry records, vehicle management and access support capabilities." },
      { property: "og:title", content: "Vehicle Entry Solutions — Portalis" },
      { property: "og:description", content: "Technology for clearer, more searchable vehicle activity at property entrances." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Solutions,
});

function Solutions() {
  const data = [
    [
      "01",
      "Automated Vehicle Identification",
      "Identify vehicles entering the property using AI-powered number plate recognition, helping teams understand who is approaching before that person arrives at the gate.",
    ],
    [
      "02",
      "Entry & Exit Records",
      "Create digital, timestamped records of vehicle activity so property teams can review access events without relying on fragmented manual logs.",
    ],
    [
      "03",
      "Vehicle Management",
      "Maintain structured records of registered vehicles and their associations, giving the gate team quick context when a resident, visitor or recurring vehicle arrives.",
    ],
    [
      "04",
      "Access & Security Support",
      "Support security teams with clear recognition and review status, helping them separate registered, visitor and unknown vehicles at the point of entry.",
    ],
  ];

  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="A more structured approach to every vehicle arrival."
        copy="Portalis connects vehicle identification with the records and context property teams need to manage an entrance more clearly."
      />

      <section className="site-container py-20 md:py-32">
        {data.map(([number, title, copy], index) => (
          <article
            key={title}
            className="grid gap-10 border-t border-border py-14 md:grid-cols-[.2fr_.65fr_1.15fr] md:py-20"
          >
            <span className="font-mono text-xs text-primary">{number}</span>
            <div>
              <TechnicalGlyph type={index + 1} />
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-[-0.04em] md:text-4xl">{title}</h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">{copy}</p>
            </div>
          </article>
        ))}

        <div className="border-t border-border pt-12">
          <Button asChild size="lg">
            <Link to="/contact">Discuss your property <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <DemoCta />
    </>
  );
}