import Link from "next/link";
import { siteData } from "../data/siteData";

export default function Footer() {
    const year = new Date().getFullYear();
    const footerServices = [
          "Tree Surgery",
          "Land Clearance",
          "Log Splitting",
          "Hedge Clearance",
          "Outdoor Contracting",
        ];
    const footerNav = [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/#work" },
      { label: "About", href: "/about" },
      { label: "Book a Quote", href: "/booking" },
      { label: "Contact", href: "/contact" },
        ];

  return (
        <footer className="bg-forest-950 text-cream-50">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 md:pt-24 pb-10">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                        {/* Brand */}
                                <div className="md:col-span-4">
                                            <Link href="/" className="flex items-baseline gap-2" aria-label="GB Contracting home">
                                                          <span className="font-display font-extrabold text-3xl tracking-tight">GB</span>span>
                                                          <span className="font-display text-[11px] uppercase tracking-[0.32em] text-cream-50/70">
                                                                          Contracting
                                                          </span>span>
                                            </Link>Link>
                                            <p className="mt-5 max-w-xs text-sm text-cream-50/70 leading-relaxed">
                                              {siteData.tagline}
                                            </p>p>
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                          <Link
                                                                            href="/booking"
                                                                            className="inline-flex items-center gap-2 rounded-full bg-cream-50 text-forest-950 px-5 py-2.5 text-sm font-semibold hover:bg-cream-200 transition-colors"
                                                                          >
                                                                          Book a Free Quote
                                                          </Link>Link>
                                                          <a
                                                                            href={`tel:${siteData.phoneTel}`}
                                                                            className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 text-cream-50 px-5 py-2.5 text-sm font-semibold hover:bg-cream-50 hover:text-forest-950 transition-colors"
                                                                          >
                                                                          Call Mungo
                                                          </a>a>
                                            </div>div>
                                </div>div>
                      
                        {/* Contact */}
                                <div className="md:col-span-3">
                                            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-cream-50/55">Contact</h3>h3>
                                            <ul className="mt-5 space-y-3 text-sm">
                                                          <li>
                                                                          <a
                                                                                              href={`tel:${siteData.phoneTel}`}
                                                                                              className="text-cream-50 hover:text-cream-200 transition-colors"
                                                                                            >
                                                                            {siteData.phoneDisplay}
                                                                          </a>a>
                                                          </li>li>
                                                          <li>
                                                                          <a
                                                                                              href={`mailto:${siteData.email}`}
                                                                                              className="text-cream-50 hover:text-cream-200 transition-colors break-all"
                                                                                            >
                                                                            {siteData.email}
                                                                          </a>a>
                                                          </li>li>
                                                          <li className="text-cream-50/70">{siteData.area}</li>li>
                                                          <li className="text-cream-50/70">Mon–Sat · By appointment</li>li>
                                            </ul>ul>
                                </div>div>
                      
                        {/* Services */}
                                <div className="md:col-span-2">
                                            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-cream-50/55">Services</h3>h3>
                                            <ul className="mt-5 space-y-3 text-sm">
                                              {footerServices.map((s) => (
                          <li key={s}>
                                            <Link
                                                                  href="/#services"
                                                                  className="text-cream-50/85 hover:text-cream-50 transition-colors"
                                                                >
                                              {s}
                                            </Link>Link>
                          </li>li>
                        ))}
                                            </ul>ul>
                                </div>div>
                      
                        {/* Navigation */}
                                <div className="md:col-span-3">
                                            <h3 className="font-display text-xs uppercase tracking-[0.28em] text-cream-50/55">Site</h3>h3>
                                            <ul className="mt-5 space-y-3 text-sm">
                                              {footerNav.map((n) => (
                          <li key={n.href}>
                                            <Link
                                                                  href={n.href}
                                                                  className="text-cream-50/85 hover:text-cream-50 transition-colors"
                                                                >
                                              {n.label}
                                            </Link>Link>
                          </li>li>
                        ))}
                                            </ul>ul>
                                </div>div>
                      </div>div>
              
                      <div className="mt-16 pt-6 border-t border-cream-50/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream-50/55">
                                <div>© {year} GB Contracting. All rights reserved.</div>div>
                                <div className="flex items-center gap-5">
                                            <Link href="/privacy" className="hover:text-cream-50 transition-colors">
                                                          Privacy
                                            </Link>Link>
                                            <Link href="/terms" className="hover:text-cream-50 transition-colors">
                                                          Terms
                                            </Link>Link>
                                            <span>Taunton, Somerset</span>span>
                                </div>div>
                      </div>div>
              </div>div>
        </footer>footer>
      );
}
</footer>
