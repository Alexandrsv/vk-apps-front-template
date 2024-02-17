import React from 'react'

import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Button, Text } from '@vkontakte/vkui'

import { routes } from '@/router.ts'

const Page404 = () => {
  const routeNavigator = useRouteNavigator()

  return (
    <div
      className={
        'flex h-screen w-full flex-col items-center justify-center gap-4'
      }
    >
      <Text weight="1" className={'text-3xl'}>
        404
      </Text>
      <Button
        onClick={() => routeNavigator.push(routes.root2.view2['panel2.1'])}
      >
        Go to panel2.1
      </Button>
    </div>
  )
}

export default Page404
