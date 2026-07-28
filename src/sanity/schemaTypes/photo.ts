import { defineField, defineType } from "sanity";

const SLOTS = [
  { title: "Home hero background", value: "hero" },
  { title: "About — portrait", value: "about-portrait" },
  { title: "About — behind the scenes", value: "about-bts" },
  { title: "Testimonial photo (Home page)", value: "testimonial" },
  { title: "Review photo (Reviews page)", value: "review" },
  { title: "Portfolio gallery photo", value: "portfolio" },
  { title: "Brand logo (Home page)", value: "logo" },
];

const PORTFOLIO_CATEGORIES = [
  { title: "Business & Events", value: "business-events" },
  { title: "Personal Branding", value: "personal-branding" },
  { title: "Portraits & Love Stories", value: "portraits-love-stories" },
];

const PORTFOLIO_SUBCATEGORIES = [
  { title: "Business Headshots", value: "business-headshots" },
  { title: "Team Photography", value: "team-photography" },
  { title: "Corporate Events", value: "corporate-events" },
  { title: "Founders & Entrepreneurs", value: "founders-entrepreneurs" },
  { title: "Creatives & Experts", value: "creatives-experts" },
  { title: "Branding Content", value: "branding-content" },
  { title: "Individual Portraits", value: "individual-portraits" },
  { title: "Couples & Love Stories", value: "couples-love-stories" },
  { title: "Lifestyle Portraits", value: "lifestyle-portraits" },
];

// Must match the testimonial/review ids in src/content/testimonials.ts and src/content/reviews.ts
const PERSON_IDS = [
  "t1", "t2", "t3", "t4",
  "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12",
];

export const photo = defineType({
  name: "photo",
  title: "Photo",
  type: "document",
  fields: [
    defineField({
      name: "slot",
      title: "Where does this photo go?",
      type: "string",
      options: { list: SLOTS, layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text (for SEO & accessibility)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "personId",
      title: "Person (testimonial/review id)",
      description: "Which testimonial or review card this photo belongs to.",
      type: "string",
      options: { list: PERSON_IDS },
      hidden: ({ document }) => !["testimonial", "review"].includes(document?.slot as string),
    }),
    defineField({
      name: "category",
      title: "Portfolio category",
      type: "string",
      options: { list: PORTFOLIO_CATEGORIES },
      hidden: ({ document }) => document?.slot !== "portfolio",
    }),
    defineField({
      name: "subcategory",
      title: "Portfolio subcategory",
      type: "string",
      options: { list: PORTFOLIO_SUBCATEGORIES },
      hidden: ({ document }) => document?.slot !== "portfolio",
    }),
    defineField({
      name: "name",
      title: "Brand name",
      type: "string",
      hidden: ({ document }) => document?.slot !== "logo",
    }),
    defineField({
      name: "link",
      title: "Brand website (optional)",
      type: "url",
      hidden: ({ document }) => document?.slot !== "logo",
    }),
    defineField({
      name: "order",
      title: "Order",
      description: "Lower numbers appear first (used for About/Portfolio galleries).",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "alt", subtitle: "slot", media: "image" },
  },
});
