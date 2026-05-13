"use client";
import { useEffect, useState } from "react";

/**
 * SplashScreen
 * - Total visible duration: 1500ms (1.5s)
 * - Sequence: deep-forest backdrop → wordmark fades + subtle scale-in (0–700ms)
 *   → hold (700–1100ms) → fade out (1100–1500ms)
 * - Plays once per browser session (sessionStorage gate)
 */
export default function SplashScreen() {
    const [stage, setStage] = useState<"hidden" | "in" | "out" | "done">("hidden");

  useEffect(() => {
        if (typeof window === "undefined") return;
        try {
                if (sessionStorage.getItem("gb-splash-played")) {
                          setStage("done");
                          return;
                }
                sessionStorage.setItem("gb-splash-played", "1");
        } catch {
                /* no-op */
        }
        setStage("in");
        const tOut = setTimeout(() => setStage("out"), 1100);
        const tDone = setTimeout(() => setStage("done"), 1500);
        return () => {
                clearTimeout(tOut);
                clearTimeout(tDone);
        };
  }, []);

  if (stage === "done" || stage === "hidden") return null;

  return (
        <div
                aria-hidden
                className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b1f15] transition-opacity duration-[400ms] ease-out ${
                          stage === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
              <div className="splash-in flex flex-col items-center text-center">
                      <div className="flex items-baseline gap-[2px] font-display">
                                <span className="text-[88px] sm:text-[120px] leading-none font-extrabold text-cream-50 tracking-tight">
                                            GB
                                </span>span>
                      </div>div>
                      <div className="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.32em] text-cream-50/70 font-display font-medium">
                                Contracting
                      </div>div>
                      <div className="mt-6 h-px w-16 bg-cream-50/30" />
                      <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-cream-50/50">
                                Taunton · Somerset
                      </div>div>
              </div>div>
        </div>div>
      );
}
</div>
