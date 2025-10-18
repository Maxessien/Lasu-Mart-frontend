import { authApi } from "../../../../../src/axiosApiBoilerplates/authApi";
import { getUserServerSide } from "../../../../../src/utils/authHelpers";
import ClientVendorProduct from "./clientPage";

const VendorProductPage = async () => {
  const {token, user} = await getUserServerSide()
  const vendorProducts = await authApi(token).get("/product/vendor");

  return (
    <>
      <ClientVendorProduct vendorProducts={vendorProducts?.data} initUserData={user} />
    </>
  );
};

export default VendorProductPage