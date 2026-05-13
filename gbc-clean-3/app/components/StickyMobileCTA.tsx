"use client";
import { useEffect, useState } from "react";

export default function StickyMobileCTA({ phone }: { phone: string }) {
    const [show, setShow] = useState(false);

  useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
        <div
                className={`fixed inset-x-4 bottom-4 z-40 md:hidden transition-all duration-300 ${
                          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
              <div className="grid grid-cols-2 gap-2">
                      <a
                                  href="/booking"
                                  className="inline-flex items-center justify-center rounded-full bg-forest-800 text-cream-50 text-sm font-semibold py-3 shadow-lg shadow-forest-950/20 active:scale-[0.98] transition"
                                >
                                Book a Free Quote
                      </a>a>
                      <a
                                  href={`tel:${phone.replace(/\s/g, "")}`}
                                  className="inline-flex items-center justify-center rounded-full bg-cream-50 text-forest-950 text-sm font-semibold py-3 shadow-lg shadow-forest-950/20 active:scale-[0.98] transition border border-forest-900/10"
                                >
                                Call Mungo
                      </a>a>
              </div>div>
        </div>div>
      );
}
</div>
