import Link from "next/link";
import { MapPinIcon, ClockIcon, PhoneIcon } from "@/components/icons";
import { BUSINESS } from "@/lib/schema";

const SERVICES = [
  { label: "Kitchen Remodeling", href: "/services/kitchens" },
  { label: "Bathroom Remodeling", href: "/services/bathrooms" },
  { label: "Basement Finishing", href: "/services/basements" },
  { label: "Home Additions", href: "/services/additions" },
  { label: "Whole-Home Renovations", href: "/services/whole-home" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const RESOURCES = [
  { label: "Free Estimate", href: "/contact" },
  { label: "Financing Options", href: "/financing" },
  { label: "Service Areas", href: "/about#service-area" },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.08_263)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo + tagline */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-black tracking-tight">HV</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-white tracking-tight leading-none">Hudson Valley</span>
              <span className="text-[9px] font-semibold text-white/50 uppercase tracking-[0.15em] mt-0.5">
                Contracting Group
              </span>
            </div>
          </div>
          <p className="text-sm text-white/60 max-w-xs mt-3 leading-relaxed">
            Full-service residential remodeling since 2009. Proudly serving Orange, Ulster &amp; Dutchess Counties, NY.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { label: "FB", href: "#" },
              { label: "IG", href: "#" },
              { label: "LI", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white/70 hover:text-white text-xs font-bold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Services</p>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/70 hover:text-white transition">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Company</p>
            <ul className="space-y-2">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-white/70 hover:text-white transition">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 mt-6">Resources</p>
            <ul className="space-y-2">
              {RESOURCES.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm text-white/70 hover:text-white transition">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Contact</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPinIcon className="mt-0.5 shrink-0 text-white/40 size-4" />
                <span>Serving Hudson Valley, NY<br />
                  <span className="text-white/50 text-xs">Orange · Ulster · Dutchess Counties</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <PhoneIcon className="shrink-0 text-white/40 size-4" />
                <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-white transition">{BUSINESS.phone}</a>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <ClockIcon className="mt-0.5 shrink-0 text-white/40 size-4" />
                <span>Mon–Fri: 8am – 6pm<br />Sat: 9am – 4pm</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Cities We Serve</p>
            <p className="text-xs text-white/50 leading-relaxed">
              {BUSINESS.cities.join(" · ")}
            </p>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-white/10 pt-6 pb-4">
          <p className="text-xs text-white/40 text-center">
            Licensed &amp; Insured General Contractor · NY License #HIC-XXXXXX · Serving Hudson Valley Since 2009
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Hudson Valley Contracting Group. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/35">
            <a href="/privacy" className="hover:text-white/70 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/70 transition">Terms of Service</a>
            <a href="/sitemap.xml" className="hover:text-white/70 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
