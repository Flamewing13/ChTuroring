'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
          className="mt-3 text-base text-zinc-400 max-w-2xl leading-relaxed"
          style={centered ? { marginLeft: 'auto', marginRight: 'auto' } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
