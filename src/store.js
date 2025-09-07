import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./store_slices/userAuthSlice.js";
import allProductsReducer from "./store_slices/productsSlices/allProductsSlice.js";
import screenSizeReducer from "./store_slices/windowSizesSlice.js";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    allProducts: allProductsReducer,
    screenSize: screenSizeReducer
  },
});

export default store;
