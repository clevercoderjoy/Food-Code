import FoodMapper from "../../services/foodMapper/FoodMapper";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const restaurantMenu = useRestaurantMenu();

  return (
    <FoodMapper menu={restaurantMenu} />
  );
}

export default RestaurantMenu;
