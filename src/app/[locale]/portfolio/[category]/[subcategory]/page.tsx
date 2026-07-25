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
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSubcategoryParams().map((p) => ({ locale, ...p }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; subcategory: string }>;
}): Promise<Metadata> {
  const raw = await params;
  const locale = resolveLocale(raw.locale);
  const found = getSubcategory(locale, raw.category, raw.subcategory);
  if (!found) return {};
  return {
    title: found.subcategory.title,
    description: found.subcategory.seoIntro,
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; subcategory: string }>;
}) {
  const raw = await params;
  const locale = resolveLocale(raw.locale);
  const category = raw.category;
  const subcategory = raw.subcategory;
  const dict = getDictionary(locale);
  const found = getSubcategory(locale, category, subcategory);
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
            title={dict.common.letsWorkTogetherTitle}
            text={dict.common.letsWorkTogetherText}
            ctaLabel={dict.common.contactWhatsApp}
          />
        </FadeIn>
      </Section>
    </>
  );
}
