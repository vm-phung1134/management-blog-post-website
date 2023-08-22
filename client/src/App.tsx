/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import Login from "./pages/login";
import MainTemplate from "./components/Templates/MainTemplate";
import { useAuth } from "./contexts/authLoginState";

function App() {
  const { isAuthenticated } = useAuth();
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
