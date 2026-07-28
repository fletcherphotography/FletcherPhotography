import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { site, whatsappHref } from "@/content/site";
import { WhatsAppIcon, EmailIcon, InstagramIcon } from "@/components/icons/SocialIcons";
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

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            title={site.email}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            <EmailIcon className="h-5 w-5" />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10">
          <ContactForm locale={locale} />
        </div>
      </FadeIn>
    </Section>
  );
}
