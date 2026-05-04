import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { ServiceCTA } from "@/components/ServiceCTA";
import { FinancingBanner } from "@/components/FinancingBanner";
import { CheckIcon } from "@/components/icons";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Home Additions in Hudson Valley, NY",
  description: "Custom home addition contractors serving Orange, Ulster & Dutchess Counties. Room additions, second stories, sunrooms, and in-law suites. Free estimates.",
  openGraph: { title: "Home Additions Hudson Valley | HVCG", url: "https://www.hudsonvalleycontractinggroup.com/services/additions" },
  alternates: { canonical: "https://www.hudsonvalleycontractinggroup.com/services/additions" },
};

const FEATURES = [
  { title: "Room Additions", desc: "Expand your living room, add a bedroom, or build out a dedicated office — seamlessly integrated into your home's existing footprint and style." },
  { title: "Second Story Additions", desc: "Double your square footage by adding a full second story. We handle all structural engineering, permits, and interior-exterior integration." },
  { title: "Sunrooms & Screen Rooms", desc: "Year-round sunrooms with insulated roofs, full electrical, and HVAC connections — or three-season screen rooms that bring the outdoors in." },
  { title: "Garage Additions", desc: "Attached or detached garages with finished interiors, proper drainage, electrical, and curb appeal that matches your home's architecture." },
  { title: "In-Law Suites", desc: "Self-contained living spaces with bedroom, bathroom, kitchenette, and separate entrance — designed for privacy and code compliance." },
  { title: "Bump-Outs", desc: "Small footprint additions (2–10 ft) that create meaningful space — expanded dining rooms, larger master baths, or extra kitchen square footage." },
];

const PROCESS = [
  { step: "01", title: "Design & Engineering", desc: "We work with licensed structural engineers to design your addition and ensure it integrates properly with your existing structure." },
  { step: "02", title: "Permits & Approvals", desc: "We navigate local building departments, zoning boards, and historic districts on your behalf to get all approvals in place." },
  { step: "03", title: "Foundation & Framing", desc: "New footings, foundation, and structural framing built to code and inspected at every stage by local building officials." },
  { step: "04", title: "Interior Finish", desc: "Insulation, drywall, flooring, trim, paint, electrical, and plumbing finishes matched to your existing home's style and quality." },
];

const FAQS = [
  { question: "How long does a home addition take?", answer: "Most home additions take 3–6 months from permit approval to completion. Second-story additions or projects requiring significant structural work can take 6–9 months. Weather delays during foundation and framing work also factor in. We provide a realistic schedule before any work begins." },
  { question: "What permits are required for a home addition?", answer: "Home additions require a full building permit plus separate permits for electrical, plumbing, and HVAC. In some municipalities, you may also need zoning board approval for setback variances. We handle every permit application and inspection coordination." },
  { question: "Do we need to move out during an addition?", answer: "In most cases, no. We create a physical barrier between the work zone and your living space to minimize dust and disruption. For second-story additions that require opening up your roof, we work as quickly as possible and use weatherization measures, but temporary relocation during the most intensive phase may be advisable." },
  { question: "What does a home addition cost per square foot?", answer: "Home additions in the Hudson Valley typically cost $200–$350 per square foot of new conditioned space, depending on scope, finishes, and site conditions. Sunrooms and unheated spaces cost less; full suites with full baths and custom finishes cost more. We provide detailed, itemized estimates." },
  { question: "Will a home addition affect my property taxes?", answer: "Yes — adding habitable square footage increases your home's assessed value, which will increase your property tax. In our area, this increase is typically 1–2% of the addition's cost annually. However, the increased home value and quality of life usually far outweigh the tax impact." },
  { question: "Do you coordinate structural engineering?", answer: "Yes. All home additions require structural engineering drawings stamped by a licensed PE. We work with trusted local structural engineers and include engineering coordination in our project management process — you won't need to find an engineer on your own." },
];

export default function AdditionsPage() {
  const schema = serviceSchema(
    "Home Additions",
    "Custom home addition contractors in Hudson Valley, NY — room additions, second stories, sunrooms, in-law suites, and bump-outs.",
    "/services/additions"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        badge="Home Additions"
        h1="Home Addition Contractors in Hudson Valley"
        subhead="Need more space? We design and build additions that look like they were always part of your home — from a simple bump-out to a full second story."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: "Home Additions", url: "/services/additions" }]}
        cta={{ label: "Get a Free Addition Estimate", href: "/contact" }}
        backgroundImage="/images/hero-addition.jpg"
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-3">Types of Additions We Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every addition is designed by our team and built by our crews — no juggling architects, engineers, and GCs separately.</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-10 text-center">Our Process</h2>
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

      <FAQSection faqs={FAQS} heading="Home Additions FAQ" />

      <ServiceCTA heading="Ready to Add On?" subhead="Free in-home consultation — we'll discuss your vision, assess your site, and provide a detailed written estimate." />
    </>
  );
}
