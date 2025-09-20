import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    category: [],
    priceRange: {
      min: 5,
      max: 500000,
    },
    sortInfo: {
      type: "createdAt",
      order: "desc"
    }
  },
};

const shopProductFilter = createSlice({
  name: "shopProductFilter",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      console.log(action.payload)
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilter: (state) => {
      state.filters = initialState;
    },
  },
});

export const { updateFilter, resetFilter } = shopProductFilter.actions;
export default shopProductFilter.reducer;
