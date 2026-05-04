import { StarIcon } from "@/components/icons";

const reviews = [
  {
    name: "Sarah T.",
    location: "Poughkeepsie, NY",
    text: "Our bathroom is absolutely stunning. The team was professional, clean, and finished ahead of schedule. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "James & Carol R.",
    location: "New Paltz, NY",
    text: "We added a full master suite addition and the quality is exceptional. It looks like it was always part of the house.",
    rating: 5,
  },
  {
    name: "Mike D.",
    location: "Woodstock, NY",
    text: "Best decision we made was hiring HVCG for our basement. Professional crew, zero surprises on the bill.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="size-4 text-yellow-400" />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            What Our Clients Say
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4">
            Your home is important to us.<br className="hidden md:block" /> So is your trust.
          </h2>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-5 text-yellow-400" />
            ))}
            <span className="text-sm font-semibold text-gray-700 ml-1">
              4.9 · 200+ Google reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[oklch(0.96_0.02_263)] rounded-xl p-6 flex flex-col gap-4"
            >
              <StarRating count={review.rating} />
              <p className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
