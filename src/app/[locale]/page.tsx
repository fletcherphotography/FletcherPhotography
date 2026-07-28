import { Section, SectionHeading } from "@/components/ui/Section";
import { Hero } from "@/components/Hero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProcessStepCard } from "@/components/ProcessStep";
import { LogoStrip } from "@/components/LogoStrip";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { getTestimonials } from "@/content/testimonials";
import { getProcessSteps } from "@/content/process";
import { brandLogos } from "@/content/brandLogos";
import { getFaqItems } from "@/content/faq";
import { resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getHeroImageUrl, getPersonPhotoUrls, getBrandLogos } from "@/sanity/queries";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const testimonials = getTestimonials(locale);
  const processSteps = getProcessSteps(locale);
  const faqItems = getFaqItems(locale);

  const [heroImageUrl, personPhotos, sanityLogos] = await Promise.all([
    getHeroImageUrl(),
    getPersonPhotoUrls(testimonials.map((t) => t.id)),
    getBrandLogos(),
  ]);
  const testimonialsWithPhotos = testimonials.map((t) => ({
    ...t,
    photo: personPhotos[t.id] ?? t.photo,
  }));
  const logos = sanityLogos.length > 0
    ? sanityLogos.map((l, i) => ({ id: `sanity-${i}`, name: l.name, href: l.link, imageUrl: l.url }))
    : brandLogos;

  return (
    <>
      <Hero locale={locale} imageSrc={heroImageUrl} />

      {/* Intro */}
      <Section className="pt-20 sm:pt-28">
        <FadeIn>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
                {dict.home.introTitle1}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {dict.home.introText1}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
                {dict.home.introTitle2}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {dict.home.introText2}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button href={`/${locale}/portfolio`}>{dict.common.viewPortfolio}</Button>
          </div>
        </FadeIn>
      </Section>

      {/* Block 6: testimonials */}
      <Section className="bg-neutral-50">
        <FadeIn>
          <SectionHeading title={dict.home.testimonialsTitle} align="center" />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonialsWithPhotos.map((t) => (
            <FadeInStaggerItem key={t.id}>
              <TestimonialCard item={t} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* Block 7: process */}
      <Section>
        <FadeIn>
          <SectionHeading eyebrow={dict.home.processEyebrow} title={dict.home.processTitle} />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <FadeInStaggerItem key={step.id}>
              <ProcessStepCard item={step} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* Block 8: brands */}
      <Section className="bg-neutral-50">
        <FadeIn>
          <SectionHeading title={dict.home.brandsTitle} align="center" />
          <div className="mt-12">
            <LogoStrip logos={logos} />
          </div>
        </FadeIn>
      </Section>

      {/* Block 9: FAQ */}
      <Section containerClassName="max-w-3xl">
        <FadeIn>
          <SectionHeading title={dict.home.faqTitle} />
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </FadeIn>
      </Section>

      {/* Final CTA */}
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
