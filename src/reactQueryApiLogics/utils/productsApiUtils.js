import { productsApi } from "../../axiosApiBoilerplates/regApi";

const fetchAllProducts = async (currentPage) => {
  try {
    const res = await productsApi.get("/all", {
      params: {
        page: currentPage,
        limit: 20,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const fetchProductsByCategory = async (currentPage, selectedCategory) => {
  try {
    const res = await productsApi.get("/category", {
      params: {
        category: selectedCategory,
        page: currentPage,
        limit: 20,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const fetchTopProducts = async () => {
  try {
    const res = await productsApi.get("/trending");
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const fetchBySearchQuery = async(query)=>{
    try {
      const res = await productsApi.get(`/search?query=${query}`)
      console.log(res)
      return res.data
    } catch (err) {
      console.log(err)
      return err
    }
}

export { fetchAllProducts, fetchProductsByCategory, fetchTopProducts, fetchBySearchQuery };
