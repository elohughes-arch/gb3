"use client";
import { siteData } from "../data/siteData";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-wegrow-dark text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-wegrow-lime/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-wegrow-lime text-xs font-bold tracking-widest uppercase mb-4">Get in Touch</div>
            <h2 className="text-5xl md:text-7xl font-sans tracking-tight mb-8">
              Let's Talk<br />
              <span className="text-wegrow-lime font-serif italic font-light">About Your Project.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md mb-12 leading-relaxed">
              We cover Taunton and all surrounding Somerset areas. Get in touch — we'll arrange a free site visit and quote at your convenience.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="text-wegrow-lime text-[0.65rem] font-bold tracking-widest uppercase pt-2 w-16">Phone</div>
                <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="text-xl md:text-2xl font-medium hover:text-white transition-colors">
                  {siteData.phone}
                </a>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="text-wegrow-lime text-[0.65rem] font-bold tracking-widest uppercase pt-2 w-16">Email</div>
                <a href={`mailto:${siteData.email}`} className="text-xl md:text-2xl font-medium hover:text-white transition-colors break-all">
                  {siteData.email}
                </a>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="text-wegrow-lime text-[0.65rem] font-bold tracking-widest uppercase pt-2 w-16">Area</div>
                <div className="text-xl md:text-2xl font-medium text-white/60">
                  {siteData.areaServed}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wegrow-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 uppercase" style={{ fontFamily: "'DIN Condensed', sans-serif" }}>Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-wegrow-lime transition-colors" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-wegrow-lime transition-colors" placeholder="Email address" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-wegrow-lime transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-4 bg-wegrow-lime hover:bg-white text-wegrow-dark font-bold rounded-full transition-all transform active:scale-95">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
