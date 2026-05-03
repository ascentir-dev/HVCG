import { PhoneIcon } from "@/components/icons";

export function CTASection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">
          Let&apos;s Connect
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-4">Ready To Get Started?</h2>
        <p className="text-white/80 mb-10">
          Schedule your free consultation in 60 seconds. We&apos;ll bring the showroom to you.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+17176974033"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-sm hover:bg-white/90 transition"
          >
            <PhoneIcon className="size-5" />
            (717) 697-4033
          </a>
          <button
            type="button"
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-sm hover:bg-white/10 transition uppercase tracking-wide text-sm"
          >
            Schedule Online
          </button>
        </div>

        {/* Hours note */}
        <p className="text-white/60 text-xs mt-8">
          Mon–Sat: 8:00 AM – 8:00 PM EST | Sun: 9:30 AM – 5:00 PM EST
        </p>
      </div>
    </section>
  );
}
