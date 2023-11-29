import type { Locale } from '@/i18n.config'

const dictionaries: any = {
  pt: () => import('@/dictionaries/pt.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()