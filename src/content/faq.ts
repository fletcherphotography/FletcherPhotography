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
    question: { en: "How do I book a session?", de: "Wie buche ich eine Session?" },
    answer: {
      en: "Send a message via the contact form or WhatsApp with a few details about what you have in mind, and I'll get back to you with next steps and availability.",
      de: "Schick mir eine Nachricht über das Kontaktformular oder WhatsApp mit ein paar Details zu deiner Idee, und ich melde mich mit den nächsten Schritten und freien Terminen.",
    },
  },
  {
    id: "f2",
    question: { en: "What should I wear?", de: "Was soll ich anziehen?" },
    answer: {
      en: "After booking you'll receive a personal guide covering outfit ideas, timing and posing support tailored to your session.",
      de: "Nach der Buchung erhältst du einen persönlichen Guide mit Outfit-Ideen, Timing und Posing-Tipps, abgestimmt auf deine Session.",
    },
  },
  {
    id: "f3",
    question: { en: "Where do the sessions take place?", de: "Wo finden die Sessions statt?" },
    answer: {
      en: "Sessions can take place at your office, a location of your choice, or a studio — we'll agree on the best fit during the preparation call.",
      de: "Sessions können in deinem Büro, an einem Ort deiner Wahl oder im Studio stattfinden — wir klären den besten Ort im Vorgespräch.",
    },
  },
  {
    id: "f4",
    question: { en: "How long does a session take?", de: "Wie lange dauert eine Session?" },
    answer: {
      en: "Most sessions run between 45 minutes and 2 hours depending on the type of shoot, discussed and confirmed before the day.",
      de: "Die meisten Sessions dauern je nach Art des Shootings zwischen 45 Minuten und 2 Stunden, abgesprochen vor dem Termin.",
    },
  },
  {
    id: "f5",
    question: { en: "When will I receive my photos?", de: "Wann erhalte ich meine Fotos?" },
    answer: {
      en: "You'll receive your edited online gallery within a few days of the shoot, ready to use and share.",
      de: "Du erhältst deine bearbeitete Online-Galerie innerhalb weniger Tage nach dem Shooting, bereit zum Nutzen und Teilen.",
    },
  },
  {
    id: "f6",
    question: {
      en: "Do you travel for events or corporate shoots?",
      de: "Reist du für Events oder Firmenshootings?",
    },
    answer: {
      en: "Yes, I photograph businesses and events across Switzerland — travel can be arranged as part of your quote.",
      de: "Ja, ich fotografiere Unternehmen und Events in der ganzen Schweiz — Reisen können Teil deines Angebots sein.",
    },
  },
  {
    id: "f7",
    question: { en: "How much does a session cost?", de: "Was kostet eine Session?" },
    answer: {
      en: "Pricing depends on the type of session. Get in touch for a tailored quote based on your needs.",
      de: "Der Preis hängt von der Art der Session ab. Melde dich für ein individuelles Angebot.",
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
