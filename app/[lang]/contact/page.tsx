import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import ContactSection from '@/components/sections/ContactSection'
import MotionSection from '@/components/ui/MotionSection'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sk' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return { title: dict.contact_page.title }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const page = dict.contact_page

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">
              {page.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-4">
              {page.subtitle}
            </h1>
          </MotionSection>

          <MotionSection delay={0.1} className="mt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              {page.response_time}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Contact channels */}
      <ContactSection dict={dict.contact} />

      {/* Free call info */}
      <section className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <MotionSection>
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5 text-violet-400" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-zinc-50">{page.free_call_label}</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">{page.free_call_desc}</p>
            </div>
          </MotionSection>

          <MotionSection delay={0.1} className="mt-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <h2 className="text-lg font-semibold text-zinc-50 mb-3">{page.availability_title}</h2>
              <p className="text-zinc-400 leading-relaxed">{page.availability_desc}</p>
            </div>
          </MotionSection>
        </div>
      </section>
    </div>
  )
}
