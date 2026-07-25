"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden sm:min-h-[90vh]">
      <PlaceholderImage
        label=""
        rounded="none"
        dark
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:px-8 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-white/80"
        >
          Photography in Switzerland
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Images with presence, purpose and real feeling.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-md text-base leading-relaxed text-white/85"
        >
          Relaxed, natural photography for businesses, personal branding and portraits —
          created for the moments that matter.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/portfolio" className="bg-white text-neutral-900 hover:bg-white/90">
            View portfolio
          </Button>
          <Button href="/contact" variant="secondary" className="border-white/60 text-white hover:border-white">
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
