import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { portfolio } from "@/content/portfolio";
import { articles } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/portfolio", "/insights", "/about", "/contact", "/privacy"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const portfolioRoutes = portfolio
    .filter((p) => p.status === "published")
    .map((p) => ({
      url: `${site.url}/portfolio/${p.slug}`,
      lastModified: new Date(),
    }));

  const articleRoutes = articles.map((a) => ({
    url: `${site.url}/insights/${a.slug}`,
    lastModified: new Date(a.publishedAt),
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...articleRoutes];
}
