import { Locale } from "@/i18n/config";
import { Testimonial } from "./testimonials";

export type Review = Testimonial & { role?: string };

type RawReview = {
  id: string;
  name: string;
  role?: Record<Locale, string>;
  quote: Record<Locale, string>;
};

// Reviews page — 10-12 entries.
const rawReviews: RawReview[] = [
  {
    id: "r1",
    name: "Sophie M.",
    role: { en: "Founder, Studio Line", de: "Gründerin, Studio Line" },
    quote: {
      en: "I felt completely at ease the whole time. The photos look like me on a really good day.",
      de: "Ich fühlte mich die ganze Zeit völlig entspannt. Die Fotos sehen aus wie ich an einem richtig guten Tag.",
    },
  },
  {
    id: "r2",
    name: "David R.",
    role: { en: "Team Lead", de: "Teamleiter" },
    quote: {
      en: "Clear direction, zero awkwardness. The whole team actually likes using these headshots.",
      de: "Klare Anleitung, keine Unsicherheit. Das ganze Team benutzt diese Headshots wirklich gerne.",
    },
  },
  {
    id: "r3",
    name: "Elena K.",
    quote: {
      en: "It never felt posed. Just relaxed conversation and real moments we'll keep forever.",
      de: "Es hat sich nie gestellt angefühlt. Nur entspannte Gespräche und echte Momente, die wir für immer behalten.",
    },
  },
  {
    id: "r4",
    name: "Marco B.",
    role: { en: "Operations Manager", de: "Operations Manager" },
    quote: {
      en: "Professional, warm, and fast to work with. Every image in the gallery was usable.",
      de: "Professionell, herzlich und schnell in der Zusammenarbeit. Jedes Bild in der Galerie war brauchbar.",
    },
  },
  {
    id: "r5",
    name: "Julia T.",
    quote: {
      en: "Best photography experience I've had. Patient, calm, and genuinely good at putting people at ease.",
      de: "Die beste Fotografie-Erfahrung, die ich je hatte. Geduldig, ruhig und wirklich gut darin, Menschen zu entspannen.",
    },
  },
  {
    id: "r6",
    name: "Nina & Paul",
    quote: {
      en: "Our engagement photos feel like us, not like a staged shoot. We look back at them often.",
      de: "Unsere Verlobungsfotos fühlen sich nach uns an, nicht nach einem gestellten Shooting. Wir schauen sie oft an.",
    },
  },
  {
    id: "r7",
    name: "Carlos V.",
    role: { en: "Consultant", de: "Berater" },
    quote: {
      en: "Exactly the LinkedIn-ready content I needed, delivered quickly and with clear guidance throughout.",
      de: "Genau der LinkedIn-taugliche Content, den ich brauchte — schnell geliefert und mit klarer Anleitung.",
    },
  },
  {
    id: "r8",
    name: "Laura S.",
    quote: {
      en: "Gentle direction made all the difference. I've never enjoyed being photographed until now.",
      de: "Die sanfte Anleitung hat den Unterschied gemacht. Ich habe es noch nie genossen, fotografiert zu werden — bis jetzt.",
    },
  },
  {
    id: "r9",
    name: "Tobias H.",
    role: { en: "Founder", de: "Gründer" },
    quote: {
      en: "Sharp, natural branding photos that finally match how our company actually feels.",
      de: "Scharfe, natürliche Branding-Fotos, die endlich zeigen, wie sich unser Unternehmen wirklich anfühlt.",
    },
  },
  {
    id: "r10",
    name: "Anna P.",
    quote: {
      en: "A calm, unrushed session that produced some of my favorite photos of myself.",
      de: "Eine ruhige, entspannte Session, aus der einige meiner liebsten Fotos von mir entstanden sind.",
    },
  },
  {
    id: "r11",
    name: "Michael F.",
    role: { en: "Event Organiser", de: "Eventorganisator" },
    quote: {
      en: "Coverage was thorough and unobtrusive — guests barely noticed the camera.",
      de: "Die Begleitung war umfassend und unaufdringlich — die Gäste haben die Kamera kaum bemerkt.",
    },
  },
  {
    id: "r12",
    name: "Isabelle D.",
    quote: {
      en: "From first message to gallery delivery, everything was simple and clearly communicated.",
      de: "Von der ersten Nachricht bis zur Lieferung der Galerie war alles einfach und klar kommuniziert.",
    },
  },
];

export function getReviews(locale: Locale): Review[] {
  return rawReviews.map((r) => ({
    id: r.id,
    name: r.name,
    role: r.role?.[locale],
    quote: r.quote[locale],
  }));
}
