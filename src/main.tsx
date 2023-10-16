import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import '@vkontakte/vkui/dist/vkui.css'

import { router } from '@/router.ts'

import { AlertContextProvider } from '@/context/AlertContext.tsx'

import Page404 from '@/components/Page404/Page404.tsx'

import App from '@/App.tsx'
import { initBridge } from '@/lib/bridge.ts'

import './index.css'

initBridge()

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AlertContextProvider>
        <RouterProvider router={router} notFound={<Page404 />}>
          <App />
        </RouterProvider>
      </AlertContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
