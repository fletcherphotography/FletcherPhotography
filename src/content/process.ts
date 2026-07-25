import { Locale } from "@/i18n/config";

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};

type RawProcessStep = {
  id: string;
  step: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

const rawProcessSteps: RawProcessStep[] = [
  {
    id: "enquire",
    step: 1,
    title: { en: "Enquire", de: "Anfragen" },
    description: {
      en: "Tell me what you have in mind.",
      de: "Erzähl mir, was du dir vorstellst.",
    },
  },
  {
    id: "prepare",
    step: 2,
    title: { en: "Prepare", de: "Vorbereiten" },
    description: {
      en: "Let's have a call and discuss the idea and concept. After you will receive your personal guide with outfit, timing and posing support.",
      de: "Wir telefonieren kurz und besprechen Idee und Konzept. Danach erhältst du deinen persönlichen Guide mit Outfit-, Timing- und Posing-Tipps.",
    },
  },
  {
    id: "shoot",
    step: 3,
    title: { en: "Shoot", de: "Shooting" },
    description: {
      en: "Relaxed direction, real moments and professional thoughtful imagery.",
      de: "Entspannte Anleitung, echte Momente und durchdachte, professionelle Bilder.",
    },
  },
  {
    id: "receive",
    step: 4,
    title: { en: "Receive", de: "Erhalten" },
    description: {
      en: "Within a few days receive your edited online gallery, ready to use and share.",
      de: "Innerhalb weniger Tage erhältst du deine bearbeitete Online-Galerie, bereit zum Nutzen und Teilen.",
    },
  },
];

export function getProcessSteps(locale: Locale): ProcessStep[] {
  return rawProcessSteps.map((s) => ({
    id: s.id,
    step: s.step,
    title: s.title[locale],
    description: s.description[locale],
  }));
}
