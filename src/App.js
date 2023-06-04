import InfoBlog from "./blog";
import HomePage from "./homepage";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog-info" element={<InfoBlog />} />
          <Route path="/login-account" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
