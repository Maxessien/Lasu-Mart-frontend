import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./store_slices/userAuthSlice.js";
import screenSizeReducer from "./store_slices/windowSizesSlice.js";
import shopProductFilterReducer from "./store_slices/shopProductsFiltersSlice.js";
import productPageReducer from "./store_slices/productPageSlice.js";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    screenSize: screenSizeReducer,
    shopProductFilter: shopProductFilterReducer,
    productPage: productPageReducer
  },
});

export default store;
