import { PhoneIcon } from "@/components/icons";

export function CTASection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
          Let&apos;s Build Something Great
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to get started?</h2>
        <p className="text-white/80 mb-10 text-lg">
          Your free estimate is one call away. No pressure, no obligation — just an honest conversation about your project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18457285247"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-sm hover:bg-white/90 transition"
          >
            <PhoneIcon className="size-5" />
            (845) 728-5247
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-sm hover:bg-white/10 transition uppercase tracking-wide text-sm"
          >
            Request Estimate Online
          </a>
        </div>

        <p className="text-white/50 text-xs mt-8">
          Mon–Fri: 8:00 AM – 6:00 PM · Sat: 9:00 AM – 4:00 PM · Hudson Valley, NY
        </p>
      </div>
    </section>
  );
}
