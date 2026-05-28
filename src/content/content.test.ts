import { describe, it, expect } from 'vitest'
import { siteContent } from './site.content'
import { t } from '.'

describe('dashboard content', () => {
  it('contains only Dotify Music navigation sections', () => {
    expect(siteContent.nav.links.map((link) => link.href)).toEqual([
      '#product',
      '#flow',
      '#values',
      '#trust',
    ])
    expect(siteContent.nav.links.some((link) => link.href.includes('lab'))).toBe(false)
  })

  it('has bilingual hero content', () => {
    expect(siteContent.hero.title.en).toContain('Music')
    expect(siteContent.hero.title.fr).toContain('musique')
  })

  it('documents the core product flow', () => {
    expect(siteContent.flow.steps).toHaveLength(4)
    expect(siteContent.flow.steps.map((step) => step.title.en)).toEqual([
      'Discover a track',
      'Host a room',
      'Guests join freely',
      'Value flows back',
    ])
  })

  it('keeps product, values, and trust sections populated', () => {
    expect(siteContent.product.cards).toHaveLength(3)
    expect(siteContent.values.points).toHaveLength(3)
    expect(siteContent.trust.points).toHaveLength(3)
  })

  it('t() resolves to the requested language', () => {
    expect(t({ en: 'Listen', fr: 'Ecouter' }, 'en')).toBe('Listen')
    expect(t({ en: 'Listen', fr: 'Ecouter' }, 'fr')).toBe('Ecouter')
  })
})
