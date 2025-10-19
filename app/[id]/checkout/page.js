import CheckoutForm from "../../../src/components/checkout_components/CheckoutForm";
import {redirect} from "next/navigation"
import { getUserServerSide } from "../../../src/utils/authHelpers";

export const metadata = {
	title: "Lasu Mart-Checkout"
}

const CheckoutPage = async ({ params }) => {
  const {user} = await getUserServerSide()
  if(!user || !user.cart || user.cart.length <= 0){
    redirect(`/${params.id}/cart`)
  }
  return (
    <>
    <main>
      <CheckoutForm checkOutData={user?.cart} />
    </main>
    </>
  );
};

export default CheckoutPage;
