import { useSelector } from 'react-redux';
import NavigationRoutes from '../../routes/NavigationRoutes';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const FoodCode = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="foodCode text-center m-auto">
      <Header cartItems={cartItems} />
      <NavigationRoutes />
      <Footer cartItems={cartItems} />
    </div>
  );
}

export default FoodCode;
