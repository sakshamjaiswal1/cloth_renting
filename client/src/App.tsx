import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import SingleProduct from "./pages/singleProduct";
import WomenClothesPage from "./pages/womenClothesPage";
import MensClothesPage from "./pages/menClothesPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/womenClothes" element={<WomenClothesPage />} />
        <Route path="/menClothes" element={<MensClothesPage />} />
      </Routes>
    </div>
  );
}

export default App;
