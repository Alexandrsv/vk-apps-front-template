import React, { FC } from 'react'

import {
  useActiveVkuiLocation,
  useGetPanelForView,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'
import {
  CellButton,
  Group,
  Panel,
  PanelHeader,
  Root,
  View,
} from '@vkontakte/vkui'

import { routes } from '../../../router.ts'

const Root1: FC<{ id: string }> = ({ id }) => {
  const { view: activeView = 'view1' } = useActiveVkuiLocation()
  const activePanel = useGetPanelForView('default_view')

  const routeNavigator = useRouteNavigator()

  return (
    <Root activeView={activeView} id={id}>
      <View activePanel={activePanel!} id={routes.root1.view1.id}>
        <Panel id={routes.root1.view1['panel1.1'].id}>
          <PanelHeader>View 1</PanelHeader>
          <Group>
            <div style={{ height: 200 }} />
            <CellButton
              onClick={() =>
                routeNavigator.push(routes.root2.view2['panel2.1'])
              }
            >
              Open View 2
            </CellButton>
            <CellButton
              onClick={() =>
                routeNavigator.push(routes.root2.view2['panel2.2'])
              }
            >
              Open View 2.2
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
      </View>
    </Root>
  )
}

export default Root1
