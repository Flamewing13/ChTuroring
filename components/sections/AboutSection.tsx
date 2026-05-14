'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import type { Locale } from '@/lib/i18n/dictionaries'

interface AboutDict {
  section_title: string
  name: string
  role: string
  bio1: string
  bio2: string
  stat1_value: string
  stat1_label: string
  stat2_value: string
  stat2_label: string
  stat3_value: string
  stat3_label: string
  cta: string
}

interface AboutSectionProps {
  lang: Locale
  dict: AboutDict
}

export default function AboutSection({ lang, dict }: AboutSectionProps) {
  const stats = [
    { value: dict.stat1_value, label: dict.stat1_label },
    { value: dict.stat2_value, label: dict.stat2_label },
    { value: dict.stat3_value, label: dict.stat3_label },
  ]

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Avatar card */}
              <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 text-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

                {/* Avatar circle */}
                <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-violet-800 shadow-lg shadow-violet-500/20">
                  <span className="text-3xl font-bold text-white">
                    {dict.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-50">{dict.name}</h3>
                <p className="mt-1 text-sm text-violet-400">{dict.role}</p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-zinc-800 pt-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-zinc-50">{stat.value}</div>
                      <div className="mt-0.5 text-xs text-zinc-500 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative floating card */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-zinc-300">
                    {lang === 'en' ? 'Available for sessions' : 'Dostupný pre hodiny'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <SectionTitle
              title={dict.section_title}
              centered={false}
              className="mb-6"
            />
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>{dict.bio1}</p>
              <p>{dict.bio2}</p>
            </div>
            <div className="mt-8">
              <Link
                href={`/${lang}/about`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-600 hover:text-zinc-100 hover:bg-zinc-800/50"
              >
                {dict.cta}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 8h9M8.5 4l4.5 4-4.5 4" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
