import { QuoteIcon, UserGroupIcon, ShieldCheckIcon, HomeIcon, StarIcon } from "@/components/icons";

const pillars = [
  {
    icon: <UserGroupIcon />,
    title: "People You Can Trust In Your Home",
    description:
      "Every installer is a full-time, background-checked West Shore Home employee. No subcontractors, no strangers — just trained professionals who care.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "No Surprises. None.",
    description:
      "We quote your project clearly and completely. The price we quote is the price you pay — no hidden fees, no add-ons, no surprises.",
  },
  {
    icon: <HomeIcon />,
    title: "We Treat Your Home Like Our Own",
    description:
      "We protect your home during installation, clean up completely when we're done, and leave you with a transformation you'll love.",
  },
  {
    icon: <StarIcon />,
    title: "We're With You Every Step",
    description:
      "From consultation to completion, we're transparent, communicative, and accountable. Your satisfaction is our guarantee.",
  },
];

export function DifferenceSection() {
  return (
    <section className="bg-[oklch(0.96_0.02_263)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top heading */}
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          The West Shore Home Difference
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">
          Results you&apos;ll love. An experience you&apos;ll remember.
        </h2>
        <p className="text-base text-gray-600 mb-12">
          65,000+ five-star reviews from homeowners like you.
        </p>

        {/* Trust pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial block */}
        <div className="bg-primary rounded-2xl p-10 text-white text-center max-w-3xl mx-auto">
          <QuoteIcon className="text-white/30 mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed">
            &ldquo;The young men who performed the work were amazing! They left everything neat and
            clean.&rdquo;
          </blockquote>
          <p className="font-bold">— The Caskeys</p>
          <p className="text-white/70 text-sm mt-1">BBB Review</p>
        </div>
      </div>
    </section>
  );
}
