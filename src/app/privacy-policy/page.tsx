import { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-20 sm:pt-28" containerClassName="max-w-2xl">
      <SectionHeading title="Privacy Policy" />
      <p className="mt-6 text-sm leading-relaxed text-neutral-600">
        {/* TODO: replace with final legal copy before launch. */}
        Information submitted through the contact form on this site (name, email, phone number
        and message) is used only to respond to your enquiry and is not shared with third
        parties. For any questions, contact {site.email}.
      </p>
    </Section>
  );
}
