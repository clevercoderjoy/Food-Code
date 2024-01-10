import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { menu_urls } from "./constants";

const useRestaurantMenu = () => {
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
  }, [resId, restaurantMenu])

  return restaurantMenu;

}

export default useRestaurantMenu;