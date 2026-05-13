import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import { siteData } from "../data/siteData";

export const metadata: Metadata = {
    title: "Book a Free Quote",
    description:
          "Book a free quote with GB Contracting for tree surgery, land clearance, log splitting or outdoor contracting in Taunton and surrounding areas.",
};

export default function BookingPage() {
    return (
          <>
                <section className="bg-stone-50">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
                                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                                              <div className="lg:col-span-5">
                                                            <span className="text-[11px] uppercase tracking-[0.28em] text-forest-700 font-semibold">
                                                                            Free quote
                                                            </span>span>
                                                            <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl text-forest-950 tracking-tight">
                                                                            Book a free quote with Mungo.
                                                            </h1>h1>
                                                            <p className="mt-5 text-charcoal-800/80 max-w-md">
                                                                            Send a few details and GB Contracting will get back to you to discuss the job, arrange a visit, or provide a quote.
                                                            </p>p>
                                              
                                                            <div className="mt-8 space-y-3">
                                                                            <a
                                                                                                href={`tel:${siteData.phoneTel}`}
                                                                                                className="flex items-center justify-between rounded-2xl border border-forest-900/10 bg-cream-50 px-5 py-4 card-lift"
                                                                                              >
                                                                                              <div>
                                                                                                                  <div className="text-xs uppercase tracking-[0.22em] text-forest-700 font-semibold">Call</div>div>
                                                                                                                  <div className="mt-1 font-display font-bold text-forest-950 text-lg">{siteData.phoneDisplay}</div>div>
                                                                                                </div>div>
                                                                                              <span className="arrow-shift text-forest-700" aria-hidden>→</span>span>
                                                                            </a>a>
                                                                            <a
                                                                                                href={`mailto:${siteData.email}`}
                                                                                                className="flex items-center justify-between rounded-2xl border border-forest-900/10 bg-cream-50 px-5 py-4 card-lift"
                                                                                              >
                                                                                              <div>
                                                                                                                  <div className="text-xs uppercase tracking-[0.22em] text-forest-700 font-semibold">Email</div>div>
                                                                                                                  <div className="mt-1 font-display font-bold text-forest-950 text-lg break-all">
                                                                                                                    {siteData.email}
                                                                                                                    </div>div>
                                                                                                </div>div>
                                                                                              <span className="arrow-shift text-forest-700" aria-hidden>→</span>span>
                                                                            </a>a>
                                                                            <div className="flex items-center justify-between rounded-2xl border border-forest-900/10 bg-cream-50 px-5 py-4">
                                                                                              <div>
                                                                                                                  <div className="text-xs uppercase tracking-[0.22em] text-forest-700 font-semibold">Area</div>div>
                                                                                                                  <div className="mt-1 font-display font-bold text-forest-950 text-lg">{siteData.area}</div>div>
                                                                                                </div>div>
                                                                            </div>div>
                                                            </div>div>
                                              
                                                            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-forest-900/10 zoom-img">
                                                                            <Image
                                                                                                src="/log-stack.jpg"
                                                                                                alt="GB Contracting stacked timber"
                                                                                                fill
                                                                                                sizes="(min-width: 1024px) 40vw, 100vw"
                                                                                                className="object-cover"
                                                                                              />
                                                            </div>div>
                                              </div>div>
                                              <div className="lg:col-span-7">
                                                            <BookingForm />
                                              </div>div>
                                  </div>div>
                        </div>div>
                </section>section>
                <Footer />
          </>>
        );
}
</>
