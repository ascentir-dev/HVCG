import { cn } from "@/lib/utils";

export function OfferBanner() {
  return (
    <section className={cn("wsh-navy-gradient", "w-full py-4")}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-white text-center px-4">
        <p className="text-lg md:text-xl font-bold">
          Spring Special — 0% Financing for 18 Months on Any Project!
          <sup className="text-sm align-super">*</sup>
        </p>
        <p className="text-sm text-white/80">Offer Ends 6/30/26</p>
        <a
          href="#quote"
          className={cn(
            "bg-white text-primary font-bold px-6 py-2 rounded-sm text-sm uppercase tracking-wide",
            "hover:bg-white/90 transition"
          )}
        >
          Claim Offer
        </a>
      </div>
    </section>
  );
}
