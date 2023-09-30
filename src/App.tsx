import {
  AdaptivityProvider,
  AppRoot,
  CellButton,
  ConfigProvider,
  Group,
  ModalCard,
  ModalRoot,
  Panel,
  PanelHeader,
  Root,
  SplitLayout,
  useAdaptivity,
  View,
} from "@vkontakte/vkui";
import { useAppearance, useInsets } from "@vkontakte/vk-bridge-react";
import bridge from "@vkontakte/vk-bridge";
import {
  useActiveVkuiLocation,
  useGetPanelForView,
  useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router";
import { routes } from "./router.ts";

function App() {
  const { view: activeView, modal: activeModal } = useActiveVkuiLocation();
  const activePanel = useGetPanelForView("default_view");
  const routeNavigator = useRouteNavigator();

  const appearance = useAppearance();
  const adaptivity = useAdaptivity();
  const insets = useInsets();
  const isWebView = bridge.isWebView();

  console.log({ appearance, adaptivity, insets, isWebView });

  const modals = (
    <ModalRoot activeModal={activeModal} onClose={() => {}}>
      <ModalCard id="user_modal">
        Содержимое модального окна
        <CellButton onClick={() => routeNavigator.hideModal()}>
          Modal
        </CellButton>
      </ModalCard>
    </ModalRoot>
  );
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <SplitLayout modal={modals}>
          <AppRoot id={"default_root"}>
            <Root activeView={activeView!}>
              <View activePanel={activePanel!} id="view1">
                <Panel id="panel1.1">
                  <PanelHeader>View 1</PanelHeader>
                  <Group>
                    <div style={{ height: 200 }} />
                    <CellButton
                      onClick={() =>
                        routeNavigator.push(
                          routes.default_root.view2["panel2.1"],
                        )
                      }
                    >
                      Open View 2
                    </CellButton>

                    <CellButton
                      onClick={() =>
                        routeNavigator.push(
                          routes.default_root.view2["panel2.2"],
                        )
                      }
                    >
                      Open View 2.2
                    </CellButton>
                    <div style={{ height: 600 }} />
                  </Group>
                </Panel>
              </View>
              <View activePanel={activePanel!} id="view2">
                <Panel id="panel2.1">
                  <PanelHeader>View 2</PanelHeader>
                  <Group>
                    <div style={{ height: 200 }} />
                    <CellButton
                      onClick={() =>
                        routeNavigator.push(
                          routes.default_root.view1["panel1.1"],
                        )
                      }
                    >
                      Back to View 1
                    </CellButton>
                    <CellButton
                      onClick={() =>
                        routeNavigator.push(
                          routes.default_root.view2["panel2.1"]["user_modal"],
                        )
                      }
                    >
                      Modal
                    </CellButton>
                    <div style={{ height: 600 }} />
                  </Group>
                </Panel>
                <Panel id="panel2.2">
                  <PanelHeader>View 2.2</PanelHeader>
                  <Group>
                    <div style={{ height: 200 }} />
                    <CellButton
                      onClick={() =>
                        routeNavigator.push(
                          routes.default_root.view1["panel1.1"],
                        )
                      }
                    >
                      Back to View 1
                    </CellButton>
                    <div style={{ height: 600 }} />
                  </Group>
                </Panel>
              </View>
            </Root>
          </AppRoot>
        </SplitLayout>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
