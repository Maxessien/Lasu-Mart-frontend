import { createSlice } from "@reduxjs/toolkit";

const loggedinSlice = createSlice({
    name: "isLoggedin",
    initialState: false,
    reducers: {
        setIsLoggedin: (state, action)=>{
            state = action.payload
        }
    }
})

export const {setIsLoggedin} = loggedinSlice.actions
export default loggedinSlice.reducer