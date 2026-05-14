import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import Hero from '@/components/sections/Hero'
import SubjectsOverview from '@/components/sections/SubjectsOverview'
import TrustSection from '@/components/sections/TrustSection'
import AboutSection from '@/components/sections/AboutSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sk' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return {
    title: lang === 'sk' ? 'Domov' : 'Home',
    alternates: {
      languages: { en: '/en', sk: '/sk' },
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <>
      <Hero lang={lang} dict={dict.hero} />
      <SubjectsOverview lang={lang} dict={dict.subjects} />
      <TrustSection dict={dict.trust} />
      <AboutSection lang={lang} dict={dict.about} />
      <FAQSection dict={dict.faq} />
      <ContactSection dict={dict.contact} />
    </>
  )
}
