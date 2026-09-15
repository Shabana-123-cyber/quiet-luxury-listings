import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="Aurelia Estates home">
            <span className="grid h-10 w-10 place-items-center border border-current font-display text-xl">A</span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em]">Aurelia Estates</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-primary-muted">A considered collection of remarkable homes, represented with discretion and care.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-primary-muted">
            <a href="/#listings">Properties</a>
            <a href="/#neighborhoods">Neighborhoods</a>
            <a href="/#about">Our approach</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Private appointments</p>
          <p className="mt-5 text-sm text-primary-muted">Los Angeles · California</p>
          <a href="mailto:hello@aureliaestates.com" className="mt-3 block text-sm">hello@aureliaestates.com</a>
        </div>
      </div>
      <div className="border-t border-primary-border px-5 py-6 text-center text-xs text-primary-muted">© 2026 Aurelia Estates. Equal Housing Opportunity.</div>
    </footer>
  );
}
