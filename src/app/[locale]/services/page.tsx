import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { getServiceGroups, getPricingNote } from "@/content/services";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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
  return { title: dict.services.title, description: dict.services.subtitle };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const serviceGroups = getServiceGroups(locale);
  const pricingNote = getPricingNote(locale);

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <FadeIn>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.title}
            subtitle={dict.services.subtitle}
          />
        </FadeIn>
      </Section>

      {serviceGroups.map((group, i) => (
        <Section key={group.slug} className={i % 2 === 1 ? "bg-neutral-50" : undefined}>
          <FadeIn className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
                {group.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">{group.intro}</p>
              <div className="mt-8">
                <Button href={`/${locale}/contact`}>{group.ctaLabel}</Button>
              </div>
            </div>
            {group.items && (
              <ul className="grid content-start gap-3 text-sm text-neutral-700 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-neutral-200 pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </FadeIn>
        </Section>
      ))}

      <Section containerClassName="max-w-2xl text-center">
        <FadeIn>
          <p className="text-lg font-medium text-neutral-900">{pricingNote.startingFrom}</p>
          <p className="mt-3 text-sm text-neutral-600">{pricingNote.detail}</p>
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
