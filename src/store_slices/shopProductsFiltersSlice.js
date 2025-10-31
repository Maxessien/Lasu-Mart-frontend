import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    category: [],
    minPrice: 5,
    maxPrice: 500000,
    sortBy: "createdAt",
    order: "desc"
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
      state.filters = initialState.filters;
    },
  },
});

export const { updateFilter, resetFilter } = shopProductFilter.actions;
export default shopProductFilter.reducer;
