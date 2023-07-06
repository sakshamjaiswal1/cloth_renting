import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import SingleProduct from "./pages/singleProduct";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/singleProduct" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
