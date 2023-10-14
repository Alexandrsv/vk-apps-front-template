import { useQuery } from 'react-query'

import bridge, { UserInfo } from '@vkontakte/vk-bridge'

const bridgeUserFetcher = async (id = 0) => {
  const props = id && id !== 0 ? { user_id: +id } : {}

  return bridge.send('VKWebAppGetUserInfo', props).then((data) => {
    return data as UserInfo & {
      bdate_visibility: 0 | 1 | 2
      is_closed: boolean
    }
  })
}

// Если 0, то берем текущего пользователя
export const useBridgeUser = (vkId = 0) => {
  const queryKey = `/bridge-user/${vkId}`
  const { data: bridgeUser, ...query } = useQuery(queryKey, () =>
    bridgeUserFetcher(vkId)
  )
  const revalidate = async () => {
    await query.refetch()
  }

  return { bridgeUser, revalidate }
}