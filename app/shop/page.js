import { regApi } from "../../src/axiosApiBoilerplates/regApi";
import { headers } from "next/headers";
import ClientShopPage from "./clientPage";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Lasu Mart-Shop",
};

const Shop = async (searchParams) => {
  const sParams = await searchParams;
  const { price="5-500000", page=1, search, cat, order="createdAt", sort="desc" } = sParams;
  const userAgent = (await headers()).get("user-agent");
  const isMobile = /Mobi|Android|iPhone/i.test(userAgent) || false;
  const acceptableValues = {
    order: ["asc", "desc"],
    sort: ["createdAt", "ratings", "price"],
    cat: ["fashion", "food", "electronics", "sports", "accessories"],
  };
  const formattedPrice = price.split("-").length;
  if (
    !["order", "sort"].every((value) =>
      acceptableValues[value].includes(sParams[value])
    ) ||
    formattedPrice !== 3 ||
    Number(formattedPrice[0]) < 5 ||
    Number(formattedPrice[2]) > 500000 ||
    Number(formattedPrice[0]) > Number(formattedPrice[2]) ||
    page < 1
  )
    return notFound();
  if (cat && !acceptableValues.cat.includes(cat)) return notFound();
  try {
    const products = await regApi.get(search?.length > 0 && typeof search === "string" ? "/product/search" : "/product", {
      params: {
        page: page,
        minPrice: Number(formattedPrice[0]) || 5,
        maxPrice: Number(formattedPrice[2]) || 500000,
        sortBy: sort || "createdAt",
        order: order || "desc",
        category: cat.split("+") ?? false,
        ...(search?.length > 0 && typeof search === "string" ? {searchTerm: search} : {})
      },
    });
    console.log(isMobile, "mobile", products.data);
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
