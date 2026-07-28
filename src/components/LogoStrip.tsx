import Image from "next/image";
import { BrandLogo } from "@/content/brandLogos";

export function LogoStrip({ logos }: { logos: BrandLogo[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
      {logos.map((logo) => {
        const content = logo.imageUrl ? (
          <div className="relative h-16 w-32 sm:h-20 sm:w-40">
            <Image
              src={logo.imageUrl}
              alt={logo.name}
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
        ) : (
          <span className="text-sm font-medium tracking-wide">{logo.name}</span>
        );

        return (
          <div
            key={logo.id}
            className="flex items-center justify-center text-neutral-400 grayscale transition-all duration-300 hover:text-neutral-700 hover:grayscale-0"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
