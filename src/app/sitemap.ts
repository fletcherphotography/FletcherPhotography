import { MetadataRoute } from "next";
import { getAllSubcategoryParams, getAllCategoryParams } from "@/content/portfolio";
import { locales } from "@/i18n/config";

const BASE_URL = "https://www.example.com"; // TODO: replace with real production domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/portfolio",
    "/services",
    "/about",
    "/reviews",
    "/booking",
    "/contact",
    "/privacy-policy",
  ];

  const categoryParams = getAllCategoryParams();
  const subcategoryParams = getAllSubcategoryParams();

  return locales.flatMap((locale) => [
    ...staticPaths.map((path) => ({ url: `${BASE_URL}/${locale}${path}` })),
    ...categoryParams.map((p) => ({ url: `${BASE_URL}/${locale}/portfolio/${p.category}` })),
    ...subcategoryParams.map((p) => ({
      url: `${BASE_URL}/${locale}/portfolio/${p.category}/${p.subcategory}`,
    })),
  ]);
}
