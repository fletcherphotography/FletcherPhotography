import { defineField, defineType } from "sanity";
import { portfolioTaxonomy, testimonialPeople, reviewPeople } from "../portfolioTaxonomy";

const SLOTS = [
  { title: "Home hero background", value: "hero" },
  { title: "Home — gallery photo (after intro)", value: "home-gallery" },
  { title: "About — portrait", value: "about-portrait" },
  { title: "About — behind the scenes", value: "about-bts" },
  { title: "Testimonial photo (Home page)", value: "testimonial" },
  { title: "Review photo (Reviews page)", value: "review" },
  { title: "Portfolio category cover (Home + Portfolio page)", value: "category-cover" },
  { title: "Services page photo", value: "service-photo" },
  { title: "Portfolio gallery photo", value: "portfolio" },
  { title: "Brand logo (Home page)", value: "logo" },
];

const PORTFOLIO_CATEGORIES = portfolioTaxonomy.map((c) => ({ title: c.title, value: c.slug }));

const PORTFOLIO_SUBCATEGORIES = portfolioTaxonomy.flatMap((c) =>
  c.subcategories.map((s) => ({ title: s.title, value: s.slug }))
);

const PERSON_IDS = [
  ...testimonialPeople.map((p) => ({ title: `${p.name} (Home testimonial)`, value: p.id })),
  ...reviewPeople.map((p) => ({ title: `${p.name} (Review)`, value: p.id })),
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
      // Set automatically by the initial-value template when creating from a
      // section in the Studio's structure (Home/About/Reviews/Portfolio), so
      // it doesn't need to be shown or picked manually.
      hidden: true,
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
      title: "Person (testimonial/review)",
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
      hidden: ({ document }) =>
        !["portfolio", "category-cover", "service-photo"].includes(document?.slot as string),
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
