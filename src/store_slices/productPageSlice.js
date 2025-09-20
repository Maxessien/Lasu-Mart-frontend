import { createSlice } from '@reduxjs/toolkit';

const productPage = createSlice({
    name: "productPage", 
    initialState: {currentPage: 1, totalPages: 1},
    reducers: {
        nextPage: (state)=>{
            state.currentPage += 1
        },
        prevPage: (state)=>{
            state.currentPage  -= 1
        },
        setPage: (state, {payload})=>{
            state.currentPage = payload
        },
        setTotalPages: (state, {payload})=>{
            state.totalPages = payload
        },
    }
})

export const {nextPage, prevPage, setPage, setTotalPages} = productPage.actions
export default productPage.reducer