import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAboutPortraitUrl, getAboutBtsUrls } from "@/sanity/queries";

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
  return { title: dict.about.heading, description: dict.about.intro1 };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const [portraitUrl, btsUrls] = await Promise.all([getAboutPortraitUrl(), getAboutBtsUrls()]);

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <FadeIn className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <PlaceholderImage
            label="Portrait"
            src={portraitUrl ?? "/images/about/portrait.jpg"}
            className="aspect-[4/5] w-full"
          />
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
              {dict.about.heading}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-neutral-600">{dict.about.intro1}</p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">{dict.about.intro2}</p>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-neutral-50">
        <FadeIn>
          <SectionHeading title={dict.about.behindTitle} subtitle={dict.about.behindSubtitle} />
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading title={dict.about.momentsTitle} />
        </FadeIn>
        <FadeInStagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <FadeInStaggerItem key={i}>
              <div className="overflow-hidden rounded-md">
                <PlaceholderImage
                  label={`Behind the scenes ${i + 1}`}
                  src={btsUrls[i] ?? `/images/about/bts-${i + 1}.jpg`}
                  className="aspect-[4/5] w-full transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
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
