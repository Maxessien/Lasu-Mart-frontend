import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../axiosApiBoilerplates/regApi";


const categoryProducts = createSlice({
    name: "categoryProducts",
    initialState: {
        categoryProducts: [],
        pageNumber: 0
    },
    reducers: {
        fetchAllCategoryProducts: async(state, category)=>{
            try {
                const res = await productsApi.get(`/category/${category}?page=${state.pageNumber + 1}`)
                state.pageNumber += 1
                state.categoryProducts = [...state.categoryProducts, ...res.data]
            } catch (err) {
                console.log(err)
            }
        }
    }
})

export const {fetchAllCategoryProducts} = categoryProducts.actions
export default categoryProducts.reducer