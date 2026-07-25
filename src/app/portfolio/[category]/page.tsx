import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
import { getAllCategoryParams, getCategory } from "@/content/portfolio";

export function generateStaticParams() {
  return getAllCategoryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return { title: category.title, description: category.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <SectionHeading eyebrow="Portfolio" title={category.title} subtitle={category.description} />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 sm:grid-cols-3">
          {category.subcategories.map((sub) => (
            <Link key={sub.slug} href={`/portfolio/${category.slug}/${sub.slug}`} className="group">
              <PlaceholderImage label={sub.title} className="aspect-[4/5] w-full" />
              <h3 className="mt-4 text-lg font-medium text-neutral-900 group-hover:underline">
                {sub.title}
              </h3>
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
