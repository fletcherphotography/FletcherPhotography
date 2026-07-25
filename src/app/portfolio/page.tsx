import Link from "next/link";
import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";
import { portfolioCategories } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse photography by category: Business & Events, Personal Branding, and Portraits & Love Stories.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio"
            title="Work, organised by what you need it for"
            subtitle="Explore photography across three categories — business and events, personal branding, and portraits and love stories."
          />
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeInStagger className="grid gap-8 sm:grid-cols-3">
          {portfolioCategories.map((category) => (
            <FadeInStaggerItem key={category.slug}>
              <Link href={`/portfolio/${category.slug}`} className="group block">
                <div className="overflow-hidden rounded-md">
                  <PlaceholderImage
                    label={category.title}
                    className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-neutral-900 group-hover:underline">
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
            title="Let's work together"
            text="Tell me what you are planning, and let's create images with presence, purpose and real feeling."
            ctaLabel="Contact via WhatsApp"
          />
        </FadeIn>
      </Section>
    </>
  );
}
