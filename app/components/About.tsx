"use client";
import { siteData } from "../data/siteData";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-wegrow-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="text-wegrow-lime text-xs font-bold tracking-widest uppercase mb-2">Who We Are</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-[0.95] mb-8" style={{ fontFamily: "'DIN Condensed', sans-serif" }}>
            Reliable.<br />Local.<br />Professional.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            GB Contracting is a Taunton-based agricultural contracting business with a decade of hands-on experience working across farms, estates and rural properties throughout Somerset.
          </p>
          <p className="text-white/60 mb-10 leading-relaxed">
            We turn up when we say we will, do the job properly, and leave your land in better shape than we found it. No job is too small for our dedicated team.
          </p>
          
          <ul className="space-y-4">
            {siteData.contactFeatures.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-wegrow-lime flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-wegrow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          {/* Testimonial Card */}
          <div className="bg-wegrow-card p-10 rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-24 h-24 text-wegrow-lime" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8h6l-3 7h5l3-7V8h-11z M22 8v8h6l-3 7h5l3-7V8h-11z" />
              </svg>
            </div>
            
            <div className="w-10 h-1 bg-wegrow-lime mb-8" />
            
            {siteData.testimonials.map((t, i) => (
              <div key={i}>
                <p className="text-xl text-white/90 italic leading-relaxed mb-10">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-wegrow-lime font-bold uppercase tracking-wider mb-1" style={{ fontFamily: "'DIN Condensed', sans-serif" }}>
                    {t.author}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA Box */}
          <div className="bg-wegrow-darker p-10 rounded-2xl text-white shadow-xl">
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">Free site visit — no obligation</h4>
            <p className="text-white/60 mb-8 leading-relaxed">
              Tell us about your project and we'll come to you. Quotes are free, and there's no pressure to commit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="flex-1 px-8 py-4 bg-wegrow-lime hover:bg-white text-wegrow-dark font-bold rounded-full text-center transition-all">
                Book Online
              </Link>
              <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="flex-1 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-center border border-white/10 transition-all">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
