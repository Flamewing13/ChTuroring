'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

interface RoadmapStep {
  number: string
  label: string
  description: string
}

interface RoadmapDict {
  section_title: string
  section_subtitle: string
  steps: RoadmapStep[]
}

export default function RoadmapSection({ dict }: { dict: RoadmapDict }) {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={dict.section_title} subtitle={dict.section_subtitle} className="mb-16" />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {dict.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeInOut' }}
                className="relative flex flex-col items-center text-center lg:items-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex size-16 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-950 shadow-lg">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-violet-800">
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-base font-semibold text-zinc-50 mb-2">{step.label}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-52 mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
