import { Route, Routes } from "react-router-dom";
import About from '../pages/about/About';
import Cart from '../pages/cart/Cart';
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default NavigationRoutes;
