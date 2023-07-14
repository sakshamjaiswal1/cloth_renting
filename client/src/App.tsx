import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import SingleProduct from "./pages/singleProduct";
import WomenClothesPage from "./pages/womenClothesPage";
import MensClothesPage from "./pages/menClothesPage";
import AboutRentCause from "./pages/aboutRentCause";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/women/:id" element={<SingleProduct />} />
        <Route path="/singleProduct/men/:id" element={<SingleProduct />} />
        <Route path="/womenClothes" element={<WomenClothesPage />} />
        <Route path="/menClothes" element={<MensClothesPage />} />
        <Route path="/aboutRentCause" element={<AboutRentCause />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
