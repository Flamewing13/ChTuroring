'use client'

import { motion } from 'framer-motion'
import type { Topic, Difficulty } from '@/lib/content/topics'
import type { Locale } from '@/lib/i18n/dictionaries'

const difficultyStyles: Record<
  Difficulty,
  { bg: string; text: string; dot: string }
> = {
  beginner: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
  },
  intermediate: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    dot: 'bg-amber-400',
  },
  advanced: {
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    dot: 'bg-rose-400',
  },
}

interface TopicCardProps {
  topic: Topic
  lang: Locale
  difficultyLabel: string
  watchVideoLabel: string
  videoComingSoonLabel: string
  index?: number
}

export default function TopicCard({
  topic,
  lang,
  difficultyLabel,
  watchVideoLabel,
  videoComingSoonLabel,
  index = 0,
}: TopicCardProps) {
  const diff = difficultyStyles[topic.difficulty]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: 'easeInOut',
      }}
      whileHover={{ y: -2 }}
      className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
    >
      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(400px_at_50%_-20%,rgb(124_58_237_/_0.06),transparent)]" />

      <div className="relative flex flex-col flex-1 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-50 leading-snug">
            {topic.title[lang]}
          </h3>
          <span
            className={`flex-none inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${diff.bg} ${diff.text}`}
          >
            <span className={`size-1.5 rounded-full ${diff.dot}`} />
            {difficultyLabel}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed flex-1">
          {topic.description[lang]}
        </p>

        {/* Video */}
        <div className="mt-auto pt-2 border-t border-zinc-800">
          {topic.videoId ? (
            <a
              href={`https://youtube.com/watch?v=${topic.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              <YoutubeIcon />
              {watchVideoLabel}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-zinc-600">
              <YoutubeIcon className="opacity-40" />
              {videoComingSoonLabel}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function YoutubeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
