import CheckoutForm from "../../../src/components/checkout_components/CheckoutForm";

export const metadata = {
	title: "Lasu Mart-Checkout"
}

const CheckoutPage = async ({ initUserData }) => {
  return (
    <>
      <CheckoutForm checkOutData={initUserData?.cart} />
    </>
  );
};

export default CheckoutPage;
