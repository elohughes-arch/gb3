"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 100, suffix: "%", label: "Insured & Certified" },
  { value: 24, suffix: "hr", label: "Response Time" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TrustStats() {
  return (
    <section className="bg-wegrow-dark py-12 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0">
        {stats.map((s, i) => (
          <div key={s.label} className={`text-center px-6 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""}`}>
            <div className="text-4xl md:text-5xl font-bold text-wegrow-lime mb-2 leading-none" style={{ fontFamily: "'DIN Condensed', sans-serif" }}>
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-[0.6rem] md:text-[0.65rem] text-white/60 font-bold uppercase tracking-[0.2em]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
