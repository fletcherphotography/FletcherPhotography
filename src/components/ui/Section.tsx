import { ReactNode } from "react";
import clsx from "clsx";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
}) {
  return (
    <As className={clsx("py-16 sm:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </As>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-neutral-600">{subtitle}</p>}
    </div>
  );
}
