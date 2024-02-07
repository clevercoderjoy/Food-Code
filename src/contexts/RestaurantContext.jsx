import { createContext, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurantMenuReference, setRestaurantMenuReference] = useState({});
  return (
    <RestaurantContext.Provider value={{ restaurantMenuReference, setRestaurantMenuReference }}>{children}</RestaurantContext.Provider>
  )
}