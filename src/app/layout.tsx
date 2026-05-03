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
  title: "Bathrooms, Windows, Floors, & Doors | West Shore Home",
  description:
    "Transform your home with a trusted name in home improvement projects. Affordable financing, technology-driven accuracy, and no money down with approved credit.",
  openGraph: {
    title: "Bathrooms, Windows, Floors, & Doors | West Shore Home",
    description:
      "Transform your home with a trusted name in home improvement projects.",
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
