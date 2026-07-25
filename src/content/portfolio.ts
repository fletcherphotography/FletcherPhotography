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
  intro: string;
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
  intro: Record<Locale, string>;
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
    intro: {
      en: "First impressions matter — for individual profiles and for how your whole company is perceived. Consistent, professional imagery across headshots, team photos and event coverage builds trust with clients, partners and candidates before they ever meet you in person. The result is a coherent visual identity you can reuse across your website, LinkedIn, press and internal communication, without a new photoshoot every time you need an image.",
      de: "Der erste Eindruck zählt — für einzelne Profile und für das Bild deines gesamten Unternehmens. Konsistente, professionelle Bilder bei Headshots, Team-Fotos und Event-Coverage schaffen Vertrauen bei Kund:innen, Partner:innen und Bewerber:innen, noch bevor sie dich persönlich treffen. Das Ergebnis ist eine stimmige visuelle Identität, die du auf Website, LinkedIn, in der Presse und intern wiederverwenden kannst — ohne für jedes Bild ein neues Shooting zu brauchen.",
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
    intro: {
      en: "As a founder, consultant or expert, you are the brand — but most people don't have a natural library of images that actually look like them. A personal branding session solves that in one sitting: relaxed direction produces a full set of natural, professional photos for your website, LinkedIn, pitch decks and PR, so you stop reusing the same outdated headshot everywhere and start showing up consistently online.",
      de: "Als Gründer:in, Berater:in oder Expert:in bist du die Marke — trotzdem fehlt den meisten eine natürliche Bildbibliothek, die wirklich nach ihnen aussieht. Eine Personal-Branding-Session löst das in einer Sitzung: entspannte Anleitung liefert ein volles Set natürlicher, professioneller Fotos für Website, LinkedIn, Pitch-Decks und PR — damit du nicht überall dasselbe veraltete Headshot wiederverwendest, sondern online konsistent auftrittst.",
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
    intro: {
      en: "Some moments are worth more than a phone snapshot — a relationship, a milestone, or simply how you look and feel right now. These sessions are built around real connection rather than stiff posing, so the direction stays light and conversational throughout. The result is a set of honest, warm images you'll actually want to print, share and look back on for years, not just store on a hard drive.",
      de: "Manche Momente sind mehr wert als ein Handyfoto — eine Beziehung, ein Meilenstein, oder einfach wie du dich gerade fühlst. Diese Sessions bauen auf echter Verbindung statt steifem Posieren auf, die Anleitung bleibt leicht und im Gespräch. Das Ergebnis ist ein Set ehrlicher, warmer Bilder, die du wirklich drucken, teilen und jahrelang gerne ansehen möchtest — nicht nur auf einer Festplatte lagerst.",
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
    intro: category.intro[locale],
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
