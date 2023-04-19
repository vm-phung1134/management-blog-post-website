import InfoBlog from "./Blog";
import HomePage from "./homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog-info' element={<InfoBlog />} />

      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
