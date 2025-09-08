import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./store_slices/userAuthSlice.js";
import screenSizeReducer from "./store_slices/windowSizesSlice.js";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    screenSize: screenSizeReducer
  },
});

export default store;
