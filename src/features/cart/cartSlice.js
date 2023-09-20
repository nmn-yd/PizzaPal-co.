import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaID === action.payload);
      item.quantity++;
      item.totalPrize = item.quantity * item.unitPrize;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaID === action.payload);
      item.quantity--;
      item.totalPrize = item.quantity * item.unitPrize;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// these below will create some performance issues use reselect library for performance

export const getTotalCartQuantity = (store) => {
  return store.cart.cart.reduce((sum, item) => item.quantity + sum, 0);
};
export const getTotalCartPrice = (store) => {
  return store.cart.cart.reduce((sum, item) => item.totalPrice + sum, 0);
};

/*
when Jonas says we can use "reselect" library to optimize selectors, I was wondering if the following code can replace the "getTotalCartPrice" in the video and if it is correctly optimized . I tested the code and it works but I'm not sure if im using all correctly. So this is the code:

export const selectTotalCartPrice = createSelector(     [state => state.cart.cart],     cart => cart.reduce((accumulator, item) => item.totalPrice + accumulator, 0) );



and the usage in CartOverview.jsx:
const total = useSelector(selectTotalCartPrice);*/

export const getCart = (store) => store.cart.cart;

export const currentQuantitybyId = (id) => (store) => {
  return store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
