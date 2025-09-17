import { useEffect, useState } from "react";
import FlashSalesSection from "../components/home_components/FlashSalesSection";
import ShopByCategory from "../components/home_components/ShopByCategory";
import TrendingProducts from "../components/home_components/Trending";
import axios from "axios";

const Home = () => {
  const [productArray, setProductArray] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/trending.json");
        setProductArray(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <TrendingProducts productArray={productArray} />
      <FlashSalesSection />
      <ShopByCategory />
    </>
  );
};

export default Home;
