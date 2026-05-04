import { ArrowRightIcon } from "@/components/icons";

interface FinancingBannerProps {
  variant?: "dark" | "light";
}

export function FinancingBanner({ variant = "dark" }: FinancingBannerProps) {
  const isDark = variant === "dark";
  return (
    <section className={isDark ? "wsh-navy-gradient py-8" : "bg-[oklch(0.96_0.02_263)] py-8 border-y border-[oklch(0.90_0.01_263)]"}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className={`text-lg md:text-xl font-black mb-1 ${isDark ? "text-white" : "text-primary"}`}>
            Flexible Financing Available
          </p>
          <p className={`text-sm ${isDark ? "text-white/80" : "text-gray-600"}`}>
            Build your dream home now, pay over time — get pre-qualified in minutes with no impact to your credit score.
          </p>
        </div>
        <a
          href="/financing"
          className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-wide whitespace-nowrap transition flex-shrink-0 ${
            isDark
              ? "bg-white text-primary hover:bg-white/90"
              : "bg-primary text-white hover:opacity-90"
          }`}
        >
          Explore Financing <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}
