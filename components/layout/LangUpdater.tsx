'use client'

import { useEffect } from 'react'
import type { Locale } from '@/lib/i18n/dictionaries'

export default function LangUpdater({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
