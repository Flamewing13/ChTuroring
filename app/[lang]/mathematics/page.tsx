import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import { mathematicsTopics } from '@/lib/content/topics'
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
  return { title: dict.subject_pages.mathematics.title }
}

export default async function MathematicsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const page = dict.subject_pages.mathematics

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionSection className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5 text-violet-400" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 6H6l6 6-6 6h12" />
              </svg>
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              {lang === 'en' ? 'Mathematics' : 'Matematika'}
            </span>
          </div>
          <SectionTitle
            title={page.title}
            subtitle={page.subtitle}
            centered={false}
          />
        </MotionSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mathematicsTopics.map((topic, i) => (
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
