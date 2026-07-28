"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { site } from "@/content/site";
import { Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

function navItems(locale: Locale) {
  const dict = getDictionary(locale);
  return [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.portfolio, href: `/${locale}/portfolio` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.reviews, href: `/${locale}/reviews` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];
}

function pathWithLocale(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/");
  segments[1] = targetLocale;
  return segments.join("/") || `/${targetLocale}`;
}

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const items = navItems(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href={`/${locale}`} className="text-base font-medium tracking-tight text-neutral-900">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-neutral-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
          <div className="flex items-center gap-1 border-l border-neutral-200 pl-4 text-xs font-medium uppercase tracking-wide text-neutral-400">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={pathWithLocale(pathname, loc)}
                className={clsx(
                  "px-1.5 py-1 transition-colors",
                  loc === locale ? "text-neutral-900" : "hover:text-neutral-700"
                )}
              >
                {loc}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-neutral-900" />
            <span className="block h-px w-5 bg-neutral-900" />
          </div>
        </button>
      </div>

      <nav
        className={clsx(
          "grid overflow-hidden border-t border-neutral-200 bg-neutral-50 transition-[grid-template-rows] duration-200 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col px-6 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-neutral-700"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3 border-t border-neutral-200 pt-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={pathWithLocale(pathname, loc)}
                  onClick={() => setOpen(false)}
                  className={loc === locale ? "text-neutral-900" : ""}
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
