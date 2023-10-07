import bridge from '@vkontakte/vk-bridge'
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

import EpicTabs from './components/EpicTabs/EpicTabs.tsx'
import Modals from './components/Modals/Modals.tsx'
import Root1 from './components/roots/Root1/Root1.tsx'
import Root2 from './components/roots/Root2/Root2.tsx'

import { useAlert } from './context/AlertContext.tsx'
import { SnackbarContextProvider } from './context/SnackbarContext.tsx'
import { routes } from './router.ts'

function App() {
  const { modal: activeModal, root: activeRoot = 'root1' } =
    useActiveVkuiLocation()
  const { viewWidth } = useAdaptivityConditionalRender()

  const adaptivity = useAdaptivity()
  const insets = useInsets()
  const { activeAlert } = useAlert()

  const isWebView = bridge.isWebView()

  console.log({ adaptivity, insets, isWebView, viewWidth, routes })

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
        </SnackbarContextProvider>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App
