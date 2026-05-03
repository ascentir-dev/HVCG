import Image from "next/image";
import { MapPinIcon, ClockIcon, PhoneIcon } from "@/components/icons";

const productLinks = ["Bathrooms", "Windows", "Doors", "Flooring"];

const companyLinks = [
  "Customer Service",
  "About",
  "FAQ",
  "Reviews",
  "Careers",
  "Technology",
];

const resourceLinks = [
  "Blog",
  "Locations",
  "Affiliate Program",
  "Penn State Athletics Partnership",
];

const socialLinks = [
  {
    href: "https://x.com/westshorehome",
    src: "/images/social-twitter.svg",
    alt: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/westshorehome",
    src: "/images/social-linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/WestShoreHomeImprovementandRemodelingLLC/",
    src: "/images/social-facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.pinterest.com/westshorehome/",
    src: "/images/social-pinterest.svg",
    alt: "Pinterest",
  },
  {
    href: "https://www.instagram.com/westshorehome/",
    src: "/images/social-instagram.svg",
    alt: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.08_263)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top area: Logo + Social */}
        <Image
          src="/images/logo-footer.png"
          alt="West Shore Home"
          width={180}
          height={60}
          className="mb-6"
        />

        <div className="flex gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={24}
                height={24}
                className="opacity-60 hover:opacity-100 transition brightness-0 invert"
              />
            </a>
          ))}
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 — Products */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
              Products
            </p>
            <ul>
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
              Company
            </p>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
              Resources
            </p>
            <ul>
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/80 hover:text-white transition block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
              Contact Us
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/80">
                <MapPinIcon className="mt-0.5 shrink-0 text-white/50" />
                <span>3 Crossgate Drive, Mechanicsburg, PA 17050</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <PhoneIcon className="shrink-0 text-white/50" />
                <a href="tel:+17176974033" className="hover:text-white transition">
                  (717) 697-4033
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <ClockIcon className="mt-0.5 shrink-0 text-white/50" />
                <span>
                  Mon–Sat: 8:00 AM – 8:00 PM EST
                  <br />
                  Sun: 9:30 AM – 5:00 PM EST
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © 2025 West Shore Home. All rights reserved. | PA HIC Registration: PA012954
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-white/80 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/80 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white/80 transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
