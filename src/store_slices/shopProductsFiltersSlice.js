import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  filters: {
    categories: [],
    priceRange: {
      min: 100,
      max: 500000,
    },
    popularity: {
      value: false,
      order: "desc",
    },
    recent: {
      value: false,
      order: "desc",
    },
    price: {
      value: true,
      order: "desc",
    },
  },
};

const shopProductFilter = createSlice({
  name: "shopProductFilter",
  initialState,
  reducer: {
    updateFilter: (state, { payload }) => {
      state.filters = { ...state.filters, payload };
    },
    resetFilter: (state) => {
      state.filters = initialState;
    },
  },
});

export const { updateFilter, resetFilter } = shopProductFilter.actions;
export default shopProductFilter.reducer;
