import LanguageSelector from '@/components/ui/LanguageSelector'

export const metadata = {
  title: 'Mente – Choose Language / Vyberte jazyk',
}

export default function RootPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <LanguageSelector />
    </div>
  )
}
