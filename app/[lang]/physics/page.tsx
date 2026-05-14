import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import { physicsTopics } from '@/lib/content/topics'
import TopicCard from '@/components/ui/TopicCard'
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
  return { title: dict.subject_pages.physics.title }
}

export default async function PhysicsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const page = dict.subject_pages.physics

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionSection className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5 text-blue-400" aria-hidden="true">
                <circle cx="12" cy="12" r="2.25" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M12 3.75c2.486 2.486 3.75 5.286 3.75 8.25S14.486 18.764 12 21.25c-2.486-2.486-3.75-5.286-3.75-8.25S9.514 6.236 12 3.75Z" />
              </svg>
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              {lang === 'en' ? 'Physics' : 'Fyzika'}
            </span>
          </div>
          <SectionTitle
            title={page.title}
            subtitle={page.subtitle}
            centered={false}
          />
        </MotionSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {physicsTopics.map((topic, i) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              lang={lang}
              difficultyLabel={dict.difficulty[topic.difficulty]}
              watchVideoLabel={dict.topic_card.watch_video}
              videoComingSoonLabel={dict.topic_card.video_coming_soon}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
