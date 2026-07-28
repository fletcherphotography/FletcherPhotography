import { ProcessStep as ProcessStepType } from "@/content/process";

export function ProcessStepCard({ item }: { item: ProcessStepType }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-neutral-400">
        {String(item.step).padStart(2, "0")}
      </span>
      <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-neutral-900">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
    </div>
  );
}
