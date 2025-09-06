import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    fetchAllProducts: async () => {
      try {
        const res = await axios.get("/test.json");
        console.log(res, "res");
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export const { fetchAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
