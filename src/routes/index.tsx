import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoCta } from "@/components/portalis-site";
import { ProductVisual, TechnicalGlyph } from "@/components/portalis-visuals";
import gateImage from "@/assets/portalis-gate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portalis | Intelligent Vehicle Entry Management" },
      { name: "description", content: "Portalis provides AI-powered vehicle identification and intelligent entry management solutions for residential buildings, gated communities and properties." },
      { property: "og:title", content: "Portalis | Intelligent Vehicle Entry Management" },
      { property: "og:description", content: "Portalis provides AI-powered vehicle identification and intelligent entry management solutions for residential buildings, gated communities and properties." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const problems = [
    ["01", "Manual Vehicle Logs", "Security teams often rely on manually recording vehicle numbers and entry times."],
    ["02", "Limited Visibility", "Finding out which vehicle entered at a particular time can be difficult when records are fragmented."],
    ["03", "Repetitive Verification", "Registered residents and recurring vehicles may still require repetitive manual checks."],
    ["04", "Disconnected Information", "Cameras, paper registers and visitor information can operate as separate systems."],
  ];

  const services = [
    ["Automated Vehicle Identification", "Identify vehicles entering the property using AI-powered number plate recognition."],
    ["Entry & Exit Records", "Create digital, timestamped records of vehicle activity."],
    ["Vehicle Management", "Maintain structured records of registered vehicles associated with the property."],
    ["Access & Security Support", "Help security teams distinguish registered, visitor and unknown vehicles at the point of entry."],
  ];

  return (
    <>
      <section className="relative min-h-[94svh] overflow-hidden bg-inverse-surface text-inverse-foreground">
        <img
          src={gateImage}
          width={1920}
          height={1280}
          alt="Modern residential entrance with a vehicle approaching a controlled gate"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--inverse-surface)_0%,color-mix(in_oklab,var(--inverse-surface)_78%,transparent)_36%,color-mix(in_oklab,var(--inverse-surface)_12%,transparent)_72%)]" />
        <div className="hero-grid absolute inset-0 opacity-35" />

        <div className="site-container relative flex min-h-[94svh] flex-col justify-end pb-16 pt-32 md:pb-20">
          <div className="max-w-4xl">
            <p className="eyebrow mb-7 text-primary">Intelligent vehicle entry management</p>
            <h1 className="max-w-4xl font-display text-[clamp(3.1rem,7vw,7.2rem)] font-light leading-[0.9] tracking-[-0.06em]">
              Smarter Access.<br />
              Clearer Visibility.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-inverse-muted-foreground md:text-lg md:leading-8">
              Portalis helps residential properties automate vehicle identification and entry management — giving security teams and property managers a clearer view of who enters and leaves.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Book a Demo <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="inverse">
                <Link to="/how-it-works">See How It Works <ArrowDown /></Link>
              </Button>
            </div>
          </div>

          <div className="hero-detection">
            <span className="scan-line" />
            <div className="eyebrow text-primary">Vehicle identified · Demo</div>
            <strong>TS09 AB 1234</strong>
            <div className="flex justify-between gap-4 text-[0.68rem] uppercase tracking-[0.2em] text-inverse-muted-foreground">
              <span>Registered vehicle</span>
              <span>08:32 AM</span>
            </div>
            <div className="mt-3 text-xs text-inverse-muted-foreground">Flat 402 · Entry recorded</div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container grid gap-6 py-8 md:grid-cols-[1.5fr_repeat(4,1fr)] md:items-center">
          <p className="eyebrow text-muted-foreground">Built for real-world property access</p>
          {[
            "Residential Buildings",
            "Gated Communities",
            "Property Management",
            "Security Operations",
          ].map((item) => (
            <span key={item} className="text-sm text-foreground/80">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-end">
          <p className="eyebrow text-primary">The operational gap</p>
          <h2 className="section-title max-w-[13ch]">The entrance is still one of the most manual parts of a property.</h2>
        </div>

        <div className="mt-16 grid border-t border-border md:grid-cols-2">
          {problems.map(([n, title, copy], index) => (
            <article
              key={title}
              className={`grid gap-6 border-b border-border py-8 md:px-8 md:py-9 md:grid-cols-[3.25rem_1fr] ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <span className="font-mono text-sm font-semibold tracking-[0.18em] text-primary">{n}</span>
              <div>
                <h3 className="text-xl font-light tracking-[-0.04em] text-foreground md:text-[1.45rem]">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-inverse-surface py-20 text-inverse-foreground md:py-28">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-[.78fr_1.22fr] md:items-end">
            <p className="eyebrow text-primary">From arrival to record</p>
            <div>
              <h2 className="section-title max-w-[13ch]">Turn the gate into an intelligent entry point.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-inverse-muted-foreground">
                Portalis combines vehicle identification with digital entry management to create a clearer, more searchable record of activity at the property entrance.
              </p>
            </div>
          </div>

          <div className="process-grid mt-20">
            {[
              "Vehicle Arrives",
              "Camera Captures",
              "Vehicle Identified",
              "Vehicle Verified",
              "Entry Recorded",
            ].map((step, index) => (
              <div className="process-step" key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="mb-12 grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <p className="eyebrow text-primary">Operational visibility</p>
          <h2 className="section-title max-w-[13ch]">Vehicle activity, structured for review.</h2>
        </div>
        <ProductVisual />
      </section>

      <section className="border-t border-border">
        <div className="site-container py-20 md:py-28">
          <p className="eyebrow text-primary">What Portalis provides</p>
          <h2 className="section-title mt-6 max-w-[18ch]">Technology that works around the way your property operates.</h2>

          <div className="mt-16 grid border-t border-border md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, copy], index) => (
              <article
                key={title}
                className="group border-b border-border py-8 md:px-5 lg:border-r lg:last:border-r-0"
              >
                <TechnicalGlyph type={index + 1} />
                <h3 className="mt-7 min-h-[4.25rem] text-lg font-light tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>

          <Button asChild variant="outline" size="lg" className="mt-12">
            <Link to="/solutions">Explore Solutions <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <section className="bg-inverse-surface text-inverse-foreground">
        <div className="site-container py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <p className="eyebrow text-primary">Who it is for</p>
            <h2 className="section-title max-w-[15ch]">Designed for properties that need better control at the gate.</h2>
          </div>

          <div className="mt-16 grid border-t border-inverse-border md:grid-cols-3">
            {[
              ["Residential Buildings", "For standalone apartment buildings where security teams manually manage resident and visitor vehicle entry."],
              ["Semi-Gated Communities", "For communities that need better visibility across entry and exit points."],
              ["Property Management Teams", "For managers who need searchable vehicle activity instead of relying entirely on manual registers."],
            ].map(([title, copy], index) => (
              <article
                key={title}
                className="border-b border-inverse-border py-8 md:border-r md:px-8 md:py-9 md:last:border-r-0"
              >
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-primary">0{index + 1}</span>
                <h3 className="mt-10 text-2xl font-light tracking-[-0.04em]">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-inverse-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 border-l border-primary pl-5 text-sm sm:flex-row sm:items-center sm:gap-8">
            <span className="eyebrow text-inverse-muted-foreground">Also applicable to</span>
            <span>Offices · Commercial Properties · Warehouses</span>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="site-container grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:py-28">
          <div>
            <p className="eyebrow text-primary">Why Portalis</p>
            <h2 className="section-title mt-6 max-w-[11ch]">Less manual work. More visibility.</h2>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {[
              ["Automated", "Reduce repetitive manual vehicle logging."],
              ["Searchable", "Make historical vehicle activity easier to review."],
              ["Real-Time", "Identify vehicles as they approach the entrance."],
              ["Practical", "Designed around real-world property security operations."],
              ["Scalable", "Start with one entrance and expand as requirements grow."],
              ["Human-Centered", "Technology supports security teams rather than replacing their judgment."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-muted p-6 md:p-8">
                <span className="font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-primary uppercase">{title}</span>
                <h3 className="mt-8 text-lg font-light tracking-[-0.04em]">{copy}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr] md:items-center">
          <div>
            <p className="eyebrow text-primary">Deployment</p>
            <h2 className="section-title mt-6 max-w-[12ch]">From existing gate infrastructure to intelligent vehicle management.</h2>
          </div>

          <div>
            <div className="tech-flow">
              {[
                "Camera",
                "Portalis Identification",
                "Vehicle Verification",
                "Entry / Exit Record",
                "Property Management",
              ].map((step, index) => (
                <div key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <p className="mt-9 max-w-2xl text-sm leading-7 text-muted-foreground">
              Portalis is designed around the infrastructure already present at the property, with deployment tailored to the entrance, camera setup and operating requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="site-container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <p className="eyebrow text-primary">Real-world use case</p>
            <h2 className="section-title max-w-[11ch]">A resident arrives at the gate.</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-sm border border-border bg-background p-8 md:p-12">
              <div className="flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Vehicle approaches</span>
                <span>08:32 AM</span>
              </div>
              <div className="mt-10 space-y-6">
                <div>
                  <p className="eyebrow text-primary">Registered vehicle</p>
                  <div className="mt-3 font-mono text-3xl tracking-[0.2em] text-foreground">TS09 AB 1234</div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="border border-border px-3 py-1.5">Flat 402</span>
                  <span className="border border-border px-3 py-1.5">Resident</span>
                </div>
                <div className="border-t border-border pt-5 text-sm text-muted-foreground">
                  Entry recorded at the property entrance.
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-background p-8 md:p-12">
              <p className="eyebrow text-primary">Unknown vehicle</p>
              <div className="mt-6 font-mono text-2xl tracking-[0.14em] text-foreground">TS10 XY 5678</div>
              <div className="mt-8 border-l border-primary pl-5 text-sm uppercase tracking-[0.18em] text-foreground">
                Review required
              </div>
              <p className="mt-8 text-sm leading-7 text-muted-foreground">
                An unrecognised vehicle at the gate can be flagged for security review without assuming the outcome of the visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr] md:items-center">
          <div>
            <p className="eyebrow text-primary">Technical credibility</p>
            <h2 className="section-title mt-6 max-w-[12ch]">Built on computer vision. Designed for practical deployment.</h2>
          </div>

          <div>
            <div className="tech-flow">
              {[
                "Camera Feed",
                "Detection",
                "Recognition",
                "Verification",
                "Record",
              ].map((step, index) => (
                <div key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <p className="mt-9 max-w-2xl text-sm leading-7 text-muted-foreground">
              Computer vision, automatic number plate recognition, vehicle tracking, OCR and real-time video processing help turn a camera feed into useful entry context without overcomplicating site operations.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="site-container grid gap-10 py-20 md:grid-cols-[.75fr_1.25fr] md:items-start md:py-28">
          <p className="eyebrow text-primary">About Portalis</p>
          <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <h2 className="section-title max-w-[12ch]">Technology for the places people enter every day.</h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
                Portalis builds practical intelligent-access solutions for properties that want greater visibility over vehicle movement without adding unnecessary complexity to their existing security operations.
              </p>
            </div>
            <div className="rounded-none border border-border bg-background p-5 sm:p-6">
              <div className="space-y-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Entry system</span>
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-primary" /> Camera feed</div>
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full border border-primary bg-transparent" /> Vehicle recognition</div>
                <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-foreground/20" /> Entry record</div>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">Review ready</div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-foreground">
                  <div>
                    <div className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Vehicle</div>
                    <div className="mt-2 font-mono tracking-[0.12em]">TS09</div>
                  </div>
                  <div>
                    <div className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Status</div>
                    <div className="mt-2 text-foreground/80">Registered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoCta />
    </>
  );
}
