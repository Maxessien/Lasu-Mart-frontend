import Button from "../reusable_components/Buttons"
import "./scss/shop_by_category.scss"

const ShopByCategory = ()=>{
    const productCategories= ["fashion", "food", "electronics", "small chops", "academics"]
    return (
        <>
        <section className="home_section">
            <h2 className="home_section_header">
                Shop by category
            </h2>

            <div className="category_display">
                {productCategories.map((category, index)=>{
                    return (
                    <>
                    <button key={index} className="category_block" >{category}</button>
                    </>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default ShopByCategory