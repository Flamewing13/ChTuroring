'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

interface MaterialItem {
  title: string
  subject: string
  type: string
  available: boolean
}

interface MaterialsDict {
  section_title: string
  section_subtitle: string
  coming_soon_label: string
  download_label: string
  items: MaterialItem[]
}

const subjectColors: Record<string, string> = {
  Mathematics: 'text-violet-400 bg-violet-500/10',
  Matematika: 'text-violet-400 bg-violet-500/10',
  Physics: 'text-blue-400 bg-blue-500/10',
  Fyzika: 'text-blue-400 bg-blue-500/10',
}

export default function MaterialsSection({ dict }: { dict: MaterialsDict }) {
  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={dict.section_title} subtitle={dict.section_subtitle} className="mb-12" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
            >
              {/* File icon */}
              <div className="flex size-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800/60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5 text-zinc-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-zinc-100 leading-snug mb-2">{item.title}</h3>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    subjectColors[item.subject] ?? 'text-zinc-400 bg-zinc-800'
                  }`}
                >
                  {item.subject}
                </span>
              </div>

              <div>
                {item.available ? (
                  <button className="w-full rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-500">
                    {dict.download_label}
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                    <span className="size-1.5 rounded-full bg-zinc-700" />
                    {dict.coming_soon_label}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
