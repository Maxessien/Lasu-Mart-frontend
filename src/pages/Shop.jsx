import Filters from "../components/shop_components/Filters";
import ShopHeader from "../components/shop_components/ShopHeader";
import ShopMain from "../components/shop_components/ShopMain";
import AppHeader from './../components/page_layouts/AppHeader';

const Shop = () => {
  return (
    <>
      <AppHeader />
      <div className="block md:grid md:grid-cols-[25%_75%]">
        <aside>
          <Filters />
        </aside>
        <main>
          <ShopHeader />
          <ShopMain />
        </main>
      </div>
    </>
  );
};

export default Shop;
