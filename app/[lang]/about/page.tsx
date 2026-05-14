import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import RoadmapSection from '@/components/sections/RoadmapSection'
import MaterialsSection from '@/components/sections/MaterialsSection'
import SectionTitle from '@/components/ui/SectionTitle'
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
  return { title: dict.about_page.title }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const page = dict.about_page
  const about = dict.about

  const stats = [
    { value: about.stat1_value, label: about.stat1_label },
    { value: about.stat2_value, label: about.stat2_label },
    { value: about.stat3_value, label: about.stat3_label },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">
              {page.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-4">
              {about.name}
            </h1>
            <p className="text-lg text-violet-400 font-medium mb-8">{about.role}</p>
          </MotionSection>

          {/* Stats */}
          <MotionSection delay={0.1} className="mb-12">
            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-zinc-50">{stat.value}</div>
                  <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </MotionSection>

          {/* Bio */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <MotionSection delay={0.15}>
              <h2 className="text-xl font-semibold text-zinc-50 mb-4">
                {page.teaching_philosophy_title}
              </h2>
              <p className="text-zinc-400 leading-relaxed">{page.teaching_philosophy}</p>
            </MotionSection>
            <MotionSection delay={0.2}>
              <h2 className="text-xl font-semibold text-zinc-50 mb-4">
                {page.background_title}
              </h2>
              <p className="text-zinc-400 leading-relaxed">{page.background}</p>
            </MotionSection>
          </div>
        </div>
      </section>

      <RoadmapSection dict={dict.roadmap} />
      <MaterialsSection dict={dict.materials} />
    </div>
  )
}
