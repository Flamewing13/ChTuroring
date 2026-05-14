'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import type { Locale } from '@/lib/i18n/dictionaries'

interface NavDict {
  mathematics: string
  physics: string
  other: string
  about: string
  contact: string
}

interface NavbarProps {
  lang: Locale
  dict: NavDict
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const base = `/${lang}`
  const links = [
    { href: `${base}/mathematics`, label: dict.mathematics },
    { href: `${base}/physics`, label: dict.physics },
    { href: `${base}/other`, label: dict.other },
    { href: `${base}/about`, label: dict.about },
    { href: `${base}/contact`, label: dict.contact },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="text-lg font-bold tracking-tight text-zinc-50 transition-opacity hover:opacity-80"
          >
            Mente
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      active
                        ? 'text-zinc-50'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-zinc-800"
                        style={{ zIndex: -1 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher currentLang={lang} />
            <Link
              href={`/${lang}/contact`}
              className="hidden sm:inline-flex items-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
            >
              {dict.contact}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="lg:hidden flex flex-col justify-center items-center size-9 rounded-lg border border-zinc-800 bg-zinc-900/60 gap-1.5 cursor-pointer"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-px w-4 bg-zinc-400 origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-4 bg-zinc-400"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-px w-4 bg-zinc-400 origin-center"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-16 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md lg:hidden"
          >
            <ul className="mx-auto max-w-6xl flex flex-col px-4 py-4 gap-1">
              {links.map((link) => {
                const active = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? 'bg-zinc-800 text-zinc-50'
                          : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-3 border-t border-zinc-800 mt-2">
                <Link
                  href={`/${lang}/contact`}
                  className="flex items-center justify-center w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
                >
                  {dict.contact}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
