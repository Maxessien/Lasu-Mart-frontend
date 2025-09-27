import CartItems from "../components/cart_components/CartItems"
import CheckoutSummary from "../components/cart_components/CheckoutSummary"
import AppHeader from "../components/page_layouts/AppHeader"


const Cart = ()=>{
    return (
        <>
        <AppHeader />
        <main className="md:grid md:grid-cols-[75%_25%] space-y-3 md:space-x-2 w-screen px-6 py-5 min-h-[calc(100vh-200px)]">
            <CartItems />
            <CheckoutSummary />
        </main>
        </>
    )
}

export default Cart