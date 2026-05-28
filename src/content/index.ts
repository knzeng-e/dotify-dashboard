export type {
  DashboardContent,
  FeatureCard,
  FlowStep,
  Lang,
  NavLink,
  TranslatedString,
  ValuePoint,
} from './types'

export { siteContent } from './site.content'

import type { Lang, TranslatedString } from './types'

export function t(value: TranslatedString, lang: Lang): string {
  return value[lang] ?? value.en
}
