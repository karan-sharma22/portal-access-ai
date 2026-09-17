import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Solutions", to: "/solutions" as const },
  { label: "How It Works", to: "/how-it-works" as const },
  { label: "Why Portalis", to: "/why-portalis" as const },
  { label: "Contact", to: "/contact" as const },
];

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Portalis home">
      <span className="relative grid size-7 place-items-center border border-current">
        <span className="h-px w-3.5 bg-current" />
        <span className="absolute right-1.5 top-1.5 h-3.5 w-px bg-current transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
      {!compact && <span className="font-display text-[0.9rem] font-semibold tracking-[0.24em]">PORTALIS</span>}
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-container flex h-full items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link-active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="lg"><Link to="/contact">Book a Demo <ArrowRight /></Link></Button>
        </div>
        <button className="mobile-menu-button lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-menu lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Button asChild size="lg"><Link to="/contact" onClick={() => setOpen(false)}>Book a Demo <ArrowRight /></Link></Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-inverse-surface text-inverse-foreground">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-20">
        <div>
          <BrandMark />
          <p className="mt-6 max-w-md text-sm leading-7 text-inverse-muted-foreground">Intelligent vehicle entry and access-management solutions for residential properties.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="grid content-start gap-3">
            <span className="eyebrow text-inverse-muted-foreground">Explore</span>
            {navItems.filter((item) => item.label !== "Why Portalis").map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}
          </div>
          <div className="grid content-start gap-3">
            <span className="eyebrow text-inverse-muted-foreground">Enquiries</span>
            <Link to="/privacy" className="footer-link">Privacy</Link>
            <Link to="/terms" className="footer-link">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-inverse-border">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-inverse-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2026 Portalis. All rights reserved.</span><span>Vehicle entry, made clearer.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-intro">
      <div className="site-container grid gap-8 pt-40 pb-20 md:grid-cols-[0.72fr_1.28fr] md:pt-48 md:pb-28">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <div><h1 className="page-title">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p></div>
      </div>
    </section>
  );
}

export function DemoCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="site-container grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div><p className="eyebrow opacity-70">Start a conversation</p><h2 className="mt-5 max-w-3xl text-3xl font-normal leading-tight md:text-5xl">A clearer view of vehicle activity starts at the entrance.</h2></div>
        <Button asChild size="lg" variant="inverse"><Link to="/contact">Book a Demo <ArrowRight /></Link></Button>
      </div>
    </section>
  );
}