export type Photo = {
  id: string;
  alt: string;
  src?: string; // TODO: set once real photos are added under /public/images/portfolio/<category>/<subcategory>/
};

export type Subcategory = {
  slug: string;
  title: string;
  seoIntro: string;
  photoCount: number;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
};

function makePhotos(categorySlug: string, subSlug: string, count: number): Photo[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${categorySlug}-${subSlug}-${i + 1}`,
    alt: `${subSlug.replace(/-/g, " ")} photo ${i + 1}`,
  }));
}

export const portfolioCategories: Category[] = [
  {
    slug: "business-events",
    title: "Business & Events",
    description:
      "Confident, natural photography for teams, headshots and company events across Switzerland.",
    subcategories: [
      {
        slug: "business-headshots",
        title: "Business Headshots",
        seoIntro:
          "Professional business headshots that feel approachable, not stiff. Clear, relaxed direction helps you look confident and natural in front of the camera, producing consistent images ready for your website, LinkedIn and company profile.",
        photoCount: 28,
      },
      {
        slug: "team-photography",
        title: "Team Photography",
        seoIntro:
          "Team photography that captures your company's people and culture in a genuine way. Sessions are planned around your schedule and location, delivering a consistent set of images for internal communication and marketing.",
        photoCount: 24,
      },
      {
        slug: "corporate-events",
        title: "Corporate Events",
        seoIntro:
          "Unobtrusive, thorough coverage of conferences, corporate events and company gatherings across Switzerland. Real moments and key interactions are captured for press, social media and internal use.",
        photoCount: 32,
      },
    ],
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    description:
      "Natural, professional content for founders, consultants and creatives to use across web, LinkedIn and social media.",
    subcategories: [
      {
        slug: "founders-entrepreneurs",
        title: "Founders & Entrepreneurs",
        seoIntro:
          "Personal branding photography for founders and entrepreneurs who need natural, professional imagery for their website, LinkedIn and PR. Sessions are planned around your story and how you want to be seen.",
        photoCount: 26,
      },
      {
        slug: "creatives-experts",
        title: "Creatives & Experts",
        seoIntro:
          "Branding photography for creatives, coaches and experts, focused on natural expression rather than stiff, posed portraits — designed for social media and marketing content.",
        photoCount: 22,
      },
      {
        slug: "branding-content",
        title: "Branding Content",
        seoIntro:
          "A flexible set of branding content images — behind-the-scenes, lifestyle and detail shots — giving you a natural library of content for ongoing marketing and social media use.",
        photoCount: 30,
      },
    ],
  },
  {
    slug: "portraits-love-stories",
    title: "Portraits & Love Stories",
    description:
      "Relaxed, honest photography for individual portraits, couples and lifestyle moments you'll want to keep.",
    subcategories: [
      {
        slug: "individual-portraits",
        title: "Individual Portraits",
        seoIntro:
          "Relaxed individual portrait sessions focused on real expression rather than posed perfection, giving you honest images for personal use, social media or a meaningful keepsake.",
        photoCount: 25,
      },
      {
        slug: "couples-love-stories",
        title: "Couples & Love Stories",
        seoIntro:
          "Honest, relaxed photography for couples and engagement sessions across Switzerland, focused on real connection and moments you will want to look back on for years.",
        photoCount: 35,
      },
      {
        slug: "lifestyle-portraits",
        title: "Lifestyle Portraits",
        seoIntro:
          "Lifestyle portrait sessions capturing natural moments in everyday settings, for individuals and families who want genuine, unposed photography.",
        photoCount: 20,
      },
    ],
  },
];

export function getCategory(slug: string) {
  return portfolioCategories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subSlug: string) {
  const category = getCategory(categorySlug);
  const subcategory = category?.subcategories.find((s) => s.slug === subSlug);
  return category && subcategory ? { category, subcategory } : undefined;
}

export function getSubcategoryPhotos(categorySlug: string, subSlug: string): Photo[] {
  const found = getSubcategory(categorySlug, subSlug);
  if (!found) return [];
  return makePhotos(categorySlug, subSlug, found.subcategory.photoCount);
}

export function getAllCategoryParams() {
  return portfolioCategories.map((c) => ({ category: c.slug }));
}

export function getAllSubcategoryParams() {
  return portfolioCategories.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug }))
  );
}
