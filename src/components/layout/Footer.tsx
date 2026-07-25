import Link from "next/link";
import { site, whatsappHref } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
        <div className="flex gap-6">
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-neutral-900">
            Email
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
            Instagram
          </a>
          <Link href="/contact" className="hover:text-neutral-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
