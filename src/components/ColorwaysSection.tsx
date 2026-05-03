import Image from "next/image";
import { cn } from "@/lib/utils";

const colorways = [
  { name: "Iron Quarry", image: "/images/swatch-iron-quarry.png" },
  { name: "Slate Storm", image: "/images/swatch-slate-storm.png" },
  { name: "Carrara Cloud", image: "/images/swatch-carrara-cloud.png" },
  { name: "Winter Lux", image: "/images/swatch-winter-lux.png" },
  { name: "Silken Glacier", image: "/images/swatch-silken-glacier.png" },
  { name: "Ivory Current", image: "/images/swatch-ivory-current.png" },
] as const;

const features = [
  "Six designer colorways",
  "Grout-free & no sealing",
  "Made in the USA",
  "Exclusive to West Shore Home",
] as const;

export function ColorwaysSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge + heading */}
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          New from West Shore Home
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
          Luxury for real life.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Designed for real homes, real routines, and real budgets.
        </p>

        {/* Feature pills */}
        <ul className="flex flex-wrap gap-3 mb-12" aria-label="Product features">
          {features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "bg-[oklch(0.96_0.02_263)] text-primary text-xs font-semibold px-4 py-2 rounded-full"
              )}
            >
              {feature}
            </li>
          ))}
        </ul>

        {/* Colorways grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colorways.map((swatch) => (
            <div key={swatch.name} className="flex flex-col items-center gap-3">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-gray-100">
                <Image
                  src={swatch.image}
                  alt={swatch.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">
                {swatch.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <a
          href="/colorways"
          className="text-primary font-semibold hover:underline mt-8 inline-block"
        >
          Explore All Colorways &rarr;
        </a>
      </div>
    </section>
  );
}
