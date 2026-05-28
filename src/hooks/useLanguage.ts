import { useStore } from '@/store/useStore'
import { t } from '@/content'
import type { TranslatedString } from '@/content/types'

export function useLanguage() {
  const language = useStore((s) => s.language)
  return (value: TranslatedString): string => t(value, language)
}
