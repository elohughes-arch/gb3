"use client";
import Link from "next/link";
import { siteData } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Title */}
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-sans tracking-tight leading-[1.1] mb-6 max-w-4xl">
        The only contracting <span className="font-serif italic font-light">service</span> you need
      </h1>
      
      {/* Subtitle */}
      <p className="text-wegrow-lime text-lg md:text-xl font-medium mb-12">
        We're all about taking your property to the next level
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-24 relative z-10">
        <Link href="/services" className="px-8 py-3.5 bg-white text-wegrow-dark font-bold rounded-full hover:scale-105 transition-transform">
          View services
        </Link>
        <Link href="/booking" className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
          Book a quote
        </Link>
      </div>

      {/* Graphic Container (Services/Preview Area) */}
      <div className="w-full max-w-6xl mx-auto relative rounded-[2rem] md:rounded-[3rem] bg-[#d1d5db] aspect-[4/3] md:aspect-[21/9] overflow-hidden flex items-center justify-center group cursor-pointer shadow-2xl shadow-black/50">
        {/* Placeholder 3D geometric shapes effect or branding */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />
        
        {/* Abstract shapes representing pipes/materials */}
        <div className="relative z-10 flex items-center justify-center gap-4 md:gap-8 transform transition-transform duration-700 group-hover:scale-105">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[12px] md:border-[16px] border-wegrow-card shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] bg-gradient-to-br from-wegrow-dark to-wegrow-darker transform -rotate-12" />
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-[12px] md:border-[16px] border-wegrow-card shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] bg-gradient-to-tr from-wegrow-dark to-wegrow-darker transform translate-y-8" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-wegrow-lime opacity-80" />
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-wegrow-lime" />
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-wegrow-lime opacity-60" />
            <span className="text-3xl md:text-5xl font-bold lowercase tracking-tight text-wegrow-lime mix-blend-difference">gbcontracting</span>
          </div>
        </div>

        {/* Badges in corners like the reference */}
        <div className="absolute bottom-6 left-6 w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/10 flex items-center justify-center bg-white/20 backdrop-blur-sm animate-spin-slow">
          <span className="text-[10px] md:text-xs font-bold text-wegrow-dark text-center uppercase tracking-widest">
            Award<br/>Winning
          </span>
        </div>
        <div className="absolute bottom-6 right-6 w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/10 flex items-center justify-center bg-white/20 backdrop-blur-sm">
          <span className="text-[10px] md:text-xs font-bold text-wegrow-dark text-center uppercase tracking-widest">
            Est.<br/>2015
          </span>
        </div>
      </div>
    </section>
  );
}
