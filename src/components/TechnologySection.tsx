import type { ReactElement } from "react";
import { ScanIcon, UserGroupIcon, CalendarIcon } from "@/components/icons";

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ScanIcon />,
    title: "Precision Measurements",
    description:
      "We use laser measuring and 3D planning tools to ensure every detail is spec'd correctly before work begins — no costly surprises mid-project.",
  },
  {
    icon: <UserGroupIcon />,
    title: "Our Own Skilled Crews",
    description:
      "Every person on your project is a background-checked HVCG employee. We never subcontract your job to unknown workers.",
  },
  {
    icon: <CalendarIcon />,
    title: "On-Time, On-Budget Guarantee",
    description:
      "We provide a written schedule at contract signing and honor it. If we run over, we make it right — simple as that.",
  },
];

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {feature.icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

export function TechnologySection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              The HVCG Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Built right.<br />Built to last.
            </h2>
            <p className="text-gray-600 mb-10">
              We don&apos;t cut corners. Our approach combines modern planning tools with old-school craftsmanship — so every project delivers lasting quality.
            </p>
            <div className="flex flex-col gap-8">
              {features.map((feature) => (
                <FeatureItem key={feature.title} feature={feature} />
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-primary" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-10 gap-6">
              <div className="size-20 rounded-full bg-white/15 flex items-center justify-center">
                <span className="text-3xl font-black">HVCG</span>
              </div>
              <div>
                <p className="text-2xl font-black mb-2">15+ Years</p>
                <p className="text-white/80 text-sm">Serving the Hudson Valley</p>
              </div>
              <div className="w-full border-t border-white/20 pt-6 grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-black">500+</p>
                  <p className="text-white/70 text-xs uppercase tracking-wide mt-1">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-black">4.9★</p>
                  <p className="text-white/70 text-xs uppercase tracking-wide mt-1">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
