import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../cartSlice/cartSlice";

const foodStore = configureStore({
  reducer: {
    cart: cartSliceReducer
  }
});

export default foodStore;