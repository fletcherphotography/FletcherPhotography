export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { id: "enquire", step: 1, title: "Enquire", description: "Tell me what you have in mind." },
  {
    id: "prepare",
    step: 2,
    title: "Prepare",
    description:
      "Let's have a call and discuss the idea and concept. After you will receive your personal guide with outfit, timing and posing support.",
  },
  {
    id: "shoot",
    step: 3,
    title: "Shoot",
    description: "Relaxed direction, real moments and professional thoughtful imagery.",
  },
  {
    id: "receive",
    step: 4,
    title: "Receive",
    description: "Within a few days receive your edited online gallery, ready to use and share.",
  },
];
