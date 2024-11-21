import { configureStore } from "@reduxjs/toolkit"
import auth from "./reducers/authSlice"
import productSlice from "./reducers/productSlice"

const store = configureStore({
  reducer: {
    auth : auth.reducer,
    products : productSlice.reducer,
  }
})


export default store