'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

interface FAQItem {
  q: string
  a: string
}

interface FAQDict {
  section_title: string
  items: FAQItem[]
}

export default function FAQSection({ dict }: { dict: FAQDict }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-900/30">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title={dict.section_title} className="mb-12" />

        <div className="space-y-2">
          {dict.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-5 text-left transition-colors hover:border-zinc-700 hover:bg-zinc-900 cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="font-medium text-zinc-100">{item.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-none text-zinc-400"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5v9M3.5 8h9" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-3 text-sm text-zinc-400 leading-relaxed border border-t-0 border-zinc-800 rounded-b-xl bg-zinc-900/40">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
