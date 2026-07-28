export const site = {
  name: "Fletcher Photography",
  whatsappNumber: "41765249613",
  email: "fletcherphotography.zh@gmail.com",
  instagram: "https://www.instagram.com/photobyfletcher",
  location: "Switzerland",
  contactFromEmail: "Fletcher Photography <noreply@fletcherphotography.ch>",
};

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
