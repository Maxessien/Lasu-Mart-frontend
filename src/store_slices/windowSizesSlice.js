import { createSlice } from "@reduxjs/toolkit";

const windowSizesSlice = createSlice({
  name: "windowSize",
  initialState: { currentSize: "" },
  reducers: {
    setScreenSize: (state) => {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
          state.currentSize = "large";
        } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
          state.currentSize = "medium";
        } else if (
          window.innerWidth > 480 &&
          window.innerWidth < 768 &&
          window.innerWidth < 1024
        ) {
          state.currentSize = "small";
        } else {
          state.currentSize = "xLarge";
        }
      });
    },
  },
});

export const { setScreenSize } = windowSizesSlice.actions;
export default windowSizesSlice.reducer;
