import bridge, { VKBridgeEvent } from '@vkontakte/vk-bridge'
import { AnyReceiveMethodName } from '@vkontakte/vk-bridge/dist/types/src/types/bridge'

const consoleStyle = [
  'color: #fff',
  'background-color: #777',
  'padding: 2px 6px',
  'border-radius: 20px',
].join(';')

export const initBridge = (): void => {
  bridge.subscribe((e: VKBridgeEvent<AnyReceiveMethodName>) => {
    switch (e.detail.type) {
      case 'VKWebAppUpdateConfig': {
        console.log('%cBridge', consoleStyle, e.detail)

        break
      }
      default:
        console.log('%cBridge', consoleStyle, e.detail)

        return
    }
  })
  void bridge.send('VKWebAppInit')
}
