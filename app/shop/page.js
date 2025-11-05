import { regApi } from "../../src/axiosApiBoilerplates/regApi";
import { headers } from "next/headers";
import ClientShopPage from "./clientPage"

export const metadata = {
  title: "Lasu Mart-Shop"
}

const Shop = async () => {
  const userAgent = (await headers()).get("user-agent");
  const isMobile = /Mobi|Android|iPhone/i.test(userAgent) || false;
  try {
    const products = await regApi.get("/product", {params: {
      page: 1,
      category: [],
      minPrice: 5,
      maxPrice: 500000,
      sortBy: "createdAt",
      order: "desc",
    }});
    console.log(isMobile, "mobile", products.data)
    return (
      <>
        <ClientShopPage
          initialShopData={products?.data}
          serverSideWindowSize={isMobile}
        />
      </>
    );
  } catch (err) {
    console.log(err);
    return (
      <>
        <ClientShopPage
          initialShopData={{ totalPages: 0, data: [] }}
          serverSideWindowSize={isMobile}
        />
      </>
    );
  }
};

export default Shop;
