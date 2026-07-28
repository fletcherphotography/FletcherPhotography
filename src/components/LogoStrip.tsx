import Image from "next/image";
import { BrandLogo } from "@/content/brandLogos";

export function LogoStrip({ logos }: { logos: BrandLogo[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
      {logos.map((logo) => {
        const content = logo.imageUrl ? (
          <div className="relative h-10 w-full">
            <Image src={logo.imageUrl} alt={logo.name} fill className="object-contain" />
          </div>
        ) : (
          <span>{logo.name}</span>
        );

        return (
          <div
            key={logo.id}
            className="flex h-12 items-center justify-center text-sm font-medium tracking-wide text-neutral-400 grayscale transition-all duration-300 hover:text-neutral-700 hover:grayscale-0"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
