import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQSection, type FAQItem } from "@/components/FAQSection";
import { ServiceCTA } from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about home remodeling in Hudson Valley, NY — timelines, costs, permits, financing, warranties, and more.",
  openGraph: { title: "FAQ | Hudson Valley Contracting Group", url: "https://hvcg.com/faq" },
  alternates: { canonical: "https://hvcg.com/faq" },
};

const FAQS: FAQItem[] = [
  // Getting Started
  {
    question: "How do I get started with HVCG?",
    answer: "The easiest way to get started is to call us at (845) 728-5247 or submit a contact form on our website. We'll schedule a free in-home consultation within 48 hours where we visit your home, discuss your vision and budget, and take any necessary measurements. You'll receive a detailed written estimate before any commitment is required.",
  },
  {
    question: "What areas of Hudson Valley do you serve?",
    answer: "We serve Orange County, Ulster County, and Dutchess County, NY. Our service area includes Newburgh, Middletown, Goshen, Warwick, Monroe, New Windsor, Cornwall, Kingston, New Paltz, Saugerties, Woodstock, Poughkeepsie, Beacon, Hyde Park, Rhinebeck, and Wappingers Falls — as well as the surrounding towns and villages in each county.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Hudson Valley Contracting Group is a fully licensed general contractor in New York State. We carry comprehensive general liability insurance and workers' compensation insurance on all employees and subcontractors. We are happy to provide certificates of insurance upon request.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes — our consultations and written estimates are completely free and come with no obligation. We visit your home, assess the project, and provide a detailed, itemized written estimate. We believe you should have full transparency about costs before making any decisions.",
  },
  {
    question: "Do you use subcontractors?",
    answer: "We use a vetted network of licensed, insured subcontractors for specialized trades including electrical, plumbing, and HVAC. All subcontractors are background-checked, licensed in NY, and carry their own insurance. Our project manager oversees all subcontractor work to ensure it meets our quality standards.",
  },
  // Timelines
  {
    question: "How long does a kitchen remodel take?",
    answer: "A full kitchen remodel — including new cabinets, countertops, flooring, and appliances — typically takes 6–10 weeks from demo to completion. Smaller cosmetic refreshes such as a new countertop and backsplash can often be completed in 2–4 weeks. Every project receives a detailed timeline at the start.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer: "A full gut renovation of a standard bathroom usually takes 3–6 weeks. Master bathrooms with custom tile work, freestanding tubs, and custom vanities can run 6–8 weeks. Cosmetic updates — new vanity, fixtures, and paint — often take 1–2 weeks.",
  },
  {
    question: "How long does a basement finish take?",
    answer: "Most basement finishing projects take 4–8 weeks, depending on the scope. A simple recreation room with one bathroom on the smaller end; a full in-law suite with a custom wet bar and multiple rooms on the longer end. Projects requiring egress window installation or waterproofing work are planned into the schedule.",
  },
  {
    question: "How long does a home addition take?",
    answer: "Home additions typically take 3–6 months from permit approval to completion. The permit process itself can add 4–8 weeks before construction begins. Second-story additions or projects requiring significant structural engineering or zoning approvals may run 6–9 months total. We build a realistic timeline into every addition proposal.",
  },
  // Cost & Payment
  {
    question: "How much does a kitchen remodel cost in Hudson Valley?",
    answer: "Kitchen remodel costs in our area range from approximately $20,000 for a modest refresh (new countertops, backsplash, paint, hardware) to $80,000 or more for a full gut renovation with custom cabinetry and premium appliances. The most common mid-range kitchen remodels fall between $35,000 and $60,000. We provide a detailed, itemized written estimate after your free consultation.",
  },
  {
    question: "How much does a bathroom remodel cost?",
    answer: "Bathroom remodel costs range from approximately $8,000 for a cosmetic refresh to $40,000 or more for a high-end master suite renovation with custom tile, a freestanding tub, and a custom vanity. Most full bathroom remodels in the Hudson Valley fall between $15,000 and $30,000. Your estimate will itemize every cost.",
  },
  {
    question: "Do you offer financing?",
    answer: "Yes. We offer multiple financing options including fixed-rate home improvement loans, HELOCs, and 0% promotional financing for qualifying projects. You can pre-qualify in minutes with no impact to your credit score. Visit our Financing page for details, or ask your project manager during your consultation.",
  },
  {
    question: "Do you require a deposit?",
    answer: "We typically require a 10–20% deposit to schedule your project and begin ordering materials. Payment is then structured as milestone payments tied to specific phases of work — not a large lump sum upfront. We provide a full payment schedule as part of your written contract before any work begins.",
  },
  // Process & Communication
  {
    question: "Will we have a dedicated project manager?",
    answer: "Yes. Every project is assigned a single project manager who is your point of contact from the initial estimate through the final walkthrough. Your PM coordinates all subcontractors, manages the schedule, handles permit inspections, and is reachable by phone or text during business hours. No calling around to different people — one person, full accountability.",
  },
  {
    question: "How do you handle unexpected issues during construction?",
    answer: "Unexpected conditions — rotted framing, old plumbing, hidden moisture — are an occasional reality in renovation work. When we encounter something unexpected, we stop, document it, discuss the options and associated costs with you, and proceed only after you approve a written change order. We never charge for unanticipated work without your explicit approval.",
  },
  {
    question: "Can I make changes mid-project?",
    answer: "Yes. Changes are managed through a formal written change order process. You sign off on the updated scope, cost, and any schedule impact before we proceed. This protects both parties and keeps the project moving without confusion about what was agreed.",
  },
  {
    question: "Do you clean up at the end of each day?",
    answer: "Yes. Daily cleanup and site containment are standard parts of our process. We sweep, consolidate debris, and replace dust barriers at the end of every workday. For occupied homes, we take special care to minimize the impact on the areas you're living in during the project.",
  },
  // Permits & Compliance
  {
    question: "Do you handle permits?",
    answer: "Yes. We pull all necessary building, electrical, plumbing, and HVAC permits and coordinate all required inspections. Permit costs are included in your project estimate — there are no hidden fees. Our team is experienced with building departments across Orange, Ulster, and Dutchess Counties.",
  },
  {
    question: "What if my home is a historic property?",
    answer: "The Hudson Valley has a rich stock of historic homes and we have extensive experience working with them. For properties in historic districts, we coordinate with local landmark review boards as needed. We specialize in preserving the character of older homes while updating systems and finishes to modern standards.",
  },
  {
    question: "Will all work be up to code?",
    answer: "Absolutely. All work is performed to current New York State Building Code and local amendments. Every phase that requires inspection is inspected by the local building official — we don't close walls until rough-in work is signed off. You receive a copy of all inspection approvals at project completion.",
  },
  // Quality & Warranty
  {
    question: "What warranty do you provide?",
    answer: "We provide a 1-year labor warranty on all work we perform. If something we installed doesn't perform as it should within the first year, we come back and make it right — no charge. Manufacturer warranties on cabinets, fixtures, and appliances are passed through to you in writing and are in addition to our labor warranty.",
  },
  {
    question: "Can I see examples of your past work?",
    answer: "Yes. Visit our Portfolio page to see completed projects, or ask your project manager to share photos from similar projects in your area. We can also provide references from past clients in your county upon request — we encourage you to call them and hear about their experience firsthand.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        badge="FAQ"
        h1="Frequently Asked Questions"
        subhead="Straight answers to the questions Hudson Valley homeowners ask most before starting their remodel."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]}
        cta={{ label: "Still Have Questions?", href: "/contact" }}
      />

      <FAQSection faqs={FAQS} heading="Everything You Need to Know" includeSchema={true} />

      <ServiceCTA heading="Ready to Get Started?" subhead="Call or contact us for a free in-home estimate. No pressure, no obligation — just honest answers and quality work." />
    </>
  );
}
