export function CalEmbed({ calLink }: { calLink: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200">
      <iframe
        src={`https://cal.com/${calLink}?embed=true&theme=light`}
        title="Booking calendar"
        className="h-[720px] w-full"
        loading="lazy"
      />
    </div>
  );
}
