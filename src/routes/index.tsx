import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bath, BedDouble, Building2, MapPin, Maximize2, Search } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/coastal-estate-hero.jpg";
import villaImage from "../assets/hillside-villa.jpg";
import townhouseImage from "../assets/garden-townhouse.jpg";
import penthouseImage from "../assets/penthouse-terrace.jpg";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Homes in Los Angeles | Aurelia Estates" },
      { name: "description", content: "Discover a private collection of exceptional Los Angeles homes with Aurelia Estates." },
      { property: "og:title", content: "Luxury Homes in Los Angeles | Aurelia Estates" },
      { property: "og:description", content: "Discover a private collection of exceptional Los Angeles homes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const properties = [
  { image: villaImage, status: "Featured", price: "$12,850,000", title: "The Ridgeline House", address: "Trousdale Estates, Beverly Hills", beds: 5, baths: 7, area: "7,420" },
  { image: townhouseImage, status: "For Sale", price: "$6,450,000", title: "Laurel Garden Residence", address: "Hancock Park, Los Angeles", beds: 4, baths: 5, area: "4,860" },
  { image: penthouseImage, status: "Private Listing", price: "$9,200,000", title: "The Meridian Penthouse", address: "West Hollywood, California", beds: 3, baths: 4, area: "3,980" },
];

function Index() {
  const [location, setLocation] = useState("Los Angeles");
  const [searched, setSearched] = useState(false);

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    setSearched(true);
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden bg-primary">
        <img src={heroImage} alt="Contemporary coastal estate overlooking the ocean" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/45" />
        <SiteHeader overlay />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-32 lg:px-8 lg:pb-16">
          <div className="max-w-4xl text-hero-foreground">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em]">Curated residences · Los Angeles</p>
            <h1 className="font-display text-5xl leading-[1.04] sm:text-6xl lg:text-8xl">Live somewhere<br />remarkable.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-foreground/85 sm:text-lg">Exceptional homes, private opportunities, and thoughtful guidance for every meaningful move.</p>
          </div>
          <form onSubmit={handleSearch} className="mt-10 grid bg-background p-2 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_auto]" aria-label="Search properties">
            <label className="border-b border-border px-4 py-3 sm:border-r lg:border-b-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Location</span>
              <input value={location} onChange={(event) => setLocation(event.target.value)} className="mt-1 w-full bg-transparent text-sm text-foreground outline-none" aria-label="Location" />
            </label>
            <label className="border-b border-border px-4 py-3 lg:border-b-0 lg:border-r">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Property type</span>
              <select className="mt-1 w-full bg-transparent text-sm text-foreground outline-none" aria-label="Property type"><option>All properties</option><option>House</option><option>Condo</option></select>
            </label>
            <label className="border-b border-border px-4 py-3 sm:border-r lg:border-b-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Price</span>
              <select className="mt-1 w-full bg-transparent text-sm text-foreground outline-none" aria-label="Price range"><option>Any price</option><option>$5M – $10M</option><option>$10M+</option></select>
            </label>
            <label className="border-b border-border px-4 py-3 lg:border-b-0 lg:border-r">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Bedrooms</span>
              <select className="mt-1 w-full bg-transparent text-sm text-foreground outline-none" aria-label="Bedrooms"><option>Any</option><option>3+</option><option>4+</option><option>5+</option></select>
            </label>
            <Button type="submit" variant="hero" className="h-full min-h-14 px-7" aria-label="Search homes"><Search size={18} /> Search</Button>
          </form>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 py-8 md:grid-cols-4 lg:px-8">
          {[['$2.1B+', 'Career sales'], ['18', 'Years of insight'], ['142', 'Private closings'], ['24', 'Global partners']].map(([value, label]) => (
            <div key={label} className="px-4 py-3 text-center"><strong className="font-display text-3xl font-medium">{value}</strong><span className="mt-1 block text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</span></div>
          ))}
        </div>
      </section>

      <section id="listings" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">The current collection</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Featured residences</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">{searched ? `Showing exceptional opportunities near ${location || "Los Angeles"}.` : "A discerning edit of architecturally significant homes, each selected for its character and setting."}</p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <Link key={property.title} to="/properties/coastal-residence" className="group block transition-transform duration-300 hover:-translate-y-1">
                <article className="overflow-hidden border border-border bg-card transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={property.image} alt={property.title} width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                    <span className="absolute left-4 top-4 bg-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">{property.status}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-2xl font-semibold">{property.price}</p>
                    <h3 className="mt-3 font-display text-2xl">{property.title}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={15} />{property.address}</p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground"><span className="flex items-center gap-2"><BedDouble size={16} />{property.beds} Beds</span><span className="flex items-center gap-2"><Bath size={16} />{property.baths} Baths</span><span className="flex items-center gap-2"><Maximize2 size={16} />{property.area} Sq Ft</span></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">A more considered approach</p><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Representation measured in trust, not transactions.</h2></div>
          <div><p className="text-base leading-8 text-primary-muted">We bring market intelligence, discretion, and a practiced eye to homes of distinction. Our advisory begins with listening and ends with an outcome that feels entirely your own.</p><a href="mailto:hello@aureliaestates.com" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-accent pb-2 text-sm font-semibold">Start a private conversation <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section id="neighborhoods" className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-end"><div><Building2 className="text-accent-strong" size={30} /><h2 className="mt-5 font-display text-4xl">Where life unfolds beautifully.</h2></div><p className="text-base leading-8 text-muted-foreground">From the quiet streets of Hancock Park to the hillside outlooks of Beverly Hills and the coastal calm of Malibu, we know the character behind every address.</p></div></div>
      </section>
      <SiteFooter />
    </main>
  );
}
