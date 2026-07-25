import { BrandLogo } from "@/content/brandLogos";

export function LogoStrip({ logos }: { logos: BrandLogo[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex h-12 items-center justify-center text-sm font-medium tracking-wide text-neutral-400"
        >
          {logo.name}
        </div>
      ))}
    </div>
  );
}
