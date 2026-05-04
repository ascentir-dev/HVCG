import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { blogPosts } from "@/lib/blog";

const BLOG_IMAGES: Record<string, string> = {
  "kitchen-remodel-cost-guide-hudson-valley": "/images/blog-kitchen-costs.jpg",
  "open-concept-kitchen-living-room-ideas": "/images/blog-open-concept.jpg",
  "bathroom-remodel-timeline-what-to-expect": "/images/blog-bathroom-timeline.jpg",
  "finishing-your-basement-ultimate-guide": "/images/blog-basement-guide.jpg",
  "home-addition-vs-buying-bigger-house": "/images/blog-home-addition.jpg",
  "how-to-choose-a-remodeling-contractor-hudson-valley": "/images/blog-contractor-tips.jpg",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, url: `https://hvcg.com/blog/${slug}` },
    alternates: { canonical: `https://hvcg.com/blog/${slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.body.split("\n\n").filter(Boolean);
  const shortTitle = post.title.length > 35 ? post.title.slice(0, 35) + "…" : post.title;

  return (
    <>
      <PageHero
        badge={post.category}
        h1={post.title}
        subhead={post.excerpt}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: shortTitle, url: `/blog/${slug}` },
        ]}
      />

      {BLOG_IMAGES[slug] && (
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <Image
            src={BLOG_IMAGES[slug]}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-10 pb-6 border-b border-gray-100">
            <span className="bg-[oklch(0.96_0.02_263)] text-primary font-semibold px-3 py-1 rounded-full text-xs">{post.category}</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {paragraphs.map((para, i) => (
              <p key={i} className="mb-5">{para}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Have questions about your project?{" "}
              <a href="/contact" className="text-primary font-semibold hover:underline">Request a free estimate</a>{" "}
              or call us at{" "}
              <a href="tel:+18457285247" className="text-primary font-semibold hover:underline">(845) 728-5247</a>.
            </p>
          </div>
        </div>
      </article>

      <ServiceCTA />
    </>
  );
}
