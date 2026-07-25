import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";
import { locales, resolveLocale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    title: "Privacy Policy",
    body: (email: string) =>
      `Information submitted through the contact form on this site (name, email, phone number and message) is used only to respond to your enquiry and is not shared with third parties. For any questions, contact ${email}.`,
  },
  de: {
    title: "Datenschutzerklärung",
    body: (email: string) =>
      `Über das Kontaktformular auf dieser Website übermittelte Informationen (Name, E-Mail, Telefonnummer und Nachricht) werden ausschließlich zur Beantwortung deiner Anfrage verwendet und nicht an Dritte weitergegeben. Bei Fragen wende dich an ${email}.`,
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  return { title: copy[locale].title };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);
  const text = copy[locale];

  return (
    <Section className="pt-20 sm:pt-28" containerClassName="max-w-2xl">
      <SectionHeading title={text.title} />
      <p className="mt-6 text-sm leading-relaxed text-neutral-600">
        {/* TODO: replace with final legal copy before launch. */}
        {text.body(site.email)}
      </p>
    </Section>
  );
}
