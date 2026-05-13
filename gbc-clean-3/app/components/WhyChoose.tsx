"use client";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function WhyChoose() {
    const { whyChoose } = siteData;
    return (
          <section className="bg-stone-50">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
                        <div className="max-w-3xl">
                                  <span className="text-[11px] uppercase tracking-[0.28em] text-forest-700 font-semibold">
                                              Why GB Contracting
                                  </span>span>
                                  <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-forest-950 tracking-tight">
                                    {whyChoose.heading}
                                  </h2>h2>
                                  <p className="mt-4 text-charcoal-800/80">{whyChoose.sub}</p>p>
                        </div>div>
                
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {whyChoose.points.map((p, i) => (
                        <motion.div
                                        key={p.title}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.06 }}
                                        className="card-lift rounded-2xl border border-forest-900/10 bg-cream-50 p-6 md:p-7"
                                      >
                                      <div className="flex items-center gap-3">
                                                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest-800 text-cream-50 text-xs font-semibold">
                                                        {String(i + 1).padStart(2, "0")}
                                                      </span>span>
                                                      <h3 className="font-display font-bold text-lg text-forest-950 tracking-tight">
                                                        {p.title}
                                                      </h3>h3>
                                      </div>div>
                                      <p className="mt-4 text-sm text-charcoal-800/80 leading-relaxed">{p.body}</p>p>
                        </motion.div>motion.div>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}
</section>
