import {
  RoutesConfig,
  createHashRouter,
  createModal,
  createPanel,
  createRoot,
  createTab,
  createView,
} from '@vkontakte/vk-mini-apps-router'

// Создание конфигурации маршрутов
export const routes = RoutesConfig.create([
  createRoot('root1', [
    createView('view1', [createPanel('panel1.1', '/')]),
    createView('view2', [
      createPanel('panel1.2.1', '/panel1.2.1/:id', [], ['id'] as const),
    ]),
  ]),
  createRoot('root2', [
    createView('view2', [
      createPanel('panel2.1', '/panel2', [
        createModal('user_modal', '/user-card'),
      ]),
      createPanel('panel2.2', '/panel2.2', [
        createTab('tab1', `/panel2.2/tab1`),
        createTab('tab2', `/panel2.2/tab2`),
      ]),
    ]),
  ]),
])

// Создание роутера и передача ему конфигурации маршрутов
export const router = createHashRouter(routes.getRoutes())
