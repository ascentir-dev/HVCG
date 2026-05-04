import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const products: Product[] = [
  {
    id: "bathrooms",
    name: "Bathroom Remodeling",
    tagline: "Your sanctuary, reimagined.",
    description: "From full gut renovations to walk-in showers, tile work, and custom vanities — we transform bathrooms into spaces you love to be in.",
    image: "/images/product-bathroom.jpg",
    imageAlt: "Custom bathroom remodel",
    href: "/services/bathrooms",
  },
  {
    id: "kitchens",
    name: "Kitchen Renovation",
    tagline: "The heart of your home, elevated.",
    description: "Custom cabinetry, new countertops, open layouts, and modern fixtures. We rebuild kitchens that are as functional as they are beautiful.",
    image: "/images/service-kitchen.jpg",
    imageAlt: "Modern kitchen renovation",
    href: "/services/kitchens",
  },
  {
    id: "basements",
    name: "Basement Finishing",
    tagline: "Unlock your home's hidden potential.",
    description: "Turn unfinished square footage into a living area, home office, gym, or entertainment space — fully permitted and built to code.",
    image: "/images/service-basement.jpg",
    imageAlt: "Finished basement remodel",
    href: "/services/basements",
  },
  {
    id: "additions",
    name: "Home Additions",
    tagline: "More space. More life.",
    description: "Whether it's an extra bedroom, a sunroom, or a full second-story addition — we design and build seamlessly with your existing home.",
    image: "/images/service-addition.jpg",
    imageAlt: "Home addition construction",
    href: "/services/additions",
  },
  {
    id: "whole-home",
    name: "Whole-Home Renovations",
    tagline: "Total transformation, top to bottom.",
    description: "One contractor, every trade, zero juggling. Complete home renovations coordinated from first blueprint to final walkthrough.",
    image: "/images/service-whole-home.jpg",
    imageAlt: "Whole home renovation",
    href: "/services/whole-home",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className="group relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[420px] block"
    >
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1 transform group-hover:-translate-y-1 transition-transform duration-300">
          {product.name}
        </p>
        <h3 className="text-2xl md:text-3xl font-black mb-3 transform group-hover:-translate-y-1 transition-transform duration-300 delay-[30ms]">
          {product.tagline}
        </h3>
        <p className="text-sm text-white/85 mb-5 max-w-sm leading-relaxed transform group-hover:-translate-y-1 transition-transform duration-300 delay-[60ms]">
          {product.description}
        </p>
        <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors self-start transform group-hover:gap-3 duration-200">
          Learn More <ArrowRightIcon className="size-4" />
        </span>
      </div>
    </Link>
  );
}

export function ProductsSection() {
  return (
    <section className="bg-[oklch(0.96_0.02_263)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3 text-center">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight leading-[1.1]">
            Everything your home needs.
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
