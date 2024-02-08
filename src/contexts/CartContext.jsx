import { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItems, clearCart } from "../services/reduxStore/cartSlice/cartSlice";
import { RestaurantContext } from "./RestaurantContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [selectedRestaurant, setSelectedRestaurant] = useState({ id: 0, name: "" });
  const { currentRestaurant } = useContext(RestaurantContext);
  console.log(currentRestaurant?.data?.cards[0]?.card?.card?.info?.id);

  const getItemCount = (itemId) => {
    let itemCount = 0;
    cartItems.map((item) => ((item.id === itemId) ? itemCount++ : itemCount));
    return itemCount;
  }

  console.log(selectedRestaurant);
  const handleAddClick = (item, currResId, currResName) => {
    const itemCount = getItemCount(item.card.info.id);
    if (selectedRestaurant.id === 0)
    {
      setSelectedRestaurant({ id: currResId, name: currResName });
    }
    else if (selectedRestaurant.id === currResId)
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
      console.log(cartItems);
      setSelectedRestaurant(0);
    }
  }
  return (
    <CartContext.Provider value={{ getItemCount, handleAddClick }}>{children}</CartContext.Provider>
  )
}