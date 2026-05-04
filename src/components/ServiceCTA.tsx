import { PhoneIcon, ArrowRightIcon } from "@/components/icons";
import { BUSINESS } from "@/lib/schema";

interface ServiceCTAProps {
  heading?: string;
  subhead?: string;
}

export function ServiceCTA({
  heading = "Ready to get started?",
  subhead = "Request your free, no-obligation consultation. We'll visit your home, discuss your vision, and provide a detailed written estimate.",
}: ServiceCTAProps) {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">{heading}</h2>
        <p className="text-white/70 mb-10 text-base font-light leading-relaxed max-w-xl mx-auto">{subhead}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-sm hover:bg-white/92 transition-all text-sm shadow-lg"
          >
            <PhoneIcon className="size-4" /> {BUSINESS.phone}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-medium px-8 py-4 rounded-sm hover:bg-white/10 hover:border-white/70 transition-all text-sm tracking-wide"
          >
            Request Free Consultation <ArrowRightIcon className="size-4" />
          </a>
        </div>
        <p className="text-white/35 text-xs mt-8 tracking-wide">Mon–Fri 8am–6pm · Sat 9am–4pm · Orange, Ulster &amp; Dutchess Counties</p>
      </div>
    </section>
  );
}
