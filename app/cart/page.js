import { fetchLoggedInUser } from "../../src/utils/userAuthHelpers";
import CartItems from "./../../src/components/cart_components/CartItems";
import CheckoutSummary from "./../../src/components/cart_components/CheckoutSummary";

export const metadata = {
  title: "Lasu Mart-Cart"
}

const Cart = async () => {
  try {
    const userData = await fetchLoggedInUser();
    return (
      <>
        <main className="md:grid md:grid-cols-[75%_25%] space-y-3 md:space-x-2 w-screen px-6 py-5 min-h-[calc(100vh-200px)]">
          <CartItems initUserData={userData} />
          <CheckoutSummary initUserData={userData} />
        </main>
      </>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Cart;
