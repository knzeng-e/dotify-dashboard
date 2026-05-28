import { create } from 'zustand'
import type { Lang } from '@/content/types'

interface DashboardStore {
  language: Lang
  setLanguage: (lang: Lang) => void
}

export const useStore = create<DashboardStore>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}))
