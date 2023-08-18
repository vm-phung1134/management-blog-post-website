import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AccessTokenProvider } from "./contexts/accessToken";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/searchValue";

const queryClient = new QueryClient();

const onPerfEntry = (entry: any) => {};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as any);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AccessTokenProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </AccessTokenProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals(onPerfEntry);
