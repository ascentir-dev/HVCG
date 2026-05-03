"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { PhoneIcon, MenuIcon, CloseIcon } from "@/components/icons"

const NAV_ITEMS = [
  { label: "BATHROOMS", href: "#bathrooms" },
  { label: "WINDOWS", href: "#windows" },
  { label: "DOORS", href: "#doors" },
  { label: "FLOORING", href: "#flooring" },
  { label: "ABOUT", href: "#about" },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Main nav bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/content/wsh_logo_blue.webp"
              alt="West Shore Home"
              width={180}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] font-semibold uppercase tracking-wide",
                  "text-gray-700 hover:text-primary transition-colors duration-150"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: phone + CTA (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7176974033"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              <PhoneIcon className="size-4" />
              <span>(717) 697-4033</span>
            </a>
            <a
              href="#quote"
              className={cn(
                "inline-flex items-center justify-center",
                "bg-[oklch(0.26_0.10_263)] text-white",
                "text-xs font-semibold uppercase tracking-wider",
                "px-4 py-2 rounded-sm",
                "hover:opacity-90 transition-opacity"
              )}
            >
              SCHEDULE CONSULTATION
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <CloseIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-[13px] font-semibold uppercase tracking-wide",
                  "text-gray-700 hover:text-primary transition-colors duration-150"
                )}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:7176974033"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
              >
                <PhoneIcon className="size-4" />
                <span>(717) 697-4033</span>
              </a>
              <a
                href="#quote"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "inline-flex items-center justify-center",
                  "bg-[oklch(0.26_0.10_263)] text-white",
                  "text-xs font-semibold uppercase tracking-wider",
                  "px-4 py-3 rounded-sm w-full",
                  "hover:opacity-90 transition-opacity"
                )}
              >
                SCHEDULE CONSULTATION
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
