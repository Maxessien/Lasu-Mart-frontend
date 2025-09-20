import { createSlice } from "@reduxjs/toolkit";

const userAuth = createSlice({
  name: "userAuth",
  initialState: { isLoggedIn: false, idToken: "" },
  reducers: {
    setUserAuth: (state, action)=>{
      state[action.payload.stateProp] = action.payload.value
    },
  },
});

export const { setUserAuth } = userAuth.actions;
export default userAuth.reducer;
