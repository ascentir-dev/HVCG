interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years in Business" },
  { value: "4.9★", label: "Average Google Rating" },
];

function StatItem({ stat }: { stat: Stat }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
      <div className="text-sm text-white/80 uppercase tracking-wide">{stat.label}</div>
    </div>
  );
}

export function MarketsSection() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
          Where We Work
        </p>
        <p className="text-6xl md:text-8xl font-black mb-1 leading-none">HV</p>
        <h2 className="text-3xl md:text-5xl font-black mb-4">Proudly serving the Hudson Valley</h2>
        <p className="text-lg md:text-xl text-white/90 font-medium mb-3 max-w-2xl mx-auto">
          From Westchester to Ulster County — we&apos;re your neighbors, and we treat your home like our own.
        </p>
        <p className="text-white/70 text-sm mb-12">
          Including: Kingston, Poughkeepsie, Newburgh, New Paltz, Woodstock, Rhinebeck, Hyde Park &amp; surrounding areas
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
