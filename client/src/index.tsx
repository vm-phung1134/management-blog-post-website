import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AccessTokenProvider } from "./contexts/accessToken";

const onPerfEntry = (entry: any) => {};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as any);

root.render(
  <Provider store={store}>
    <AccessTokenProvider>
      <App />
    </AccessTokenProvider>
  </Provider>
);

reportWebVitals(onPerfEntry);
