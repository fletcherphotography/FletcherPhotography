import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { serviceGroups, pricingNote } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Photography services for businesses & events, personal branding, and portraits & love stories across Switzerland.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Photography for every kind of story"
            subtitle="Clear, structured sessions with no overwhelming price lists — get in touch for a quote tailored to you."
          />
        </FadeIn>
      </Section>

      {serviceGroups.map((group, i) => (
        <Section key={group.slug} className={i % 2 === 1 ? "bg-neutral-50" : undefined}>
          <FadeIn className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
                {group.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">{group.intro}</p>
              <div className="mt-8">
                <Button href="/contact">{group.ctaLabel}</Button>
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
            title="Let's work together"
            text="Tell me what you are planning, and let's create images with presence, purpose and real feeling."
            ctaLabel="Contact via WhatsApp"
          />
        </FadeIn>
      </Section>
    </>
  );
}
