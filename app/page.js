import TrendingProducts from "./../src/components/home_components/Trending";
import FlashSalesSection from "./../src/components/home_components/FlashSalesSection";
import ShopByCategory from "./../src/components/home_components/ShopByCategory";
import {
  fetchTrendingProducts,
  getProductCategpries,
} from "../src/utils/productsFectchingHelpers";

export const metadata = {
  title: "Lasu Mart"
}

const Home = async () => {
  try {
    const trendingProducts = await fetchTrendingProducts();
    const categories = await getProductCategpries();
	console.log(categories, "cattt")
    return (
      <>
        <main>
          <TrendingProducts initData={trendingProducts} />
          <FlashSalesSection />
          <ShopByCategory initData={categories} />
        </main>
      </>
    );
  } catch (err) {
    console.log(err);
    return (
      <>
        <main>
          <TrendingProducts initData={[]} />
          <FlashSalesSection />
          <ShopByCategory initData={[]} />
        </main>
      </>
    );
  }
};

export default Home;
