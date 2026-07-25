import { Photo } from "@/content/portfolio";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {photos.map((photo) => (
        <PlaceholderImage
          key={photo.id}
          label={photo.alt}
          className="aspect-[4/5] w-full"
        />
      ))}
    </div>
  );
}
