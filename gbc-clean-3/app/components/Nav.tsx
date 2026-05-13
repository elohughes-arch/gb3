"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteData } from "../data/siteData";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
                document.body.style.overflow = "";
        };
  }, [open]);

  return (
        <header
                className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
                          scrolled
                            ? "bg-stone-50/90 backdrop-blur supports-[backdrop-filter]:bg-stone-50/75 border-b border-forest-900/10"
                            : "bg-transparent"
                }`}
              >
              <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16 md:h-20">
                {/* Wordmark */}
                      <Link href="/" className="group flex items-baseline gap-2" aria-label="GB Contracting home">
                                <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-forest-950">
                                            GB
                                </span>span>
                                <span className="hidden sm:inline font-display font-medium text-[11px] uppercase tracking-[0.28em] text-forest-900/70 group-hover:text-forest-700 transition">
                                            Contracting
                                </span>span>
                      </Link>Link>
              
                {/* Desktop nav */}
                      <nav className="hidden md:flex items-center gap-8">
                        {siteData.nav.map((item) => (
                            <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-sm font-medium text-forest-950/80 hover:text-forest-700 transition-colors"
                                          >
                              {item.label}
                            </Link>Link>
                          ))}
                      </nav>nav>
              
                {/* Desktop CTAs */}
                      <div className="hidden md:flex items-center gap-4">
                                <a
                                              href={`tel:${siteData.phoneTel}`}
                                              className="text-sm font-semibold text-forest-950 hover:text-forest-700 transition-colors"
                                            >
                                  {siteData.phoneDisplay}
                                </a>a>
                                <Link
                                              href="/booking"
                                              className="group inline-flex items-center gap-2 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-50 px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors"
                                            >
                                            Book a Free Quote
                                            <span className="arrow-shift" aria-hidden>
                                                          →
                                            </span>span>
                                </Link>Link>
                      </div>div>
              
                {/* Mobile actions */}
                      <div className="flex md:hidden items-center gap-1">
                                <a
                                              href={`tel:${siteData.phoneTel}`}
                                              aria-label="Call GB Contracting"
                                              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-800 text-cream-50 active:scale-95 transition"
                                            >
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>svg>
                                </a>a>
                                <button
                                              type="button"
                                              aria-label="Toggle menu"
                                              aria-expanded={open}
                                              onClick={() => setOpen((v) => !v)}
                                              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-950"
                                            >
                                            <span className="sr-only">Menu</span>span>
                                            <div className="relative w-5 h-4">
                                                          <span
                                                                            className={`absolute left-0 top-0 block h-[2px] w-full bg-current transition-transform duration-300 ${
                                                                                                open ? "translate-y-[7px] rotate-45" : ""
                                                                            }`}
                                                                          />
                                                          <span
                                                                            className={`absolute left-0 top-1/2 -mt-[1px] block h-[2px] w-full bg-current transition-opacity duration-200 ${
                                                                                                open ? "opacity-0" : "opacity-100"
                                                                            }`}
                                                                          />
                                                          <span
                                                                            className={`absolute left-0 bottom-0 block h-[2px] w-full bg-current transition-transform duration-300 ${
                                                                                                open ? "-translate-y-[7px] -rotate-45" : ""
                                                                            }`}
                                                                          />
                                            </div>div>
                                </button>button>
                      </div>div>
              </div>div>
        
          {/* Mobile drawer */}
              <div
                        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-forest-950 text-cream-50 transition-transform duration-300 ease-out ${
                                    open ? "translate-y-0" : "-translate-y-[120%]"
                        }`}
                      >
                      <div className="px-6 pt-8 pb-10 flex flex-col gap-1">
                        {siteData.nav.map((item) => (
                                    <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setOpen(false)}
                                                    className="py-3 text-2xl font-display font-semibold tracking-tight border-b border-cream-50/10"
                                                  >
                                      {item.label}
                                    </Link>Link>
                                  ))}
                                <div className="mt-8 flex flex-col gap-3">
                                            <Link
                                                            href="/booking"
                                                            onClick={() => setOpen(false)}
                                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 text-forest-950 px-6 py-4 text-sm font-semibold"
                                                          >
                                                          Book a Free Quote
                                            </Link>Link>
                                            <a
                                                            href={`tel:${siteData.phoneTel}`}
                                                            onClick={() => setOpen(false)}
                                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 text-cream-50 px-6 py-4 text-sm font-semibold"
                                                          >
                                                          Call {siteData.phoneDisplay}
                                            </a>a>
                                </div>div>
                                <p className="mt-8 text-xs uppercase tracking-[0.28em] text-cream-50/50">
                                  {siteData.area}
                                </p>p>
                      </div>div>
              </div>div>
        </header>header>
      );
}
</header>
