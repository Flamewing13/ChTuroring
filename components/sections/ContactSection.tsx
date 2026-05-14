'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

interface ContactDict {
  section_title: string
  section_subtitle: string
  email_label: string
  instagram_label: string
  youtube_label: string
  email_value: string
  instagram_value: string
  youtube_value: string
  email_href: string
  instagram_href: string
  youtube_href: string
}

const channels = [
  {
    key: 'email' as const,
    icon: EmailIcon,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    hoverBorder: 'hover:border-violet-500/40',
  },
  {
    key: 'instagram' as const,
    icon: InstagramIcon,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    hoverBorder: 'hover:border-pink-500/40',
  },
  {
    key: 'youtube' as const,
    icon: YoutubeIcon,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    hoverBorder: 'hover:border-red-500/40',
  },
]

export default function ContactSection({ dict }: { dict: ContactDict }) {
  const items = [
    {
      channel: channels[0],
      label: dict.email_label,
      value: dict.email_value,
      href: dict.email_href,
    },
    {
      channel: channels[1],
      label: dict.instagram_label,
      value: dict.instagram_value,
      href: dict.instagram_href,
    },
    {
      channel: channels[2],
      label: dict.youtube_label,
      value: dict.youtube_value,
      href: dict.youtube_href,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle title={dict.section_title} subtitle={dict.section_subtitle} className="mb-12" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map(({ channel, label, value, href }, i) => {
            const Icon = channel.icon
            return (
              <motion.a
                key={channel.key}
                href={href}
                target={channel.key !== 'email' ? '_blank' : undefined}
                rel={channel.key !== 'email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className={`group flex flex-col items-center gap-4 rounded-2xl border ${channel.border} bg-zinc-900/50 p-7 transition-all duration-300 ${channel.hoverBorder} hover:bg-zinc-900/80`}
              >
                <div className={`flex size-12 items-center justify-center rounded-xl ${channel.bg}`}>
                  <Icon className={`size-6 ${channel.color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-zinc-200">{value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function EmailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function YoutubeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
