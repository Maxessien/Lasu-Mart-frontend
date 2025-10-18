import ProductListingForm from "../../../../../../src/components/account_components/vendor/ProductListingForm";
import { regApi } from "../../../../../../src/axiosApiBoilerplates/regApi";

const ProductIdPage = async ({ params }) => {
	const paramsObj = await params
  const productInfo =
    paramsObj.pid !== "new"
      ? await regApi.get(`/product/single`, {params: {id: paramsObj.pid}})
      : { data: null };
  return (
    <ProductListingForm
      availableCategories={["Food", "Sports", "Academics", "Music"]}
      hasDefault={productInfo.data}
      mode={paramsObj.pid === "new" ? "add" : "update"}
    />
  );
};

export default ProductIdPage