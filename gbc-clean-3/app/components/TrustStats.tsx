"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "../data/siteData";

function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.4 });
    const [val, setVal] = useState(0);

  useEffect(() => {
        if (!inView) return;
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
                const t = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - t, 3);
                setVal(Math.round(eased * to));
                if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
        <span ref={ref} className="tabular-nums">
          {val}
          {suffix}
        </span>span>
      );
}

export default function TrustStats() {
    const { trust } = siteData;
    return (
          <section aria-label="Trust signals" className="bg-forest-950 text-cream-50">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-20">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                  <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight max-w-xl">
                                    {trust.headline}
                                  </h2>h2>
                                  <p className="text-cream-50/70 text-sm md:text-base max-w-md">
                                              Real signals from real work — no inflated numbers, no stock badges.
                                  </p>p>
                        </div>div>
                
                        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {trust.items.map((item, i) => (
                        <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                                        className="card-lift rounded-2xl border border-cream-50/10 bg-forest-900/60 p-6 md:p-8"
                                      >
                                      <div className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
                                        {item.kind === "count" ? (
                                                          <CountUp to={item.value as number} suffix={item.suffix ?? ""} />
                                                        ) : (
                                                          <span>{item.value}</span>span>
                                                      )}
                                      </div>div>
                                      <div className="mt-3 text-sm text-cream-50/75">{item.label}</div>div>
                        </motion.div>motion.div>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}
</span>
