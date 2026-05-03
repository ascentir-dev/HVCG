import type { ReactNode } from "react";
import { CalendarIcon, ScanIcon, ShieldCheckIcon } from "@/components/icons";

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <CalendarIcon />,
    title: "Free In-Home Consultation",
    description:
      "We come to you. Our project consultant visits your home, listens to your vision, and provides a detailed written estimate — at zero cost and zero pressure.",
  },
  {
    number: "02",
    icon: <ScanIcon />,
    title: "Custom Design & Planning",
    description:
      "Our design team creates a personalized plan tailored to your space, style, and budget. You approve every detail before a single nail is driven.",
  },
  {
    number: "03",
    icon: <ShieldCheckIcon />,
    title: "Expert Installation",
    description:
      "Skilled, background-checked craftsmen execute the project to spec — on schedule, with daily clean-up, and backed by our workmanship warranty.",
  },
];

export function ColorwaysSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          How It Works
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
          Simple process.<br />Superior results.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-16">
          We&apos;ve refined every step so your remodel is smooth, transparent, and stress-free from day one to done.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step number background */}
              <div className="text-8xl font-black text-gray-100 leading-none select-none mb-4 -ml-2">
                {step.number}
              </div>
              <div className="-mt-12 pl-2">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
