import type { MetadataRoute } from "next";

const BASE = "https://www.hudsonvalleycontractinggroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/kitchens", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/bathrooms", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/basements", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/additions", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/whole-home", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/financing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog/kitchen-remodel-cost-guide-hudson-valley", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-plan-bathroom-renovation", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/basement-finishing-permits-costs-orange-county", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/whole-home-renovation-timeline", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/how-to-finance-home-renovation-new-york", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/renovating-historic-hudson-valley-homes", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${BASE}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
