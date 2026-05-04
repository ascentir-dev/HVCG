"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  category: string;
  title: string;
  location: string;
  desc: string;
  image: string;
}

interface PortfolioGridProps {
  projects: Project[];
  categories: string[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Kitchen: "bg-blue-50 text-blue-700",
  Bathroom: "bg-purple-50 text-purple-700",
  Basement: "bg-amber-50 text-amber-700",
  Addition: "bg-green-50 text-green-700",
  "Whole-Home": "bg-rose-50 text-rose-700",
};

export function PortfolioGrid({ projects, categories }: PortfolioGridProps) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => {
    const map: Record<string, string> = {
      Kitchens: "Kitchen",
      Bathrooms: "Bathroom",
      Basements: "Basement",
      Additions: "Addition",
      "Whole-Home": "Whole-Home",
    };
    return p.category === (map[active] ?? active);
  });

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              active === cat
                ? "bg-primary text-white shadow-md scale-105"
                : "bg-[oklch(0.96_0.02_263)] text-gray-600 hover:bg-[oklch(0.92_0.03_263)] hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            onClick={() => setLightbox(project)}
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-5">
              <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${CATEGORY_COLORS[project.category] ?? "bg-gray-100 text-gray-600"}`}>
                {project.category}
              </span>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{project.location}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-semibold">No projects in this category yet.</p>
          <p className="text-sm mt-1">Check back soon — we&apos;re always adding new work.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image src={lightbox.image} alt={lightbox.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${CATEGORY_COLORS[lightbox.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {lightbox.category}
                  </span>
                  <h3 className="text-xl font-black text-gray-900">{lightbox.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{lightbox.location}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{lightbox.desc}</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="flex-shrink-0 size-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white font-bold text-sm uppercase tracking-wide px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                  onClick={() => setLightbox(null)}
                >
                  Start a Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
