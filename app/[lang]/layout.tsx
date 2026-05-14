import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LangUpdater from '@/components/layout/LangUpdater'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sk' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <>
      <LangUpdater lang={lang} />
      <Navbar lang={lang} dict={dict.nav} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer
        lang={lang}
        dictNav={dict.nav}
        dictFooter={dict.footer}
        dictContact={dict.contact}
      />
    </>
  )
}
