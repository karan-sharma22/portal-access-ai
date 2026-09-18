import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/portalis-site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Portalis" },
      { name: "description", content: "Tell Portalis about your property entrance and discuss a practical vehicle entry management approach." },
      { property: "og:title", content: "Book a Portalis Demo" },
      { property: "og:description", content: "Start a conversation about clearer vehicle entry management for your property." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk about your property."
        copy="Share a few details about your property and current gate process so we can make the first discussion relevant."
      />

      <section className="site-container grid gap-16 py-20 md:grid-cols-[.75fr_1.25fr] md:py-28">
        <aside>
          <p className="eyebrow text-primary">What to expect</p>
          <ol className="mt-8 grid gap-7 text-sm leading-7 text-muted-foreground">
            <li>
              <strong className="block text-foreground">01 · Property context</strong>
              We understand the entrance, traffic profile and current process.
            </li>
            <li>
              <strong className="block text-foreground">02 · Practical fit</strong>
              We discuss camera coverage, infrastructure and team workflow.
            </li>
            <li>
              <strong className="block text-foreground">03 · Focused demonstration</strong>
              We show the relevant Portalis concepts using illustrative scenarios.
            </li>
          </ol>

          <div className="mt-12 border-t border-border pt-8">
            <p className="eyebrow text-muted-foreground">Contact details</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              This demo form is UI-ready and is intentionally isolated so it can be connected to an email or CRM workflow later.
            </p>
          </div>
        </aside>

        <div className="border-t border-border pt-10">
          {sent ? (
            <div className="grid min-h-[28rem] place-items-center border border-border bg-muted p-8 text-center">
              <div>
                <span className="mx-auto grid size-12 place-items-center border border-primary text-primary">
                  <Check />
                </span>
                <h2 className="mt-6 text-3xl font-light tracking-[-0.04em]">Enquiry prepared.</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                  Thank you. This demo form is not yet connected to a live email system, so no message has been sent.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Your full name" />
                <Field label="Property / Company" name="organisation" placeholder="Property or company name" />
                <Field label="Phone Number" name="phone" type="tel" placeholder="+00 000 000 0000" />
                <Field label="Email" name="email" type="email" placeholder="name@email.com" />

                <div className="sm:col-span-2">
                  <label className="grid gap-2">
                    <span className="eyebrow">Property Type</span>
                    <select name="propertyType" className="form-control" defaultValue="">
                      <option value="" disabled>
                        Select property type
                      </option>
                      <option value="Apartment Building">Apartment Building</option>
                      <option value="Gated Community">Gated Community</option>
                      <option value="Office">Office</option>
                      <option value="Commercial Property">Commercial Property</option>
                      <option value="Warehouse">Warehouse</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>

                <Field label="Approximate Number of Units" name="units" placeholder="e.g. 120 units" />

                <div className="sm:col-span-2">
                  <label className="grid gap-2">
                    <span className="eyebrow">Message</span>
                    <textarea
                      required
                      name="message"
                      placeholder="Tell us a little about the property and entrance workflow"
                      className="form-control min-h-[7rem] resize-y"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  No payment or subscription is required to request a demo.
                </p>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Request a Demo <ArrowRight />
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="eyebrow">{label}</span>
      <input required name={name} type={type} placeholder={placeholder} className="form-control" />
    </label>
  );
}
