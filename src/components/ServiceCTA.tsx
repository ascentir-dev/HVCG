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
    <section className="bg-primary text-white py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-black mb-3">{heading}</h2>
        <p className="text-white/80 mb-8 text-base">{subhead}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS.phoneTel}`} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-sm hover:bg-white/90 transition text-sm">
            <PhoneIcon className="size-4" /> {BUSINESS.phone}
          </a>
          <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-3.5 rounded-sm hover:bg-white/10 transition text-sm uppercase tracking-wide">
            Request Free Consultation <ArrowRightIcon className="size-4" />
          </a>
        </div>
        <p className="text-white/50 text-xs mt-6">Mon–Fri 8am–6pm · Sat 9am–4pm · Serving Orange, Ulster &amp; Dutchess Counties</p>
      </div>
    </section>
  );
}
