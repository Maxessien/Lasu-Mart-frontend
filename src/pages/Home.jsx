import FlashSalesSection from "../components/home_components/FlashSalesSection";
import ShopByCategory from "../components/home_components/ShopByCategory";
import TrendingProducts from "../components/home_components/Trending";
import AppHeader from "../components/page_layouts/AppHeader";

const Home = () => {
  return (
    <>
      <AppHeader />
      <main>
        <TrendingProducts />
        <FlashSalesSection />
        <ShopByCategory />
      </main>
    </>
  );
};

export default Home;
