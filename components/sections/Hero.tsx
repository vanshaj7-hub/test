"use client";

import { HeroBackground } from "@/components/sections/HeroBackground";
import { HeroGraphic } from "@/components/sections/HeroGraphic";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const heading = (
    <>
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sky-400/90">
        Hello, I&apos;m
      </p>
      <h1 className="hero-glow-text font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        {siteConfig.name}
      </h1>
    </>
  );

  return (
    <section className="relative min-h-[88vh] overflow-hidden py-20 md:py-28 lg:py-32">
      <HeroBackground />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            {shouldReduceMotion ? (
              <div>{heading}</div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {heading}
              </motion.div>
            )}

            <FadeIn delay={0.15}>
              <p className="mt-6 text-xl font-medium text-violet-300/90 sm:text-2xl">
                {siteConfig.role}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300/90">
                {siteConfig.shortBio}
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/projects" className="hero-btn-primary inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="hero-btn-secondary inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-violet-300/60 hover:bg-violet-500/10"
                >
                  Get in Touch
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/10 blur-3xl" />
            <HeroGraphic />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
