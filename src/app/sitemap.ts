import { MetadataRoute } from "next";
import { getAllSubcategoryParams, portfolioCategories } from "@/content/portfolio";

const BASE_URL = "https://www.example.com"; // TODO: replace with real production domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/portfolio",
    "/services",
    "/about",
    "/reviews",
    "/contact",
    "/privacy-policy",
  ].map((path) => ({ url: `${BASE_URL}${path}` }));

  const categoryRoutes = portfolioCategories.map((c) => ({
    url: `${BASE_URL}/portfolio/${c.slug}`,
  }));

  const subcategoryRoutes = getAllSubcategoryParams().map((p) => ({
    url: `${BASE_URL}/portfolio/${p.category}/${p.subcategory}`,
  }));

  return [...staticRoutes, ...categoryRoutes, ...subcategoryRoutes];
}
