import { client } from "./client";
import { isSanityConfigured } from "./env";
import { urlFor } from "./image";

type SanityPhotoDoc = {
  _id: string;
  slot: string;
  image: import("sanity").Image;
  alt: string;
  personId?: string;
  category?: string;
  subcategory?: string;
  name?: string;
  link?: string;
  order?: number;
};

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T[]> {
  if (!isSanityConfigured) return [];
  try {
    return await client.fetch<T[]>(query, params, { next: { revalidate: 60 } });
  } catch {
    // Sanity unreachable / misconfigured — degrade to static content rather than break the page.
    return [];
  }
}

export async function getHeroImageUrl(): Promise<string | undefined> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "hero"] | order(_createdAt desc) [0...1]`
  );
  return docs[0] ? urlFor(docs[0].image).width(1920).url() : undefined;
}

export async function getAboutPortraitUrl(): Promise<string | undefined> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "about-portrait"] | order(_createdAt desc) [0...1]`
  );
  return docs[0] ? urlFor(docs[0].image).width(1200).url() : undefined;
}

export async function getHomeGalleryUrls(): Promise<string[]> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "home-gallery"] | order(order asc, _createdAt asc)`
  );
  return docs.map((d) => urlFor(d.image).width(900).url());
}

export async function getAboutBtsUrls(): Promise<string[]> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "about-bts"] | order(order asc, _createdAt asc)`
  );
  return docs.map((d) => urlFor(d.image).width(800).url());
}

export async function getPersonPhotoUrl(personId: string): Promise<string | undefined> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot in ["testimonial", "review"] && personId == $personId] [0...1]`,
    { personId }
  );
  return docs[0] ? urlFor(docs[0].image).width(400).height(400).url() : undefined;
}

export async function getPersonPhotoUrls(personIds: string[]): Promise<Record<string, string>> {
  if (personIds.length === 0) return {};
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot in ["testimonial", "review"] && personId in $personIds]`,
    { personIds }
  );
  const map: Record<string, string> = {};
  for (const doc of docs) {
    if (doc.personId) map[doc.personId] = urlFor(doc.image).width(400).height(400).url();
  }
  return map;
}

// One shared gallery per category — subcategory is no longer used to split
// the gallery, only kept on documents as optional organizational metadata.
export async function getPortfolioPhotoUrls(category: string): Promise<string[]> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "portfolio" && category == $category] | order(order asc, _createdAt asc)`,
    { category }
  );
  return docs.map((d) => urlFor(d.image).width(1200).url());
}

// Dedicated category cover, used on the /portfolio landing page and the
// Home page service teaser cards.
export async function getCategoryCoverUrl(category: string): Promise<string | undefined> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "category-cover" && category == $category] | order(_createdAt desc) [0...1]`,
    { category }
  );
  return docs[0] ? urlFor(docs[0].image).width(1200).url() : undefined;
}

export async function getServicePhotoUrl(service: string): Promise<string | undefined> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "service-photo" && category == $category] | order(_createdAt desc) [0...1]`,
    { category: service }
  );
  return docs[0] ? urlFor(docs[0].image).width(1200).url() : undefined;
}

export type BrandLogoDoc = { name: string; url: string; link?: string };

export async function getBrandLogos(): Promise<BrandLogoDoc[]> {
  const docs = await safeFetch<SanityPhotoDoc>(
    `*[_type == "photo" && slot == "logo"] | order(order asc, _createdAt asc)`
  );
  return docs.map((d) => ({
    name: d.name ?? d.alt,
    url: urlFor(d.image).width(400).url(),
    link: d.link,
  }));
}
