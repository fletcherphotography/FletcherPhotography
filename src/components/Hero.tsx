"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.h1
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.07, delayChildren: 0.15 }}
      className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

export function Hero({ locale, imageSrc }: { locale: Locale; imageSrc?: string }) {
  const dict = getDictionary(locale);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85vh] items-end overflow-hidden sm:min-h-[90vh]"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] w-full">
        <PlaceholderImage
          label=""
          src={imageSrc ?? "/images/hero/hero-1.jpg"}
          rounded="none"
          dark
          priority
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:px-8 sm:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-white/80"
        >
          {dict.home.heroEyebrow}
        </motion.p>

        <AnimatedHeadline text={dict.home.heroTitle} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-md text-base leading-relaxed text-white/85"
        >
          {dict.home.heroText}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button
            href={`/${locale}/portfolio`}
            className="!bg-white !text-neutral-900 hover:!bg-neutral-100"
          >
            {dict.common.viewPortfolio}
          </Button>
          <Button
            href={`/${locale}/contact`}
            variant="secondary"
            className="border-white/60 text-white hover:border-white"
          >
            {dict.common.getInTouch}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
