import React, { FC } from 'react'

import {
  useActiveVkuiLocation,
  useGetPanelForView,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'
import {
  Button,
  Cell,
  CellButton,
  Group,
  Panel,
  PanelHeader,
  Tabs,
  TabsItem,
  View,
} from '@vkontakte/vkui'

import { routes } from '@/router.ts'

import { useBearStore } from '@/store/bearsStore.ts'

const View2: FC<{ id: string }> = ({ id }) => {
  const routeNavigator = useRouteNavigator()
  const activePanel = useGetPanelForView('default_view')

  const [bears, increase] = useBearStore((state) => [
    state.bears,
    state.increase,
  ])
  const { tab } = useActiveVkuiLocation()
  const activeTab = tab || 'tab1'

  return (
    <View activePanel={activePanel!} id={id}>
      <Panel id={routes.root2.view2['panel2.1'].id}>
        <PanelHeader>View2 Panel 2.1</PanelHeader>
        <Group>
          <div style={{ height: 200 }} />
          <CellButton
            onClick={() => routeNavigator.push(routes.root1.view1['panel1.1'])}
          >
            Back to View 1
          </CellButton>
          <CellButton
            onClick={() =>
              routeNavigator.push(routes.root2.view2['panel2.1']['user_modal'])
            }
          >
            Modal
          </CellButton>
          <div style={{ height: 600 }} />
        </Group>
      </Panel>
      <Panel id={routes.root2.view2['panel2.2'].id}>
        <PanelHeader>View2 Panel 2.2</PanelHeader>
        <Tabs>
          <TabsItem
            selected={activeTab === routes.root2.view2['panel2.2']['tab1'].id}
            onClick={() =>
              routeNavigator.push(routes.root2.view2['panel2.2']['tab1'])
            }
            id={routes.root2.view2['panel2.2']['tab1'].id}
          >
            {routes.root2.view2['panel2.2']['tab1'].id}
          </TabsItem>
          <TabsItem
            selected={activeTab === routes.root2.view2['panel2.2']['tab2'].id}
            onClick={() =>
              routeNavigator.push(routes.root2.view2['panel2.2']['tab2'])
            }
            id={routes.root2.view2['panel2.2']['tab2'].id}
          >
            {routes.root2.view2['panel2.2']['tab2'].id}
          </TabsItem>
        </Tabs>
        <Group>
          <CellButton
            onClick={() => routeNavigator.push(routes.root1.view1['panel1.1'])}
          >
            Back to View 1
          </CellButton>
        </Group>
        <Group>
          <Cell after={<Button onClick={() => increase(1)}>+1 bear</Button>}>
            {bears}
          </Cell>
        </Group>
      </Panel>
    </View>
  )
}

export default View2
