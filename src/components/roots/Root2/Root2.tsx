import { FC } from 'react'

import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router'
import { Root } from '@vkontakte/vkui'

import { routes } from '@/router.ts'

import View2 from '@/components/roots/Root2/views/View2/View2.tsx'

const Root2: FC<{ id: string }> = ({ id }) => {
  const { view: activeView = 'view1' } = useActiveVkuiLocation()

  return (
    <Root activeView={activeView} id={id}>
      <View2 id={routes.root2.view2.id} />
    </Root>
  )
}

export default Root2
