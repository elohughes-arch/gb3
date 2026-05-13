"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function Hero() {
    const { hero } = siteData;
    return (
          <section className="relative isolate overflow-hidden bg-stone-50">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 md:pt-16 pb-16 md:pb-24">
                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                          {/* Copy */}
                                  <div className="lg:col-span-6">
                                              <motion.div
                                                              initial={{ opacity: 0, y: 12 }}
                                                              animate={{ opacity: 1, y: 0 }}
                                                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                            >
                                                            <span className="inline-flex items-center gap-2 rounded-full border border-forest-900/15 bg-cream-50 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-forest-900">
                                                                            <span className="h-1.5 w-1.5 rounded-full bg-forest-700" />
                                                              {hero.eyebrow}
                                                            </span>span>
                                              </motion.div>motion.div>
                                              <motion.h1
                                                              initial={{ opacity: 0, y: 16 }}
                                                              animate={{ opacity: 1, y: 0 }}
                                                              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                                                              className="mt-5 font-display font-extrabold text-forest-950 text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.02em]"
                                                            >
                                                {hero.h1}
                                              </motion.h1>motion.h1>
                                              <motion.p
                                                              initial={{ opacity: 0, y: 16 }}
                                                              animate={{ opacity: 1, y: 0 }}
                                                              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                                                              className="mt-6 max-w-xl text-base sm:text-lg text-charcoal-800/85 leading-relaxed"
                                                            >
                                                {hero.sub}
                                              </motion.p>motion.p>
                                              <motion.div
                                                              initial={{ opacity: 0, y: 12 }}
                                                              animate={{ opacity: 1, y: 0 }}
                                                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
                                                              className="mt-8 flex flex-wrap items-center gap-3"
                                                            >
                                                            <Link
                                                                              href={hero.primaryCta.href}
                                                                              className="group inline-flex items-center gap-2 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-50 px-6 py-3.5 text-sm font-semibold transition-colors shadow-sm"
                                                                            >
                                                              {hero.primaryCta.label}
                                                                            <span className="arrow-shift" aria-hidden>→</span>span>
                                                            </Link>Link>
                                                            <a
                                                                              href={hero.secondaryCta.href}
                                                                              className="inline-flex items-center gap-2 rounded-full border border-forest-900/20 text-forest-950 hover:bg-forest-950 hover:text-cream-50 px-6 py-3.5 text-sm font-semibold transition-colors"
                                                                            >
                                                              {hero.secondaryCta.label}
                                                            </a>a>
                                              </motion.div>motion.div>
                                              <motion.ul
                                                              initial={{ opacity: 0 }}
                                                              animate={{ opacity: 1 }}
                                                              transition={{ duration: 0.6, delay: 0.4 }}
                                                              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-sm text-forest-950/80"
                                                            >
                                                {[
                                                                              "Fully insured",
                                                                              "5-star rated",
                                                                              "Free quotes",
                                                                              "Local to Taunton",
                                                                              "Safety-first",
                                                                              "Direct contact with Mungo",
                                                                            ].map((t) => (
                                                                                              <li key={t} className="flex items-center gap-2">
                                                                                                                <span className="h-1.5 w-1.5 rounded-full bg-forest-600" />
                                                                                                {t}
                                                                                                </li>li>
                                                                                            ))}
                                              </motion.ul>motion.ul>
                                  </div>div>
                        
                          {/* Image */}
                                  <motion.div
                                                initial={{ opacity: 0, scale: 1.02 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                                className="lg:col-span-6 relative"
                                              >
                                              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden ring-1 ring-forest-900/10 shadow-xl shadow-forest-950/10">
                                                            <Image
                                                                              src={hero.image.src}
                                                                              alt={hero.image.alt}
                                                                              fill
                                                                              priority
                                                                              sizes="(min-width: 1024px) 50vw, 100vw"
                                                                              className="object-cover"
                                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-tr from-forest-950/30 via-transparent to-transparent" />
                                                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream-50">
                                                                            <span className="text-[11px] uppercase tracking-[0.28em] bg-forest-950/60 backdrop-blur px-3 py-1.5 rounded-full">
                                                                                              Real work · GB Contracting
                                                                            </span>span>
                                                            </div>div>
                                              </div>div>
                                  </motion.div>motion.div>
                        </div>div>
                </div>div>
            {/* hairline */}
                <div className="hairline mx-auto max-w-7xl" />
          </section>section>
        );
}
</section>
