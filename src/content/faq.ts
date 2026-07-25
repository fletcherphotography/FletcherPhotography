export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: "How do I book a session?",
    answer:
      "Send a message via the contact form or WhatsApp with a few details about what you have in mind, and I'll get back to you with next steps and availability.",
  },
  {
    id: "f2",
    question: "What should I wear?",
    answer:
      "After booking you'll receive a personal guide covering outfit ideas, timing and posing support tailored to your session.",
  },
  {
    id: "f3",
    question: "Where do the sessions take place?",
    answer:
      "Sessions can take place at your office, a location of your choice, or a studio — we'll agree on the best fit during the preparation call.",
  },
  {
    id: "f4",
    question: "How long does a session take?",
    answer:
      "Most sessions run between 45 minutes and 2 hours depending on the type of shoot, discussed and confirmed before the day.",
  },
  {
    id: "f5",
    question: "When will I receive my photos?",
    answer:
      "You'll receive your edited online gallery within a few days of the shoot, ready to use and share.",
  },
  {
    id: "f6",
    question: "Do you travel for events or corporate shoots?",
    answer: "Yes, I photograph businesses and events across Switzerland — travel can be arranged as part of your quote.",
  },
  {
    id: "f7",
    question: "How much does a session cost?",
    answer:
      "Pricing depends on the type of session. Get in touch for a tailored quote based on your needs.",
  },
];
