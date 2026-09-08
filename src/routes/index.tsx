import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { heroImage, properties } from "@/lib/properties";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ali Properties — Luxury Real Estate Lahore" },
    { name: "description", content: "Discover exceptional homes and investment opportunities with Ali Properties, Lahore's boutique real estate advisory." },
    { property: "og:title", content: "Ali Properties — Luxury Real Estate Lahore" },
    { property: "og:description", content: "Exceptional homes. Considered investments. Lahore expertise." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <div className="bg-ink">
    <section className="relative min-h-[92svh] overflow-hidden"><img src={heroImage} alt="Contemporary luxury residence represented by Ali Properties" width={1920} height={1280} className="absolute inset-0 h-[110%] w-full image-wash object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/35 to-transparent" /><div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20"><div className="max-w-5xl animate-rise"><p className="editorial-label mb-6 text-primary">Lahore · Pakistan</p><h1 className="text-[clamp(4.5rem,11vw,10rem)] leading-[0.76] text-cream">Ali<br /><span className="ml-[12vw] italic text-primary">Properties</span></h1><div className="mt-9 flex max-w-xl items-end justify-between gap-5 border-t border-cream/25 pt-5"><p className="text-sm leading-6 text-cream/75 sm:text-base">Exceptional homes. Considered investments.<br />A more personal standard of property advisory.</p><ArrowDown className="size-5 shrink-0 animate-drift text-primary" /></div></div></div></section>
    <div className="overflow-hidden border-y border-primary/30 bg-primary py-3 text-primary-foreground"><div className="flex w-max animate-ticker gap-12 editorial-label">{[0,1].flatMap((copy) => ["Lahore specialists", "75+ properties sold", "5.0 Google rating", "Open 24 hours"].map((item) => ({ copy, item }))).map(({ copy, item },index) => <span key={`${copy}-${index}`} className="flex items-center gap-12">{item}<span>◆</span></span>)}</div></div>
    <section className="bg-secondary px-5 py-24 text-secondary-foreground sm:px-8 lg:px-12 lg:py-36"><Reveal className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.75fr_1.25fr]"><p className="editorial-label text-primary">The Ali standard / 01</p><div><h2 className="max-w-5xl text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">Not just where you live. <span className="italic text-primary">How you live.</span></h2><p className="mt-8 max-w-xl text-sm leading-7 text-secondary-foreground/65">We represent a tightly curated collection of Lahore’s most distinctive addresses, pairing local intelligence with discreet, high-touch advisory.</p></div></Reveal></section>
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto max-w-[1500px]"><Reveal className="mb-14 flex items-end justify-between gap-5"><div><p className="editorial-label text-primary">Selected properties / 02</p><h2 className="mt-5 text-5xl text-cream sm:text-7xl">The Collection</h2></div><Button asChild variant="editorialLight" className="hidden sm:inline-flex"><Link to="/properties">View all <ArrowUpRight /></Link></Button></Reveal><div className="grid gap-12 lg:grid-cols-12">{properties.slice(0,3).map((property,index) => <Reveal key={property.id} className={`${index === 0 ? "lg:col-span-7" : "lg:col-span-5"} group`}><Link to="/properties/$id" params={{ id: property.id }}><div className={`overflow-hidden ${index === 0 ? "aspect-[5/4]" : "aspect-[4/5]"}`}><img src={property.image} alt={property.title} loading="lazy" width={1400} height={1600} className="h-full w-full image-wash object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="mt-5 flex justify-between border-t border-border pt-4"><div><p className="editorial-label text-primary">{property.location}</p><h3 className="mt-2 text-3xl text-cream">{property.title}</h3></div><p className="text-sm text-cream/65">{property.price}</p></div></Link></Reveal>)}</div></div></section>
    <section className="border-t border-border px-5 py-24 sm:px-8 lg:px-12"><Reveal className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"><div><p className="editorial-label text-primary">Private consultation</p><h2 className="mt-5 max-w-3xl text-5xl leading-none text-cream sm:text-7xl">Your next address begins with a conversation.</h2></div><Button asChild variant="editorial" size="lg"><Link to="/contact" search={{ interest: "" }}>Speak with us <ArrowUpRight /></Link></Button></Reveal></section>
  </div>;
}
