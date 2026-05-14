const dictionaries = {
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  sk: () => import('./dictionaries/sk.json').then((m) => m.default),
}

export type Locale = keyof typeof dictionaries

export const LOCALES: Locale[] = ['en', 'sk']

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
