import { Locale } from "@/i18n/config";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type RawFaqItem = {
  id: string;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
};

const rawFaqItems: RawFaqItem[] = [
  {
    id: "f1",
    question: {
      en: "What kind of photography do you offer?",
      de: "Welche Art von Fotografie bietest du an?",
    },
    answer: {
      en: "I focus on portrait photography for individuals, entrepreneurs, professionals, teams and companies. This includes personal branding portraits, business portraits, company portraits and corporate events, as well as portraits and love stories for private clients.",
      de: "Mein Fokus liegt auf Portraitfotografie für Einzelpersonen, Unternehmer:innen, Fachleute, Teams und Unternehmen. Dazu gehören Personal-Branding-Portraits, Business-Portraits, Unternehmensportraits und Firmenevents sowie Portraits und Love Stories für private Kund:innen.",
    },
  },
  {
    id: "f2",
    question: {
      en: "Do I need to know how to pose?",
      de: "Muss ich wissen, wie ich posieren soll?",
    },
    answer: {
      en: "No. Before the shoot, you'll get a short guide with posing tips, so you know what to expect. And during the shoot itself, I'll guide you through the poses, so you can just relax and let me take care of the rest.",
      de: "Nein. Vor dem Shooting erhältst du einen kurzen Guide mit Posing-Tipps, damit du weisst, was dich erwartet. Und während des Shootings leite ich dich durch die Posen, sodass du dich einfach entspannen kannst.",
    },
  },
  {
    id: "f3",
    question: { en: "Where do you work?", de: "Wo arbeitest du?" },
    answer: {
      en: "Based in Zurich, available across Switzerland.",
      de: "Mit Sitz in Zürich, verfügbar in der ganzen Schweiz.",
    },
  },
  {
    id: "f4",
    question: {
      en: "How quickly will I receive my photos?",
      de: "Wie schnell erhalte ich meine Fotos?",
    },
    answer: {
      en: "Delivery depends on the type of session and the number of images. In most cases, portrait sessions are delivered within 5 working days after the selection.",
      de: "Die Lieferzeit hängt von der Art der Session und der Anzahl der Bilder ab. In den meisten Fällen werden Portrait-Sessions innerhalb von 5 Werktagen nach der Auswahl geliefert.",
    },
  },
  {
    id: "f5",
    question: {
      en: "Can you help me prepare for the shoot?",
      de: "Hilfst du mir bei der Vorbereitung auf das Shooting?",
    },
    answer: {
      en: "Yes. Before every session, we have a short call to discuss the concept, location and outfits. I also send you a preparation guide with posing tips ahead of time.",
      de: "Ja. Vor jeder Session sprechen wir kurz telefonisch über Konzept, Location und Outfits. Zusätzlich schicke ich dir vorab einen Vorbereitungs-Guide mit Posing-Tipps.",
    },
  },
];

export function getFaqItems(locale: Locale): FaqItem[] {
  return rawFaqItems.map((f) => ({
    id: f.id,
    question: f.question[locale],
    answer: f.answer[locale],
  }));
}
