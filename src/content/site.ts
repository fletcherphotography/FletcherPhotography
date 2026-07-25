export const site = {
  name: "Anna Fletcher Photography",
  whatsappNumber: "41000000000", // TODO: replace with real WhatsApp number (country code, no + or spaces)
  email: "hello@annafletcher.example", // TODO: replace with real email
  instagram: "https://instagram.com/annafletcher.photo", // TODO: replace with real profile
  location: "Switzerland",
  calcomUsername: "your-username", // TODO: replace with the real Cal.com username/event slug
};

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
