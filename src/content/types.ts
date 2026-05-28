export type Lang = 'en' | 'fr'

export type TranslatedString = {
  en: string
  fr: string
}

export interface NavLink {
  label: TranslatedString
  href: string
}

export interface FeatureCard {
  title: TranslatedString
  body: TranslatedString
}

export interface FlowStep {
  label: TranslatedString
  title: TranslatedString
  body: TranslatedString
}

export interface ValuePoint {
  title: TranslatedString
  body: TranslatedString
}

export interface DashboardContent {
  nav: {
    brand: {
      name: string
      dot: string
      sub: TranslatedString
    }
    links: NavLink[]
  }
  hero: {
    eyebrow: TranslatedString
    title: TranslatedString
    lead: TranslatedString
    primaryCta: TranslatedString
    secondaryCta: TranslatedString
  }
  product: {
    title: TranslatedString
    intro: TranslatedString
    cards: FeatureCard[]
  }
  flow: {
    title: TranslatedString
    intro: TranslatedString
    steps: FlowStep[]
  }
  values: {
    title: TranslatedString
    intro: TranslatedString
    points: ValuePoint[]
  }
  trust: {
    title: TranslatedString
    intro: TranslatedString
    points: FeatureCard[]
  }
  manifesto: {
    quote: TranslatedString
    attribution: string
  }
  footer: {
    tagline: TranslatedString
    links: Array<{
      label: string
      href: string
      external: boolean
    }>
  }
  langToggle: {
    en: string
    fr: string
  }
}
