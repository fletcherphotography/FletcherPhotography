import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/content/site";

export function CTASection({
  title,
  text,
  ctaLabel = "Contact",
  href,
}: {
  title: string;
  text?: string;
  ctaLabel?: string;
  href?: string;
}) {
  return (
    <div className="rounded-3xl bg-neutral-900 px-6 py-16 text-center sm:px-16 sm:py-20">
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-light tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mx-auto mt-4 max-w-xl text-neutral-300">{text}</p>}
      <div className="mt-8">
        <Button href={href ?? whatsappHref(title)} external={!href} variant="secondary" className="border-white text-white hover:border-neutral-300">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
