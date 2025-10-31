import { authApi } from "../../../../../src/axiosApiBoilerplates/authApi"
import ProductForm from "../../../../../src/components/vendor_components/products/ProductForm"
import { getServerAuthToken } from "../../../../../src/utils/authHelpers"


const ProductEditPage = async({params})=>{
    const productParams = await params
    const token = getServerAuthToken()
    const {data} = productParams.pid !== "new" ? await authApi(token).get(`/product/single`, {params: {id: productParams.pid}}) : {data: undefined}
	console.log(data, "product Data")

    return (
        <ProductForm hasDefault={data} availableCategories={["Food", "Sports", "Music", "Academics"]} />
    )
}

export default ProductEditPage