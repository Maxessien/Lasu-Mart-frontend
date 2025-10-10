import { regApi } from "../axiosApiBoilerplates/regApi";

const fetchTrendingProducts = async () => {
  try {
    const products = await regApi.get("/product/trending");
    console.log(products, "prod");
    return products.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductCategpries = async () => {
  try {
    const categories = regApi.get("/category/get_products");
    return categories.data || [];
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { fetchTrendingProducts, getProductCategpries };
