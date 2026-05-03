import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

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
    description:
      "From full gut renovations to walk-in showers, tile work, and custom vanities — we transform bathrooms into spaces you love to be in.",
    image: "/images/product-bathroom.jpg",
    imageAlt: "Custom bathroom remodel",
    href: "#bathrooms",
  },
  {
    id: "kitchens",
    name: "Kitchen Renovation",
    tagline: "The heart of your home, elevated.",
    description:
      "Custom cabinetry, new countertops, open layouts, and modern fixtures. We rebuild kitchens that are as functional as they are beautiful.",
    image: "/images/service-kitchen.jpg",
    imageAlt: "Modern kitchen renovation",
    href: "#kitchens",
  },
  {
    id: "basements",
    name: "Basement Finishing",
    tagline: "Unlock your home's hidden potential.",
    description:
      "Turn unfinished square footage into a living area, home office, gym, or entertainment space — fully permitted and built to code.",
    image: "/images/service-basement.jpg",
    imageAlt: "Finished basement remodel",
    href: "#basements",
  },
  {
    id: "additions",
    name: "Home Additions",
    tagline: "More space. More life.",
    description:
      "Whether it's an extra bedroom, a sunroom, or a full second-story addition — we design and build seamlessly with your existing home.",
    image: "/images/service-addition.jpg",
    imageAlt: "Home addition construction",
    href: "#additions",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      id={product.id}
      className="group relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[480px]"
    >
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">
          {product.name}
        </p>
        <h3 className="text-2xl md:text-3xl font-black mb-3">{product.tagline}</h3>
        <p className="text-sm text-white/90 mb-5 max-w-sm">{product.description}</p>
        <a
          href={product.href}
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-primary/90 transition self-start"
        >
          Learn More <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section className="bg-[oklch(0.96_0.02_263)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 text-center">
          Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center">
          Everything your home needs.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
