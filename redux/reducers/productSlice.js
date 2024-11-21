import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleFetchProducts } from "../actions/product/productAction";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "products",
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
  },
});
export const productsAction = productSlice.actions
export default productSlice;
