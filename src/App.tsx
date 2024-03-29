import React from 'react'
import { YMInitializer } from 'react-yandex-metrika'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useInsets } from '@vkontakte/vk-bridge-react'
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Epic,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  useAdaptivityConditionalRender,
} from '@vkontakte/vkui'

import { routes } from '@/router.ts'

import { useAlert } from '@/context/AlertContext.tsx'
import { SnackbarContextProvider } from '@/context/SnackbarContext.tsx'

import { useLogin } from '@/hooks/useLogin.ts'

import EpicTabs from '@/components/EpicTabs/EpicTabs.tsx'
import Modals from '@/components/Modals/Modals.tsx'
import Root1 from '@/components/roots/Root1/Root1.tsx'
import Root2 from '@/components/roots/Root2/Root2.tsx'

function App() {
  const { modal: activeModal, root: activeRoot = 'root1' } =
    useActiveVkuiLocation()
  const { viewWidth } = useAdaptivityConditionalRender()
  useLogin()
  const adaptivity = useAdaptivity()
  const insets = useInsets()
  const { activeAlert } = useAlert()

  // const isWebView = bridge.isWebView()
  // const { bridgeUser } = useBridgeUser()
  // console.log({ adaptivity, insets, isWebView, viewWidth, routes })
  // console.log({ bridgeUser, appEnv }, appEnv.VITE_API_URL)

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <SnackbarContextProvider>
          <AppRoot>
            <SplitLayout
              modal={<Modals activeModal={activeModal} />}
              popout={activeAlert}
            >
              <SplitCol>
                <Epic activeStory={activeRoot} tabbar={<EpicTabs />}>
                  <Root1 id={routes.root1.id} />
                  <Root2 id={routes.root2.id} />
                </Epic>
              </SplitCol>
            </SplitLayout>
          </AppRoot>
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition={'bottom-left'}
          />
          <YMInitializer
            accounts={[0]}
            options={{
              webvisor: true,
              accurateTrackBounce: true,
              trackHash: true,
              clickmap: true,
              trackLinks: true,
              trackForms: true,
            }}
            version="2"
          />
        </SnackbarContextProvider>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App
