import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItems } from "../services/reduxStore/cartSlice/cartSlice";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [currentRestaurant, setCurrentRestaurant] = useState();

  const getItemCount = (itemId) => {
    let itemCount = 0;
    cartItems.map((item) => ((item.id === itemId) ? itemCount++ : itemCount));
    return itemCount;
  }
// have different function for add an increment
  const handleAddClick = (item, currResId) => {
    const itemCount = getItemCount(item.card.info.id);
    if (itemCount === 0)
    {
      setCurrentRestaurant(currResId);
      dispatch(addItems(item.card.info));
    }
    else if (itemCount > 0 && itemCount < 3)
    {
      if (currResId === currentRestaurant)
      {
        dispatch(addItems(item.card.info));
      }
      else
      {
        toast.warn("Can't add items from different restaurants.", {
          autoClose: 1500,
          closeOnClick: true,
        });
      }
    }
    else
    {
      toast.warn("Can't add more than 3 per items.", {
        autoClose: 1500,
        closeOnClick: true,
      });
    }
  }
  return (
    <CartContext.Provider value={{ getItemCount, handleAddClick, currentRestaurant }}>{children}</CartContext.Provider>
  )
}