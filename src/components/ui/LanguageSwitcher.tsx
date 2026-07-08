'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useCurrentLocale } from '../../lib/locales/client'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useCurrentLocale()

  function changeLocale(newLocale: string) {
    if (newLocale === currentLocale) return
    const pathWithoutLocale = pathname.startsWith(`/${currentLocale}/`)
      ? pathname.replace(`/${currentLocale}`, '')
      : pathname === `/${currentLocale}`
        ? '/'
        : pathname
    router.push(`/${newLocale}${pathWithoutLocale}`, { scroll: false })
    router.refresh()
  }

  return (
    <div className='flex items-center gap-1 border border-border rounded-lg p-1 bg-secondary'>
      <button onClick={() => changeLocale('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${currentLocale === 'en'
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:text-foreground'
          }`}
      >EN</button>
      <button onClick={() => changeLocale('es')}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${currentLocale === "es"
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
          }`}
      >ES</button>
    </div>
  )
}
