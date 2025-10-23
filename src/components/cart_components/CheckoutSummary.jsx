"use client";

import { useSelector } from "react-redux";
import Button from "../reusable_components/Buttons";
import { useRouter } from "next/navigation";

const CheckoutSummary = ({initUserData}) => {
  const { userData } = useSelector((state) => state.userAuth);

  const router = useRouter();

  const user = userData ?? initUserData

  const total =
    user && user?.cart?.length > 0
      ? user.cart.reduce((acc, curr) => {
          return Number(acc) + Number(curr.price) * Number(curr.quantity);
        }, 0)
      : null;

  return (
    <>
      {console.log(total, "tp")}
      <aside className="w-full px-4 py-3 bg-[var(--text-secondary-light)] rounded-md shadow-[0px_2px_8px_-3px_black]">
        <h2 className="w-full text-center text-[var(--text-primary-light)] text-xl font-bold">
          Order Summary
        </h2>

        {total ? (
          <>
            <ul className="flex justify-start align-start gap-4 my-3 text-lg text-[var(--text-primary)] font-bold">
              <li>Price: &#8358; {total.toFixed(2)}</li>
              <li>Charges: 10%</li>
              <li>
                Total: &#8358;{" "}
                {(Number(total) + Number(total) * 0.1).toFixed(2)}
              </li>
            </ul>
            <Button buttonFn={() => router.push(`/${user.userId}/checkout`)} rounded="md">
              Proceed to Checkout
            </Button>
          </>
        ) : (
          <p className="py-5 text-center text[var(--text-primary-light)] font-semibold text-base">
            Empty
          </p>
        )}
      </aside>
    </>
  );
};

export default CheckoutSummary;
