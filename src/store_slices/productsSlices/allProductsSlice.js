import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../axiosApiBoilerplates/regApi";

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    allProducts: [],
    productsPage: 0
  },
  reducers: {
    fetchAllProducts: async(state)=>{
      try {
        const res = await productsApi.get(`/all?page=${state.productsPage + 1}`)
        state.productsPage += 1
        state.allProducts = [...state.allProducts, ...res.data]
      } catch (err) {
        console.log(err)
      }
    }
  },
});

export const { fetchAllProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;
