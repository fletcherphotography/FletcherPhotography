import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  getAllSubcategoryParams,
  getSubcategory,
  getSubcategoryPhotos,
} from "@/content/portfolio";

export function generateStaticParams() {
  return getAllSubcategoryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { category, subcategory } = await params;
  const found = getSubcategory(category, subcategory);
  if (!found) return {};
  return {
    title: found.subcategory.title,
    description: found.subcategory.seoIntro,
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;
  const found = getSubcategory(category, subcategory);
  if (!found) notFound();

  const photos = getSubcategoryPhotos(category, subcategory);

  return (
    <>
      <Section className="pt-20 sm:pt-28" containerClassName="max-w-3xl">
        <FadeIn>
          <SectionHeading eyebrow={found.category.title} title={found.subcategory.title} />
          <p className="mt-6 text-base leading-relaxed text-neutral-600">
            {found.subcategory.seoIntro}
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <GalleryGrid photos={photos} />
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <CTASection
            title="Let's work together"
            text="Tell me what you are planning, and let's create images with presence, purpose and real feeling."
            ctaLabel="Contact via WhatsApp"
          />
        </FadeIn>
      </Section>
    </>
  );
}
