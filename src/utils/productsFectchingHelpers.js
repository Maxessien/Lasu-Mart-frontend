import { regApi } from "../axiosApiBoilerplates/regApi";


const fetchAllProducts = async (pageNumber, filters) => {
  try {
    const products = await regApi.get("/product/single", {params: { page: pageNumber, ...filters }})
    console.log(products);
    return products.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

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
    const categories = await regApi.get("/category");
	// console.log(categories, "batttt")
    return categories.data || [];
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { fetchTrendingProducts, getProductCategpries, fetchAllProducts };
