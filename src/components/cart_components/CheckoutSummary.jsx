"use client";

import { useDispatch, useSelector } from "react-redux";
import Button from "../reusable_components/Buttons";
import { useRouter } from "next/router.js";
import { useEffect } from "react";
import { setUserAuth } from "../../store_slices/userAuthSlice";

const CheckoutSummary = ({initUserData}) => {
  const { userData } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setUserAuth({stateProp:"userData", value: initUserData}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const router = useRouter();

  const total =
    userData && userData?.cart?.length > 0
      ? userData.cart.reduce((acc, curr) => {
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
            <ul className="space-y-3 my-3 text-lg text-[var(--text-primary)] font-bold">
              <li>Price: &#8358; {total.toFixed(2)}</li>
              <li>Charges: 10%</li>
              <li>
                Total: &#8358;{" "}
                {(Number(total) + Number(total) * 0.1).toFixed(2)}
              </li>
            </ul>
            <Button buttonFn={() => router.push("/checkout")} rounded="md">
              Proceed to Checkout
            </Button>
          </>
        ) : (
          <p className="py-5 text-center text[var(--text-primary-light)] font-semibold text-md">
            Empty
          </p>
        )}
      </aside>
    </>
  );
};

export default CheckoutSummary;
