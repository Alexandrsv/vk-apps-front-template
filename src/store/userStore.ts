import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IUser } from '@/serverTypes.ts'

interface IUserState {
  user: IUser
  setUser: (user: IUser) => void
  updateUser: (user: Partial<IUser>) => void
}

export const useBearStore = create<IUserState>()(
  devtools(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }, false, 'setUser'),
      updateUser: (user) => {
        const currentUser = get().user

        if (currentUser) {
          set({ user: { ...currentUser, ...user } }, false, 'updateUser')
        } else {
          console.error('User is not defined')
        }
      },
    }),
    { store: 'UserStore' }
  )
)
