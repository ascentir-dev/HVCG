import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Home Remodeling Blog — Tips & Ideas",
  description: "Expert remodeling tips, cost guides, and project ideas for Hudson Valley homeowners from the team at HVCG.",
  openGraph: { title: "Blog | Hudson Valley Contracting Group", url: "https://www.hudsonvalleycontractinggroup.com/blog" },
  alternates: { canonical: "https://www.hudsonvalleycontractinggroup.com/blog" },
};

const CATEGORY_COLORS: Record<string, string> = {
  Kitchen: "bg-blue-50 text-blue-700",
  Bathroom: "bg-purple-50 text-purple-700",
  Basement: "bg-amber-50 text-amber-700",
  Additions: "bg-green-50 text-green-700",
  Tips: "bg-gray-100 text-gray-700",
};

const BLOG_IMAGES: Record<string, string> = {
  "kitchen-remodel-cost-guide-hudson-valley": "/images/blog-kitchen-costs.jpg",
  "open-concept-kitchen-living-room-ideas": "/images/blog-open-concept.jpg",
  "bathroom-remodel-timeline-what-to-expect": "/images/blog-bathroom-timeline.jpg",
  "finishing-your-basement-ultimate-guide": "/images/blog-basement-guide.jpg",
  "home-addition-vs-buying-bigger-house": "/images/blog-home-addition.jpg",
  "how-to-choose-a-remodeling-contractor-hudson-valley": "/images/blog-contractor-tips.jpg",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        h1="Remodeling Tips & Ideas"
        subhead="Expert advice, cost guides, and inspiration for your next home improvement project in the Hudson Valley."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-48 overflow-hidden border-b border-gray-100">
                  <Image
                    src={BLOG_IMAGES[post.slug] ?? "/images/hero-background.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 self-start ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-bold text-gray-900 text-lg leading-snug mb-2 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-xs text-gray-500 mb-3">{formatDate(post.date)} · {post.readTime}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all mt-4">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
