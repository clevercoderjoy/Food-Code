import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import FoodMapper from "../../services/foodMapper/FoodMapper";
import { menu_urls } from "../../utils/constants";
import "./restaurantMenu.css";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  const { resId } = useParams();

  useEffect(() => {
    const fetchFoodData = async () => {
      try
      {
        const response = await fetch(menu_urls[resId]);
        const data = await response.json();
        setRestaurantMenu(data);
      }
      catch (error)
      {
        console.log("Error: ", error);
      }
    }
    fetchFoodData();
  }, [resId]);

  return (
    <FoodMapper menu={restaurantMenu} />
  );
}

export default RestaurantMenu;
