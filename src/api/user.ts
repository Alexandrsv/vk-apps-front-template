import { apiUrls, instance } from '@/api/instance.ts'

export const login = async () => {
  const response = await instance.get(apiUrls.user.login)

  return response.data
}
