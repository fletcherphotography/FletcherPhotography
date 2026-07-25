import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { CTASection } from "@/components/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "The person and approach behind the camera.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <FadeIn className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <PlaceholderImage label="Portrait" className="aspect-[4/5] w-full" />
          <div>
            <h1 className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
              Hi, I&apos;m Anna
            </h1>
            <p className="mt-6 text-base leading-relaxed text-neutral-600">
              I started photography because I love the moment someone stops performing for the
              camera and just becomes themselves. That&apos;s the moment I&apos;m always working towards —
              whether it&apos;s a business headshot, a couple&apos;s engagement session, or a company event.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              My approach is simple: clear direction, genuine conversation, and enough patience to
              let real expressions happen. You don&apos;t need modelling experience — you just need to
              show up.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-neutral-50">
        <FadeIn>
          <SectionHeading
            title="Behind the camera"
            subtitle="I keep sessions relaxed and well-organised — from the first message, through a preparation call with outfit and posing guidance, to a supported, unhurried shoot."
          />
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading title="A few moments from recent sessions" />
        </FadeIn>
        <FadeInStagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <FadeInStaggerItem key={i}>
              <div className="overflow-hidden rounded-md">
                <PlaceholderImage
                  label={`Behind the scenes ${i + 1}`}
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
            title="Let's work together"
            text="Tell me what you are planning, and let's create images with presence, purpose and real feeling."
            ctaLabel="Contact via WhatsApp"
          />
        </FadeIn>
      </Section>
    </>
  );
}
