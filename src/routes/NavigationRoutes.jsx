import { Route, Routes } from "react-router-dom";
import About from '../pages/about/About';
import Cart from '../pages/cart/Cart';
import Home from "../pages/home/Home";

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default NavigationRoutes;
