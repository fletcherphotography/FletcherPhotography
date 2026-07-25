import Link from "next/link";
import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
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
        <SectionHeading
          eyebrow="Portfolio"
          title="Work, organised by what you need it for"
          subtitle="Explore photography across three categories — business and events, personal branding, and portraits and love stories."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 sm:grid-cols-3">
          {portfolioCategories.map((category) => (
            <Link key={category.slug} href={`/portfolio/${category.slug}`} className="group">
              <PlaceholderImage label={category.title} className="aspect-[4/5] w-full" />
              <h3 className="mt-4 text-lg font-medium text-neutral-900 group-hover:underline">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{category.description}</p>
            </Link>
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
