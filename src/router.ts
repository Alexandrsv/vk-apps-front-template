import {
  RoutesConfig,
  createHashRouter,
  createModal,
  createPanel,
  createRoot,
  createView,
} from '@vkontakte/vk-mini-apps-router'

// Создание конфигурации маршрутов
export const routes = RoutesConfig.create([
  createRoot('root1', [createView('view1', [createPanel('panel1.1', '/')])]),
  createRoot('root2', [
    createView('view2', [
      createPanel('panel2.1', '/panel2', [
        createModal('user_modal', '/user-card'),
      ]),
      createPanel('panel2.2', '/panel2.2'),
      // Добавьте здесь другие панели, если необходимо
    ]),
  ]),
])

// Создание роутера и передача ему конфигурации маршрутов
export const router = createHashRouter(routes.getRoutes())
