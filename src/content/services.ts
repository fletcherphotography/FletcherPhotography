import { Locale } from "@/i18n/config";

export type ServiceGroup = {
  slug: string;
  title: string;
  intro: string;
  items?: string[];
  ctaLabel: string;
};

type RawServiceGroup = {
  slug: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  items?: Record<Locale, string[]>;
  ctaLabel: Record<Locale, string>;
};

const rawServiceGroups: RawServiceGroup[] = [
  {
    slug: "business-events",
    title: { en: "Business & Events", de: "Business & Events" },
    intro: {
      en: "Professional, consistent and natural imagery for businesses — planned around your people, brand and schedule.",
      de: "Professionelle, konsistente und natürliche Bilder für Unternehmen — geplant rund um deine Mitarbeitenden, Marke und Zeitplan.",
    },
    items: {
      en: [
        "Professional Headshots",
        "Corporate Portraits",
        "Team Days",
        "Company Photography",
        "Conferences",
        "Corporate Events",
        "Event Coverage",
      ],
      de: [
        "Professionelle Headshots",
        "Unternehmensportraits",
        "Team-Tage",
        "Unternehmensfotografie",
        "Konferenzen",
        "Firmenevents",
        "Event-Coverage",
      ],
    },
    ctaLabel: { en: "Request a business quote", de: "Business-Angebot anfragen" },
  },
  {
    slug: "personal-branding",
    title: { en: "Personal Branding", de: "Personal Branding" },
    intro: {
      en: "A thoughtful photography session that gives founders, consultants, coaches, creatives, experts and entrepreneurs natural, professional content for your website, LinkedIn, PR and social media.",
      de: "Eine durchdachte Fotosession, die Gründer:innen, Berater:innen, Coaches, Kreativen, Expert:innen und Unternehmer:innen natürlichen, professionellen Content für Website, LinkedIn, PR und Social Media liefert.",
    },
    ctaLabel: { en: "Plan your branding session", de: "Branding-Session planen" },
  },
  {
    slug: "portraits-love-stories",
    title: { en: "Portraits & Love Stories", de: "Portraits & Love Stories" },
    intro: {
      en: "Relaxed, honest photography for individual portraits, couple sessions, family, lifestyle sessions and engagement shoots — for meaningful moments, real connection and images you will want to keep.",
      de: "Entspannte, ehrliche Fotografie für Einzelportraits, Paar-Sessions, Familien, Lifestyle-Sessions und Verlobungsshootings — für bedeutungsvolle Momente, echte Verbindung und Bilder, die du behalten möchtest.",
    },
    ctaLabel: { en: "Plan your session", de: "Session planen" },
  },
];

export function getServiceGroups(locale: Locale): ServiceGroup[] {
  return rawServiceGroups.map((g) => ({
    slug: g.slug,
    title: g.title[locale],
    intro: g.intro[locale],
    items: g.items?.[locale],
    ctaLabel: g.ctaLabel[locale],
  }));
}

const rawPricingNote = {
  startingFrom: { en: "Starting from CHF ...", de: "Ab CHF ..." },
  detail: {
    en: "The exact price can be discussed after personal contact. Tailored quotes are available for teams, events and commercial projects.",
    de: "Der genaue Preis wird nach persönlichem Kontakt besprochen. Individuelle Angebote für Teams, Events und kommerzielle Projekte sind möglich.",
  },
};

export function getPricingNote(locale: Locale) {
  return {
    startingFrom: rawPricingNote.startingFrom[locale],
    detail: rawPricingNote.detail[locale],
  };
}
