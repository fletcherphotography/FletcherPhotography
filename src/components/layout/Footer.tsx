import Link from "next/link";
import { site, whatsappHref } from "@/content/site";
import { WhatsAppIcon, EmailIcon, InstagramIcon, ContactIcon } from "@/components/icons/SocialIcons";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.footer.whatsapp}
            title={dict.footer.whatsapp}
            className="text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label={dict.footer.email}
            title={dict.footer.email}
            className="text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <EmailIcon className="h-5 w-5" />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.footer.instagram}
            title={dict.footer.instagram}
            className="text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <Link
            href={`/${locale}/contact`}
            aria-label={dict.footer.contact}
            title={dict.footer.contact}
            className="text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <ContactIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
