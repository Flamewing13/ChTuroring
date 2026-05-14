'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import type { Locale } from '@/lib/i18n/dictionaries'

interface SubjectsDict {
  section_title: string
  section_subtitle: string
  mathematics: { title: string; description: string }
  physics: { title: string; description: string }
  other: { title: string; description: string }
  explore: string
}

interface SubjectsOverviewProps {
  lang: Locale
  dict: SubjectsDict
}

const subjects = [
  {
    key: 'mathematics' as const,
    slug: 'mathematics',
    icon: SigmaIcon,
    gradient: 'from-violet-500/10 to-violet-500/5',
    border: 'group-hover:border-violet-500/40',
    glow: 'group-hover:shadow-violet-500/10',
    iconColor: 'text-violet-400',
  },
  {
    key: 'physics' as const,
    slug: 'physics',
    icon: AtomIcon,
    gradient: 'from-blue-500/10 to-blue-500/5',
    border: 'group-hover:border-blue-500/40',
    glow: 'group-hover:shadow-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    key: 'other' as const,
    slug: 'other',
    icon: BookIcon,
    gradient: 'from-emerald-500/10 to-emerald-500/5',
    border: 'group-hover:border-emerald-500/40',
    glow: 'group-hover:shadow-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
]

export default function SubjectsOverview({ lang, dict }: SubjectsOverviewProps) {
  return (
    <section id="subjects" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={dict.section_title} subtitle={dict.section_subtitle} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {subjects.map((subject, i) => {
            const data = dict[subject.key]
            const Icon = subject.icon
            return (
              <motion.div
                key={subject.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeInOut' }}
              >
                <Link
                  href={`/${lang}/${subject.slug}`}
                  className={`group relative flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:shadow-lg ${subject.glow} ${subject.border} h-full`}
                >
                  <div
                    className={`inline-flex items-center justify-center rounded-xl p-3 bg-gradient-to-b ${subject.gradient} border border-zinc-800 w-fit`}
                  >
                    <Icon className={`size-6 ${subject.iconColor}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-50 mb-2">{data.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{data.description}</p>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-zinc-500 transition-colors group-hover:text-violet-400">
                    {dict.explore}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-3.5 transition-transform group-hover:translate-x-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 8h9M8.5 4l4.5 4-4.5 4" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SigmaIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6H6l6 6-6 6h12" />
    </svg>
  )
}

function AtomIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M12 3.75c2.486 2.486 3.75 5.286 3.75 8.25S14.486 18.764 12 21.25c-2.486-2.486-3.75-5.286-3.75-8.25S9.514 6.236 12 3.75Z" />
    </svg>
  )
}

function BookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  )
}
