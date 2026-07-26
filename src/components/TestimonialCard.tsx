import { Testimonial } from "@/content/testimonials";
import { Review } from "@/content/reviews";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function TestimonialCard({ item }: { item: Testimonial | Review }) {
  const role = "role" in item ? item.role : undefined;

  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-neutral-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-lg hover:shadow-neutral-100">
      <PlaceholderImage
        label={item.name}
        src={item.photo}
        rounded
        className="h-16 w-16 shrink-0"
      />
      <p className="text-[15px] leading-relaxed text-neutral-700">&ldquo;{item.quote}&rdquo;</p>
      <div>
        <p className="text-sm font-medium text-neutral-900">{item.name}</p>
        {role && <p className="text-xs text-neutral-500">{role}</p>}
      </div>
    </div>
  );
}
