import ProductCards from "./ProductCards";
import "./scss/trending.scss";

const TrendingProducts = ({ productArray }) => {
  return (
    <>
      <section className="home_section">
        <h1 className="home_section_header">Trending</h1>
        <div
          className={`trending_products_display ${
            productArray.length > 0 ? "product_display" : "no_product_display"
          }`}
        >
          {productArray.length > 0 ? (
            productArray.map(({ title, price, discountPercentage }, index) => {
              return (
                <>
                  <ProductCards
                    key={`${title}-${index}`}
                    imageUrl={`${title}.webp`}
                    title={title}
                    price={price}
                    discount={discountPercentage > 0.0 ? discountPercentage : undefined}
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
