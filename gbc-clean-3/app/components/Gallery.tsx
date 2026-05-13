"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteData } from "../data/siteData";

export default function Gallery() {
    const { gallery } = siteData;
    const [first, second, third] = gallery;
    return (
          <section id="work" className="bg-cream-50">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                                  <div>
                                              <span className="text-[11px] uppercase tracking-[0.28em] text-forest-700 font-semibold">
                                                            Real work
                                              </span>span>
                                              <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl text-forest-950 tracking-tight max-w-2xl">
                                                            Real Work. Clean Sites. No Fuss.
                                              </h2>h2>
                                              <p className="mt-4 max-w-xl text-charcoal-800/80">
                                                            From tree work to clearance and timber processing, GB Contracting leaves every site safer, cleaner and easier to use.
                                              </p>p>
                                  </div>div>
                                  <Link
                                                href="/booking"
                                                className="hidden md:inline-flex items-center gap-2 rounded-full border border-forest-900/20 px-5 py-2.5 text-sm font-semibold text-forest-950 hover:bg-forest-950 hover:text-cream-50 transition-colors"
                                              >
                                              Discuss your site
                                              <span className="arrow-shift" aria-hidden>→</span>span>
                                  </Link>Link>
                        </div>div>
                
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                                  <GalleryCard className="md:col-span-4 aspect-[4/3]" img={first} delay={0} />
                                  <GalleryCard className="md:col-span-2 aspect-[4/3]" img={second} delay={0.06} />
                                  <GalleryCard className="md:col-span-6 aspect-[16/7]" img={third} delay={0.12} />
                        </div>div>
                </div>div>
          </section>section>
        );
}

function GalleryCard({
    img,
    className,
    delay = 0,
}: {
    img: { src: string; alt: string; tag: string };
    className?: string;
    delay?: number;
}) {
    return (
          <motion.figure
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
                  className={`group relative overflow-hidden rounded-2xl ring-1 ring-forest-900/10 zoom-img ${className ?? ""}`}
                >
                <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 66vw, 100vw"
                          className="object-cover"
                        />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-forest-950/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream-50">
                        <span className="text-[10px] uppercase tracking-[0.28em] bg-forest-950/60 backdrop-blur px-2.5 py-1 rounded-full">
                          {img.tag}
                        </span>span>
                        <span className="text-[11px] uppercase tracking-[0.28em] opacity-0 group-hover:opacity-100 transition-opacity">
                                  Taunton · Somerset
                        </span>span>
                </figcaption>figcaption>
          </motion.figure>motion.figure>
        );
}
</section>
