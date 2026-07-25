"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FaqItem } from "@/content/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-neutral-200">
      {items.map((item) => (
        <Disclosure key={item.id} as="div" className="py-5">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between text-left">
                <span className="text-base font-medium text-neutral-900">{item.question}</span>
                <span className="ml-6 shrink-0 text-xl text-neutral-400">{open ? "−" : "+"}</span>
              </DisclosureButton>
              <DisclosurePanel className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.answer}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
