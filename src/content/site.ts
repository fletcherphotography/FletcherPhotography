export const site = {
  name: "Fletcher Photography",
  whatsappNumber: "41765249613",
  email: "fletcherphotography.zh@gmail.com",
  instagram: "https://www.instagram.com/photobyfletcher",
  location: "Switzerland",
  calcomUsername: "your-username", // TODO: replace with the real Cal.com username/event slug
};

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
