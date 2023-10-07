import React from 'react'
import ReactDOM from 'react-dom/client'

import bridge from '@vkontakte/vk-bridge'
import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import '@vkontakte/vkui/dist/vkui.css'

import { router } from '@/router.ts'

import { AlertContextProvider } from '@/context/AlertContext.tsx'

import Page404 from '@/components/Page404/Page404.tsx'

import App from '@/App.tsx'

import './index.css'

void bridge.send('VKWebAppInit')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlertContextProvider>
      <RouterProvider router={router} notFound={<Page404 />}>
        <App />
      </RouterProvider>
    </AlertContextProvider>
  </React.StrictMode>
)
