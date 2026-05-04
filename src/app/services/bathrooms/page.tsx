import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { ServiceCTA } from "@/components/ServiceCTA";
import { FinancingBanner } from "@/components/FinancingBanner";
import { CheckIcon } from "@/components/icons";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Hudson Valley, NY",
  description: "Expert bathroom remodeling — walk-in showers, soaking tubs, custom tile, and full renovations in Orange, Ulster & Dutchess Counties. Free estimates.",
  openGraph: { title: "Bathroom Remodeling Hudson Valley | HVCG", url: "https://hvcg.com/services/bathrooms" },
  alternates: { canonical: "https://hvcg.com/services/bathrooms" },
};

const FEATURES = [
  { title: "Walk-In Showers", desc: "Custom tile showers with frameless glass enclosures, built-in niches, and rain heads. We waterproof every shower to last a lifetime." },
  { title: "Soaking & Freestanding Tubs", desc: "Freestanding soakers, drop-in tubs, and whirlpool options installed with proper structural support and plumbing rough-in." },
  { title: "Tile & Stone Work", desc: "Large-format porcelain, natural stone, subway tile, and mosaics — meticulously set, grouted, and sealed by experienced tile craftsmen." },
  { title: "Vanity & Storage Solutions", desc: "Custom and semi-custom vanities with soft-close hardware, double-sink configurations, and integrated storage designed for your space." },
  { title: "Heated Floors", desc: "Electric radiant floor heating installed under tile for that spa-like warmth. We handle all electrical connections to code." },
  { title: "Accessibility Features", desc: "Walk-in tubs, grab bars, curbless showers, and ADA-compliant fixtures for aging-in-place renovations done without sacrificing style." },
];

const PROCESS = [
  { step: "01", title: "In-Home Consultation", desc: "We assess your existing bathroom, discuss your vision, and provide a detailed written estimate at no charge." },
  { step: "02", title: "Design & Selection", desc: "Choose from our curated selection of tile, fixtures, vanities, and hardware with guidance from our design team." },
  { step: "03", title: "Demo & Rough-In", desc: "Precise demolition followed by plumbing and electrical rough-in work, waterproofing, and backer board installation." },
  { step: "04", title: "Finish & Walkthrough", desc: "Tile setting, fixture installation, vanity and trim work — finished to perfection and inspected with you present." },
];

const FAQS = [
  { question: "How long does a bathroom remodel take?", answer: "A full gut renovation of a standard bathroom typically takes 3–6 weeks. Master baths with custom tile and features can run 6–8 weeks. Cosmetic updates (new vanity, fixtures, paint) can often be completed in 1–2 weeks." },
  { question: "How much does a bathroom remodel cost?", answer: "Bathroom remodels in the Hudson Valley typically range from $8,000 for a cosmetic refresh to $40,000+ for a high-end master suite with custom tile and premium fixtures. We provide a detailed written estimate after your free in-home consultation." },
  { question: "Can we use our other bathroom during the remodel?", answer: "In most cases, yes. We work on one bathroom at a time, so your remaining bathrooms stay functional throughout. For single-bathroom homes, we discuss scheduling strategies to minimize disruption." },
  { question: "Do bathroom remodels require permits?", answer: "Permits are required for any work involving plumbing, electrical, or structural changes. We handle all permit applications, inspections, and final sign-offs as part of your project." },
  { question: "Can you help us choose tile and fixtures?", answer: "Absolutely. We work with several showroom partners in the Hudson Valley and guide you through selection to ensure your choices work together aesthetically and within your budget. Our project manager coordinates every selection." },
  { question: "What does the waterproofing process look like?", answer: "All shower walls and floors receive a membrane waterproofing system (Schluter KERDI or equivalent) before any tile is set. This is a non-negotiable part of our process — it's what separates a bathroom that holds up for 20 years from one that fails in five." },
];

export default function BathroomsPage() {
  const schema = serviceSchema(
    "Bathroom Remodeling",
    "Expert bathroom remodeling including walk-in showers, soaking tubs, custom tile, vanities, and heated floors in Hudson Valley, NY.",
    "/services/bathrooms"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        badge="Bathroom Remodeling"
        h1="Bathroom Remodeling in Hudson Valley, NY"
        subhead="Spa-inspired master baths to practical family bathrooms — we deliver tile work, fixtures, and custom designs that stand up to daily life."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Bathroom Remodeling", url: "/services/bathrooms" }]}
        cta={{ label: "Get a Free Bathroom Estimate", href: "/contact" }}
        backgroundImage="/images/hero-bathroom.jpg"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every bathroom project is managed from design through final inspection by a dedicated project manager — no surprises, no subcontractor juggling.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-lg shadow-sm p-6">
                <div className="flex items-start gap-3">
                  <CheckIcon className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.96_0.02_263)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 text-center">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <p className="text-3xl font-black text-primary mb-2">{p.step}</p>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinancingBanner variant="light" />

      <FAQSection faqs={FAQS} heading="Bathroom Remodeling FAQ" />

      <ServiceCTA heading="Ready to Transform Your Bathroom?" subhead="Schedule a free in-home consultation and get a detailed written estimate — no pressure, no obligation." />
    </>
  );
}
