import clsx from "clsx";

// Renders a soft placeholder box until real photography assets are added.
// Swap for next/image once files exist under /public/images/...
export function PlaceholderImage({
  label,
  className,
  rounded = false,
}: {
  label?: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-400",
        rounded ? "rounded-full" : "rounded-md",
        className
      )}
      aria-hidden="true"
    >
      {label && <span className="px-2 text-center text-xs">{label}</span>}
    </div>
  );
}
