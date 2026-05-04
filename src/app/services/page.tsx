import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Home Remodeling Services in Hudson Valley, NY",
  description: "Full-service residential remodeling — kitchens, bathrooms, basements, home additions, and whole-home renovations in Orange, Ulster & Dutchess Counties.",
  openGraph: { title: "Home Remodeling Services | HVCG", url: "https://www.hudsonvalleycontractinggroup.com/services" },
  alternates: { canonical: "https://www.hudsonvalleycontractinggroup.com/services" },
};

const SERVICES = [
  {
    emoji: "🍳",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into the heart of your home with custom cabinetry, premium countertops, and thoughtful layouts designed for how you actually live.",
    href: "/services/kitchens",
  },
  {
    emoji: "🛁",
    title: "Bathroom Remodeling",
    description: "From spa-inspired master baths to efficient guest bathrooms, we deliver tile work, fixtures, and custom vanities that combine beauty and function.",
    href: "/services/bathrooms",
  },
  {
    emoji: "🏠",
    title: "Basement Finishing",
    description: "Unlock the full potential of your home by converting unfinished basement space into a home theater, in-law suite, office, or recreation room.",
    href: "/services/basements",
  },
  {
    emoji: "➕",
    title: "Home Additions",
    description: "Need more space? We design and build room additions, second stories, sunrooms, and in-law suites that integrate seamlessly with your existing home.",
    href: "/services/additions",
  },
  {
    emoji: "🏡",
    title: "Whole-Home Renovations",
    description: "Complete home transformations from top to bottom — we coordinate every trade under one roof so your project runs on time and on budget.",
    href: "/services/whole-home",
  },
];

export default function ServicesPage() {
  const schema = serviceSchema(
    "Home Remodeling Services",
    "Full-service residential remodeling including kitchen, bathroom, basement, home additions, and whole-home renovations in Hudson Valley, NY.",
    "/services"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        badge="Our Services"
        h1="Expert Home Remodeling Services"
        subhead="From kitchen makeovers to whole-home transformations — one trusted contractor for every project in the Hudson Valley."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]}
        cta={{ label: "Get a Free Estimate", href: "/contact" }}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What We Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every project is different. Every homeowner&apos;s vision is unique. That&apos;s why we offer a complete range of remodeling services — all under one roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.href} className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow group">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>
                <Link href={s.href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.96_0.02_263)] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Why Choose HVCG?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { stat: "500+", label: "Projects Completed" },
              { stat: "15+", label: "Years in Business" },
              { stat: "3", label: "Counties Served" },
              { stat: "4.9★", label: "Average Rating" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-black text-primary">{item.stat}</p>
                <p className="text-sm text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
