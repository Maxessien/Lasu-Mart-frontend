import { createSlice } from "@reduxjs/toolkit";

const userAuth = createSlice({
    name: "userAuth",
    initialState: {isLoggedin: false, idToken: ""},
    reducers: {
        setIsLoggedin: (state, action)=>{
            state.isLoggedin = action.payload
        },
        setIdToken: (state, action)=>{
            state.idToken = action.payload
        }
    }
})

export const {setIsLoggedin, setIdToken} = userAuth.actions
export default userAuth.reducer