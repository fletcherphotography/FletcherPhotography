import { Locale } from "./config";

export type Dictionary = {
  nav: {
    home: string;
    portfolio: string;
    services: string;
    about: string;
    reviews: string;
    contact: string;
  };
  common: {
    viewPortfolio: string;
    getInTouch: string;
    letsWorkTogetherTitle: string;
    letsWorkTogetherText: string;
    contactWhatsApp: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    trustTitle: string;
    trustText: string;
    testimonialsTitle: string;
    processEyebrow: string;
    processTitle: string;
    brandsTitle: string;
    faqTitle: string;
  };
  portfolio: { eyebrow: string; title: string; subtitle: string };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    whatsIncluded: string;
    sessionsHeading: string;
  };
  about: {
    heading: string;
    intro1: string;
    intro2: string;
    behindTitle: string;
    behindSubtitle: string;
    momentsTitle: string;
  };
  reviews: { eyebrow: string; title: string; subtitle: string };
  contact: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    phone: string;
    phoneOptional: string;
    message: string;
    consent: string;
    privacyPolicy: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { whatsapp: string; email: string; instagram: string; contact: string };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      services: "Services",
      about: "About",
      reviews: "Reviews",
      contact: "Contact",
    },
    common: {
      viewPortfolio: "View portfolio",
      getInTouch: "Get in touch",
      letsWorkTogetherTitle: "Let's work together",
      letsWorkTogetherText:
        "Tell me what you are planning, and let's create images with presence, purpose and real feeling.",
      contactWhatsApp: "Contact via WhatsApp",
    },
    home: {
      heroEyebrow: "Professional photography in Switzerland",
      heroTitle: "Portraits for your professional image and your story",
      heroText:
        "Based in Zurich, I create natural portraits for individuals, entrepreneurs, professionals, teams and companies — across Zurich and Switzerland. Every session is planned around you: your goals, your comfort and how the images will actually be used — for your website, LinkedIn, press, or simply for yourself. The result is always the same — natural, professional images that feel like you.",
      trustTitle: "Working with individuals and companies",
      trustText:
        "Alongside personal portraits, I work with companies, teams and brands across Zurich and Switzerland — on portraits, events and imagery for professional communication.",
      testimonialsTitle: "Kind words and the faces behind them",
      processEyebrow: "Process",
      processTitle: "Simple from first message to final gallery",
      brandsTitle: "Trusted by Brands and Organisations Across Switzerland",
      faqTitle: "Frequently Asked Questions",
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Work, organised by what you need it for",
      subtitle:
        "Explore photography across three categories — business and events, personal branding, and portraits and love stories.",
    },
    services: {
      eyebrow: "Services",
      title: "Photography for every kind of story",
      subtitle:
        "Clear, structured sessions with no overwhelming price lists — get in touch for a quote tailored to you.",
      whatsIncluded: "What's included",
      sessionsHeading: "Sessions",
    },
    about: {
      heading: "Hi, I'm Anna",
      intro1:
        "I started photography because I love the moment someone stops performing for the camera and just becomes themselves. That's the moment I'm always working towards — whether it's a business headshot, a couple's engagement session, or a company event.",
      intro2:
        "My approach is simple: clear direction, genuine conversation, and enough patience to let real expressions happen. You don't need modelling experience — you just need to show up.",
      behindTitle: "Behind the camera",
      behindSubtitle:
        "I keep sessions relaxed and well-organised — from the first message, through a preparation call with outfit and posing guidance, to a supported, unhurried shoot.",
      momentsTitle: "A few moments from recent sessions",
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What clients say",
      subtitle: "A few words from the people I've had the pleasure of photographing.",
    },
    contact: {
      title: "Let's plan your shoot.",
      subtitle:
        "Tell me a little about what you have in mind, and I'll get back to you with the next steps.",
      fullName: "Full name",
      email: "Email",
      phone: "Phone number",
      phoneOptional: "(optional)",
      message: "Tell me about your idea",
      consent: "I agree to the",
      privacyPolicy: "Privacy Policy",
      send: "Send message",
      sending: "Sending...",
      success: "Thank you your message is on its way. I'll get back to you as soon as possible.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      whatsapp: "WhatsApp",
      email: "Email",
      instagram: "Instagram",
      contact: "Contact",
    },
  },
  de: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      services: "Leistungen",
      about: "Über mich",
      reviews: "Bewertungen",
      contact: "Kontakt",
    },
    common: {
      viewPortfolio: "Portfolio ansehen",
      getInTouch: "Kontakt aufnehmen",
      letsWorkTogetherTitle: "Lass uns zusammenarbeiten",
      letsWorkTogetherText:
        "Erzähl mir, was du vorhast, und lass uns Bilder mit Präsenz, Zweck und echtem Gefühl schaffen.",
      contactWhatsApp: "Per WhatsApp kontaktieren",
    },
    home: {
      heroEyebrow: "Professionelle Fotografie in der Schweiz",
      heroTitle: "Portraits für dein berufliches Bild und deine Geschichte",
      heroText:
        "Mit Sitz in Zürich fotografiere ich natürliche Portraits für Einzelpersonen, Unternehmer:innen, Fachleute, Teams und Unternehmen — in Zürich und der ganzen Schweiz. Jede Session wird auf dich abgestimmt: deine Ziele, dein Wohlbefinden und wie die Bilder tatsächlich genutzt werden — für deine Website, LinkedIn, die Presse oder einfach für dich selbst. Das Ergebnis ist immer dasselbe: natürliche, professionelle Bilder, die wirklich nach dir aussehen.",
      trustTitle: "Zusammenarbeit mit Einzelpersonen und Unternehmen",
      trustText:
        "Neben persönlichen Portraits arbeite ich mit Unternehmen, Teams und Marken in Zürich und der ganzen Schweiz zusammen — für Portraits, Events und Bildmaterial für die professionelle Kommunikation.",
      testimonialsTitle: "Nette Worte und die Gesichter dahinter",
      processEyebrow: "Ablauf",
      processTitle: "Einfach von der ersten Nachricht bis zur fertigen Galerie",
      brandsTitle: "Vertraut von Marken und Organisationen in der ganzen Schweiz",
      faqTitle: "Häufig gestellte Fragen",
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Arbeiten, geordnet nach deinem Bedarf",
      subtitle:
        "Entdecke Fotografie in drei Kategorien — Business & Events, Personal Branding sowie Portraits & Love Stories.",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Fotografie für jede Art von Geschichte",
      subtitle:
        "Klare, strukturierte Sessions ohne überladene Preislisten — melde dich für ein individuelles Angebot.",
      whatsIncluded: "Das ist inklusive",
      sessionsHeading: "Sessions",
    },
    about: {
      heading: "Hallo, ich bin Anna",
      intro1:
        "Ich habe mit der Fotografie angefangen, weil ich den Moment liebe, in dem jemand aufhört, für die Kamera zu posieren, und einfach er selbst wird. Genau darauf arbeite ich immer hin — ob Business-Headshot, Verlobungsshooting oder Firmenevent.",
      intro2:
        "Mein Ansatz ist einfach: klare Anleitung, ehrliches Gespräch und genug Geduld, damit echte Ausdrücke entstehen können. Du brauchst keine Modelerfahrung — du musst nur da sein.",
      behindTitle: "Hinter der Kamera",
      behindSubtitle:
        "Ich halte Sessions entspannt und gut organisiert — von der ersten Nachricht über ein Vorgespräch mit Outfit- und Posing-Tipps bis zu einem begleiteten, entspannten Shooting.",
      momentsTitle: "Ein paar Momente aus letzten Sessions",
    },
    reviews: {
      eyebrow: "Bewertungen",
      title: "Das sagen Kund:innen",
      subtitle: "Ein paar Worte von Menschen, die ich fotografieren durfte.",
    },
    contact: {
      title: "Lass uns dein Shooting planen.",
      subtitle:
        "Erzähl mir kurz, was du vorhast, und ich melde mich mit den nächsten Schritten zurück.",
      fullName: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefonnummer",
      phoneOptional: "(optional)",
      message: "Erzähl mir von deiner Idee",
      consent: "Ich stimme der",
      privacyPolicy: "Datenschutzerklärung",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      success: "Danke, deine Nachricht ist unterwegs. Ich melde mich so schnell wie möglich.",
      error: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    },
    footer: {
      whatsapp: "WhatsApp",
      email: "E-Mail",
      instagram: "Instagram",
      contact: "Kontakt",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
