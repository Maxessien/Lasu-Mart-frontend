import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { regApi } from "../../axiosApiBoilerplates/regApi";
import ProductCards from "../home_components/ProductCards";
import Loader from "./../reusable_components/Loader";
import "./scss/products.scss";
import { useEffect } from "react";
import { setTotalPages } from "../../store_slices/productPageSlice";

const Products = ({ pageNumber }) => {
  const { filters } = useSelector((state) => state.shopProductFilter);
  const dispatch = useDispatch()


  const fetchProducts = async (pageNumber) => {
    try {
      const products = await regApi.post("/product/get_products", { page: pageNumber, ...filters })
      console.log(products);
      dispatch(setTotalPages(products.data.totalPages))
      return products.data.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["products", pageNumber],
    queryFn: () => fetchProducts(pageNumber),
    cacheTime: 0,
    staleTime: 0,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });

  useEffect(()=>{
    refetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  if (isFetching) {
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
            data.map(({ name, price, discountPrice,productId }, index) => {
              return (
                <>
                  <ProductCards
                    key={`${name}-${index}`}
                    imageUrl={`${name}.webp`}
                    name={name}
                    price={price}
                    discountP={
                      discountPrice < price && discountPrice !==0 ? discountPrice : undefined
                    }
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
