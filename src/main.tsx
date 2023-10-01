import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import bridge from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import { router } from "./router.ts";
import "./index.css";

void bridge.send("VKWebAppInit");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
