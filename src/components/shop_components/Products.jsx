import { useQuery } from "@tanstack/react-query";
import ProductCards from "../home_components/ProductCards";
import Loader from "./../reusable_components/Loader";
import "./scss/products.scss";
import { setTotalPages } from "../../store_slices/productPageSlice";
import { fetchAllProducts } from "../../utils/productsFectchingHelpers";

const Products = ({ pageNumber=1, initialProductsData }) => {


  const productsData = initialProductsData


  if (isFetching) {
    return (
      <>
        <Loader size={"min-h-[70vh] w-full"} />
      </>
    );
  }

  return (
    <>
    {console.log(initialProductsData)}
      <section className="shop_product">
        <h2>Shop</h2>
        <div className="shop_product_display">
          {productsData?.length > 0 ? (
            productsData.map(({ name, price, productId, images }, index) => {
              return (
                <>
                  <ProductCards
                    key={`${name}-${index}`}
                    imageUrl={images[0].url}
                    name={name}
                    price={price}
                    productId={productId}
                  />
                </>
              );
            })
          ) : (
            <p className="flex items-center justify-center w-full font-bold text-xl text-[var(--main-secondary-light)]">
              No Products Listed
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
