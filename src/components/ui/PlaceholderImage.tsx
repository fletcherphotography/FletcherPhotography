import Image from "next/image";
import clsx from "clsx";

// Stylized gradient placeholder used until a real photo is supplied via `src`.
const PALETTES: [string, string][] = [
  ["#f4ede4", "#e4c9b0"],
  ["#eef1ee", "#c9d6cd"],
  ["#f3ece9", "#d9bfae"],
  ["#eceef2", "#c2c9dd"],
  ["#f1eee8", "#cbb89c"],
  ["#eef0ea", "#b9c4a6"],
];

function paletteFor(seed: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return PALETTES[hash % PALETTES.length];
}

export function PlaceholderImage({
  label,
  className,
  rounded = false,
  dark = false,
  src,
  alt,
  priority,
}: {
  label?: string;
  className?: string;
  rounded?: boolean | "none";
  dark?: boolean;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  const roundedClass = clsx(
    rounded === true && "rounded-full",
    rounded === false && "rounded-md"
  );

  if (src) {
    return (
      <div className={clsx("relative overflow-hidden", roundedClass, className)}>
        <Image
          src={src}
          alt={alt ?? label ?? ""}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  const [from, to] = paletteFor(label ?? "placeholder");
  const [darkFrom, darkTo] = dark ? ["#2b2b28", "#54524a"] : [from, to];

  return (
    <div
      className={clsx(
        "relative flex items-end overflow-hidden",
        rounded === true && "items-center justify-center",
        roundedClass,
        className
      )}
      style={{ background: `linear-gradient(155deg, ${darkFrom}, ${darkTo})` }}
      aria-hidden="true"
    >
      <svg
        className="pointer-events-none absolute -bottom-6 -right-6 h-2/3 w-2/3 opacity-40"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="48" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
        <circle cx="50" cy="50" r="30" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      </svg>
      {label && rounded !== true && (
        <span className="relative z-10 w-full truncate px-3 py-2 text-[11px] font-medium tracking-wide text-white/90 bg-black/10 backdrop-blur-[1px]">
          {label}
        </span>
      )}
      {label && rounded === true && (
        <span className="relative z-10 px-2 text-center text-xs font-medium text-black/50">
          {label
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </span>
      )}
    </div>
  );
}
