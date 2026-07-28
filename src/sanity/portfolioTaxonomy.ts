export const portfolioTaxonomy = [
  {
    slug: "business-events",
    title: "Business & Events",
    subcategories: [
      { slug: "business-headshots", title: "Business Headshots" },
      { slug: "team-photography", title: "Team Photography" },
      { slug: "corporate-events", title: "Corporate Events" },
    ],
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    subcategories: [
      { slug: "founders-entrepreneurs", title: "Founders & Entrepreneurs" },
      { slug: "creatives-experts", title: "Creatives & Experts" },
      { slug: "branding-content", title: "Branding Content" },
    ],
  },
  {
    slug: "portraits-love-stories",
    title: "Portraits & Love Stories",
    subcategories: [
      { slug: "individual-portraits", title: "Individual Portraits" },
      { slug: "couples-love-stories", title: "Couples & Love Stories" },
      { slug: "lifestyle-portraits", title: "Lifestyle Portraits" },
    ],
  },
] as const;

// Must match src/content/testimonials.ts
export const testimonialPeople = [
  { id: "t1", name: "Sophie M." },
  { id: "t2", name: "David R." },
  { id: "t3", name: "Elena K." },
  { id: "t4", name: "Marco B." },
];

// Must match src/content/reviews.ts
export const reviewPeople = [
  { id: "r1", name: "Sophie M." },
  { id: "r2", name: "David R." },
  { id: "r3", name: "Elena K." },
  { id: "r4", name: "Marco B." },
  { id: "r5", name: "Julia T." },
  { id: "r6", name: "Nina & Paul" },
  { id: "r7", name: "Carlos V." },
  { id: "r8", name: "Laura S." },
  { id: "r9", name: "Tobias H." },
  { id: "r10", name: "Anna P." },
  { id: "r11", name: "Michael F." },
  { id: "r12", name: "Isabelle D." },
];
