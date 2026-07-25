import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CalEmbed } from "@/components/CalEmbed";
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
  return { title: dict.booking.title, description: dict.booking.subtitle };
}

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <Section className="pt-20 sm:pt-28" containerClassName="max-w-3xl">
      <FadeIn>
        <SectionHeading
          eyebrow={dict.booking.eyebrow}
          title={dict.booking.title}
          subtitle={dict.booking.subtitle}
        />

        <div className="mt-10">
          <CalEmbed calLink={site.calcomUsername} />
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          {dict.booking.calNote}{" "}
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="underline">
            WhatsApp
          </a>
          .
        </p>
      </FadeIn>
    </Section>
  );
}
