import { MapPinIcon, ClockIcon, PhoneIcon } from "@/components/icons";

const serviceLinks = ["Bathroom Remodeling", "Kitchen Renovation", "Basement Finishing", "Home Additions"];

const companyLinks = ["About Us", "Our Process", "Portfolio", "Reviews", "Careers", "Contact"];

const resourceLinks = ["Free Estimate", "Financing Options", "Project Gallery", "FAQ", "Blog", "Service Areas"];

const socialLinks = [
  { href: "#", src: "/images/social-facebook.svg", alt: "Facebook" },
  { href: "#", src: "/images/social-instagram.svg", alt: "Instagram" },
  { href: "#", src: "/images/social-linkedin.svg", alt: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.08_263)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo */}
        <div className="mb-8">
          <div className="flex flex-col leading-none mb-2">
            <span className="text-2xl font-black tracking-tight">HVCG</span>
            <span className="text-xs font-semibold text-white/60 uppercase tracking-widest mt-0.5">
              Hudson Valley Contracting Group
            </span>
          </div>
          <p className="text-sm text-white/60 max-w-xs mt-3">
            Quality home remodeling for the Hudson Valley since 2009.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
              className="size-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white/70 hover:text-white text-xs font-bold"
            >
              {link.alt[0]}
            </a>
          ))}
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Services</p>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/75 hover:text-white transition block mb-2">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Company</p>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/75 hover:text-white transition block mb-2">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Resources</p>
            <ul>
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/75 hover:text-white transition block mb-2">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Contact</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/75">
                <MapPinIcon className="mt-0.5 shrink-0 text-white/40 size-4" />
                <span>Hudson Valley, New York</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/75">
                <PhoneIcon className="shrink-0 text-white/40 size-4" />
                <a href="tel:+18455550123" className="hover:text-white transition">(845) 555-0123</a>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/75">
                <ClockIcon className="mt-0.5 shrink-0 text-white/40 size-4" />
                <span>
                  Mon–Fri: 8:00 AM – 6:00 PM<br />
                  Sat: 9:00 AM – 4:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 Hudson Valley Contracting Group. All rights reserved. · Licensed &amp; Insured · NY License #HIC-XXXXXX
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
