import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { ServiceCTA } from "@/components/ServiceCTA";
import { FinancingBanner } from "@/components/FinancingBanner";
import { CheckIcon } from "@/components/icons";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Basement Finishing in Hudson Valley, NY",
  description: "Transform your unfinished basement into usable living space — home theaters, in-law suites, home offices, and more. Serving Orange, Ulster & Dutchess Counties.",
  openGraph: { title: "Basement Finishing Hudson Valley | HVCG", url: "https://hvcg.com/services/basements" },
  alternates: { canonical: "https://hvcg.com/services/basements" },
};

const FEATURES = [
  { title: "Home Theater", desc: "Dedicated media rooms with acoustic wall treatments, tiered seating platforms, recessed lighting, and full AV rough-in built to audiophile standards." },
  { title: "Home Office", desc: "Productive, professional workspace with proper lighting, built-in shelving, cable management, and sound insulation from the rest of the home." },
  { title: "In-Law Suite", desc: "Complete living suites with bedroom, bathroom, kitchenette, and separate entrance for multi-generational families — permitted and code-compliant." },
  { title: "Playroom & Recreation", desc: "Safe, durable spaces for kids and families — LVP flooring, padded walls, built-in storage, and bright lighting designed for active use." },
  { title: "Wet Bar & Entertainment Space", desc: "Custom wet bars with cabinetry, countertops, under-counter refrigeration, and plumbing rough-in — perfect for entertaining." },
  { title: "Egress Windows & Safety", desc: "Code-compliant egress window installation for bedrooms, plus waterproofing systems to keep your finished basement dry for the long term." },
];

const PROCESS = [
  { step: "01", title: "Site Assessment", desc: "We inspect your basement for moisture, ceiling height, structural elements, and existing mechanicals to plan the ideal layout." },
  { step: "02", title: "Design & Permits", desc: "We produce a full design plan, pull all necessary permits, and schedule required inspections before any work begins." },
  { step: "03", title: "Framing & Rough-In", desc: "Stud framing, insulation, electrical, plumbing, and HVAC rough-in work — all coordinated and completed before walls close up." },
  { step: "04", title: "Finish Work", desc: "Drywall, flooring, trim, lighting, and fixtures installed to the same standard as any room in your home." },
];

const FAQS = [
  { question: "Do I need egress windows for my basement bedroom?", answer: "Yes. New York State building code requires egress windows in any room designated as a sleeping area. An egress window must have a minimum net clear opening of 5.7 sq ft, minimum height of 24 inches, and minimum width of 20 inches. We handle all egress window installation and permitting." },
  { question: "Does my basement need waterproofing before finishing?", answer: "If your basement has any history of moisture intrusion, it must be addressed before finishing. We assess your specific situation and recommend the appropriate solution — from drainage improvements to interior membrane systems — before any framing begins." },
  { question: "What permits are required for a basement finish?", answer: "A building permit is required for any basement finishing project. Additional permits for electrical, plumbing, and HVAC work may also be required. We handle all permit applications and coordinate inspections through completion." },
  { question: "How long does a basement finish take?", answer: "Most basement finishing projects take 4–8 weeks depending on scope and size. Projects with full bathrooms, custom wet bars, or complex egress work run toward the longer end. Your project manager will provide a detailed schedule at the outset." },
  { question: "What's the minimum ceiling height for a finished basement?", answer: "New York State requires a minimum clear ceiling height of 7 feet for habitable rooms. We measure your existing height at the start and plan around any beam or duct obstructions. For tighter spaces, we can often lower mechanical runs or use creative ceiling treatments." },
  { question: "What return on investment can I expect from a finished basement?", answer: "Finished basements typically return 70–75% of their cost in added home value, and often higher in the Hudson Valley's competitive real estate market. Beyond ROI, you immediately gain usable square footage without the cost and disruption of an addition." },
];

export default function BasementsPage() {
  const schema = serviceSchema(
    "Basement Finishing",
    "Professional basement finishing and renovation including home theaters, in-law suites, home offices, and recreation rooms in Hudson Valley, NY.",
    "/services/basements"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        badge="Basement Finishing"
        h1="Basement Finishing & Renovation"
        subhead="Your basement is your home's biggest untapped asset. We turn unfinished concrete into beautiful, functional living space — permitted and built to last."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Basement Finishing", url: "/services/basements" }]}
        cta={{ label: "Get a Free Basement Estimate", href: "/contact" }}
        backgroundImage="/images/hero-basement.jpg"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">What We Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From simple recreation rooms to full in-law apartments, every basement project is designed and built to the same standard as your main living space.</p>
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

      <FAQSection faqs={FAQS} heading="Basement Finishing FAQ" />

      <ServiceCTA heading="Ready to Unlock Your Basement's Potential?" subhead="Free in-home consultation — we'll assess your space and provide a written estimate within 48 hours." />
    </>
  );
}
