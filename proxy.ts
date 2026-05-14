import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['en', 'sk'] as const
type Locale = (typeof LOCALES)[number]

function getLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get('locale')?.value
  if (cookie && LOCALES.includes(cookie as Locale)) return cookie as Locale
  const acceptLang = request.headers.get('accept-language') ?? ''
  if (acceptLang.toLowerCase().includes('sk')) return 'sk'
  return 'en'
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (hasLocale) return NextResponse.next()
  if (pathname === '/') return NextResponse.next()

  const locale = getLocale(request)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|favicon\\.ico|.*\\..*).*)'  ],
}
