import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  loading: false,
  error: null,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
