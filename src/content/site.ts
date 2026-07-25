export const site = {
  name: "Anna Fletcher Photography",
  whatsappNumber: "41000000000", // TODO: replace with real WhatsApp number (country code, no + or spaces)
  email: "hello@annafletcher.example", // TODO: replace with real email
  instagram: "https://instagram.com/annafletcher.photo", // TODO: replace with real profile
  location: "Switzerland",
  nav: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
};

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
