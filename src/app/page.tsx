import { Section, SectionHeading } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProcessStepCard } from "@/components/ProcessStep";
import { LogoStrip } from "@/components/LogoStrip";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/content/testimonials";
import { processSteps } from "@/content/process";
import { brandLogos } from "@/content/brandLogos";
import { faqItems } from "@/content/faq";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <Section className="pt-20 sm:pt-28">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
              You feel at ease during the shoot
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Clear, relaxed direction helps you look natural and confident, without feeling
              overly posed.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
              You receive images with purpose
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Photography created for your website, social media, marketing, press, team
              communication or a meaningful personal memory.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Button href="/portfolio">View portfolio</Button>
        </div>
      </Section>

      {/* Block 6: testimonials */}
      <Section className="bg-neutral-50">
        <SectionHeading title="Kind words and the faces behind them" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} item={t} />
          ))}
        </div>
      </Section>

      {/* Block 7: process */}
      <Section>
        <SectionHeading eyebrow="Process" title="Simple from first message to final gallery" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <ProcessStepCard key={step.id} item={step} />
          ))}
        </div>
      </Section>

      {/* Block 8: brands */}
      <Section className="bg-neutral-50">
        <SectionHeading title="Trusted by Brands and Organisations Across Switzerland" align="center" />
        <div className="mt-12">
          <LogoStrip logos={brandLogos} />
        </div>
      </Section>

      {/* Block 9: FAQ */}
      <Section containerClassName="max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-8">
          <FaqAccordion items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
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
