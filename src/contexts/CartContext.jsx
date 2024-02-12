import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItems, clearCart } from "../services/reduxStore/cartSlice/cartSlice";
import { RestaurantContext } from "./RestaurantContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { currentRestaurant, setCurrentRestaurant } = useContext(RestaurantContext);


  useEffect(() => {
    setCurrentRestaurant(selectedRestaurant);
  }, [selectedRestaurant, setCurrentRestaurant]);

  const getItemCount = (itemId) => {
    let itemCount = 0;
    cartItems.map((item) => ((item.id === itemId) ? itemCount++ : itemCount));
    return itemCount;
  }

  const handleAddClick = (item, currRes) => {
    const itemCount = getItemCount(item.card.info.id);
    if (selectedRestaurant === null)
    {
      setSelectedRestaurant(currRes);
      dispatch(addItems(item.card.info));
    }
    else if (selectedRestaurant?.data?.cards?.[0]?.card?.card?.info?.id === currRes?.data?.cards?.[0]?.card?.card?.info?.id)
    {
      if (itemCount < 3)
      {
        dispatch(addItems(item.card.info));
      }
      else
      {
        toast.warn("Can't add more than 3 per items.", {
          autoClose: 1500,
          closeOnClick: true,
        });
      }
    }
    else
    {
      dispatch(clearCart());
      setSelectedRestaurant(currRes);
      dispatch(addItems(item.card.info));
    }
  }
  return (
    <CartContext.Provider value={{ getItemCount, handleAddClick, currentRestaurant }}>{children}</CartContext.Provider>
  )
}