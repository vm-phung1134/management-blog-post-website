import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/searchValue";
import { AuthProvider } from "./contexts/authLoginState";
import { SocketProvider } from "./contexts/useSocket";

const queryClient = new QueryClient();

const onPerfEntry = (entry: any) => {};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as any);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <SocketProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </SocketProvider>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals(onPerfEntry);
