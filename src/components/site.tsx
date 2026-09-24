import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/menu" as const, label: "Menu" },
  { to: "/gallery" as const, label: "Gallery" },
  { to: "/contact" as const, label: "Contact" },
];

export const PHONE_LINK = "tel:+97333447008";
export const WHATSAPP_LINK = "https://wa.me/97333447008";
export const MAP_LINK = "https://maps.google.com/?cid=6606123791950802938";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`flex flex-col leading-none ${light ? "text-primary-foreground" : "text-primary"}`}>
    <span className="font-display text-2xl font-bold uppercase tracking-[0.12em]">Asali</span>
    <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em]">Turkish Pastries</span>
  </Link>;
}

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
    <div className="page-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:px-12">
      <Brand />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {links.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}
        <Button asChild><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Order Now</a></Button>
      </nav>
      <details className="group relative lg:hidden">
        <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md hover:bg-muted" aria-label="Open menu"><Menu className="size-5" /></summary>
        <nav className="absolute right-0 top-12 w-56 rounded-md border border-border bg-background p-3 shadow-xl" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">{links.map((item) => <Link key={item.to} to={item.to} className="rounded-md px-3 py-3 font-semibold hover:bg-muted">{item.label}</Link>)}<Button asChild className="mt-3"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Order Now</a></Button></div>
        </nav>
      </details>
    </div>
  </header>;
}

export function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-warm">{eyebrow}</p><h2 className="text-4xl font-semibold leading-tight text-primary sm:text-5xl">{title}</h2>{copy && <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>}</div>;
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="bg-primary text-primary-foreground"><div className="page-shell px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-7xl">{title}</h1><p className="mt-6 max-w-xl leading-7 text-primary-foreground/75">{copy}</p></div></section>;
}

export function SiteFooter() {
  return <footer className="bg-brand-deep text-primary-foreground"><div className="page-shell grid gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto_auto] lg:px-12"><div><Brand light /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65">Turkish pastries, pizza and shawarma, made for Riffa.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Explore</p><div className="mt-4 grid gap-2 text-sm">{links.map((item) => <Link key={item.to} to={item.to} className="text-primary-foreground/70 hover:text-primary-foreground">{item.label}</Link>)}</div></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Visit</p><p className="mt-4 text-sm text-primary-foreground/70">Riffa, Bahrain</p><a href={PHONE_LINK} className="mt-2 flex items-center gap-2 text-sm"><Phone className="size-4" /> +973 3344 7008</a><p className="mt-2 text-sm text-primary-foreground/70">Daily, 1:30 PM–1:30 AM</p></div></div><div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">© 2026 Asali Pastries. All rights reserved.</div></footer>;
}