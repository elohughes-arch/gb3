import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import CTABlock from "../components/CTABlock";

export const metadata: Metadata = {
    title: "About GB Contracting",
    description:
          "GB Contracting is a Taunton-based tree surgery, land clearance and outdoor contracting business. Safety-first, locally run, fully insured.",
};

export default function AboutPage() {
    return (
          <>
                <section className="bg-stone-50">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
                                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                                              <div className="lg:col-span-7">
                                                            <span className="text-[11px] uppercase tracking-[0.28em] text-forest-700 font-semibold">
                                                                            About
                                                            </span>span>
                                                            <h1 className="mt-3 font-display font-extrabold text-4xl md:text-6xl text-forest-950 tracking-tight">
                                                                            Tree work and land clearance, run properly.
                                                            </h1>h1>
                                                            <div className="mt-6 space-y-5 text-base md:text-lg text-charcoal-800/85 leading-relaxed max-w-2xl">
                                                                            <p>
                                                                                              GB Contracting is a Taunton-based tree surgery, land clearance, log splitting and outdoor contracting business run by Mungo. We work for homeowners, landowners and businesses across Taunton and surrounding areas.
                                                                            </p>p>
                                                                            <p>
                                                                                              Every job is planned and worked methodically with a safety-first approach — from straightforward garden trees through to woodland clearance and timber processing. Quotes are free, communication is direct, and sites are left clean, safe and ready to use.
                                                                            </p>p>
                                                                            <p>
                                                                                              We’re fully insured and operating across Somerset, with a growing track record of repeat work and word-of-mouth referrals.
                                                                            </p>p>
                                                            </div>div>
                                                            <div className="mt-8 flex flex-wrap gap-3">
                                                                            <a
                                                                                                href="/booking"
                                                                                                className="group inline-flex items-center gap-2 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-50 px-6 py-3.5 text-sm font-semibold transition-colors"
                                                                                              >
                                                                                              Book a Free Quote
                                                                                              <span className="arrow-shift" aria-hidden>→</span>span>
                                                                            </a>a>
                                                                            <a
                                                                                                href="tel:+447464062317"
                                                                                                className="inline-flex items-center gap-2 rounded-full border border-forest-900/20 text-forest-950 hover:bg-forest-950 hover:text-cream-50 px-6 py-3.5 text-sm font-semibold transition-colors"
                                                                                              >
                                                                                              Call Mungo
                                                                            </a>a>
                                                            </div>div>
                                              </div>div>
                                              <div className="lg:col-span-5">
                                                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-forest-900/10 zoom-img">
                                                                            <Image
                                                                                                src="/log-splitting.jpg"
                                                                                                alt="GB Contracting at work splitting logs"
                                                                                                fill
                                                                                                sizes="(min-width: 1024px) 40vw, 100vw"
                                                                                                className="object-cover"
                                                                                              />
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
                <Testimonial />
                <CTABlock />
                <Footer />
          </>>
        );
}
</>
