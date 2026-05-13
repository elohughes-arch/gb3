import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";

// Google-fonts self-hosted via next/font
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-playfair",
});

export const viewport: Viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export const metadata: Metadata = {
    title: {
      default: "GB Contracting – Premium Construction Services",
          template: "%s | GB Contracting",
    },
    description:
          "High-end residential & commercial construction with modern glassmorphic UI.",
    keywords: [
          "construction",
          "contracting",
          "glassmorphism",
          "neumorphism",
          "GB Contracting",
        ],
    openGraph: {
          title: "GB Contracting – Premium Construction Services",
          description:
                  "High-end residential & commercial construction with modern UI design.",
          url: "https://gbc-contracting.vercel.app",
          siteName: "GB Contracting",
          images: [
            {
                      url: "/og-image.jpg",
                      width: 1200,
                      height: 630,
                      alt: "GB Contracting hero",
            },
                ],
          locale: "en_US",
          type: "website",
    },
    twitter: {
          card: "summary_large_image",
          title: "GB Contracting – Premium Construction Services",
          description:
                  "High-end residential & commercial construction with modern UI design.",
          images: ["/og-image.jpg"],
    },
    robots: "index, follow",
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
          <html
                  lang="en"
                  className={`${inter.variable} ${playfair.variable}`}
                >
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                </head>head>
          
                <body className="bg-surface light:bg-white dark:bg-surface-dark min-h-screen font-sans antialiased">
                        <a
                                    href="#main-content"
                                    className="sr-only focus:not-sr-only bg-teal-500 text-white p-2 rounded absolute left-4 top-4 z-50"
                                  >
                                  Skip to main content
                        </a>a>
                        <Nav />
                        <main id="main-content" className="relative">
                          {children}
                        </main>main>
                </body>body>
          </html>html>
        );
}
</html>
