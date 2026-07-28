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
  ...portfolioTaxonomy.map(
    (category): Template => ({
      id: `photo-category-cover-${category.slug}`,
      title: `${category.title} — cover photo`,
      schemaType: "photo",
      value: {
        slot: "category-cover",
        category: category.slug,
        alt: `${category.title} cover photo`,
      },
    })
  ),
  ...portfolioTaxonomy.map(
    (category): Template => ({
      id: `photo-service-${category.slug}`,
      title: `${category.title} — services page photo`,
      schemaType: "photo",
      value: {
        slot: "service-photo",
        category: category.slug,
        alt: `${category.title} services photo`,
      },
    })
  ),
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
  ...portfolioTaxonomy.map(
    (category): Template => ({
      id: `photo-portfolio-${category.slug}`,
      title: `${category.title} — gallery photo`,
      schemaType: "photo",
      value: {
        slot: "portfolio",
        category: category.slug,
        alt: `${category.title} photo`,
      },
    })
  ),
];

export default templates;
