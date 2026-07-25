import { Testimonial } from "./testimonials";

export type Review = Testimonial & { role?: string };

// Reviews page — 10-12 entries.
export const reviews: Review[] = [
  { id: "r1", name: "Sophie M.", role: "Founder, Studio Line", quote: "I felt completely at ease the whole time. The photos look like me on a really good day." },
  { id: "r2", name: "David R.", role: "Team Lead", quote: "Clear direction, zero awkwardness. The whole team actually likes using these headshots." },
  { id: "r3", name: "Elena K.", quote: "It never felt posed. Just relaxed conversation and real moments we'll keep forever." },
  { id: "r4", name: "Marco B.", role: "Operations Manager", quote: "Professional, warm, and fast to work with. Every image in the gallery was usable." },
  { id: "r5", name: "Julia T.", quote: "Best photography experience I've had. Patient, calm, and genuinely good at putting people at ease." },
  { id: "r6", name: "Nina & Paul", quote: "Our engagement photos feel like us, not like a staged shoot. We look back at them often." },
  { id: "r7", name: "Carlos V.", role: "Consultant", quote: "Exactly the LinkedIn-ready content I needed, delivered quickly and with clear guidance throughout." },
  { id: "r8", name: "Laura S.", quote: "Gentle direction made all the difference. I've never enjoyed being photographed until now." },
  { id: "r9", name: "Tobias H.", role: "Founder", quote: "Sharp, natural branding photos that finally match how our company actually feels." },
  { id: "r10", name: "Anna P.", quote: "A calm, unrushed session that produced some of my favorite photos of myself." },
  { id: "r11", name: "Michael F.", role: "Event Organiser", quote: "Coverage was thorough and unobtrusive — guests barely noticed the camera." },
  { id: "r12", name: "Isabelle D.", quote: "From first message to gallery delivery, everything was simple and clearly communicated." },
];
