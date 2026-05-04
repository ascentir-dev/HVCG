import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CheckIcon } from "@/components/icons";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — Hudson Valley Remodeling Experts Since 2009",
  description: "Since 2009, HVCG has been transforming Hudson Valley homes. Licensed, insured, and trusted by hundreds of homeowners in Orange, Ulster & Dutchess Counties.",
  openGraph: { title: "About HVCG | Hudson Valley Contracting Group", url: "https://www.hudsonvalleycontractinggroup.com/about" },
  alternates: { canonical: "https://www.hudsonvalleycontractinggroup.com/about" },
};

const CAPABILITIES = [
  {
    title: "General Contracting",
    desc: "Full project management, scheduling, subcontractor coordination, permit management, and quality control — we own every outcome.",
  },
  {
    title: "Carpentry & Millwork",
    desc: "Custom cabinetry, architectural trim, built-in shelving, wainscoting, and finish carpentry executed by craftsmen with decades of experience.",
  },
  {
    title: "Tile & Stone",
    desc: "Kitchen backsplashes, shower tile, porcelain floors, and natural stone fabrication — set to exacting tolerances by experienced tile setters.",
  },
  {
    title: "Plumbing Rough & Finish",
    desc: "Fixture installation, drain relocation, supply line upgrades, and code-compliant rough-in work on every bathroom and kitchen project.",
  },
  {
    title: "Electrical Rough & Finish",
    desc: "Lighting plans, panel upgrades, recessed lighting, under-cabinet lighting, and smart home integration — all permitted and inspected.",
  },
  {
    title: "Painting & Finishing",
    desc: "Interior painting, drywall, texture matching, and wallcovering removal with meticulous prep work that makes every finish look flawless.",
  },
];

const COUNTIES: { name: string; cities: string[] }[] = [
  {
    name: "Orange County",
    cities: BUSINESS.cities.filter((c) =>
      ["Newburgh", "Middletown", "Goshen", "Warwick", "Monroe", "New Windsor", "Cornwall"].includes(c)
    ),
  },
  {
    name: "Ulster County",
    cities: BUSINESS.cities.filter((c) =>
      ["Kingston", "New Paltz", "Saugerties", "Woodstock"].includes(c)
    ),
  },
  {
    name: "Dutchess County",
    cities: BUSINESS.cities.filter((c) =>
      ["Poughkeepsie", "Beacon", "Hyde Park", "Rhinebeck", "Wappingers Falls"].includes(c)
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About HVCG"
        h1="Building Hudson Valley Homes Since 2009"
        subhead="Family-owned. Locally rooted. Premium craftsmanship on every project — from first estimate to final walkthrough."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
        cta={{ label: "Get a Free Estimate", href: "/contact" }}
      />

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">Our History</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hudson Valley Contracting Group was founded in 2009 by a master carpenter who believed Hudson Valley homeowners deserved better — better craftsmanship, more transparent pricing, and a contractor who actually showed up when they said they would.
                </p>
                <p>
                  What started as a small crew doing kitchen and bathroom work has grown into a full-service remodeling company with specialists in every trade: carpentry, tile, electrical, plumbing, and project management. But our values haven&apos;t changed.
                </p>
                <p>
                  We&apos;ve built or renovated over 500 homes across Orange, Ulster, and Dutchess Counties. We&apos;ve worked in historic Victorians in Kingston, mid-century ranches in Middletown, and new construction in Beacon. Every project gets the same level of care — as if it were our own home.
                </p>
                <p>
                  We&apos;re proud to be the contractor that Hudson Valley families call back for their next project — and refer to their friends and neighbors.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about-team.jpg"
                  alt="HVCG team working on a home remodeling project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "500+", label: "Projects Completed" },
                  { stat: "15+", label: "Years in Business" },
                  { stat: "3", label: "Counties Served" },
                  { stat: "4.9★", label: "Average Rating" },
                ].map((item) => (
                  <div key={item.label} className="bg-[oklch(0.96_0.02_263)] rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <AnimatedCounter value={item.stat} label={item.label} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything Under One Roof */}
      <section className="bg-[oklch(0.96_0.02_263)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">Our Capabilities</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-3">Everything Under One Roof</h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">One contractor. Every trade. No juggling multiple vendors, no finger-pointing when something goes wrong, no coordination headaches.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={((i % 6) + 1) as 1|2|3|4|5|6}>
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="flex items-start gap-3">
                    <CheckIcon className="size-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="service-area" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">Service Area</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-3">Proudly Serving the Hudson Valley</h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">We&apos;re a local company — our crews live and work in the same communities we build in. That makes a difference.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {COUNTIES.map((county) => (
              <div key={county.name} className="bg-[oklch(0.96_0.02_263)] rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{county.name}</h3>
                <ul className="space-y-1">
                  {county.cities.map((city) => (
                    <li key={city} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 rounded-lg h-72 flex items-center justify-center text-gray-400 text-sm border border-gray-200">
            Interactive service area map — coming soon
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="wsh-navy-gradient py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3 text-center">The HVCG Difference</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-10 text-center">Why Hudson Valley Homeowners Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "One Point of Contact", desc: "Your project manager is your single contact from estimate through final walkthrough. No runaround, no confusion." },
              { title: "Transparent Pricing", desc: "Written estimates, itemized contracts, and formal change orders. You always know exactly what you&apos;re paying for." },
              { title: "Licensed, Insured & Local", desc: "NY-licensed general contractor, fully insured, with crews who live in the communities we serve." },
              { title: "Post-Project Warranty", desc: "1-year labor warranty on all work. If something isn&apos;t right, we come back and make it right — no questions asked." },
            ].map((r) => (
              <div key={r.title} className="flex gap-4">
                <CheckIcon className="size-5 text-white/80 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">{r.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA heading="Ready to Start Your Project?" subhead="Call or contact us for a free in-home estimate. No pressure, no obligation — just honest answers and quality work." />
    </>
  );
}
