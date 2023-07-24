import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import Login from "./pages/login";
import MainTemplate from "./components/Templates/MainTemplate";

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
