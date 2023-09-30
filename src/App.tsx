import { useState } from "react";
import ReactLogo from "./assets/react.svg";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  useAdaptivity,
} from "@vkontakte/vkui";
import { useAppearance, useInsets } from "@vkontakte/vk-bridge-react";
import bridge from "@vkontakte/vk-bridge";

function App() {
  const [count, setCount] = useState(0);
  const appearance = useAppearance();
  const adaptivity = useAdaptivity();
  const insets = useInsets();
  const isWebView = bridge.isWebView();
  console.log({ appearance, adaptivity, insets, isWebView });
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <div
            className={
              "flex flex-col justify-center w-full h-full items-center bg-white dark:bg-black dark:text-white"
            }
          >
            <h1 className="text-3xl text-green-500 font-bold ">Hello world!</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <ReactLogo height={64} width={64} />
            </div>
          </div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
