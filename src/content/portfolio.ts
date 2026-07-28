import { Locale } from "@/i18n/config";

export type Photo = {
  id: string;
  alt: string;
  src?: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  coverImage: string;
  subcategoryNames: string[];
};

type RawSubcategory = {
  slug: string;
  title: Record<Locale, string>;
};

type RawCategory = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  intro: Record<Locale, string>;
  coverImage: string;
  subcategories: RawSubcategory[];
};

const rawPortfolioCategories: RawCategory[] = [
  {
    slug: "business-events",
    title: { en: "Business & Events", de: "Business & Events" },
    coverImage: "/images/portfolio/business-events/cover.jpg",
    description: {
      en: "Confident, natural photography for teams, headshots and company events across Switzerland.",
      de: "Selbstbewusste, natürliche Fotografie für Teams, Headshots und Firmenevents in der ganzen Schweiz.",
    },
    intro: {
      en: "First impressions matter — for individual profiles and for how your whole company is perceived. Consistent, professional imagery across headshots, team photos and event coverage builds trust with clients, partners and candidates before they ever meet you in person. The result is a coherent visual identity you can reuse across your website, LinkedIn, press and internal communication, without a new photoshoot every time you need an image.",
      de: "Der erste Eindruck zählt — für einzelne Profile und für das Bild deines gesamten Unternehmens. Konsistente, professionelle Bilder bei Headshots, Team-Fotos und Event-Coverage schaffen Vertrauen bei Kund:innen, Partner:innen und Bewerber:innen, noch bevor sie dich persönlich treffen. Das Ergebnis ist eine stimmige visuelle Identität, die du auf Website, LinkedIn, in der Presse und intern wiederverwenden kannst — ohne für jedes Bild ein neues Shooting zu brauchen.",
    },
    subcategories: [
      { slug: "business-headshots", title: { en: "Business Headshots", de: "Business Headshots" } },
      { slug: "team-photography", title: { en: "Team Photography", de: "Team-Fotografie" } },
      { slug: "corporate-events", title: { en: "Corporate Events", de: "Firmenevents" } },
    ],
  },
  {
    slug: "personal-branding",
    title: { en: "Personal Branding", de: "Personal Branding" },
    coverImage: "/images/portfolio/personal-branding/cover.jpg",
    description: {
      en: "Natural, professional content for founders, consultants and creatives to use across web, LinkedIn and social media.",
      de: "Natürlicher, professioneller Content für Gründer:innen, Berater:innen und Kreative — für Web, LinkedIn und Social Media.",
    },
    intro: {
      en: "As a founder, consultant or expert, you are the brand — but most people don't have a natural library of images that actually look like them. A personal branding session solves that in one sitting: relaxed direction produces a full set of natural, professional photos for your website, LinkedIn, pitch decks and PR, so you stop reusing the same outdated headshot everywhere and start showing up consistently online.",
      de: "Als Gründer:in, Berater:in oder Expert:in bist du die Marke — trotzdem fehlt den meisten eine natürliche Bildbibliothek, die wirklich nach ihnen aussieht. Eine Personal-Branding-Session löst das in einer Sitzung: entspannte Anleitung liefert ein volles Set natürlicher, professioneller Fotos für Website, LinkedIn, Pitch-Decks und PR — damit du nicht überall dasselbe veraltete Headshot wiederverwendest, sondern online konsistent auftrittst.",
    },
    subcategories: [
      {
        slug: "founders-entrepreneurs",
        title: { en: "Founders & Entrepreneurs", de: "Gründer:innen & Unternehmer:innen" },
      },
      { slug: "creatives-experts", title: { en: "Creatives & Experts", de: "Kreative & Expert:innen" } },
      { slug: "branding-content", title: { en: "Branding Content", de: "Branding-Content" } },
    ],
  },
  {
    slug: "portraits-love-stories",
    title: { en: "Portraits & Love Stories", de: "Portraits & Love Stories" },
    coverImage: "/images/portfolio/portraits-love-stories/cover.jpg",
    description: {
      en: "Relaxed, honest photography for individual portraits, couples and lifestyle moments you'll want to keep.",
      de: "Entspannte, ehrliche Fotografie für Einzelportraits, Paare und Lifestyle-Momente, die du behalten möchtest.",
    },
    intro: {
      en: "Some moments are worth more than a phone snapshot — a relationship, a milestone, or simply how you look and feel right now. These sessions are built around real connection rather than stiff posing, so the direction stays light and conversational throughout. The result is a set of honest, warm images you'll actually want to print, share and look back on for years, not just store on a hard drive.",
      de: "Manche Momente sind mehr wert als ein Handyfoto — eine Beziehung, ein Meilenstein, oder einfach wie du dich gerade fühlst. Diese Sessions bauen auf echter Verbindung statt steifem Posieren auf, die Anleitung bleibt leicht und im Gespräch. Das Ergebnis ist ein Set ehrlicher, warmer Bilder, die du wirklich drucken, teilen und jahrelang gerne ansehen möchtest — nicht nur auf einer Festplatte lagerst.",
    },
    subcategories: [
      { slug: "individual-portraits", title: { en: "Individual Portraits", de: "Einzelportraits" } },
      {
        slug: "couples-love-stories",
        title: { en: "Couples & Love Stories", de: "Paare & Love Stories" },
      },
      { slug: "lifestyle-portraits", title: { en: "Lifestyle Portraits", de: "Lifestyle-Portraits" } },
    ],
  },
];

function localizeCategory(category: RawCategory, locale: Locale): Category {
  return {
    slug: category.slug,
    title: category.title[locale],
    description: category.description[locale],
    intro: category.intro[locale],
    coverImage: category.coverImage,
    subcategoryNames: category.subcategories.map((s) => s.title[locale]),
  };
}

export function getPortfolioCategories(locale: Locale): Category[] {
  return rawPortfolioCategories.map((c) => localizeCategory(c, locale));
}

export function getCategory(locale: Locale, slug: string) {
  const raw = rawPortfolioCategories.find((c) => c.slug === slug);
  return raw ? localizeCategory(raw, locale) : undefined;
}

const REAL_PHOTOS_PER_SUBCATEGORY = 6;

// Combined gallery for a category: pulls the (already downloaded) real photos
// from each of its former subcategory folders into one shared gallery.
export function getCategoryPhotos(categorySlug: string): Photo[] {
  const rawCategory = rawPortfolioCategories.find((c) => c.slug === categorySlug);
  if (!rawCategory) return [];

  return rawCategory.subcategories.flatMap((sub) =>
    Array.from({ length: REAL_PHOTOS_PER_SUBCATEGORY }, (_, i) => {
      const index = i + 1;
      return {
        id: `${categorySlug}-${sub.slug}-${index}`,
        alt: `${sub.title.en} photo ${index}`,
        src: `/images/portfolio/${categorySlug}/${sub.slug}/${String(index).padStart(2, "0")}.jpg`,
      };
    })
  );
}

export function getAllCategoryParams() {
  return rawPortfolioCategories.map((c) => ({ category: c.slug }));
}
