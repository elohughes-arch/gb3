"use client";
import { useEffect, useState } from "react";


export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [draw, setDraw] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("gb-splash")) return;
    sessionStorage.setItem("gb-splash", "1");
    setVisible(true);
    const t1 = setTimeout(() => setDraw(true), 150);
    const t2 = setTimeout(() => setOut(true), 2000);
    const t3 = setTimeout(() => setVisible(false), 2650);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  const r = 52;
  const circ = 2 * Math.PI * r;

  return (
    <div className={`fixed inset-0 bg-wegrow-dark z-[9999] flex items-center justify-center transition-opacity duration-700 ${out ? "opacity-0" : "opacity-100"}`}>
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute inset-0">
          <circle
            cx="60" cy="60" r={r}
            fill="none" 
            stroke="#ccfc62" 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={draw ? 0 : circ}
            className={`transition-all duration-[1400ms] ease-in-out origin-center -rotate-90`}
          />
        </svg>
        
        <div className={`text-center flex flex-col items-center justify-center transition-opacity duration-500 delay-300 ${draw ? "opacity-100" : "opacity-0"}`}>
          <div className="flex gap-1 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime" />
            <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime opacity-60" />
          </div>
          <div className="font-bold text-white tracking-tight lowercase text-xl font-sans">
            gb<span className="text-wegrow-lime">contracting</span>
          </div>
        </div>
      </div>
    </div>
  );
}
