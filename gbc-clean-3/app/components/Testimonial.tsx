"use client";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function Testimonial() {
    const { testimonial } = siteData;
    return (
          <section className="bg-forest-950 text-cream-50">
                <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 md:py-28">
                        <motion.figure
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="card-lift rounded-3xl border border-cream-50/10 bg-forest-900/40 p-8 md:p-14"
                                  >
                                  <svg width="42" height="32" viewBox="0 0 42 32" className="text-cream-50/40" aria-hidden>
                                              <path
                                                              fill="currentColor"
                                                              d="M0 32V18.4C0 8.9 4.7 2.7 14 0l2.6 4.4C10.2 6.6 6.7 10.4 6.7 16h7.1V32H0zm24.6 0V18.4c0-9.5 4.7-15.7 14-18.4L41.2 4.4C34.8 6.6 31.3 10.4 31.3 16h7.1V32H24.6z"
                                                            />
                                  </svg>svg>
                                  <blockquote className="mt-6 font-display font-medium text-2xl md:text-3xl leading-snug tracking-tight">
                                              “{testimonial.quote}”
                                  </blockquote>blockquote>
                                  <figcaption className="mt-8 flex items-center gap-4">
                                              <div className="h-10 w-10 rounded-full bg-cream-50/10 grid place-items-center font-display font-semibold">
                                                {testimonial.author
                                                                  .split(" ")
                                                                  .map((p) => p[0])
                                                                  .slice(0, 2)
                                                                  .join("")}
                                              </div>div>
                                              <div>
                                                            <div className="font-semibold">{testimonial.author}</div>div>
                                                            <div className="text-cream-50/60 text-sm">{testimonial.role}</div>div>
                                              </div>div>
                                  </figcaption>figcaption>
                        </motion.figure>motion.figure>
                </div>div>
          </section>section>
        );
}
</section>
