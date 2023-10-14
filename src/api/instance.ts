import axios from 'axios'

import { appEnv } from '@/lib/envs.ts'

export const instance = axios.create({
  baseURL: appEnv.VITE_API_URL,
  timeout: 1000,
  headers: { authorization: window.location.search.slice(1) },
})

export const apiUrls = {
  user: {
    login: '/user/login',
  },
} as const
