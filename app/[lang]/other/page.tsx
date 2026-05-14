import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/lib/i18n/dictionaries'
import { otherTopics } from '@/lib/content/topics'
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
  return { title: dict.subject_pages.other.title }
}

export default async function OtherPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const page = dict.subject_pages.other

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionSection className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5 text-emerald-400" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              {lang === 'en' ? 'Other Subjects' : 'Iné Predmety'}
            </span>
          </div>
          <SectionTitle
            title={page.title}
            subtitle={page.subtitle}
            centered={false}
          />
        </MotionSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherTopics.map((topic, i) => (
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
