'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import type { Locale } from '@/lib/i18n/dictionaries'

interface HeroDict {
  tagline: string
  title: string
  subtitle: string
  cta_primary: string
  cta_secondary: string
}

interface HeroProps {
  lang: Locale
  dict: HeroDict
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
}

export default function Hero({ lang, dict }: HeroProps) {
  const titleLines = dict.title.split('\n')

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* Tagline */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400 mb-8">
            <span className="size-1.5 rounded-full bg-violet-400 animate-pulse" />
            {dict.tagline}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl leading-[1.08]"
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                line
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl"
        >
          {dict.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            {dict.cta_primary}
            <ArrowIcon />
          </Link>
          <Link
            href={`#subjects`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-8 py-4 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:text-zinc-100 hover:bg-zinc-800/50"
          >
            {dict.cta_secondary}
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={item}
          className="mt-16 flex items-center gap-6 text-sm text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-semibold">200+</span>
            <span>{lang === 'en' ? 'students' : 'žiakov'}</span>
          </div>
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-semibold">5+</span>
            <span>{lang === 'en' ? 'years teaching' : 'rokov praxe'}</span>
          </div>
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-violet-400 font-semibold">95%</span>
            <span>{lang === 'en' ? 'pass rate' : 'úspešnosť'}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-zinc-700 p-1"
        >
          <div className="h-2 w-0.5 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="size-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 8h9M8.5 4l4.5 4-4.5 4"
      />
    </svg>
  )
}
