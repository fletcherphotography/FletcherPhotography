import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllCategoryParams, getCategory, getCategoryPhotos } from "@/content/portfolio";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPortfolioPhotoUrls } from "@/sanity/queries";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllCategoryParams().map((p) => ({ locale, ...p }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const raw = await params;
  const locale = resolveLocale(raw.locale);
  const category = getCategory(locale, raw.category);
  if (!category) return {};
  return { title: category.title, description: category.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const raw = await params;
  const locale = resolveLocale(raw.locale);
  const categorySlug = raw.category;
  const dict = getDictionary(locale);
  const category = getCategory(locale, categorySlug);
  if (!category) notFound();

  const staticPhotos = getCategoryPhotos(category.slug);
  const sanityUrls = await getPortfolioPhotoUrls(category.slug);
  const photos =
    sanityUrls.length > 0
      ? sanityUrls.map((src, i) => ({
          id: `${category.slug}-sanity-${i}`,
          alt: `${category.title} photo ${i + 1}`,
          src,
        }))
      : staticPhotos;

  return (
    <>
      <Section className="pt-20 sm:pt-28" containerClassName="max-w-3xl">
        <FadeIn>
          <Button href={`/${locale}/portfolio`} variant="secondary" className="mb-8">
            ← {dict.portfolio.backToPortfolio}
          </Button>
          <SectionHeading
            eyebrow={dict.portfolio.eyebrow}
            title={category.title}
            subtitle={category.description}
          />
          <p className="mt-6 text-base leading-relaxed text-neutral-600">{category.intro}</p>

          <h2 className="mt-10 text-sm font-medium uppercase tracking-widest text-neutral-500">
            {dict.services.sessionsHeading}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {category.subcategoryNames.map((name) => (
              <span
                key={name}
                className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-700"
              >
                {name}
              </span>
            ))}
          </div>
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
