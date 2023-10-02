import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useBearStore = create<BearState>()(
  devtools(
    (set) => ({
      bears: 0,
      increase: (by) =>
        set(
          (state: BearState) => ({ bears: state.bears + by }),
          false,
          'increase'
        ),
    }),
    { store: 'BearStore' }
  )
)
