import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/treatments",
    "/how-it-works",
    "/about",
    "/start",
    "/safety",
    "/guides",
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/start" || path === "/treatments" ? 0.9 : 0.7,
  }));

  const programmeRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: absoluteUrl(`/${category.id}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const treatmentRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(`/treatments/${product.id}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...programmeRoutes, ...treatmentRoutes];
}
