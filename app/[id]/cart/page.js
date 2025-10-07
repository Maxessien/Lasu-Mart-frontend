import { redirect } from "next/navigation";
import { authApi } from "../../../src/axiosApiBoilerplates/authApi";
import CartItems from "../../../src/components/cart_components/CartItems";
import CheckoutSummary from "../../../src/components/cart_components/CheckoutSummary";
import { cookies } from "next/headers";

export const metadata = {
  title: "Lasu Mart-Cart",
};

const Cart = async () => {
  try {
    const cookieStore = await cookies()
	console.log(cookieStore.getAll(), "store")
	const token = cookieStore.get("lasu-mart-auth-token")?.value
	console.log(token, "tokken")
    if (!token) throw new Error("Session doesn't exist");
    const userData = await authApi(token).get("/user/get");
    return (
      <>
        <main className="md:grid md:grid-cols-[75%_25%] space-y-3 md:space-x-2 w-screen px-6 py-5 min-h-[calc(100vh-200px)]">
          <CartItems initUserData={userData.data} />
          <CheckoutSummary initUserData={userData.data} />
        </main>
      </>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Cart;
