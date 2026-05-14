'use client'

import { motion } from 'framer-motion'

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function MotionSection({
  children,
  className = '',
  delay = 0,
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
