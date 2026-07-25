import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to plan your photography session.",
};

export default function ContactPage() {
  return (
    <Section className="pt-20 sm:pt-28" containerClassName="max-w-2xl">
      <FadeIn>
        <SectionHeading
          title="Let's plan your shoot."
          subtitle="Tell me a little about what you have in mind, and I'll get back to you with the next steps."
        />

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-600">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-neutral-900"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${site.email}`}
            className="underline transition-colors hover:text-neutral-900"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </FadeIn>
    </Section>
  );
}
