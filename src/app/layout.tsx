import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bathroom, Kitchen & Home Remodeling | Hudson Valley Contracting Group",
  description:
    "Hudson Valley's trusted contractor for bathroom remodels, kitchen renovations, basement finishing, and home additions. Quality craftsmanship, transparent pricing.",
  openGraph: {
    title: "Bathroom, Kitchen & Home Remodeling | Hudson Valley Contracting Group",
    description:
      "Hudson Valley's trusted contractor for bathroom remodels, kitchen renovations, basement finishing, and home additions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
