"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function ServiceGrid() {
    const { services } = siteData;
    return (
          <section id="services" className="bg-stone-50">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                                  <div>
                                              <span className="text-[11px] uppercase tracking-[0.28em] text-forest-700 font-semibold">
                                                            What we do
                                              </span>span>
                                              <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-forest-950 tracking-tight max-w-2xl">
                                                            Tree and land services across Taunton.
                                              </h2>h2>
                                  </div>div>
                                  <p className="max-w-md text-charcoal-800/80">
                                              One contractor for the whole job — from surveying and felling to splitting, stacking and clearing.
                                  </p>p>
                        </div>div>
                
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          {services.map((s, i) => (
                        <motion.article
                                        key={s.slug}
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.06 }}
                                        className="group card-lift relative overflow-hidden rounded-2xl border border-forest-900/10 bg-cream-50"
                                      >
                                      <div className="relative aspect-[4/3] zoom-img">
                                                      <Image
                                                                          src={s.image}
                                                                          alt={s.title}
                                                                          fill
                                                                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                                          className="object-cover"
                                                                        />
                                                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-forest-950/10 to-transparent" />
                                                      <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.28em] bg-cream-50/90 text-forest-950 px-2.5 py-1 rounded-full">
                                                        {String(i + 1).padStart(2, "0")}
                                                      </span>span>
                                      </div>div>
                                      <div className="p-6">
                                                      <h3 className="font-display font-bold text-xl text-forest-950 tracking-tight">
                                                        {s.title}
                                                      </h3>h3>
                                                      <p className="mt-2 text-sm text-charcoal-800/80 leading-relaxed">
                                                        {s.short}
                                                      </p>p>
                                                      <Link
                                                                          href="/booking"
                                                                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 group-hover:text-forest-600 transition-colors"
                                                                        >
                                                                        Get a quote
                                                                        <span className="arrow-shift" aria-hidden>→</span>span>
                                                      </Link>Link>
                                      </div>div>
                        </motion.article>motion.article>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}
</section>
