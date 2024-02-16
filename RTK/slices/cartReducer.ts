import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartAction,
  clearAction,
  minusAction,
  plusAction,
  removeAction,
  setConfigAction,
  setInitialState,
} from "../actions/Cart";

let initialState = setInitialState();

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToCart: addToCartAction,
    plus: plusAction,
    minus: minusAction,
    remove: removeAction,
    clear: clearAction,
    setConfig: setConfigAction,
  },
});

// Export the reducer and actions
export const { addToCart, plus, minus, remove, clear, setConfig } =
  cartSlice.actions;

export default cartSlice.reducer;
