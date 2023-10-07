import React from 'react'

import {
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
} from '@vkontakte/icons'
import {
  useActiveVkuiLocation,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'
import { Counter, Tabbar, TabbarItem } from '@vkontakte/vkui'

import { routes } from '@/router.ts'

const EpicTabs = () => {
  const routeNavigator = useRouteNavigator()
  const { view: activeView = 'view1', root: activeRoot = 'root1' } =
    useActiveVkuiLocation()
  return (
    <Tabbar>
      <TabbarItem
        onClick={() => routeNavigator.push(routes.root1.view1['panel1.1'])}
        selected={activeRoot === routes.root1.id}
        data-story="feed"
        text="Новости"
      >
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem
        onClick={() => routeNavigator.push(routes.root2.view2['panel2.1'])}
        selected={activeRoot === routes.root2.id}
        data-story="services"
        text="Сервисы"
      >
        <Icon28ServicesOutline />
      </TabbarItem>
      <TabbarItem
        onClick={() => routeNavigator.push(routes.root2.view2['panel2.2'])}
        selected={activeView === 'messages'}
        data-story="messages"
        indicator={
          <Counter size="s" mode="prominent">
            12
          </Counter>
        }
        text="Сообщения"
      >
        <Icon28MessageOutline />
      </TabbarItem>
    </Tabbar>
  )
}

export default EpicTabs
