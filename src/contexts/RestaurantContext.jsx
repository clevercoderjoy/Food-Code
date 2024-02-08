import { createContext, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  return (
    <RestaurantContext.Provider value={{ currentRestaurant, setCurrentRestaurant }}>{children}</RestaurantContext.Provider>
  )
}