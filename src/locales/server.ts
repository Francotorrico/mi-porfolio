// locales/server.ts
import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
    en: () => import('./dict/en'),
    es: () => import('./dict/es')
})