import Image from "next/image";
import { breadcrumbSchema } from "@/lib/schema";
import { ArrowRightIcon } from "@/components/icons";

interface BreadcrumbItem { name: string; url: string }

interface PageHeroProps {
  badge?: string;
  h1: string;
  subhead: string;
  breadcrumbs?: BreadcrumbItem[];
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  bgClass?: string;
  backgroundImage?: string;
}

export function PageHero({ badge, h1, subhead, breadcrumbs, cta, ctaSecondary, bgClass = "bg-primary", backgroundImage }: PageHeroProps) {
  const crumbs = breadcrumbs ?? [];

  return (
    <section className={`${backgroundImage ? "" : bgClass} text-white py-16 md:py-24 relative overflow-hidden`}>
      {/* Background image (if provided) */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-primary/80" />
        </>
      )}
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {crumbs.length > 0 && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
            />
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-1 text-xs text-white/60">
                {crumbs.map((crumb, i) => (
                  <li key={crumb.url} className="flex items-center gap-1">
                    {i > 0 && <span>/</span>}
                    {i === crumbs.length - 1 ? (
                      <span className="text-white/90">{crumb.name}</span>
                    ) : (
                      <a href={crumb.url} className="hover:text-white transition">{crumb.name}</a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}

        {badge && (
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">{badge}</p>
        )}

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">{h1}</h1>
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-8">{subhead}</p>

        {(cta || ctaSecondary) && (
          <div className="flex flex-wrap gap-4">
            {cta && (
              <a href={cta.href} className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-sm hover:bg-white/90 transition text-sm uppercase tracking-wide">
                {cta.label} <ArrowRightIcon className="size-4" />
              </a>
            )}
            {ctaSecondary && (
              <a href={ctaSecondary.href} className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-sm hover:bg-white/10 transition text-sm">
                {ctaSecondary.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
