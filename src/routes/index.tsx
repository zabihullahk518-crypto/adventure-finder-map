import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle, MAP_LINK, DeliveryButtons } from "@/components/site";
import { menuItems, photos } from "@/lib/asali";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Asali Pastries — Turkish Pastries in Riffa" }, { name: "description", content: "Discover Asali Pastries in Riffa, Bahrain: Turkish pastries, pizza and shawarma, open daily." }, { property: "og:title", content: "Asali Pastries — Riffa, Bahrain" }, { property: "og:description", content: "Turkish pastries, pizza and shawarma made in Riffa." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-brand-deep">
        <img src={photos.pizzas} alt="Fresh pizzas prepared at Asali Pastries" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/70 to-transparent" />
        <div className="page-shell relative flex min-h-[calc(100svh-5rem)] items-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-3xl text-primary-foreground"><p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gold">Turkish pastries · Riffa, Bahrain</p><h1 className="text-6xl font-semibold uppercase leading-[0.86] sm:text-8xl lg:text-9xl">Asali<br />Pastries</h1><p className="mt-7 max-w-lg text-lg leading-8 text-primary-foreground/80">Fresh from the oven, generous by tradition. Pastries, pizza and shawarma made for sharing.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="hero" size="lg"><a href="/menu">View Our Menu <ArrowRight /></a></Button><Button asChild variant="talabat" size="lg"><a href={TALABAT_LINK} target="_blank" rel="noreferrer">Order on Talabat</a></Button><Button asChild variant="heroOutline" size="lg"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Order Now</a></Button></div></div>
        </div>
      </section>
      <section className="section-pad"><div className="page-shell grid items-center gap-12 lg:grid-cols-2"><img src={photos.platter} alt="Assorted Turkish pastries from Asali" className="aspect-[4/5] w-full rounded-lg object-cover shadow-xl" /><div><SectionTitle eyebrow="Made in Riffa" title="A local table with Turkish soul." copy="Discover Asali Pastries, where fresh savoury pastries and satisfying favourites are made to bring people together." /><Button asChild className="mt-8" variant="outline"><a href="/about">Our story <ArrowRight /></a></Button></div></div></section>
      <section className="section-pad bg-cream"><div className="page-shell"><SectionTitle eyebrow="From our menu" title="Something for every appetite." copy="A preview of customer favourites. Explore the full menu for more choices and sizes." /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{menuItems.slice(0,4).map((item) => <article key={item.name} className="overflow-hidden rounded-lg bg-card shadow-sm"><img src={item.image} alt={item.name} className="aspect-square w-full object-cover" /><div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-warm">{item.category}</p><h3 className="mt-2 text-2xl font-semibold">{item.name}</h3><p className="mt-3 text-sm text-muted-foreground">From {item.small ?? item.price} BHD</p></div></article>)}</div><Button asChild className="mt-9"><a href="/menu">See full menu <ArrowRight /></a></Button></div></section>
      <section className="section-pad"><div className="page-shell grid gap-6 md:grid-cols-3"><div className="border-t border-border pt-5"><Clock className="text-brand-warm" /><h3 className="mt-4 text-2xl font-semibold">Open daily</h3><p className="mt-2 text-muted-foreground">1:30 PM–1:30 AM</p></div><div className="border-t border-border pt-5"><MapPin className="text-brand-warm" /><h3 className="mt-4 text-2xl font-semibold">Find us in Riffa</h3><p className="mt-2 text-muted-foreground">Riffa, Kingdom of Bahrain</p></div><div className="rounded-lg bg-primary p-7 text-primary-foreground"><h3 className="text-3xl font-semibold">Hungry?</h3><p className="mt-2 text-primary-foreground/70">Call or message us to place your order.</p><Button asChild variant="hero" className="mt-5"><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp us</a></Button></div></div></section>
      <section className="relative min-h-[480px] overflow-hidden"><img src={photos.storefront} alt="Asali Pastries storefront in Riffa" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-brand-deep/65" /><div className="page-shell relative flex min-h-[480px] items-center px-5 sm:px-8 lg:px-12"><div className="max-w-xl text-primary-foreground"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Come by tonight</p><h2 className="mt-3 text-5xl font-semibold">Fresh food, right here in Riffa.</h2><Button asChild variant="hero" className="mt-7"><a href={MAP_LINK} target="_blank" rel="noreferrer">Get directions <MapPin /></a></Button></div></div></section>
    </>
  );
}
