import { useDispatch, useSelector } from "react-redux";
import "./scss/flash_sales.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchAllCategoryProducts } from "../../store_slices/productsSlices/categoryProductsSlice";

const FlashSalesSection = () => {
  const dispatch = useDispatch();
  const {categoryProducts} = useSelector((state)=>state.categoryProducts)
  const { data } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () =>{
        dispatch(fetchAllCategoryProducts())
    },
  });
  return (
    <>
      {console.log(categoryProducts, "dataaaa", data)}
      <section className="home_trending_section">
        <h1 className="home_trending_section_header">Trending</h1>
        <div className="trending_products_display"></div>
      </section>
    </>
  );
};

export default FlashSalesSection;
