import React, { FC } from 'react'

import {
  useGetPanelForView,
  useParams,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'
import { CellButton, Group, Panel, PanelHeader, View } from '@vkontakte/vkui'

import { routes } from '@/router.ts'

import { login } from '@/api/user.ts'

const View2: FC<{ id: string }> = ({ id }) => {
  const routeNavigator = useRouteNavigator()
  const activePanel = useGetPanelForView('default_view')

  const params = useParams<'id'>()

  const onLogin = () => {
    void login()
  }

  return (
    <View activePanel={activePanel!} id={id}>
      <Panel id={routes.root1.view2['panel1.2.1'].id}>
        <PanelHeader>View2 Panel 2.1</PanelHeader>
        <Group>
          <CellButton
            onClick={() =>
              routeNavigator.push(routes.root1.view2['panel1.2.1'], {
                id: (params?.id ? +params.id + 1 : 1).toString(),
              })
            }
          >
            next
          </CellButton>
          <CellButton
            onClick={() => routeNavigator.push(routes.root1.view1['panel1.1'])}
          >
            Back to View 1
          </CellButton>
          <CellButton onClick={onLogin}>Login</CellButton>
        </Group>
      </Panel>
    </View>
  )
}

export default View2
