import { describe, it, expect, beforeEach } from 'vitest'
import { useStore } from './useStore'

describe('useStore', () => {
  beforeEach(() => {
    useStore.setState({ language: 'en' })
  })

  it('initialises in English', () => {
    expect(useStore.getState().language).toBe('en')
  })

  it('switches to French', () => {
    useStore.getState().setLanguage('fr')
    expect(useStore.getState().language).toBe('fr')
  })

  it('switches back to English', () => {
    useStore.getState().setLanguage('fr')
    useStore.getState().setLanguage('en')
    expect(useStore.getState().language).toBe('en')
  })
})
