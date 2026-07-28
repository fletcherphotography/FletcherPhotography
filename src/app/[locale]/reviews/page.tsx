import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { getReviews } from "@/content/reviews";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPersonPhotoUrls } from "@/sanity/queries";

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
  return { title: dict.reviews.title, description: dict.reviews.subtitle };
}

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);
  const reviews = getReviews(locale);
  const personPhotos = await getPersonPhotoUrls(reviews.map((r) => r.id));
  const reviewsWithPhotos = reviews.map((r) => ({ ...r, photo: personPhotos[r.id] ?? r.photo }));

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <FadeIn>
          <SectionHeading
            eyebrow={dict.reviews.eyebrow}
            title={dict.reviews.title}
            subtitle={dict.reviews.subtitle}
          />
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsWithPhotos.map((review) => (
            <FadeInStaggerItem key={review.id}>
              <TestimonialCard item={review} />
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
