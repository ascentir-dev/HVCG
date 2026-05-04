"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PhoneIcon, MenuIcon, CloseIcon, ChevronDownIcon } from "@/components/icons";
import { BUSINESS } from "@/lib/schema";

const SERVICES = [
  { label: "Kitchen Remodeling", href: "/services/kitchens" },
  { label: "Bathroom Remodeling", href: "/services/bathrooms" },
  { label: "Basement Finishing", href: "/services/basements" },
  { label: "Home Additions", href: "/services/additions" },
  { label: "Whole-Home Renovations", href: "/services/whole-home" },
] as const;

const NAV = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services", hasDropdown: true },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "FINANCING", href: "/financing" },
  { label: "ABOUT", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white border-b transition-all duration-300",
      scrolled ? "border-gray-200 shadow-md" : "border-transparent shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn("flex items-center justify-between transition-all duration-300", scrolled ? "h-14" : "h-16")}>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-primary tracking-tight">HVCG</span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                Hudson Valley Contracting Group
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {NAV.map((item) =>
              "hasDropdown" in item && item.hasDropdown ? (
                <div key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wide",
                      "text-gray-700 hover:text-primary transition-colors duration-150"
                    )}
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <ChevronDownIcon className={cn("size-3.5 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-1.5 z-50">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[oklch(0.96_0.02_263)] hover:text-primary transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-xs font-semibold text-primary hover:bg-[oklch(0.96_0.02_263)] transition-colors uppercase tracking-wide"
                        >
                          All Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[12px] font-semibold uppercase tracking-wide text-gray-700 hover:text-primary transition-colors duration-150"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              <PhoneIcon className="size-4" />
              <span>{BUSINESS.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-primary text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {NAV.map((item) =>
              "hasDropdown" in item && item.hasDropdown ? (
                <div key={item.href}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-3 text-[13px] font-semibold uppercase tracking-wide text-gray-700"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDownIcon className={cn("size-4 text-primary transition-transform", mobileServicesOpen && "rotate-180")} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-gray-600 hover:text-primary transition-colors py-1.5"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[13px] font-semibold uppercase tracking-wide text-gray-700 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-3">
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                <PhoneIcon className="size-4" /><span>{BUSINESS.phone}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center bg-primary text-white text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded-sm hover:opacity-90 transition-opacity"
              >
                Free Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
