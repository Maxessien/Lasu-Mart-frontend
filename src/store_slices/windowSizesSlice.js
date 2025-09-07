import { createSlice } from "@reduxjs/toolkit";

const windowSizesSlice = createSlice({
  name: "windowSize",
  initialState: { currentSize: "" },
  reducers: {
    setScreenSize: (state) => {
      state.currentSize = window.innerWidth
    },
  },
});

export const { setScreenSize } = windowSizesSlice.actions;
export default windowSizesSlice.reducer;
