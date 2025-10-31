import { regApi } from "../../../src/axiosApiBoilerplates/regApi"
import CommentsSidebar from "../../../src/components/shop_components/CommentsSidebar"
import ViewProductInfo from "../../../src/components/shop_components/ViewProductInfo"
import SimilarProducts from './../../../src/components/shop_components/SimiarProducts';


const ViewProductPage = async ({params})=>{
    const idParams = await params
    const product = await regApi.get("/product/single", {params: {id: idParams.id}})
    const similarProducts = null
    console.log(product)

    if (!product) {
        return (
            <>
            <p className="mt-2 text-center text-2xl text-[var(--main-secondary)] font-semibold">Sorry but we coud not get this product. Contact support for help or more info</p>
            </>
        )
    }

    return (
        <>
        <main className="flex flex-col gap-2 lg:grid lg:grid-cols-[75%_25%]">
            <ViewProductInfo {...product.data} />
            <CommentsSidebar reviews={product.data.reviews} />
        </main>
        {similarProducts?.length > 0 ? (
            <SimilarProducts products={similarProducts} />
        ) : (
            <p className="mt-4 text-xl text-[var(--main-secondary)] text-center font-semibold">No Similar Products</p>
        )}
        </>
    )
}

export default ViewProductPage