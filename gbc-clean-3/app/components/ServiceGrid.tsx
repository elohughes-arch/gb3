"use client";
import { siteData } from "../data/siteData";
import Link from "next/link";

export default function ServiceGrid() {
  return (
    <section id="services" className="py-24 px-6 bg-wegrow-darker">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <div className="text-wegrow-lime text-xs font-bold tracking-widest uppercase mb-2">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-[0.95]" style={{ fontFamily: "'DIN Condensed', sans-serif" }}>
              Our Services
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-sm leading-relaxed">
            Agricultural and land management contracting across {siteData.location} and the surrounding region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.map((service) => (
            <div key={service.title} className="group p-8 border border-white/5 hover:border-wegrow-lime/30 bg-wegrow-card hover:bg-white/5 transition-all duration-300 rounded-3xl hover:shadow-2xl hover:shadow-wegrow-lime/5">
              <div className="text-[0.65rem] font-bold tracking-widest text-wegrow-lime mb-6">{service.num}</div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4 group-hover:text-wegrow-lime transition-colors" style={{ fontFamily: "'DIN Condensed', sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{service.short}</p>
              <p className="text-white/40 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                {service.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6">
          <Link href="/booking" className="px-8 py-4 bg-wegrow-lime hover:bg-white text-wegrow-dark font-bold rounded-full transition-all">
            Request a Quote
          </Link>
          <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
            Or call us directly: <span className="text-wegrow-lime font-bold">{siteData.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
