import {
  AdaptivityProvider,
  AppRoot,
  CellButton,
  ConfigProvider,
  Counter,
  Epic,
  Group,
  ModalCard,
  ModalRoot,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  Tabbar,
  TabbarItem,
  useAdaptivity,
  useAdaptivityConditionalRender,
  View,
} from "@vkontakte/vkui";
import { useInsets } from "@vkontakte/vk-bridge-react";
import bridge from "@vkontakte/vk-bridge";
import {
  useActiveVkuiLocation,
  useGetPanelForView,
  useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router";
import { routes } from "./router.ts";
import {
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
} from "@vkontakte/icons";

function App() {
  const { view: activeView = "view1", modal: activeModal } =
    useActiveVkuiLocation();
  const activePanel = useGetPanelForView("default_view");
  const routeNavigator = useRouteNavigator();
  const { viewWidth } = useAdaptivityConditionalRender();

  const adaptivity = useAdaptivity();
  const insets = useInsets();
  const isWebView = bridge.isWebView();

  console.log({ activeView, adaptivity, insets, isWebView, viewWidth });

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
        <AppRoot>
          <SplitLayout modal={modals}>
            <SplitCol>
              <Epic
                activeStory={activeView!}
                tabbar={
                  <Tabbar>
                    <TabbarItem
                      onClick={() =>
                        routeNavigator.push(routes.view1["panel1.1"])
                      }
                      selected={activeView === "feed"}
                      data-story="feed"
                      text="Новости"
                    >
                      <Icon28NewsfeedOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={() =>
                        routeNavigator.push(routes.view2["panel2.1"])
                      }
                      selected={activeView === "services"}
                      data-story="services"
                      text="Сервисы"
                    >
                      <Icon28ServicesOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={() =>
                        routeNavigator.push(routes.view2["panel2.2"])
                      }
                      selected={activeView === "messages"}
                      data-story="messages"
                      indicator={
                        <Counter size="s" mode="prominent">
                          12
                        </Counter>
                      }
                      text="Сообщения"
                    >
                      <Icon28MessageOutline />
                    </TabbarItem>
                  </Tabbar>
                }
              >
                <View activePanel={activePanel!} id="view1">
                  <Panel id="panel1.1">
                    <PanelHeader>View 1</PanelHeader>
                    <Group>
                      <div style={{ height: 200 }} />
                      <CellButton
                        onClick={() =>
                          routeNavigator.push(routes.view2["panel2.1"])
                        }
                      >
                        Open View 2
                      </CellButton>
                      <CellButton
                        onClick={() =>
                          routeNavigator.push(routes.view2["panel2.2"])
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
                          routeNavigator.push(routes.view1["panel1.1"])
                        }
                      >
                        Back to View 1
                      </CellButton>
                      <CellButton
                        onClick={() =>
                          routeNavigator.push(
                            routes.view2["panel2.1"]["user_modal"],
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
                          routeNavigator.push(routes.view1["panel1.1"])
                        }
                      >
                        Back to View 1
                      </CellButton>
                      <div style={{ height: 600 }} />
                    </Group>
                  </Panel>
                </View>
              </Epic>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
