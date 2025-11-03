import { fetchTrendingProducts } from "../../../src/utils/productsFectchingHelpers" 
import RecommendationSidebar from "../../../src/components/page_layouts/RecommendationSidebar";

export const metadata = {
    title: "Lasu Mart-Chat"
}

const ChatsLayout = async({children})=>{
    const recommended = await fetchTrendingProducts()

    return (
        <>
        <div className="md:grid md:grid-col-[65%_35%]">
            {children}
            <RecommendationSidebar products={recommended} layoutStyle="hidden md:block" />
        </div>
        </>
    )
}

export default ChatsLayout