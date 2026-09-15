import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Listings", href: "/#listings" },
  { label: "Neighborhoods", href: "/#neighborhoods" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const tone = overlay ? "text-hero-foreground" : "text-foreground";

  return (
    <header className={`z-50 w-full ${overlay ? "fixed inset-x-0 top-0 bg-primary/30 backdrop-blur-sm" : "sticky top-0 border-b border-border bg-background"}`}>
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <Link to="/" className={`flex min-w-0 items-center gap-3 ${tone}`} aria-label="Aurelia Estates home">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-current font-display text-lg">A</span>
          <span className="truncate text-sm font-semibold uppercase tracking-[0.22em]">Aurelia Estates</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={`text-sm transition-opacity hover:opacity-60 ${tone}`}>
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="inline-flex h-11 items-center justify-center bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong">
            Book a consultation
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`grid h-11 w-11 shrink-0 place-items-center lg:hidden ${tone}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 text-foreground lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-border text-base">
                {item.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="mt-5 inline-flex h-12 items-center justify-center bg-accent px-5 font-semibold text-accent-foreground">
              Book a consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
