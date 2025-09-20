import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { regApi } from "../../axiosApiBoilerplates/regApi";
import ProductCards from "../home_components/ProductCards";
import Loader from './../reusable_components/Loader';
import "./scss/products.scss"

const Products = ({ pageNumber }) => {
  const { filters, active } = useSelector((state) => state.shopProductFilter);

  const fetchProducts = async (pageNumber) => {
    try {
      const products = !active
        ? await regApi.get("/product/get", { params: { page: pageNumber } })
        : await regApi.get("/product/filtered", {
            params: { ...filters, page: pageNumber },
          });
        console.log(products)
      return products.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const { data, isPending } = useQuery({
    queryKey: ["products", pageNumber],
    queryFn: () => fetchProducts(pageNumber),
  });

  if (isPending) {
    return (
      <>
        <Loader size={"min-h-[50vh] w-full"} />
      </>
    );
  }

  return (
    <>
      <section className="shop_product">
        <h2>Shop</h2>
        <div className="shop_product_display">
          {data?.length > 0 ? (
            data.map(({ name, price, discountPercentage }, index) => {
              return (
                <>
                <div className="items">
                  <ProductCards
                    key={`${name}-${index}`}
                    imageUrl={`${name}.webp`}
                    name={name}
                    price={price}
                    discount={
                      discountPercentage > 0.0 ? discountPercentage : undefined
                    }
                  />
                </div>
                </>
              );
            })
          ) : (
            <p className="flex items-center justify-center w-full font-bold text-xl text-[var(--main-secondary-light)]">No Products Listed</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
