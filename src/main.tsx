import React from 'react'
import ReactDOM from 'react-dom/client'

import bridge from '@vkontakte/vk-bridge'
import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import '@vkontakte/vkui/dist/vkui.css'

import App from './App.tsx'
import './index.css'
import { router } from './router.ts'

void bridge.send('VKWebAppInit')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
