import CartItems from "../../../src/components/cart_components/CartItems"
import CheckoutSummary from "../../../src/components/cart_components/CheckoutSummary"

export const metadata = {
  title: "Lasu Mart-Cart",
};

const Cart = ({initUserData})=>{
    return (
      <>
        <main className="md:grid md:grid-cols-[75%_25%] space-y-3 md:space-x-2 w-screen px-6 py-5 min-h-[calc(100vh-200px)]">
          <CartItems initUserData={initUserData} />
          <CheckoutSummary initUserData={initUserData} />
        </main>
      </>
    );
}

export default Cart