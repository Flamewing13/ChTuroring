import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Mente',
    default: 'Mente – Private Tutoring',
  },
  description:
    'Expert private tutoring in Mathematics, Physics, and more. Personalized 1-on-1 sessions tailored to your learning goals.',
  openGraph: {
    type: 'website',
    siteName: 'Mente',
    title: 'Mente – Private Tutoring',
    description:
      'Expert private tutoring in Mathematics, Physics, and more.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased flex flex-col">
        {children}
      </body>
    </html>
  )
}
