'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LanguageSelector() {
  const router = useRouter()

  function select(lang: 'en' | 'sk') {
    document.cookie = `locale=${lang}; path=/; max-age=31536000; SameSite=Lax`
    router.push(`/${lang}`)
  }

  return (
    <div className="relative z-10 flex flex-col items-center gap-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold tracking-tight text-zinc-50">Mente</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          Welcome
          <span className="text-zinc-400 font-normal"> / </span>
          Vitajte
        </h1>
        <p className="mt-3 text-zinc-400 text-base">
          Choose your language to continue
          <span className="mx-2 text-zinc-600">·</span>
          Zvoľte jazyk pre pokračovanie
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeInOut' }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-sm"
      >
        <button
          onClick={() => select('en')}
          className="group relative flex-1 flex flex-col items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-8 py-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-violet-500/60 hover:bg-violet-500/5 cursor-pointer"
        >
          <span className="text-2xl mb-1">🇬🇧</span>
          <span className="font-semibold text-zinc-50">English</span>
          <span className="text-xs text-zinc-500">Continue in English</span>
          <span className="absolute inset-0 rounded-2xl ring-0 transition-all duration-300 group-hover:ring-1 group-hover:ring-violet-500/30" />
        </button>

        <button
          onClick={() => select('sk')}
          className="group relative flex-1 flex flex-col items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-8 py-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-violet-500/60 hover:bg-violet-500/5 cursor-pointer"
        >
          <span className="text-2xl mb-1">🇸🇰</span>
          <span className="font-semibold text-zinc-50">Slovenčina</span>
          <span className="text-xs text-zinc-500">Pokračovať po slovensky</span>
          <span className="absolute inset-0 rounded-2xl ring-0 transition-all duration-300 group-hover:ring-1 group-hover:ring-violet-500/30" />
        </button>
      </motion.div>
    </div>
  )
}
