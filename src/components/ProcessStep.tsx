import { ProcessStep as ProcessStepType } from "@/content/process";

export function ProcessStepCard({ item }: { item: ProcessStepType }) {
  return (
    <div className="relative flex flex-col gap-3">
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-900 bg-[var(--background)] text-sm font-medium text-neutral-900">
        {item.step}
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-neutral-900">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
    </div>
  );
}
