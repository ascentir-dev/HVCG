import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Project Portfolio — Remodeling Gallery",
  description: "Browse HVCG's portfolio of kitchen, bathroom, basement, and home addition projects across Orange, Ulster & Dutchess Counties, NY.",
  openGraph: { title: "Portfolio | Hudson Valley Contracting Group", url: "https://hvcg.com/portfolio" },
  alternates: { canonical: "https://hvcg.com/portfolio" },
};

const CATEGORIES = ["All", "Kitchens", "Bathrooms", "Basements", "Additions", "Whole-Home"];

const PROJECTS = [
  { id: 1, category: "Kitchen", title: "Modern Farmhouse Kitchen", location: "Newburgh, NY", desc: "Full gut renovation with custom white shaker cabinetry, quartz waterfall island, and hardwood floors throughout.", image: "/images/portfolio-kitchen-1.jpg" },
  { id: 2, category: "Bathroom", title: "Master Bath Spa Retreat", location: "Beacon, NY", desc: "Walk-in steam shower, freestanding soaker tub, heated floors, and custom double vanity with marble countertops.", image: "/images/portfolio-bathroom-1.jpg" },
  { id: 3, category: "Basement", title: "Home Theater & Bar", location: "Kingston, NY", desc: "Tiered seating platform, acoustic wall treatments, custom wet bar with wine fridge, and dedicated equipment room.", image: "/images/portfolio-basement-1.jpg" },
  { id: 4, category: "Addition", title: "Two-Story Addition", location: "Poughkeepsie, NY", desc: "1,200 sq ft addition adding a first-floor family room and two second-story bedrooms with a shared bath.", image: "/images/portfolio-addition-1.jpg" },
  { id: 5, category: "Kitchen", title: "Contemporary Kitchen & Dining", location: "Middletown, NY", desc: "Open concept kitchen renovation with flat-panel cabinetry, quartz countertops, and integrated appliances.", image: "/images/portfolio-kitchen-2.jpg" },
  { id: 6, category: "Addition", title: "Mudroom & Laundry Suite", location: "New Paltz, NY", desc: "600 sq ft bump-out addition with custom built-in lockers, laundry room, and direct entry from the garage.", image: "/images/portfolio-addition-2.jpg" },
  { id: 7, category: "Bathroom", title: "Contemporary Master Bath", location: "Hyde Park, NY", desc: "Large-format porcelain tile, frameless glass shower, double floating vanity, and floor-to-ceiling storage tower.", image: "/images/portfolio-bathroom-2.jpg" },
  { id: 8, category: "Basement", title: "Walkout Basement Suite", location: "Goshen, NY", desc: "Full in-law suite with egress windows, kitchenette, bedroom, full bathroom, and separate walk-out entrance.", image: "/images/portfolio-basement-2.jpg" },
  { id: 9, category: "Whole-Home", title: "Whole-Home Gut Renovation", location: "Rhinebeck, NY", desc: "Complete renovation of a 1920s Victorian — new kitchen, 3 bathrooms, electrical, plumbing, and all-new finishes throughout.", image: "/images/portfolio-whole-home-1.jpg" },
];


export default function PortfolioPage() {
  return (
    <>
      <PageHero
        badge="Our Work"
        h1="Project Portfolio"
        subhead="Real projects. Real homeowners. Real transformations across the Hudson Valley — see what we&apos;ve built."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Portfolio", url: "/portfolio" }]}
        cta={{ label: "Start Your Project", href: "/contact" }}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <PortfolioGrid projects={PROJECTS} categories={CATEGORIES} />
          <p className="text-center text-gray-500 text-sm mt-12">
            We&apos;re always adding new projects. Check back soon — or{" "}
            <a href="/contact" className="text-primary font-semibold hover:underline">contact us</a>{" "}
            to see photos from a specific project type.
          </p>
        </div>
      </section>

      <ServiceCTA heading="Like What You See?" subhead="Let&apos;s talk about transforming your home. Free estimate — no pressure, no obligation." />
    </>
  );
}
