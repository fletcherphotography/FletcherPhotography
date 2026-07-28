import Link from "next/link";
import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { getPortfolioCategories } from "@/content/portfolio";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getCategoryCoverUrl } from "@/sanity/queries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  return { title: dict.portfolio.title, description: dict.portfolio.subtitle };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const portfolioCategories = getPortfolioCategories(locale);
  const coverUrls = await Promise.all(
    portfolioCategories.map((category) => getCategoryCoverUrl(category.slug))
  );

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <FadeIn>
          <SectionHeading
            eyebrow={dict.portfolio.eyebrow}
            title={dict.portfolio.title}
            subtitle={dict.portfolio.subtitle}
          />
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeInStagger className="grid gap-8 sm:grid-cols-3">
          {portfolioCategories.map((category, i) => (
            <FadeInStaggerItem key={category.slug}>
              <Link href={`/${locale}/portfolio/${category.slug}`} className="group block">
                <div className="overflow-hidden rounded-md">
                  <PlaceholderImage
                    label={category.title}
                    src={coverUrls[i] ?? category.coverImage}
                    className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-medium text-neutral-900 group-hover:underline">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{category.description}</p>
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
