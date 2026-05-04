"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { BUSINESS } from "@/lib/schema";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={`tel:${BUSINESS.phoneTel}`}
        className="flex items-center gap-2 bg-white text-primary border-2 border-primary font-bold text-sm px-4 py-3 rounded-full shadow-xl hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap"
        aria-label="Call us"
      >
        <PhoneIcon className="size-4" />
        <span className="hidden sm:inline">{BUSINESS.phone}</span>
        <span className="sm:hidden">Call</span>
      </a>
      <Link
        href="/contact"
        className="bg-primary text-white font-bold text-sm px-5 py-3 rounded-full shadow-xl hover:opacity-90 transition-opacity text-center whitespace-nowrap"
      >
        Free Estimate
      </Link>
    </div>
  );
}
