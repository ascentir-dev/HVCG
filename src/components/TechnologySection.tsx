import type { ReactElement } from "react";
import { ScanIcon, UserGroupIcon, CalendarIcon } from "@/components/icons";

interface TechFeature {
  icon: ReactElement;
  title: string;
  description: string;
}

const techFeatures: TechFeature[] = [
  {
    icon: <ScanIcon />,
    title: "Scan-to-Plan Accuracy",
    description:
      "We use cutting-edge scanning technology to measure your space precisely — no surprises on installation day.",
  },
  {
    icon: <UserGroupIcon />,
    title: "Highly Trained Employee Installers",
    description:
      "Every installer is a background-checked West Shore Home employee. No subcontractors, ever.",
  },
  {
    icon: <CalendarIcon />,
    title: "Know Your Installation Date Instantly",
    description:
      "Get a guaranteed installation date at the time of your consultation. No waiting, no guessing.",
  },
];

function FeatureItem({ feature }: { feature: TechFeature }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {feature.icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-[oklch(0.26_0.10_263)]" />
      <div className="relative z-10 flex flex-col items-center gap-3 text-white text-center px-8">
        <div className="size-16 rounded-full bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="size-8 translate-x-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-lg font-semibold">Remodeling Reimagined™</p>
        <p className="text-sm text-white/80">Watch how our technology transforms your home</p>
      </div>
    </div>
  );
}

export function TechnologySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Our Technology
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              Remodeling Reimagined.
            </h2>
            <div className="flex flex-col gap-8">
              {techFeatures.map((feature) => (
                <FeatureItem key={feature.title} feature={feature} />
              ))}
            </div>
          </div>

          {/* Right — video */}
          <div>
            <VideoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
