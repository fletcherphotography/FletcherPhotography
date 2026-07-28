import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Hero } from "@/components/Hero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProcessStepCard } from "@/components/ProcessStep";
import { LogoStrip } from "@/components/LogoStrip";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { getTestimonials } from "@/content/testimonials";
import { getProcessSteps } from "@/content/process";
import { brandLogos } from "@/content/brandLogos";
import { getFaqItems } from "@/content/faq";
import { getHomeServiceCards } from "@/content/homeServices";
import { resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  getHeroImageUrl,
  getHomeGalleryUrls,
  getPersonPhotoUrls,
  getBrandLogos,
  getCategoryCoverUrl,
} from "@/sanity/queries";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const testimonials = getTestimonials(locale);
  const processSteps = getProcessSteps(locale);
  const faqItems = getFaqItems(locale);
  const serviceCards = getHomeServiceCards(locale);

  const [heroImageUrl, galleryUrls, personPhotos, sanityLogos, serviceCoverUrls] =
    await Promise.all([
      getHeroImageUrl(),
      getHomeGalleryUrls(),
      getPersonPhotoUrls(testimonials.map((t) => t.id)),
      getBrandLogos(),
      Promise.all(serviceCards.map((card) => getCategoryCoverUrl(card.slug))),
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

      {/* Gallery grid after intro */}
      <Section className="pt-20 sm:pt-28">
        <FadeInStagger className="grid grid-cols-3 gap-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeInStaggerItem key={i}>
              <PlaceholderImage
                label={`Home photo ${i + 1}`}
                src={galleryUrls[i]}
                className="aspect-[3/4] w-full"
              />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* Services teaser */}
      <Section className="bg-neutral-50">
        <FadeInStagger className="grid gap-10 sm:grid-cols-3">
          {serviceCards.map((card, i) => (
            <FadeInStaggerItem key={card.slug}>
              <Link href={`/${locale}/services`} className="group block">
                <div className="overflow-hidden rounded-md">
                  <PlaceholderImage
                    label={card.title}
                    src={serviceCoverUrls[i]}
                    className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-neutral-900 group-hover:underline">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {card.description}
                </p>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Section>

      {/* Trust block */}
      <Section containerClassName="max-w-2xl text-center">
        <FadeIn>
          <SectionHeading title={dict.home.trustTitle} align="center" />
          <p className="mt-4 text-base leading-relaxed text-neutral-600">{dict.home.trustText}</p>
        </FadeIn>
      </Section>

      {/* Testimonials */}
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

      {/* Process */}
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

      {/* Brands */}
      <Section className="bg-neutral-50">
        <FadeIn>
          <SectionHeading title={dict.home.brandsTitle} align="center" />
          <div className="mt-12">
            <LogoStrip logos={logos} />
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
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
