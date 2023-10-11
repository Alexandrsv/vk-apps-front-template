import React, { FC } from 'react'
import ym from 'react-yandex-metrika'

import {
  useGetPanelForView,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router'
import { CellButton, Group, Panel, PanelHeader, View } from '@vkontakte/vkui'

import { routes } from '@/router.ts'

import { useAlert } from '@/context/AlertContext.tsx'
import { useSnackbar } from '@/context/SnackbarContext.tsx'

const View11: FC<{ id: string }> = ({ id }) => {
  const activePanel = useGetPanelForView('default_view')

  const routeNavigator = useRouteNavigator()

  const { showSnackbar } = useSnackbar()

  const { setActiveAlert } = useAlert()

  const onShowSnackbar = () => {
    ym('reachGoal', 'goalName')

    showSnackbar({
      text: 'Hello world!',
      variant: 'success',
    })
  }

  const onShowAlert = () => {
    setActiveAlert({
      text: 'Вы уверены, что хотите удалить ответ?',
      header: 'Удалить обратную связь?',
      actions: [
        {
          title: 'Отмена',
          autoClose: true,
          mode: 'destructive',
        },
        {
          title: 'Ok',
          autoClose: true,
          mode: 'default',
          action: () => {
            showSnackbar({
              text: 'Зааллерчено',
              variant: 'success',
            })
          },
        },
      ],
    })
  }
  return (
    <View activePanel={activePanel!} id={id}>
      <Panel id={routes.root1.view1['panel1.1'].id}>
        <PanelHeader>View 1 panel1.1</PanelHeader>
        <Group>
          <CellButton
            onClick={() => routeNavigator.push(routes.root2.view2['panel2.1'])}
          >
            Open View 2
          </CellButton>
          <CellButton
            onClick={() => routeNavigator.push(routes.root2.view2['panel2.2'])}
          >
            Open View 2.2
          </CellButton>
          <CellButton
            onClick={() =>
              routeNavigator.push(routes.root1.view2['panel1.2.1'], { id: '1' })
            }
          >
            Open View 1.2.1
          </CellButton>
          <CellButton onClick={onShowSnackbar}>onShowSnackbar</CellButton>
          <CellButton onClick={onShowAlert}>Alert</CellButton>
        </Group>
      </Panel>
    </View>
  )
}

export default View11
