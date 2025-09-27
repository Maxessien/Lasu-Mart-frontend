import ProductCards from "./ProductCards";
import "./scss/trending.scss";
import { regApi } from "../../axiosApiBoilerplates/regApi.js";
import { useQuery } from "@tanstack/react-query";
import Loader from "../reusable_components/Loader.jsx";

const TrendingProducts = () => {
  const fetchTrendingProducts = async () => {
    try {
      const products = await regApi.get("/product/trending");
      console.log(products, "prod")
      return products.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const { data, isPending } = useQuery({
    queryKey: ["trendingProducts"],
    queryFn: () => fetchTrendingProducts(),
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });

  if (isPending) {
    return (
      <>
        <Loader size={"h-full w-screen py-10"} />
      </>
    );
  }

  return (
    <>
      <section className="home_section">
        <h1 className="home_section_header">Trending</h1>
        <div
          className={`trending_products_display ${ 
            data?.length > 0 ? "product_display" : "no_product_display" 
          }`}
        >
          {data && data?.length > 0 ? (
            data.map(({ name, price, discountPrice, productId }, index) => {
              return (
                <>
                  <ProductCards
                    key={`${name}-${index}`}
                    imageUrl={`${name}.webp`}
                    name={name}
                    price={price}
                    discountPrice={
                      discountPrice < price && discountPrice !== 0.0 ? discountPrice : undefined
                    }
                    productId={productId}
                  />
                </>
              );
            })
          ) : (
            <p className="no_products">No Trending Products</p>
          )}
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
