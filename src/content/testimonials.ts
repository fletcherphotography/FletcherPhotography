import { Locale } from "@/i18n/config";

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  photo?: string;
};

type RawTestimonial = {
  id: string;
  name: string;
  quote: Record<Locale, string>;
};

// Home page "Kind words and the faces behind them" — 4 entries.
const rawTestimonials: RawTestimonial[] = [
  {
    id: "t1",
    name: "Sophie M.",
    quote: {
      en: "I felt completely at ease the whole time. The photos look like me on a really good day, not like a stranger's version of me.",
      de: "Ich fühlte mich die ganze Zeit völlig entspannt. Die Fotos sehen aus wie ich an einem richtig guten Tag, nicht wie eine fremde Version von mir.",
    },
  },
  {
    id: "t2",
    name: "David R.",
    quote: {
      en: "Clear direction, zero awkwardness. We now have headshots the whole team actually likes using.",
      de: "Klare Anleitung, keine Unsicherheit. Wir haben jetzt Headshots, die das ganze Team wirklich gerne benutzt.",
    },
  },
  {
    id: "t3",
    name: "Elena K.",
    quote: {
      en: "It never felt posed. Just relaxed conversation and real moments that turned into images we'll keep forever.",
      de: "Es hat sich nie gestellt angefühlt. Nur entspannte Gespräche und echte Momente, die zu Bildern wurden, die wir für immer behalten.",
    },
  },
  {
    id: "t4",
    name: "Marco B.",
    quote: {
      en: "Professional, warm, and fast to work with. The gallery arrived exactly when promised and every image was usable.",
      de: "Professionell, herzlich und schnell in der Zusammenarbeit. Die Galerie kam genau wie versprochen an, und jedes Bild war brauchbar.",
    },
  },
];

export function getTestimonials(locale: Locale): Testimonial[] {
  return rawTestimonials.map((t) => ({ id: t.id, name: t.name, quote: t.quote[locale] }));
}
