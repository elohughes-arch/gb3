"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "../data/siteData";

const links = [
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Benefits", href: "/benefits" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Login", href: "/login" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`fixed top-4 left-4 right-4 z-[200] max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full ${
        scrolled 
          ? "bg-wegrow-card/60 backdrop-blur-md border border-white/10 shadow-lg py-3 px-6" 
          : "bg-transparent py-4 px-6"
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime" />
            <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime opacity-60" />
          </div>
          <div className="font-bold text-white tracking-tight lowercase text-xl font-sans group-hover:text-wegrow-lime transition-colors">
            gb<span className="text-wegrow-lime">contracting</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link href="/booking" className="px-6 py-2.5 bg-white text-wegrow-dark text-sm font-bold rounded-full hover:scale-105 transition-transform">
            Start today
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 p-2 z-[210]" aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-wegrow-dark z-[190] flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-gradient-to-b from-wegrow-card/20 to-transparent" />
        
        {links.map(l => (
          <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="relative text-3xl font-serif text-white hover:text-wegrow-lime transition-colors">
            {l.label}
          </Link>
        ))}
        
        <div className="relative flex flex-col gap-4 w-64 mt-8">
          <Link href="/booking" onClick={() => setOpen(false)} className="w-full py-4 bg-white text-wegrow-dark font-bold text-center rounded-full hover:scale-105 transition-transform">
            Start today
          </Link>
        </div>
      </div>
    </>
  );
}
