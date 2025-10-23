import { authApi } from "../../../../src/axiosApiBoilerplates/authApi"
import VendorProducts from "../../../../src/components/vendor_components/products/VendorProducts"
import { getServerAuthToken } from "../../../../src/utils/authHelpers"


const VendorProductPage = async()=>{
    const token = await getServerAuthToken()
    const products = await authApi(token).get("/product/vendor") || {data: null}

    return (
        <VendorProducts products={products.data} />
    )
}

export default VendorProductPage