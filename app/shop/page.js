import { regApi } from "../../src/axiosApiBoilerplates/regApi";
import ClientShopPage from "./clientPage";

const Shop = async () => {
  try {
    const products = await regApi.post("/product/get_products", {
      page: 1,
      category: [],
      priceRange: {
        min: 5,
        max: 500000,
      },
      sortInfo: {
        type: "createdAt",
        order: "desc",
      },
    });
    return (
      <>
        <ClientShopPage initialShopData={products.data} />
      </>
    );
  } catch (err) {
    console.log(err);
    return (
      <>
        <ClientShopPage initialShopData={{ totalPages: 0, data: [] }} />
      </>
    );
  }
};

export default Shop;
