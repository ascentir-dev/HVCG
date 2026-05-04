import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { ServiceCTA } from "@/components/ServiceCTA";
import { FinancingBanner } from "@/components/FinancingBanner";
import { CheckIcon } from "@/components/icons";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kitchen Remodeling in Hudson Valley, NY",
  description: "Custom kitchen remodeling by HVCG — cabinetry, countertops, islands, and full gut renovations across Orange, Ulster & Dutchess Counties. Free estimates.",
  openGraph: { title: "Kitchen Remodeling Hudson Valley | HVCG", url: "https://hvcg.com/services/kitchens" },
  alternates: { canonical: "https://hvcg.com/services/kitchens" },
};

const FEATURES = [
  { title: "Custom Cabinetry", desc: "Semi-custom and fully custom cabinet lines in every style — from shaker to contemporary. Soft-close hardware, pull-out shelves, and organized interiors standard." },
  { title: "Countertops & Stone", desc: "Quartz, granite, marble, and butcher block fabricated and installed by our in-house team. We template, cut, and install to exact tolerances." },
  { title: "Kitchen Islands", desc: "Freestanding and structural islands with seating, storage, and prep space. We handle all electrical, plumbing, and structural requirements." },
  { title: "Lighting Design", desc: "Layered lighting plans that combine under-cabinet task lighting, recessed ceiling lights, and statement pendants to make your kitchen shine day and night." },
  { title: "Appliance Integration", desc: "Built-in refrigerators, dishwashers, and range hoods seamlessly integrated into your cabinetry for a clean, cohesive look. We handle all connections." },
  { title: "Flooring & Tile", desc: "Hardwood, LVP, ceramic, and porcelain tile installed with precision. We prep subfloors properly so your new floor lasts for decades." },
];

const PROCESS = [
  { step: "01", title: "Design Consultation", desc: "We visit your home, take measurements, discuss your vision and budget, and provide a detailed written estimate." },
  { step: "02", title: "Material Selection", desc: "Tour our showroom network to choose cabinets, countertops, tile, and fixtures. Our designer guides every decision." },
  { step: "03", title: "Professional Installation", desc: "Our certified crews handle demolition, rough-in work, and every finish trade — start to finish, on schedule." },
  { step: "04", title: "Final Walkthrough", desc: "We inspect every detail together and don't consider the job done until you're fully satisfied." },
];

const FAQS = [
  { question: "How long does a kitchen remodel take?", answer: "A full kitchen renovation typically takes 6–10 weeks from demo to completion. Smaller cosmetic refreshes (new countertops, cabinet refacing, backsplash) can be done in 2–4 weeks. Your project manager will give you a detailed timeline at the start." },
  { question: "How much does a kitchen remodel cost in Hudson Valley?", answer: "Kitchen remodel costs in our area typically range from $20,000 for a modest refresh to $80,000+ for a full gut renovation with custom cabinetry and premium appliances. We provide detailed written estimates so there are no surprises." },
  { question: "Do we need to move out during the renovation?", answer: "Most homeowners stay in their homes during a kitchen remodel. We set up a temporary kitchen area (microwave, coffee maker, mini fridge) and maintain a clean, contained work zone. For large projects, we can discuss options." },
  { question: "What's the difference between cabinet refacing and replacement?", answer: "Refacing replaces only the doors, drawer fronts, and veneer while keeping your existing cabinet boxes — it's faster and less expensive, typically $5,000–$15,000. Full replacement installs new cabinet boxes and is ideal when your layout needs to change or the existing boxes are damaged." },
  { question: "Do you pull permits for kitchen remodels?", answer: "Any project involving electrical, plumbing, or structural changes requires permits in NY. We handle all permit applications, inspections, and code compliance as part of your project — no extra charge." },
  { question: "What warranty do you provide on kitchen work?", answer: "We provide a 1-year labor warranty on all work we perform. Cabinet manufacturers typically offer 5–lifetime warranties on their products. Countertop fabricators also provide material warranties that we pass through to you in writing." },
];

export default function KitchensPage() {
  const schema = serviceSchema(
    "Kitchen Remodeling",
    "Custom kitchen remodeling including cabinetry, countertops, islands, flooring, and full gut renovations in Hudson Valley, NY.",
    "/services/kitchens"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        badge="Kitchen Remodeling"
        h1="Hudson Valley Kitchen Remodeling"
        subhead="From outdated and cramped to open, modern, and exactly how you've always imagined — we build kitchens that families love for decades."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Kitchen Remodeling", url: "/services/kitchens" }]}
        cta={{ label: "Get a Free Kitchen Estimate", href: "/contact" }}
        ctaSecondary={{ label: "View Our Process", href: "#process" }}
        backgroundImage="/images/hero-kitchen.jpg"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A complete kitchen transformation handled by specialists in every trade — no subcontractor juggling required.</p>
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

      <section id="process" className="bg-[oklch(0.96_0.02_263)] py-16">
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

      <FAQSection faqs={FAQS} heading="Kitchen Remodeling FAQ" />

      <ServiceCTA heading="Ready for a Kitchen You'll Love?" subhead="Request your free, no-obligation in-home consultation. We'll measure, discuss your vision, and provide a written estimate within 48 hours." />
    </>
  );
}
