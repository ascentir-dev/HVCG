interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "1,000,000+", label: "Customers Served" },
  { value: "12,000+", label: "Zip Codes Covered" },
  { value: "65,000+", label: "Five-Star Reviews" },
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
        <p className="text-7xl md:text-8xl font-black mb-1 leading-none">40+</p>
        <h2 className="text-4xl md:text-6xl font-black mb-3">Markets nationwide</h2>
        <p className="text-lg md:text-xl text-white/90 font-medium mb-12">
          We&apos;re in your neighborhood — and we treat it like our own.
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
