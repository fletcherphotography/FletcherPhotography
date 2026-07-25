"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaqItem } from "@/content/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-neutral-200">
      {items.map((item) => (
        <Disclosure key={item.id} as="div" className="py-5">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between text-left group">
                <span className="text-base font-medium text-neutral-900 transition-colors group-hover:text-neutral-600">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-6 shrink-0 text-xl text-neutral-400"
                >
                  +
                </motion.span>
              </DisclosureButton>
              <AnimatePresence initial={false}>
                {open && (
                  <DisclosurePanel static>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  </DisclosurePanel>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
