import Link from 'next/link'
import type { Locale } from '@/lib/i18n/dictionaries'

interface FooterProps {
  lang: Locale
  dictNav: {
    mathematics: string
    physics: string
    other: string
    about: string
    contact: string
  }
  dictFooter: {
    tagline: string
    copyright: string
  }
  dictContact: {
    email_href: string
    instagram_href: string
    youtube_href: string
  }
}

export default function Footer({ lang, dictNav, dictFooter, dictContact }: FooterProps) {
  const base = `/${lang}`
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href={`/${lang}`} className="text-lg font-bold text-zinc-50">
              Mente
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              {dictFooter.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              {lang === 'en' ? 'Subjects' : 'Predmety'}
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { href: `${base}/mathematics`, label: dictNav.mathematics },
                { href: `${base}/physics`, label: dictNav.physics },
                { href: `${base}/other`, label: dictNav.other },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links + Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              {lang === 'en' ? 'Connect' : 'Kontakt'}
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href={`${base}/about`}
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  {dictNav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/contact`}
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  {dictNav.contact}
                </Link>
              </li>
              <li>
                <a
                  href={dictContact.instagram_href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={dictContact.youtube_href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {year} Mente. {dictFooter.copyright}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={dictContact.instagram_href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-600 transition-colors hover:text-zinc-400"
            >
              <InstagramIcon />
            </a>
            <a
              href={dictContact.youtube_href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-zinc-600 transition-colors hover:text-zinc-400"
            >
              <YoutubeIcon />
            </a>
            <a
              href={dictContact.email_href}
              aria-label="Email"
              className="text-zinc-600 transition-colors hover:text-zinc-400"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}
