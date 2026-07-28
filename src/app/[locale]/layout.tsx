import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/content/site";
import { locales, resolveLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const displaySerif = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
  return {
    title: {
      default: `${site.name} — ${dict.home.heroEyebrow}`,
      template: `%s | ${site.name}`,
    },
    description:
      "Relaxed, natural photography for businesses, personal branding and portraits across Switzerland.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await params).locale);

  return (
    <html
      lang={locale}
      className={`${sans.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <ScrollProgress />
        <Header locale={locale} />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
