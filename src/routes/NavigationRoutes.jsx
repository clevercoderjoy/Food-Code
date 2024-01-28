import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import('../pages/about/About'));
const Error = lazy(() => import('../pages/error/Error'));
const RestaurantMenu = lazy(() => import("../pages/restaurantMenu/RestaurantMenu"));
const Cart = lazy(() => import('../pages/cart/Cart'));


const routes = [
  { path: "/", element: < Home /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/restaurants/:resId", element: <RestaurantMenu /> },
  { path: "*", element: <Error /> }
]

const NavigationRoutes = () => {
  return (
    <>
      <Suspense fallback={<h1 style={{ textAlign: "center", margin: "1rem auto" }}>Loading...</h1>}>
        <Routes>
          {routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
        </Routes>
      </Suspense>
    </>
  );
}

export default NavigationRoutes;