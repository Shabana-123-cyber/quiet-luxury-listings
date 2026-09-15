import { createFileRoute } from "@tanstack/react-router";
import { Bath, BedDouble, CalendarDays, Check, ChevronLeft, ChevronRight, MapPin, Maximize2 } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/coastal-estate-hero.jpg";
import livingImage from "../assets/coastal-living-room.jpg";
import bedroomImage from "../assets/coastal-bedroom.jpg";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/properties/coastal-residence")({
  head: () => ({
    meta: [
      { title: "Coastal Residence | Aurelia Estates" },
      { name: "description", content: "Explore an exceptional five-bedroom coastal residence with panoramic ocean views in Malibu." },
      { property: "og:title", content: "Coastal Residence | Aurelia Estates" },
      { property: "og:description", content: "An exceptional five-bedroom coastal residence with panoramic ocean views in Malibu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertyDetail,
});

const gallery = [
  { src: heroImage, alt: "Coastal residence and infinity pool at sunset" },
  { src: livingImage, alt: "Ocean-view living room with limestone fireplace" },
  { src: bedroomImage, alt: "Serene primary bedroom overlooking the ocean" },
];

function PropertyDetail() {
  const [activeImage, setActiveImage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const activePhoto = gallery[activeImage] ?? gallery[0];

  function moveGallery(direction: number) {
    setActiveImage((current) => (current + direction + gallery.length) % gallery.length);
  }

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 lg:px-8">
        <a href="/#listings" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ChevronLeft size={17} /> Back to properties</a>
        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">Private offering</p><h1 className="mt-4 font-display text-4xl sm:text-6xl">The Coastal Residence</h1><p className="mt-4 flex items-center gap-2 text-muted-foreground"><MapPin size={17} /> Point Dume, Malibu, California</p></div>
          <p className="text-3xl font-semibold sm:text-4xl">$18,750,000</p>
        </div>
      </section>

      <section className="relative bg-primary">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative aspect-[16/10] max-h-[76vh] min-h-[420px] overflow-hidden sm:aspect-[16/8]">
            {activePhoto && <img src={activePhoto.src} alt={activePhoto.alt} width={1920} height={1200} className="h-full w-full object-cover" />}
            <div className="absolute bottom-5 right-5 flex gap-2">
              <Button variant="outline" className="h-12 w-12 border-0 bg-background/90 p-0" onClick={() => moveGallery(-1)} aria-label="Previous photo"><ChevronLeft size={20} /></Button>
              <Button variant="outline" className="h-12 w-12 border-0 bg-background/90 p-0" onClick={() => moveGallery(1)} aria-label="Next photo"><ChevronRight size={20} /></Button>
            </div>
            <span className="absolute bottom-7 left-5 bg-primary/80 px-3 py-2 text-xs text-primary-foreground">{activeImage + 1} / {gallery.length}</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 py-8 md:grid-cols-4 lg:px-8">
          {[[BedDouble, "5", "Bedrooms"], [Bath, "7", "Bathrooms"], [Maximize2, "8,240", "Interior sq ft"], [CalendarDays, "2024", "Completed"]].map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof BedDouble;
            return <div key={String(label)} className="flex flex-col items-center px-3 py-2 text-center"><StatIcon size={20} className="mb-3 text-accent-strong" /><strong className="text-xl">{String(value)}</strong><span className="mt-1 text-xs text-muted-foreground">{String(label)}</span></div>;
          })}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">The residence</p>
            <h2 className="mt-4 font-display text-4xl">Clarity, calm, and the Pacific.</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
              <p>Set discreetly above the shoreline, this newly completed residence is shaped by its setting. Warm limestone, pale oak, and expansive glass create a quiet dialogue between considered interiors and the horizon beyond.</p>
              <p>The main level opens entirely to the infinity terrace, while private bedroom suites frame uninterrupted ocean views. Every space has been resolved with restraint, from the sculptural stair to the secluded wellness wing.</p>
            </div>
            <div className="mt-14 border-t border-border pt-10">
              <h3 className="font-display text-3xl">Details of distinction</h3>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {['Private beach access', 'Infinity-edge pool', 'Temperature-controlled wine room', 'Cinema and wellness suite', 'Four-car gallery garage', 'Integrated home automation'].map((feature) => <div key={feature} className="flex items-center gap-3 text-sm"><Check size={17} className="text-accent-strong" />{feature}</div>)}
              </div>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              <img src={livingImage} alt="Ocean-view living room" width={1200} height={912} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
              <img src={bedroomImage} alt="Primary bedroom with ocean outlook" width={1200} height={912} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
            </div>
            <div className="mt-14 bg-muted p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">The neighborhood</p>
              <h3 className="mt-4 font-display text-3xl">Point Dume, Malibu</h3>
              <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">A coveted coastal enclave known for wide beaches, dramatic headlands, and an enduring sense of privacy—just moments from local markets and Malibu’s most loved tables.</p>
            </div>
          </div>

          <aside>
            <div className="sticky top-6 border border-border bg-card p-6 shadow-xl sm:p-8">
              {!submitted ? (
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">Private viewings</p>
                  <h2 className="mt-3 font-display text-3xl">Schedule a tour</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">Request a discreet private appointment with our listing advisor.</p>
                  <div className="mt-7 space-y-4">
                    <label className="block"><span className="mb-2 block text-xs font-semibold">Name</span><input required className="h-12 w-full border border-input bg-background px-4 text-sm outline-none focus:border-ring" /></label>
                    <label className="block"><span className="mb-2 block text-xs font-semibold">Email</span><input required type="email" className="h-12 w-full border border-input bg-background px-4 text-sm outline-none focus:border-ring" /></label>
                    <label className="block"><span className="mb-2 block text-xs font-semibold">Preferred date</span><input required type="date" className="h-12 w-full border border-input bg-background px-4 text-sm outline-none focus:border-ring" /></label>
                  </div>
                  <Button type="submit" className="mt-6 w-full">Request a private tour</Button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">Your information is handled with complete discretion.</p>
                </form>
              ) : (
                <div className="py-10 text-center" role="status"><span className="mx-auto grid h-12 w-12 place-items-center bg-accent text-accent-foreground"><Check size={22} /></span><h2 className="mt-6 font-display text-3xl">Request received</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">An advisor will contact you shortly to arrange your private viewing.</p></div>
              )}
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}