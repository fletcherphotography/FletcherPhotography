import { Locale } from "@/i18n/config";

export type IncludedGroup = { label?: string; items: string[] };

export type ServiceGroup = {
  slug: string;
  title: string;
  tagline?: string;
  introParagraphs: string[];
  pricingFrom: string;
  includedGroups: IncludedGroup[];
  subcategories: string[];
  clientSubtext: string;
  ctaLabel: string;
};

type LocalizedIncludedGroup = { label?: Record<Locale, string>; items: Record<Locale, string[]> };

type RawServiceGroup = {
  slug: string;
  title: Record<Locale, string>;
  tagline?: Record<Locale, string>;
  introParagraphs: Record<Locale, string[]>;
  pricingFrom: Record<Locale, string>;
  includedGroups: LocalizedIncludedGroup[];
  subcategories: Record<Locale, string[]>;
  clientSubtext: Record<Locale, string>;
  ctaLabel: Record<Locale, string>;
};

const rawServiceGroups: RawServiceGroup[] = [
  {
    slug: "personal-branding",
    title: { en: "Personal Branding", de: "Personal Branding" },
    introParagraphs: {
      en: [
        "You're building your own business, practice or personal brand — and you need photos that represent you online, but you've never felt comfortable in front of a camera.",
        "I create natural personal branding portraits for entrepreneurs, coaches, consultants and professionals starting or growing their own business. The session is organized around your story, your goals and where the images will be used — website, LinkedIn, social media.",
        "I guide you calmly through the whole process, without forced posing, so the photos feel confident and genuinely you.",
        "I work in Zurich and across Switzerland.",
      ],
      de: [
        "Du baust dein eigenes Business, deine Praxis oder deine persönliche Marke auf — und brauchst Fotos, die dich online repräsentieren, hast dich aber vor der Kamera nie wohlgefühlt.",
        "Ich erstelle natürliche Personal-Branding-Portraits für Unternehmer:innen, Coaches, Berater:innen und Fachleute, die ihr eigenes Business aufbauen oder ausbauen. Die Session wird um deine Geschichte, deine Ziele und den Verwendungszweck der Bilder herum geplant — Website, LinkedIn, Social Media.",
        "Ich begleite dich ruhig durch den gesamten Prozess, ohne gestelltes Posieren, damit die Fotos selbstbewusst wirken und wirklich nach dir aussehen.",
        "Ich arbeite in Zürich und der ganzen Schweiz.",
      ],
    },
    pricingFrom: { en: "Sessions from CHF 250", de: "Sessions ab CHF 250" },
    includedGroups: [
      {
        items: {
          en: [
            "Concept & planning call",
            "Minimum 1-hour session",
            "2 outfits",
            "Posing guide",
            "Online gallery with 20+ retouched photos",
            "Delivery within 5 business days",
          ],
          de: [
            "Konzept- und Planungsgespräch",
            "Mindestens 1 Stunde Session",
            "2 Outfits",
            "Posing-Guide",
            "Online-Galerie mit 20+ retuschierten Fotos",
            "Lieferung innerhalb von 5 Werktagen",
          ],
        },
      },
    ],
    subcategories: {
      en: [
        "Personal Branding Session",
        "LinkedIn & Website Portraits",
        "On-Location Branding",
        "Content Session (multiple outfits & settings for social media)",
        "Founder & Entrepreneur Portraits",
      ],
      de: [
        "Personal-Branding-Session",
        "LinkedIn- & Website-Portraits",
        "Branding vor Ort",
        "Content-Session (mehrere Outfits & Locations für Social Media)",
        "Gründer:innen- & Unternehmer:innen-Portraits",
      ],
    },
    clientSubtext: {
      en: "Personal branding portraits that show who you are, without feeling staged or artificial.",
      de: "Personal-Branding-Portraits, die zeigen, wer du bist — ohne gestellt oder künstlich zu wirken.",
    },
    ctaLabel: { en: "Start your enquiry", de: "Anfrage starten" },
  },
  {
    slug: "business-events",
    title: { en: "Business & Events", de: "Business & Events" },
    tagline: { en: "Corporate & Event Photography", de: "Unternehmens- & Eventfotografie" },
    introParagraphs: {
      en: [
        "Your company needs clear portraits for websites, LinkedIn, press, internal communication and business profiles — plus reliable coverage for your events.",
        "I create consistent corporate portraits for teams, executives and employees, and discreet photography for conferences, presentations and company events. The session is organized around your schedule, your location and the way the images will be used.",
        "I guide each person in a simple and calm way, so the portraits look professional, natural and not forced — and I move through events without disrupting the atmosphere.",
        "I work in Zurich and across Switzerland.",
      ],
      de: [
        "Dein Unternehmen braucht klare Portraits für Website, LinkedIn, Presse, interne Kommunikation und Unternehmensprofile — plus zuverlässige Begleitung deiner Events.",
        "Ich erstelle einheitliche Unternehmensportraits für Teams, Führungskräfte und Mitarbeitende sowie diskrete Fotografie für Konferenzen, Präsentationen und Firmenevents. Die Session wird um deinen Zeitplan, deinen Standort und den Verwendungszweck der Bilder herum organisiert.",
        "Ich leite jede Person auf einfache, ruhige Weise an, damit die Portraits professionell und natürlich wirken, nicht gestellt — und bei Events bewege ich mich, ohne die Atmosphäre zu stören.",
        "Ich arbeite in Zürich und der ganzen Schweiz.",
      ],
    },
    pricingFrom: { en: "Sessions from CHF 250", de: "Sessions ab CHF 250" },
    includedGroups: [
      {
        label: { en: "Business Portraits", de: "Business-Portraits" },
        items: {
          en: [
            "Minimum 1-hour session",
            "Professional equipment",
            "Posing guide",
            "Online gallery with 20+ retouched photos",
            "Delivery within 5 business days",
          ],
          de: [
            "Mindestens 1 Stunde Session",
            "Professionelles Equipment",
            "Posing-Guide",
            "Online-Galerie mit 20+ retuschierten Fotos",
            "Lieferung innerhalb von 5 Werktagen",
          ],
        },
      },
      {
        label: { en: "Events", de: "Events" },
        items: {
          en: [
            "Minimum 2-hour coverage",
            "Professional equipment",
            "Online gallery with 50+ retouched photos",
            "Delivery within 5 business days",
          ],
          de: [
            "Mindestens 2 Stunden Begleitung",
            "Professionelles Equipment",
            "Online-Galerie mit 50+ retuschierten Fotos",
            "Lieferung innerhalb von 5 Werktagen",
          ],
        },
      },
    ],
    subcategories: {
      en: [
        "Team Portrait Day",
        "On-Location Corporate Portraits",
        "Executive & Board Portraits",
        "Neutral or Company-Style Background",
        "Group Portraits",
        "Corporate Events & Conferences",
      ],
      de: [
        "Team-Portrait-Tag",
        "Unternehmensportraits vor Ort",
        "Führungskräfte- & Vorstandsportraits",
        "Neutraler oder Unternehmens-Hintergrund",
        "Gruppenportraits",
        "Firmenevents & Konferenzen",
      ],
    },
    clientSubtext: {
      en: "Corporate portraits and event photography that show your company professionally, while keeping its natural atmosphere.",
      de: "Unternehmensportraits und Eventfotografie, die dein Unternehmen professionell zeigen und dabei die natürliche Atmosphäre bewahren.",
    },
    ctaLabel: { en: "Start your enquiry", de: "Anfrage starten" },
  },
  {
    slug: "portraits-love-stories",
    title: { en: "Portraits & Love Stories", de: "Portraits & Love Stories" },
    introParagraphs: {
      en: [
        "You want photos of yourself or the people you love that actually feel like you — not stiff, posed, or forced.",
        "I create natural portraits and love story sessions for individuals and couples, capturing real connection and genuine moments rather than performed ones. The session is planned around your story, your comfort and the setting that means something to you.",
        "I guide you gently throughout, so you can relax and simply be yourselves, while I take care of the rest.",
        "I work in Zurich and across Switzerland.",
      ],
      de: [
        "Du möchtest Fotos von dir selbst oder den Menschen, die du liebst, die sich wirklich nach dir anfühlen — nicht steif, gestellt oder unnatürlich.",
        "Ich erstelle natürliche Portraits und Love-Story-Sessions für Einzelpersonen und Paare und halte echte Verbindung und authentische Momente fest statt inszenierter. Die Session wird um deine Geschichte, dein Wohlbefinden und den für dich bedeutungsvollen Ort herum geplant.",
        "Ich begleite dich sanft durch die gesamte Session, sodass du dich entspannen und einfach du selbst sein kannst, während ich mich um den Rest kümmere.",
        "Ich arbeite in Zürich und der ganzen Schweiz.",
      ],
    },
    pricingFrom: { en: "Sessions from CHF 250", de: "Sessions ab CHF 250" },
    includedGroups: [
      {
        label: { en: "Personal Portraits", de: "Personal Portraits" },
        items: {
          en: [
            "Minimum 1-hour session",
            "Professional equipment",
            "Posing guide",
            "Online gallery with 15+ retouched photos",
            "Delivery within 5 business days",
          ],
          de: [
            "Mindestens 1 Stunde Session",
            "Professionelles Equipment",
            "Posing-Guide",
            "Online-Galerie mit 15+ retuschierten Fotos",
            "Lieferung innerhalb von 5 Werktagen",
          ],
        },
      },
      {
        label: { en: "Family & Love Stories", de: "Family & Love Stories" },
        items: {
          en: [
            "Minimum 1-hour session",
            "Posing help",
            "Online gallery delivered within 7 business days",
            "Number of photos discussed personally",
          ],
          de: [
            "Mindestens 1 Stunde Session",
            "Posing-Unterstützung",
            "Online-Galerie, Lieferung innerhalb von 7 Werktagen",
            "Anzahl der Fotos wird persönlich besprochen",
          ],
        },
      },
    ],
    subcategories: {
      en: [
        "Individual Portrait Session",
        "Couple & Love Story Session",
        "Engagement Session",
        "Anniversary Session",
        "On-Location or Studio",
      ],
      de: [
        "Einzelportrait-Session",
        "Paar- & Love-Story-Session",
        "Verlobungs-Session",
        "Jubiläums-Session",
        "Vor Ort oder im Studio",
      ],
    },
    clientSubtext: {
      en: "Portraits and love stories that capture real connection, without feeling posed or artificial.",
      de: "Portraits und Love Stories, die echte Verbindung einfangen — ohne gestellt oder künstlich zu wirken.",
    },
    ctaLabel: { en: "Start your enquiry", de: "Anfrage starten" },
  },
];

export function getServiceGroups(locale: Locale): ServiceGroup[] {
  return rawServiceGroups.map((g) => ({
    slug: g.slug,
    title: g.title[locale],
    tagline: g.tagline?.[locale],
    introParagraphs: g.introParagraphs[locale],
    pricingFrom: g.pricingFrom[locale],
    includedGroups: g.includedGroups.map((group) => ({
      label: group.label?.[locale],
      items: group.items[locale],
    })),
    subcategories: g.subcategories[locale],
    clientSubtext: g.clientSubtext[locale],
    ctaLabel: g.ctaLabel[locale],
  }));
}
