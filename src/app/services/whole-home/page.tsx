import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { ServiceCTA } from "@/components/ServiceCTA";
import { FinancingBanner } from "@/components/FinancingBanner";
import { CheckIcon } from "@/components/icons";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Whole-Home Renovations in Hudson Valley, NY",
  description: "Complete whole-home renovation experts in Hudson Valley. Kitchen, bath, open floor plans, historic restoration, and total home transformations. Free estimates.",
  openGraph: { title: "Whole-Home Renovations Hudson Valley | HVCG", url: "https://hvcg.com/services/whole-home" },
  alternates: { canonical: "https://hvcg.com/services/whole-home" },
};

const FEATURES = [
  { title: "Kitchen & Bath Packages", desc: "Bundled kitchen and bathroom renovations coordinated under one contract — better scheduling, better pricing, and one point of contact throughout." },
  { title: "Historic Home Restoration", desc: "Specialized experience with the Hudson Valley's older housing stock — we preserve original character while updating systems to modern standards." },
  { title: "Open Floor Plan Conversion", desc: "Structural wall removal, LVL beam installation, and full interior reconfiguration to create the open, connected living space you've been envisioning." },
  { title: "Electrical & Plumbing Upgrades", desc: "Panel upgrades, rewiring, plumbing line relocations, and water heater replacements coordinated alongside your cosmetic renovation." },
  { title: "HVAC Integration", desc: "New ductwork runs, mini-split installations, and thermostat upgrades coordinated with your renovation so walls and ceilings are opened once." },
  { title: "Interior Design Coordination", desc: "We work alongside interior designers or provide basic design guidance to ensure cohesive material selections across your entire home." },
];

const PROCESS = [
  { step: "01", title: "Whole-Home Assessment", desc: "We walk every room, document existing conditions, and build a comprehensive scope of work with phasing options to fit your budget and timeline." },
  { step: "02", title: "Design & Material Selection", desc: "Coordinated selections for every room — cabinets, countertops, tile, flooring, fixtures, and paint — so your home tells one cohesive story." },
  { step: "03", title: "Phased or Full Execution", desc: "We can renovate your entire home at once or in phases — whichever minimizes disruption and fits your budget. Both approaches deliver the same quality." },
  { step: "04", title: "Quality Inspection & Handoff", desc: "Room-by-room final inspection, punch list completion, and a comprehensive warranty walkthrough before we hand you the keys." },
];

const FAQS = [
  { question: "How long does a whole-home renovation take?", answer: "A complete whole-home renovation typically takes 4–9 months depending on scope. Projects involving structural changes, multiple bathrooms, and kitchen work run toward the longer end. We build a detailed phased schedule before any work begins so you know exactly what to expect." },
  { question: "Do we need to move out during a whole-home renovation?", answer: "For comprehensive renovations touching every room, temporary relocation is usually the most practical approach. For phased projects, we can often keep portions of your home livable. We'll discuss the specifics at your consultation and help you plan accordingly." },
  { question: "Can we do it in phases to spread out the cost?", answer: "Absolutely. Many of our clients choose to phase their renovations over 2–3 years, starting with the kitchen and primary bathroom, then finishing the rest of the home. We design the entire project upfront so each phase integrates seamlessly with the next." },
  { question: "Do you have experience with historic homes?", answer: "Yes — the Hudson Valley has an extraordinary stock of historic homes, and we've renovated dozens of them. We understand how to work with plaster walls, older framing, historic windows, and local landmark review requirements. We respect what makes these homes special." },
  { question: "How do you handle permits for a whole-home project?", answer: "A whole-home renovation typically requires a master building permit plus individual mechanical permits for electrical, plumbing, and HVAC. We manage every permit application, inspection, and code compliance requirement — it's included in our project management." },
  { question: "Do you coordinate interior design, or do we need to hire separately?", answer: "We provide basic design guidance — material coordination, spatial planning, and finish selection support. For clients who want full interior design services, we have relationships with local designers we can recommend and integrate with our build process seamlessly." },
];

export default function WholeHomePage() {
  const schema = serviceSchema(
    "Whole-Home Renovations",
    "Complete whole-home renovation services in Hudson Valley, NY — kitchen and bath packages, historic restoration, open floor plans, and total home transformations.",
    "/services/whole-home"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        badge="Whole-Home Renovations"
        h1="Whole-Home Renovation Experts"
        subhead="Complete home transformations, top to bottom — one contractor, every trade, zero subcontractor juggling. We do it right the first time."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Whole-Home Renovations", url: "/services/whole-home" }]}
        cta={{ label: "Start Your Renovation", href: "/contact" }}
        backgroundImage="/images/hero-whole-home.jpg"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">What We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">One contract. One team. Every trade. We coordinate the complexity so you don&apos;t have to.</p>
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

      <FAQSection faqs={FAQS} heading="Whole-Home Renovation FAQ" />

      <ServiceCTA heading="Ready for a Total Transformation?" subhead="Let&apos;s build your dream home together. Free in-home consultation — detailed written estimate within 48 hours." />
    </>
  );
}
