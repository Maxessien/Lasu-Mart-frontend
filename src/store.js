import { configureStore } from "@reduxjs/toolkit"
import isLoggedinReducer from "./store_slices/loggedinSlice.js"

const store = configureStore({
    reducer: {
        isLoggedin: isLoggedinReducer
    }
})

export default store