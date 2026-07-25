import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Please tell me a little about your idea"),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: "Please accept the privacy policy" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
