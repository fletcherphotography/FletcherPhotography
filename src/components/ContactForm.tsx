"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/contactSchema";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", consent: false },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-neutral-200 p-8 text-center">
        <p className="text-base text-neutral-900">{dict.contact.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
          {dict.contact.fullName}
        </label>
        <input
          id="name"
          type="text"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          {dict.contact.email}
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
          {dict.contact.phone} <span className="text-neutral-400">{dict.contact.phoneOptional}</span>
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
          {dict.contact.message}
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:border-neutral-900 focus:outline-none"
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-neutral-300"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm text-neutral-600">
          {dict.contact.consent}{" "}
          <a href={`/${locale}/privacy-policy`} className="underline">
            {dict.contact.privacyPolicy}
          </a>
          .
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      {status === "error" && <p className="text-sm text-red-600">{dict.contact.error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-60"
      >
        {isSubmitting ? dict.contact.sending : dict.contact.send}
      </button>
    </form>
  );
}
