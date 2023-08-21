/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import Login from "./pages/login";
import MainTemplate from "./components/Templates/MainTemplate";
import { useAuth } from "./contexts/authLoginState";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    const socket = io("http://localhost:5000");
    console.log(socket)
  }, []);
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <MainTemplate>
                  <Page />
                </MainTemplate>
              }
            />
          );
        })}
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                isAuthenticated ? (
                  <MainTemplate>
                    <Page />
                  </MainTemplate>
                ) : (
                  <Navigate to={"/"} replace />
                )
              }
            />
          );
        })}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
