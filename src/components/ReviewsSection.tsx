import Image from "next/image";
import { StarIcon } from "@/components/icons";

const badges = [
  {
    name: "BBB A+ Rating",
    image: "/images/badge-bbb.webp",
    alt: "BBB A+ Rating",
    stat: "A+ Rating",
  },
  {
    name: "Google Reviews",
    image: "/images/badge-google.webp",
    alt: "Google Reviews",
    stat: "35,000+ 5-Star Reviews",
  },
  {
    name: "HomeAdvisor Elite",
    image: "/images/badge-homeadvisor-elite.webp",
    alt: "HomeAdvisor Elite Service",
    stat: "99% Recommendation",
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-12">
          Your home is important to us. So is your trust.
        </h2>

        {/* Star rating display */}
        <div className="flex items-center justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="text-yellow-400" />
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-700">
            65,000+ five-star reviews
          </span>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge) => (
            <div key={badge.name} className="flex flex-col items-center gap-2">
              <div className="relative h-20 w-20">
                <Image src={badge.image} alt={badge.alt} fill className="object-contain" />
              </div>
              <p className="text-xs font-semibold text-gray-600 text-center">{badge.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
