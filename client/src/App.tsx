import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import SingleProduct from "./pages/singleProduct";
import WomenClothesPage from "./pages/womenClothesPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/womenClothes" element={<WomenClothesPage />} />
      </Routes>
    </div>
  );
}

export default App;
