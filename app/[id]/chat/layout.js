import { fetchTrendingProducts } from "../../../src/utils/productsFectchingHelpers" 
import RecommendationSidebar from "../../../src/components/page_layouts/RecommendationSidebar";

export const metadata = {
    title: "Lasu Mart-Chat"
}

const ChatsLayout = async({children})=>{
    const recommended = await fetchTrendingProducts()

    return (
        <>
        <div className="md:grid md:gap-2 grid-cols-[70%_30%] w-screen">
            <div className="md:border-[2px] border-[var(--text-primary)]">
            {children}
            </div>
            <RecommendationSidebar products={recommended} layoutStyle="hidden md:block" />
        </div>
        </>
    )
}

export default ChatsLayout