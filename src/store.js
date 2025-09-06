import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./store_slices/userAuthSlice.js";
import productsReducer from "./store_slices/productsSlice.js";
import screenSizeReducer from "./store_slices/windowSizesSlice.js";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    products: productsReducer,
    screenSize: screenSizeReducer
  },
});

export default store;
