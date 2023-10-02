import React, { FC } from "react";
import {
  useActiveVkuiLocation,
  useGetPanelForView,
  useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router";
import { routes } from "../../../router.ts";
import {
  CellButton,
  Group,
  Panel,
  PanelHeader,
  Root,
  View,
} from "@vkontakte/vkui";

const Root2: FC<{ id: string }> = ({ id }) => {
  const {
    view: activeView = "view1",
    modal: activeModal,
    root: activeRoot = "root1",
  } = useActiveVkuiLocation();
  const activePanel = useGetPanelForView("default_view");

  const routeNavigator = useRouteNavigator();

  return (
    <Root activeView={activeView} id={id}>
      <View activePanel={activePanel!} id={routes.root2.view2.id}>
        <Panel id={routes.root2.view2["panel2.1"].id}>
          <PanelHeader>View 2</PanelHeader>
          <Group>
            <div style={{ height: 200 }} />
            <CellButton
              onClick={() =>
                routeNavigator.push(routes.root1.view1["panel1.1"])
              }
            >
              Back to View 1
            </CellButton>
            <CellButton
              onClick={() =>
                routeNavigator.push(
                  routes.root2.view2["panel2.1"]["user_modal"],
                )
              }
            >
              Modal
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
        <Panel id={routes.root2.view2["panel2.2"].id}>
          <PanelHeader>View 2.2</PanelHeader>
          <Group>
            <div style={{ height: 200 }} />
            <CellButton
              onClick={() =>
                routeNavigator.push(routes.root1.view1["panel1.1"])
              }
            >
              Back to View 1
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
      </View>
    </Root>
  );
};

export default Root2;
