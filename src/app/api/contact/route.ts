import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  // TODO: wire a real email provider (e.g. Resend or Formspree) once credentials are available.
  // For now the submission is validated but not sent anywhere.
  console.log("Contact form submission (not yet sent):", parsed.data);

  return NextResponse.json({ ok: true });
}
