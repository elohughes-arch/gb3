"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function CTABlock() {
    const { ctaBlock } = siteData;
    return (
          <section className="bg-stone-50">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
                        <motion.div
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative overflow-hidden rounded-3xl bg-forest-950 text-cream-50 p-8 md:p-14 lg:p-20"
                                  >
                                  <div className="absolute inset-0 opacity-25">
                                              <Image
                                                              src="/log-stack.jpg"
                                                              alt=""
                                                              fill
                                                              sizes="100vw"
                                                              className="object-cover"
                                                            />
                                              <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-forest-950/40" />
                                  </div>div>
                                  <div className="relative grid lg:grid-cols-12 gap-8 items-end">
                                              <div className="lg:col-span-8">
                                                            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight max-w-2xl">
                                                              {ctaBlock.heading}
                                                            </h2>h2>
                                                            <p className="mt-5 max-w-xl text-cream-50/75 text-base md:text-lg leading-relaxed">
                                                              {ctaBlock.sub}
                                                            </p>p>
                                              </div>div>
                                              <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
                                                            <Link
                                                                              href={ctaBlock.primaryCta.href}
                                                                              className="group inline-flex items-center gap-2 rounded-full bg-cream-50 text-forest-950 hover:bg-cream-200 px-6 py-3.5 text-sm font-semibold transition-colors"
                                                                            >
                                                              {ctaBlock.primaryCta.label}
                                                                            <span className="arrow-shift" aria-hidden>→</span>span>
                                                            </Link>Link>
                                                            <a
                                                                              href={ctaBlock.secondaryCta.href}
                                                                              className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-forest-950 px-6 py-3.5 text-sm font-semibold transition-colors"
                                                                            >
                                                              {ctaBlock.secondaryCta.label}
                                                            </a>a>
                                              </div>div>
                                  </div>div>
                        </motion.div>motion.div>
                </div>div>
          </section>section>
        );
}
</section>
