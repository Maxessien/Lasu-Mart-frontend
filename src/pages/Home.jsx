import { useEffect } from "react"
import FlashSalesSection from "../components/home_components/FlashSalesSection"
import ShopByCategory from "../components/home_components/ShopByCategory"
import TopVendors from "../components/home_components/TopVendors"
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from "../store_slices/productsSlices/allProductsSlice";

const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAllProducts())
    }, [])
    return (
        <>
        <FlashSalesSection />
        <ShopByCategory />
        <TopVendors />
        </>
    )
}

export default Home