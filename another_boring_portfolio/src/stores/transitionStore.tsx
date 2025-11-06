import { create } from 'zustand'

interface TransitionStore {
  isTransitioning: boolean
  targetRoute: string | null
  startTransition: (route: string) => void
  endTransition: () => void
}

export const useTransitionStore = create<TransitionStore>((set) => ({
  isTransitioning: false,
  targetRoute: null,
  startTransition: (route) => set({ isTransitioning: true, targetRoute: route }),
  endTransition: () => set({ isTransitioning: false, targetRoute: null }),
}))