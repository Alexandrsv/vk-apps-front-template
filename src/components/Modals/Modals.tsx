import React, { FC } from 'react'

import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { CellButton, ModalCard, ModalRoot } from '@vkontakte/vkui'

import { routes } from '@/router.ts'

const Modals: FC<{ activeModal?: string }> = ({ activeModal }) => {
  const routeNavigator = useRouteNavigator()

  return (
    <ModalRoot
      activeModal={activeModal}
      onClose={() => routeNavigator.hideModal()}
    >
      <ModalCard id={routes.root2.view2['panel2.1']['user_modal'].id}>
        Содержимое модального окна
        <CellButton onClick={() => routeNavigator.hideModal()}>
          Modal
        </CellButton>
      </ModalCard>
    </ModalRoot>
  )
}

export default Modals
