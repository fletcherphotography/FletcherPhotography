import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Kind words from clients across business, branding and portrait sessions.",
};

export default function ReviewsPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="Reviews"
          title="What clients say"
          subtitle="A few words from the people I've had the pleasure of photographing."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} item={review} />
          ))}
        </div>
      </Section>

      <Section>
        <CTASection
          title="Let's work together"
          text="Tell me what you are planning, and let's create images with presence, purpose and real feeling."
          ctaLabel="Contact via WhatsApp"
        />
      </Section>
    </>
  );
}
