import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { site, whatsappHref } from "@/content/site";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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
  return { title: dict.contact.title, description: dict.contact.subtitle };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <Section className="pt-20 sm:pt-28" containerClassName="max-w-2xl">
      <FadeIn>
        <SectionHeading title={dict.contact.title} subtitle={dict.contact.subtitle} />

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
          <ContactForm locale={locale} />
        </div>
      </FadeIn>
    </Section>
  );
}
