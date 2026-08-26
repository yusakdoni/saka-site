import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saka-solusindo.vercel.app";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/layanan`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/industri`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/kontak`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/layanan/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${siteUrl}/industri/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
