import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import CTABlock from "../components/CTABlock";
import { siteData } from "../data/siteData";

export const metadata: Metadata = {
    title: "Contact",
    description:
          "Contact GB Contracting in Taunton for tree surgery, land clearance, log splitting and outdoor contracting enquiries.",
};

export default function ContactPage() {
    return (
          <>
                <section className="bg-stone-50">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
                                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                                              <div className="lg:col-span-6">
                                                            <span className="text-[11px] uppercase tracking-[0.28em] text-forest-700 font-semibold">
                                                                            Contact
                                                            </span>span>
                                                            <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-forest-950 tracking-tight">
                                                                            Talk to Mungo directly.
                                                            </h1>h1>
                                                            <p className="mt-5 text-charcoal-800/80 max-w-md">
                                                                            Free site visits and quotes across Taunton and surrounding areas. Call, email, or use the booking form — whichever is easiest.
                                                            </p>p>
                                                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                            <a
                                                                                                href={`tel:${siteData.phoneTel}`}
                                                                                                className="flex flex-col rounded-2xl border border-forest-900/10 bg-cream-50 px-5 py-5 card-lift"
                                                                                              >
                                                                                              <div className="text-xs uppercase tracking-[0.22em] text-forest-700 font-semibold">Phone</div>div>
                                                                                              <div className="mt-1 font-display font-bold text-forest-950 text-lg">{siteData.phoneDisplay}</div>div>
                                                                                              <div className="mt-2 text-xs text-charcoal-800/60">Tap to call · Mon–Sat</div>div>
                                                                            </a>a>
                                                                            <a
                                                                                                href={`mailto:${siteData.email}`}
                                                                                                className="flex flex-col rounded-2xl border border-forest-900/10 bg-cream-50 px-5 py-5 card-lift"
                                                                                              >
                                                                                              <div className="text-xs uppercase tracking-[0.22em] text-forest-700 font-semibold">Email</div>div>
                                                                                              <div className="mt-1 font-display font-bold text-forest-950 text-base break-all">{siteData.email}</div>div>
                                                                                              <div className="mt-2 text-xs text-charcoal-800/60">Replies within 24h on weekdays</div>div>
                                                                            </a>a>
                                                                            <div className="flex flex-col rounded-2xl border border-forest-900/10 bg-cream-50 px-5 py-5">
                                                                                              <div className="text-xs uppercase tracking-[0.22em] text-forest-700 font-semibold">Area</div>div>
                                                                                              <div className="mt-1 font-display font-bold text-forest-950 text-lg">{siteData.area}</div>div>
                                                                                              <div className="mt-2 text-xs text-charcoal-800/60">Travel further on larger jobs</div>div>
                                                                            </div>div>
                                                                            <a
                                                                                                href="/booking"
                                                                                                className="flex flex-col rounded-2xl border border-forest-900/10 bg-forest-950 text-cream-50 px-5 py-5 card-lift"
                                                                                              >
                                                                                              <div className="text-xs uppercase tracking-[0.22em] text-cream-50/70 font-semibold">Book</div>div>
                                                                                              <div className="mt-1 font-display font-bold text-lg">Book a Free Quote →</div>div>
                                                                                              <div className="mt-2 text-xs text-cream-50/60">Send details to Mungo</div>div>
                                                                            </a>a>
                                                            </div>div>
                                              </div>div>
                                              <div className="lg:col-span-6">
                                                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-forest-900/10 zoom-img">
                                                                            <Image
                                                                                                src="/cleared.jpg"
                                                                                                alt="Cleared woodland by GB Contracting"
                                                                                                fill
                                                                                                sizes="(min-width: 1024px) 50vw, 100vw"
                                                                                                className="object-cover"
                                                                                              />
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
                <CTABlock />
                <Footer />
          </>>
        );
}
</>
