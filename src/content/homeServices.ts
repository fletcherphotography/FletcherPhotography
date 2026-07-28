import { Locale } from "@/i18n/config";

export type HomeServiceCard = {
  slug: string;
  title: string;
  description: string;
};

type RawHomeServiceCard = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

const rawHomeServiceCards: RawHomeServiceCard[] = [
  {
    slug: "personal-branding",
    title: { en: "Personal Branding", de: "Personal Branding" },
    description: {
      en: "Natural portraits for entrepreneurs, consultants and professionals starting or growing their own business. Created for websites, LinkedIn, CV and personal branding.",
      de: "Natürliche Portraits für Unternehmer:innen, Berater:innen und Fachleute, die ihr eigenes Business aufbauen oder ausbauen. Für Website, LinkedIn, Lebenslauf und Personal Branding.",
    },
  },
  {
    slug: "business-events",
    title: { en: "Business & Events", de: "Business & Events" },
    description: {
      en: "Portraits and event photography for companies, teams and executives. Created for websites, LinkedIn, press and internal communication — professional, consistent and discreet.",
      de: "Portrait- und Eventfotografie für Unternehmen, Teams und Führungskräfte. Für Website, LinkedIn, Presse und interne Kommunikation — professionell, konsistent und diskret.",
    },
  },
  {
    slug: "portraits-love-stories",
    title: { en: "Portraits & Love Stories", de: "Portraits & Love Stories" },
    description: {
      en: "Timeless portraits for individuals and couples. For the moments and relationships that matter — captured naturally, without forced posing.",
      de: "Zeitlose Portraits für Einzelpersonen und Paare. Für die Momente und Beziehungen, die zählen — natürlich festgehalten, ohne gestelltes Posieren.",
    },
  },
];

export function getHomeServiceCards(locale: Locale): HomeServiceCard[] {
  return rawHomeServiceCards.map((c) => ({
    slug: c.slug,
    title: c.title[locale],
    description: c.description[locale],
  }));
}
