import { Locale } from "@/i18n/config";

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

type RawSubcategory = {
  slug: string;
  title: Record<Locale, string>;
  seoIntro: Record<Locale, string>;
  photoCount: number;
};

type RawCategory = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  subcategories: RawSubcategory[];
};

const rawPortfolioCategories: RawCategory[] = [
  {
    slug: "business-events",
    title: { en: "Business & Events", de: "Business & Events" },
    description: {
      en: "Confident, natural photography for teams, headshots and company events across Switzerland.",
      de: "Selbstbewusste, natürliche Fotografie für Teams, Headshots und Firmenevents in der ganzen Schweiz.",
    },
    subcategories: [
      {
        slug: "business-headshots",
        title: { en: "Business Headshots", de: "Business Headshots" },
        seoIntro: {
          en: "Professional business headshots that feel approachable, not stiff. Clear, relaxed direction helps you look confident and natural in front of the camera, producing consistent images ready for your website, LinkedIn and company profile.",
          de: "Professionelle Business-Headshots, die nahbar wirken, nicht steif. Klare, entspannte Anleitung sorgt für selbstbewusste, natürliche Bilder — passend für Website, LinkedIn und Firmenprofil.",
        },
        photoCount: 28,
      },
      {
        slug: "team-photography",
        title: { en: "Team Photography", de: "Team-Fotografie" },
        seoIntro: {
          en: "Team photography that captures your company's people and culture in a genuine way. Sessions are planned around your schedule and location, delivering a consistent set of images for internal communication and marketing.",
          de: "Team-Fotografie, die die Menschen und Kultur deines Unternehmens authentisch einfängt. Sessions werden nach deinem Zeitplan und Standort geplant und liefern einheitliche Bilder für interne Kommunikation und Marketing.",
        },
        photoCount: 24,
      },
      {
        slug: "corporate-events",
        title: { en: "Corporate Events", de: "Firmenevents" },
        seoIntro: {
          en: "Unobtrusive, thorough coverage of conferences, corporate events and company gatherings across Switzerland. Real moments and key interactions are captured for press, social media and internal use.",
          de: "Unaufdringliche, umfassende Begleitung von Konferenzen, Firmenevents und Unternehmensanlässen in der ganzen Schweiz. Echte Momente und wichtige Interaktionen werden für Presse, Social Media und internen Gebrauch festgehalten.",
        },
        photoCount: 32,
      },
    ],
  },
  {
    slug: "personal-branding",
    title: { en: "Personal Branding", de: "Personal Branding" },
    description: {
      en: "Natural, professional content for founders, consultants and creatives to use across web, LinkedIn and social media.",
      de: "Natürlicher, professioneller Content für Gründer:innen, Berater:innen und Kreative — für Web, LinkedIn und Social Media.",
    },
    subcategories: [
      {
        slug: "founders-entrepreneurs",
        title: { en: "Founders & Entrepreneurs", de: "Gründer:innen & Unternehmer:innen" },
        seoIntro: {
          en: "Personal branding photography for founders and entrepreneurs who need natural, professional imagery for their website, LinkedIn and PR. Sessions are planned around your story and how you want to be seen.",
          de: "Personal-Branding-Fotografie für Gründer:innen und Unternehmer:innen, die natürliche, professionelle Bilder für Website, LinkedIn und PR brauchen. Sessions werden um deine Geschichte und dein gewünschtes Bild herum geplant.",
        },
        photoCount: 26,
      },
      {
        slug: "creatives-experts",
        title: { en: "Creatives & Experts", de: "Kreative & Expert:innen" },
        seoIntro: {
          en: "Branding photography for creatives, coaches and experts, focused on natural expression rather than stiff, posed portraits — designed for social media and marketing content.",
          de: "Branding-Fotografie für Kreative, Coaches und Expert:innen, mit Fokus auf natürlichem Ausdruck statt steifen, gestellten Portraits — für Social Media und Marketing-Content.",
        },
        photoCount: 22,
      },
      {
        slug: "branding-content",
        title: { en: "Branding Content", de: "Branding-Content" },
        seoIntro: {
          en: "A flexible set of branding content images — behind-the-scenes, lifestyle and detail shots — giving you a natural library of content for ongoing marketing and social media use.",
          de: "Ein flexibles Set an Branding-Content-Bildern — Behind-the-Scenes, Lifestyle- und Detailaufnahmen — für eine natürliche Content-Bibliothek für laufendes Marketing und Social Media.",
        },
        photoCount: 30,
      },
    ],
  },
  {
    slug: "portraits-love-stories",
    title: { en: "Portraits & Love Stories", de: "Portraits & Love Stories" },
    description: {
      en: "Relaxed, honest photography for individual portraits, couples and lifestyle moments you'll want to keep.",
      de: "Entspannte, ehrliche Fotografie für Einzelportraits, Paare und Lifestyle-Momente, die du behalten möchtest.",
    },
    subcategories: [
      {
        slug: "individual-portraits",
        title: { en: "Individual Portraits", de: "Einzelportraits" },
        seoIntro: {
          en: "Relaxed individual portrait sessions focused on real expression rather than posed perfection, giving you honest images for personal use, social media or a meaningful keepsake.",
          de: "Entspannte Einzelportrait-Sessions mit Fokus auf echtem Ausdruck statt gestellter Perfektion — ehrliche Bilder für den persönlichen Gebrauch, Social Media oder als bedeutungsvolles Andenken.",
        },
        photoCount: 25,
      },
      {
        slug: "couples-love-stories",
        title: { en: "Couples & Love Stories", de: "Paare & Love Stories" },
        seoIntro: {
          en: "Honest, relaxed photography for couples and engagement sessions across Switzerland, focused on real connection and moments you will want to look back on for years.",
          de: "Ehrliche, entspannte Fotografie für Paare und Verlobungs-Sessions in der ganzen Schweiz — mit Fokus auf echter Verbindung und Momenten, an die du dich jahrelang gerne zurückerinnerst.",
        },
        photoCount: 35,
      },
      {
        slug: "lifestyle-portraits",
        title: { en: "Lifestyle Portraits", de: "Lifestyle-Portraits" },
        seoIntro: {
          en: "Lifestyle portrait sessions capturing natural moments in everyday settings, for individuals and families who want genuine, unposed photography.",
          de: "Lifestyle-Portrait-Sessions, die natürliche Momente im Alltag einfangen — für Einzelpersonen und Familien, die echte, ungestellte Fotografie möchten.",
        },
        photoCount: 20,
      },
    ],
  },
];

function localizeSubcategory(sub: RawSubcategory, locale: Locale): Subcategory {
  return {
    slug: sub.slug,
    title: sub.title[locale],
    seoIntro: sub.seoIntro[locale],
    photoCount: sub.photoCount,
  };
}

function localizeCategory(category: RawCategory, locale: Locale): Category {
  return {
    slug: category.slug,
    title: category.title[locale],
    description: category.description[locale],
    subcategories: category.subcategories.map((s) => localizeSubcategory(s, locale)),
  };
}

export function getPortfolioCategories(locale: Locale): Category[] {
  return rawPortfolioCategories.map((c) => localizeCategory(c, locale));
}

function makePhotos(categorySlug: string, subSlug: string, count: number): Photo[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${categorySlug}-${subSlug}-${i + 1}`,
    alt: `${subSlug.replace(/-/g, " ")} photo ${i + 1}`,
  }));
}

export function getCategory(locale: Locale, slug: string) {
  const raw = rawPortfolioCategories.find((c) => c.slug === slug);
  return raw ? localizeCategory(raw, locale) : undefined;
}

export function getSubcategory(locale: Locale, categorySlug: string, subSlug: string) {
  const rawCategory = rawPortfolioCategories.find((c) => c.slug === categorySlug);
  const rawSub = rawCategory?.subcategories.find((s) => s.slug === subSlug);
  if (!rawCategory || !rawSub) return undefined;
  return {
    category: localizeCategory(rawCategory, locale),
    subcategory: localizeSubcategory(rawSub, locale),
  };
}

export function getSubcategoryPhotos(categorySlug: string, subSlug: string): Photo[] {
  const rawCategory = rawPortfolioCategories.find((c) => c.slug === categorySlug);
  const rawSub = rawCategory?.subcategories.find((s) => s.slug === subSlug);
  if (!rawSub) return [];
  return makePhotos(categorySlug, subSlug, rawSub.photoCount);
}

export function getAllCategoryParams() {
  return rawPortfolioCategories.map((c) => ({ category: c.slug }));
}

export function getAllSubcategoryParams() {
  return rawPortfolioCategories.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug }))
  );
}
