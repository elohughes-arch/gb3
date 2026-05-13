"use client";
import Image from "next/image";
import { siteData } from "../data/siteData";

export default function PhotoGrid() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-1">
        {siteData.photos.map((photo, i) => (
          <div key={i} className="relative h-60 md:h-80 overflow-hidden group">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-widest uppercase border border-white/30 px-3 py-1 backdrop-blur-sm">
                View Project
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
