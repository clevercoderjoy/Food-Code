import { useEffect, useState } from "react";
import { res_url } from "./constants";

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
      setResData(restaurantData);
    }
    catch (error)
    {
      console.log("Error: ", error);
    }
  }
  return resData;

}

export default useRestaurantData;