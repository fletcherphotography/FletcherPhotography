export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  photo?: string;
};

// Home page "Kind words and the faces behind them" — 4 entries.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sophie M.",
    quote:
      "I felt completely at ease the whole time. The photos look like me on a really good day, not like a stranger's version of me.",
  },
  {
    id: "t2",
    name: "David R.",
    quote:
      "Clear direction, zero awkwardness. We now have headshots the whole team actually likes using.",
  },
  {
    id: "t3",
    name: "Elena K.",
    quote:
      "It never felt posed. Just relaxed conversation and real moments that turned into images we'll keep forever.",
  },
  {
    id: "t4",
    name: "Marco B.",
    quote:
      "Professional, warm, and fast to work with. The gallery arrived exactly when promised and every image was usable.",
  },
];
