import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hudsonvalleycontractinggroup.com"),
  title: {
    default: "Home Remodeling in Hudson Valley NY | Hudson Valley Contracting Group",
    template: "%s | Hudson Valley Contracting Group",
  },
  description:
    "Hudson Valley Contracting Group — full-service residential remodeling serving Orange, Ulster & Dutchess Counties, NY. Kitchens, bathrooms, basements, additions & whole-home renovations.",
  keywords: [
    "kitchen remodeling Hudson Valley",
    "bathroom remodeling Hudson Valley",
    "whole home renovation Hudson Valley",
    "home additions Hudson Valley NY",
    "basement finishing Hudson Valley",
    "home remodeling contractor Hudson Valley",
    "home renovation financing Hudson Valley",
    "historic home renovation Hudson Valley",
  ],
  openGraph: {
    type: "website",
    siteName: "Hudson Valley Contracting Group",
    locale: "en_US",
    images: [{ url: "/images/hero-background.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero-background.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.hudsonvalleycontractinggroup.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
