import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { getAllCategoryParams, getCategory } from "@/content/portfolio";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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

  return (
    <>
      <Section className="pt-20 sm:pt-28" containerClassName="max-w-3xl">
        <FadeIn>
          <SectionHeading
            eyebrow={dict.portfolio.eyebrow}
            title={category.title}
            subtitle={category.description}
          />
          <p className="mt-6 text-base leading-relaxed text-neutral-600">{category.intro}</p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeInStagger className="grid gap-8 sm:grid-cols-3">
          {category.subcategories.map((sub) => (
            <FadeInStaggerItem key={sub.slug}>
              <Link href={`/${locale}/portfolio/${category.slug}/${sub.slug}`} className="group block">
                <div className="overflow-hidden rounded-md">
                  <PlaceholderImage
                    label={sub.title}
                    src={sub.coverImage}
                    className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-neutral-900 group-hover:underline">
                  {sub.title}
                </h3>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
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
