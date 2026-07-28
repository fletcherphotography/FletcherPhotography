import { Template } from "sanity";
import { portfolioTaxonomy, testimonialPeople, reviewPeople } from "./portfolioTaxonomy";

const templates: Template[] = [
  {
    id: "photo-hero",
    title: "Hero image",
    schemaType: "photo",
    value: { slot: "hero", alt: "Homepage hero photo" },
  },
  {
    id: "photo-home-gallery",
    title: "Home — gallery photo",
    schemaType: "photo",
    value: { slot: "home-gallery", alt: "Home gallery photo" },
  },
  {
    id: "photo-about-portrait",
    title: "About portrait",
    schemaType: "photo",
    value: { slot: "about-portrait", alt: "Portrait" },
  },
  {
    id: "photo-about-bts",
    title: "About — behind the scenes photo",
    schemaType: "photo",
    value: { slot: "about-bts", alt: "Behind the scenes" },
  },
  {
    id: "photo-logo",
    title: "Brand logo",
    schemaType: "photo",
    value: { slot: "logo", alt: "Brand logo" },
  },
  ...testimonialPeople.map(
    (p): Template => ({
      id: `photo-testimonial-${p.id}`,
      title: `Testimonial photo — ${p.name}`,
      schemaType: "photo",
      value: { slot: "testimonial", personId: p.id, alt: p.name },
    })
  ),
  ...reviewPeople.map(
    (p): Template => ({
      id: `photo-review-${p.id}`,
      title: `Review photo — ${p.name}`,
      schemaType: "photo",
      value: { slot: "review", personId: p.id, alt: p.name },
    })
  ),
  ...portfolioTaxonomy.flatMap((category) =>
    category.subcategories.map(
      (sub): Template => ({
        id: `photo-portfolio-${category.slug}-${sub.slug}`,
        title: `${category.title} — ${sub.title} photo`,
        schemaType: "photo",
        value: {
          slot: "portfolio",
          category: category.slug,
          subcategory: sub.slug,
          alt: `${sub.title} photo`,
        },
      })
    )
  ),
];

export default templates;
