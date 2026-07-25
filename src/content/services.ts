export type ServiceGroup = {
  slug: string;
  title: string;
  intro: string;
  items?: string[];
  ctaLabel: string;
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "business-events",
    title: "Business & Events",
    intro:
      "Professional, consistent and natural imagery for businesses — planned around your people, brand and schedule.",
    items: [
      "Professional Headshots",
      "Corporate Portraits",
      "Team Days",
      "Company Photography",
      "Conferences",
      "Corporate Events",
      "Event Coverage",
    ],
    ctaLabel: "Request a business quote",
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    intro:
      "A thoughtful photography session that gives founders, consultants, coaches, creatives, experts and entrepreneurs natural, professional content for your website, LinkedIn, PR and social media.",
    ctaLabel: "Plan your branding session",
  },
  {
    slug: "portraits-love-stories",
    title: "Portraits & Love Stories",
    intro:
      "Relaxed, honest photography for individual portraits, couple sessions, family, lifestyle sessions and engagement shoots — for meaningful moments, real connection and images you will want to keep.",
    ctaLabel: "Plan your session",
  },
];

export const pricingNote = {
  startingFrom: "Starting from CHF ...",
  detail:
    "The exact price can be discussed after personal contact. Tailored quotes are available for teams, events and commercial projects.",
};
