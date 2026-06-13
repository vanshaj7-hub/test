"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-violet-50 dark:from-indigo-950/30 dark:via-transparent dark:to-violet-950/20" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-400/5" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {shouldReduceMotion ? (
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
            </motion.div>
          )}

          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl font-medium text-indigo-600 dark:text-indigo-400 sm:text-2xl">
              {siteConfig.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              {siteConfig.shortBio}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/projects">View Work</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in Touch
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
