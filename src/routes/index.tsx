import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoCta } from "@/components/portalis-site";
import { ProductVisual, TechnicalGlyph } from "@/components/portalis-visuals";
import gateImage from "@/assets/portalis-gate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Portalis — Smarter Vehicle Entry Management" },
    { name: "description", content: "Portalis helps residential properties automate vehicle identification and create clearer digital entry records." },
    { property: "og:title", content: "Portalis — Smarter Vehicle Entry Management" },
    { property: "og:description", content: "Intelligent vehicle entry and access-management solutions for residential properties." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const problems = [
    ["01", "Manual Vehicle Logs", "Security teams often rely on manual recording of vehicle numbers and entry times."],
    ["02", "Limited Visibility", "Finding out which vehicle entered at a particular time can be difficult when records are fragmented."],
    ["03", "Repetitive Verification", "Registered residents and recurring vehicles may still require repetitive manual checks."],
    ["04", "Disconnected Information", "Cameras, paper logs and visitor information often exist as separate systems."],
  ];
  const services = [
    ["Automated Vehicle Identification", "Identify vehicles entering the property using AI-powered number plate recognition."],
    ["Entry & Exit Records", "Create digital, timestamped records of vehicle activity."],
    ["Vehicle Management", "Maintain a structured record of registered vehicles associated with the property."],
    ["Access & Security Support", "Help security teams identify registered, visitor and unknown vehicles at the point of entry."],
  ];
  return <>
    <section className="relative min-h-[94svh] overflow-hidden bg-inverse-surface text-inverse-foreground">
      <img src={gateImage} width={1920} height={1280} alt="Modern residential entrance with a vehicle approaching a controlled gate" className="absolute inset-0 h-full w-full object-cover object-[58%_center] opacity-75" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--inverse-surface)_0%,color-mix(in_oklab,var(--inverse-surface)_78%,transparent)_36%,color-mix(in_oklab,var(--inverse-surface)_12%,transparent)_72%)]" />
      <div className="hero-grid absolute inset-0 opacity-35" />
      <div className="site-container relative flex min-h-[94svh] flex-col justify-end pb-16 pt-32 md:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow mb-7 text-primary">Intelligent vehicle entry management</p>
          <h1 className="max-w-4xl font-display text-[clamp(3.1rem,7.5vw,7.25rem)] font-light leading-[0.93]">Smarter Access.<br />Clearer Visibility.</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-inverse-muted-foreground md:text-lg md:leading-8">Portalis helps residential properties automate vehicle identification and entry management — giving security teams and property managers a clearer view of who enters and leaves.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" variant="hero"><Link to="/contact">Book a Demo <ArrowRight /></Link></Button><Button asChild size="lg" variant="inverse"><Link to="/how-it-works">See How It Works <ArrowDown /></Link></Button></div>
        </div>
        <div className="hero-detection">
          <span className="scan-line" /><div className="eyebrow text-primary">Vehicle identified · Simulated</div><strong>TS09 AB 1234</strong><div className="flex justify-between text-xs text-inverse-muted-foreground"><span>Registered vehicle</span><span>Entry recorded</span></div>
        </div>
      </div>
    </section>
    <section className="border-b border-border"><div className="site-container grid gap-6 py-8 md:grid-cols-[1.5fr_repeat(4,1fr)] md:items-center"><p className="eyebrow text-muted-foreground">Built for real-world property access</p>{["Residential Buildings","Gated Communities","Property Management","Security Operations"].map(x=><span className="text-sm" key={x}>{x}</span>)}</div></section>
    <section className="site-container py-24 md:py-36"><div className="grid gap-12 md:grid-cols-[.9fr_1.1fr]"><p className="eyebrow text-primary">The operational gap</p><h2 className="section-title">The entrance is still one of the most manual parts of a property.</h2></div><div className="mt-20 grid border-t border-border md:grid-cols-2">{problems.map(([n,t,c])=><article className="grid gap-8 border-b border-border py-10 md:grid-cols-[3rem_1fr] md:p-10 md:first:border-r md:nth-[3]:border-r" key={t}><span className="font-mono text-xs text-primary">{n}</span><div><h3 className="text-xl">{t}</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{c}</p></div></article>)}</div></section>
    <section className="bg-inverse-surface py-24 text-inverse-foreground md:py-36"><div className="site-container"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p className="eyebrow text-primary">From arrival to record</p><div><h2 className="section-title">Turn the gate into an intelligent entry point.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-inverse-muted-foreground">Portalis combines vehicle identification with digital entry management to create a clearer, more searchable record of activity at the property entrance.</p></div></div><div className="process-grid mt-20">{["Vehicle Arrives","Camera Captures","Vehicle Identified","Vehicle Verified","Entry Recorded"].map((x,i)=><div className="process-step" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div></section>
    <section className="site-container py-24 md:py-36"><div className="mb-16 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p className="eyebrow text-primary">Operational visibility</p><h2 className="section-title">Vehicle activity, structured for review.</h2></div><ProductVisual /></section>
    <section className="border-t border-border"><div className="site-container py-24 md:py-36"><p className="eyebrow text-primary">What Portalis provides</p><h2 className="section-title mt-6 max-w-4xl">Technology that works around the way your property operates.</h2><div className="mt-20 grid border-t border-border md:grid-cols-2 lg:grid-cols-4">{services.map(([t,c],i)=><article className="group border-b border-border py-8 md:px-7 lg:border-r lg:last:border-r-0" key={t}><TechnicalGlyph type={i+1}/><h3 className="mt-7 min-h-14 text-lg">{t}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{c}</p></article>)}</div><Button asChild variant="outline" size="lg" className="mt-12"><Link to="/solutions">Explore Solutions <ArrowRight /></Link></Button></div></section>
    <section className="bg-inverse-surface text-inverse-foreground"><div className="site-container py-24 md:py-36"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p className="eyebrow text-primary">Who it is for</p><h2 className="section-title">Designed for properties that need better control at the gate.</h2></div><div className="mt-16 grid border-t border-inverse-border md:grid-cols-3">{[["Residential Buildings","For standalone apartment buildings where security teams manually manage resident and visitor vehicle entry."],["Semi-Gated Communities","For communities that need better visibility across entry and exit points."],["Property Management Teams","For managers who need searchable vehicle activity instead of relying on manual registers."]].map(([t,c],i)=><article className="border-b border-inverse-border py-9 md:border-r md:p-9 md:last:border-r-0" key={t}><span className="font-mono text-xs text-primary">0{i+1}</span><h3 className="mt-12 text-2xl font-light">{t}</h3><p className="mt-5 text-sm leading-7 text-inverse-muted-foreground">{c}</p></article>)}</div><div className="mt-10 flex flex-col gap-3 border-l border-primary pl-5 text-sm sm:flex-row sm:items-center sm:gap-8"><span className="eyebrow text-inverse-muted-foreground">Expanding into</span><span>Offices · Commercial Properties · Warehouses</span></div></div></section>
    <section className="bg-muted"><div className="site-container grid gap-12 py-24 md:grid-cols-[.8fr_1.2fr] md:py-32"><div><p className="eyebrow text-primary">Why Portalis</p><h2 className="section-title mt-6">Practical intelligence for the property entrance.</h2></div><div className="grid gap-px bg-border sm:grid-cols-2">{[["01","Clearer records"],["02","Faster verification"],["03","Existing-infrastructure fit"],["04","Human-led decisions"]].map(([n,t])=><div className="bg-muted p-8" key={t}><span className="font-mono text-xs text-primary">{n}</span><h3 className="mt-10 text-lg">{t}</h3></div>)}</div></div></section>
    <section className="site-container py-24 md:py-36"><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-primary">Technical foundation</p><h2 className="section-title mt-6">Built on computer vision. Designed for practical deployment.</h2></div><div><div className="tech-flow">{["Camera Feed","Detection","Recognition","Verification","Record"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><p className="mt-9 max-w-2xl text-sm leading-7 text-muted-foreground">Computer vision, automatic number plate recognition, OCR, vehicle tracking and real-time video processing work together to turn a camera view into useful entrance context.</p></div></div></section>
    <section className="border-t border-border"><div className="site-container grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:py-28"><p className="eyebrow text-primary">About Portalis</p><div><h2 className="section-title">Technology for the places people enter every day.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">Portalis builds practical intelligent-access solutions for properties that want greater visibility over vehicle movement without adding unnecessary complexity to their existing security operations.</p></div></div></section>
    <DemoCta />
  </>;
}
