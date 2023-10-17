import { useEffect } from 'react'

import { QueryKey, useQuery } from '@tanstack/react-query'

import { apiUrls } from '@/api/instance.ts'
import { login } from '@/api/user.ts'
import { useBearStore } from '@/store/userStore.ts'

export const useLogin = () => {
  const queryKey: QueryKey = [apiUrls.user.login]
  const { data: userLogin, ...query } = useQuery(queryKey, () => login(), {})
  const { setUser } = useBearStore()

  useEffect(() => {
    if (userLogin) {
      setUser(userLogin)
    }
  }, [setUser, userLogin])

  const revalidate = async () => {
    await query.refetch()
  }

  return { userLogin, revalidate }
}
