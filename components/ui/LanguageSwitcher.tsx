'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/lib/i18n/dictionaries'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  function switchTo(lang: Locale) {
    if (lang === currentLang) return
    const segments = pathname.split('/')
    segments[1] = lang
    const newPath = segments.join('/')
    document.cookie = `locale=${lang}; path=/; max-age=31536000; SameSite=Lax`
    router.push(newPath)
  }

  return (
    <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/60 p-0.5 text-sm font-medium">
      {(['en', 'sk'] as Locale[]).map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          className={`px-3 py-1 rounded-md transition-all duration-200 cursor-pointer ${
            lang === currentLang
              ? 'bg-violet-600 text-white'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
          aria-current={lang === currentLang ? 'true' : undefined}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
