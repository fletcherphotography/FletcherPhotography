import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { getServiceGroups } from "@/content/services";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getServicePhotoUrl } from "@/sanity/queries";

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
  const photoUrls = await Promise.all(
    serviceGroups.map((group) => getServicePhotoUrl(group.slug))
  );

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
              {group.tagline && (
                <p className="mt-1 text-sm font-medium uppercase tracking-widest text-neutral-500">
                  {group.tagline}
                </p>
              )}
              <div className="mt-6 flex flex-col gap-4">
                {group.introParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-neutral-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-base font-medium text-neutral-900">{group.pricingFrom}</p>
              <div className="mt-8">
                <Button href={`/${locale}/contact`}>{group.ctaLabel}</Button>
              </div>
            </div>
            <PlaceholderImage
              label={group.title}
              src={photoUrls[i]}
              className="aspect-[4/5] w-full"
            />
          </FadeIn>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {group.includedGroups.map((included, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                  {included.label ?? dict.services.whatsIncluded}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-neutral-700">
                  {included.items.map((item) => (
                    <li key={item} className="border-b border-neutral-200 pb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                {dict.services.sessionsHeading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-neutral-700">
                {group.subcategories.map((item) => (
                  <li key={item} className="border-b border-neutral-200 pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-base italic leading-relaxed text-neutral-500">
            {group.clientSubtext}
          </p>
        </Section>
      ))}

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
