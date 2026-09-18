import { createFileRoute } from "@tanstack/react-router";
import { DemoCta, PageIntro } from "@/components/portalis-site";

export const Route = createFileRoute("/why-portalis")({
  head: () => ({
    meta: [
      { title: "Why Portalis — Practical Vehicle Entry Intelligence" },
      { name: "description", content: "Learn how Portalis supports property teams with clearer records, practical deployment and human-led access decisions." },
      { property: "og:title", content: "Why Portalis" },
      { property: "og:description", content: "Practical intelligence designed for real property entrances." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPortalis,
});

function WhyPortalis() {
  const reasons = [
    ["Automated", "Reduce repetitive manual vehicle logging so team time is spent on meaningful checks rather than clerical tasks."],
    ["Searchable", "Keep vehicle activity in a clearer digital trail that is easier to review when questions arise later."],
    ["Real-Time", "Identify vehicles as they approach the entrance, giving the gate team useful context before a decision is needed."],
    ["Human-Centered", "Technology supports security teams rather than replacing their judgment; it provides better information, not less operational oversight."],
  ];

  return (
    <>
      <PageIntro
        eyebrow="Why Portalis"
        title="Less manual work. More visibility."
        copy="Portalis is built around a simple principle: better information helps property teams make faster, more consistent access decisions."
      />

      <section className="site-container py-20 md:py-32">
        <div className="grid border-t border-border md:grid-cols-2">
          {reasons.map(([title, copy], index) => (
            <article key={title} className="border-b border-border py-12 md:p-14 md:odd:border-r">
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
              <h2 className="mt-12 text-3xl font-light tracking-[-0.04em]">{title}</h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 border-l-2 border-primary bg-muted p-8 md:grid-cols-[.7fr_1.3fr] md:p-14">
          <p className="eyebrow text-primary">Responsible positioning</p>
          <p className="max-w-2xl text-xl font-light leading-9 text-foreground">
            Portalis supports gate operations. It does not replace security teams, remove human judgment, or promise a fully automated entrance without operational oversight.
          </p>
        </div>
      </section>

      <DemoCta />
    </>
  );
}