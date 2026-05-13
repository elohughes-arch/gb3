import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Inter_Tight } from "next/font/google";
import Nav from "./components/Nav";
import SplashScreen from "./components/SplashScreen";
import StickyMobileCTA from "./components/StickyMobileCTA";
import { siteData } from "./data/siteData";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const interTight = Inter_Tight({
    subsets: ["latin"],
    variable: "--font-inter-tight",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
    themeColor: "#0b1f15",
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://gbcontracting.co.uk"),
    title: {
      default: "GB Contracting | Tree Surgery & Land Clearance in Taunton",
          template: "%s | GB Contracting",
    },
    description:
          "GB Contracting provides tree surgery, land clearance, log splitting and outdoor contracting services across Taunton and surrounding areas. Book a free quote today.",
    keywords: [
          "tree surgery Taunton",
          "tree surgeon Taunton",
          "land clearance Taunton",
          "log splitting Taunton",
          "outdoor contracting Taunton",
          "GB Contracting",
        ],
    openGraph: {
          title: "GB Contracting | Tree Surgery & Land Clearance in Taunton",
          description:
                  "Tree surgery, land clearance, log splitting and outdoor contracting across Taunton and surrounding areas.",
          url: "https://gbcontracting.co.uk",
          siteName: "GB Contracting",
          images: [{ url: "/log-splitting.jpg", width: 1200, height: 630, alt: "GB Contracting at work" }],
          locale: "en_GB",
          type: "website",
    },
    robots: { index: true, follow: true },
    icons: {
          icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
          <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
                  <body className="min-h-screen bg-stone-50 text-charcoal-900 font-sans antialiased">
                          <SplashScreen />
                          <Nav />
                          <main id="main-content" className="relative">
                            {children}
                          </main>main>
                          <StickyMobileCTA phone={siteData.phone} />
                  </body>body>
          </html>html>
        );
}
</body>
