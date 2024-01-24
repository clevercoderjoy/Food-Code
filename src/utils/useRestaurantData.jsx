/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { res_url } from "./constants";
import usePromotedRestaurantData from "./usePromotedRestaurantData";

const useRestaurantData = () => {

  const [resData, setResData] = useState();

  useEffect(() => {
    fetchResData()
  }, []);

  const fetchResData = async () => {
    try
    {
      const response = await fetch(res_url);
      const data = await response.json();
      const restaurantData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const promotedRestaurantData = usePromotedRestaurantData(restaurantData);
      setResData(promotedRestaurantData);
    }
    catch (error)
    {
      console.log("Error: ", error);
    }
  }
  return resData;

}

export default useRestaurantData;