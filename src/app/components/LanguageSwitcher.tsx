'use client'
import { useChangeLocale, useCurrentLocale } from '../../locales/client'

export default function LanguageSwitcher() {
  const changeLocale = useChangeLocale() // Esto es una función
  const currentLocale = useCurrentLocale() // Esto devuelve el idioma actual

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
