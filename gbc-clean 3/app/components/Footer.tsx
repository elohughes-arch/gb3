import Link from "next/link";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-wegrow-dark text-white pt-24 pb-8 border-t border-white/5">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime opacity-80" />
              <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime" />
              <div className="w-2.5 h-2.5 rounded-full bg-wegrow-lime opacity-60" />
            </div>
            <div className="font-bold text-white tracking-tight lowercase text-xl font-sans group-hover:text-wegrow-lime transition-colors">
              gb<span className="text-wegrow-lime">contracting</span>
            </div>
          </Link>
          <p className="text-white/60 leading-relaxed max-w-xs">
            Professional agricultural & land management contractors taking your projects to the next level.
          </p>
          <div className="flex flex-col gap-2">
            <a href={`tel:${siteData.phone.replace(/\s/g, "")}`} className="text-wegrow-lime font-medium hover:text-white transition-colors">
              {siteData.phone}
            </a>
            <a href={`mailto:${siteData.email}`} className="text-white/60 hover:text-white transition-colors">
              {siteData.email}
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-serif text-lg text-white mb-6">Navigate</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-white/60 hover:text-wegrow-lime transition-colors">Home</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-wegrow-lime transition-colors">Services</Link></li>
            <li><Link href="/about" className="text-white/60 hover:text-wegrow-lime transition-colors">About Us</Link></li>
            <li><Link href="/booking" className="text-white/60 hover:text-wegrow-lime transition-colors">Book Online</Link></li>
            <li><Link href="/contact" className="text-white/60 hover:text-wegrow-lime transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-serif text-lg text-white mb-6">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/process" className="text-white/60 hover:text-wegrow-lime transition-colors">Process</Link></li>
            <li><Link href="/work" className="text-white/60 hover:text-wegrow-lime transition-colors">Work</Link></li>
            <li><Link href="/benefits" className="text-white/60 hover:text-wegrow-lime transition-colors">Benefits</Link></li>
            <li><Link href="/pricing" className="text-white/60 hover:text-wegrow-lime transition-colors">Pricing</Link></li>
            <li><Link href="/faqs" className="text-white/60 hover:text-wegrow-lime transition-colors">FAQs</Link></li>
            <li><Link href="/blog" className="text-white/60 hover:text-wegrow-lime transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <h4 className="font-serif text-lg text-white mb-6">Service Area</h4>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-white/60">
            {[
              "Taunton",
              "Bridgwater",
              "Wellington",
              "Yeovil",
              "Chard",
              "Minehead",
              "Glastonbury",
              "Somerset",
            ].map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 mt-16 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
        <p>© {new Date().getFullYear()} GB Contracting Ltd. All rights reserved.</p>
        <p className="font-medium">Agricultural & Land Management Specialists</p>
      </div>
    </footer>
  );
}
