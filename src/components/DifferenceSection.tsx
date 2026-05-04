import { QuoteIcon, UserGroupIcon, ShieldCheckIcon, HomeIcon, StarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: <UserGroupIcon />,
    title: "People You Can Trust In Your Home",
    description: "Every member of our crew is a background-checked HVCG employee. No day-laborers, no unknown subcontractors — just skilled professionals who respect your space.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "No Surprises. Ever.",
    description: "Your written estimate is your final price. We identify every potential issue before we start so the number you approve is the number you pay.",
  },
  {
    icon: <HomeIcon />,
    title: "We Treat Your Home Like Our Own",
    description: "Daily clean-up, floor protection, careful material staging — we leave your home cleaner than we found it, every single day on the job.",
  },
  {
    icon: <StarIcon />,
    title: "Your Satisfaction Is Guaranteed",
    description: "We stand behind every project with a full workmanship warranty. If something isn't right, we make it right — no arguments, no excuses.",
  },
];

export function DifferenceSection() {
  return (
    <section className="bg-[oklch(0.96_0.02_263)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">Why Homeowners Choose HVCG</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight leading-[1.1]">
            Results you&apos;ll love.<br />An experience you&apos;ll remember.
          </h2>
          <p className="text-base text-gray-500 mb-12 font-light leading-relaxed">
            Hundreds of five-star reviews from Hudson Valley homeowners just like you.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="scale">
          <div className="bg-primary rounded-2xl p-10 md:p-14 text-white text-center max-w-3xl mx-auto">
            <QuoteIcon className="text-white/20 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl font-medium italic mb-6 leading-[1.4] tracking-tight">
              &ldquo;HVCG transformed our outdated kitchen into something out of a magazine. On time, on budget, and the crew was incredibly respectful of our home.&rdquo;
            </blockquote>
            <div className="w-12 h-px bg-white/30 mx-auto mb-4" />
            <p className="font-semibold text-sm tracking-wide">The Martínez Family</p>
            <p className="text-white/50 text-xs mt-1 tracking-wide uppercase">Kingston, NY · Google Review</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
