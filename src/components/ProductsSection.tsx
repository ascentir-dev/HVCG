import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

interface Product {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const products: Product[] = [
  {
    name: "Bathroom Remodeling",
    tagline: "Refresh. Reimagine.",
    description:
      "Complete bathroom redesigns, upgraded baths and showers, exclusive wall surrounds, and safety features — done in 2–3 days.",
    image: "/images/product-bathroom.jpg",
    imageAlt: "Full bathroom remodel",
    href: "#bathrooms",
  },
  {
    name: "Window Replacement",
    tagline: "Enhance your home. Save on energy bills.",
    description:
      "Say goodbye to stuck windows, drafts, and high energy bills. Upgrade your curb appeal with beautiful, efficient windows.",
    image: "/images/product-windows.jpg",
    imageAlt: "Window replacement",
    href: "#windows",
  },
  {
    name: "Door Installation",
    tagline: "Create a great first impression.",
    description:
      "Refresh the look of your home, improve energy efficiency, and add security with a brand-new entry door.",
    image: "/images/product-doors.jpg",
    imageAlt: "Entry door installation",
    href: "#doors",
  },
  {
    name: "Flooring Installation",
    tagline: "Getting new floors has never been easier.",
    description:
      "Worn carpets, squeaky boards, cold floors — we replace them all. Beautiful, durable flooring for real life.",
    image: "/images/product-flooring.jpg",
    imageAlt: "Flooring installation",
    href: "#flooring",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[480px]">
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-1">
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
          Home remodeling, done right.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {products.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
      </div>
    </section>
  );
}
