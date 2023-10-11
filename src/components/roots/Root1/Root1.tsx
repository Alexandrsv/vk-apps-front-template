import React, { FC } from 'react'

import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'
import { Root } from '@vkontakte/vkui'

import { routes } from '@/router.ts'

import View11 from '@/components/roots/Root1/views/View11.tsx'
import View12 from '@/components/roots/Root1/views/View12.tsx'

const Root1: FC<{ id: string }> = ({ id }) => {
  const { view: activeView = 'view1' } = useActiveVkuiLocation()

  return (
    <Root activeView={activeView} id={id}>
      <View11 id={routes.root1.view1.id} />
      <View12 id={routes.root1.view2.id} />
    </Root>
  )
}

export default Root1
