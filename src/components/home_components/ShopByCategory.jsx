import "./scss/shop_by_category.scss";
import { useQuery } from "@tanstack/react-query";
import { regApi } from "../../axiosApiBoilerplates/regApi.js";
import Loader from "./../reusable_components/Loader";

const ShopByCategory = () => {
  const getProductCategpries = async () => {
    try {
      const categories = regApi.get("/category/get");
      return categories.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const { data, isPending } = useQuery({
    queryKey: ["allProductCategories"],
    queryFn: getProductCategpries,
  });
  if (isPending) {
    return (
      <>
        <Loader size="w-screen h-full py-10" />
      </>
    );
  }
  return (
    <>
      <section className="home_section">
        <h2 className="home_section_header">Shop by category</h2>

        <div className="category_display">
          {data ? data?.map((category, index) => {
            return (
              <>
                <button key={index} className="category_block">
                  {category}
                </button>
              </>
            );
          }) : (
            <div className="py-10 text-lg text-[var(--main-secondary-light)] font-semibold text-xl flex items-center justify-center w-screen">
              No categories listed
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
