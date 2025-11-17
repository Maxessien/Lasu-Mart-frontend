"use client"

import { useDispatch, useSelector } from "react-redux";
import CartListProductCards from "./CartListProductCards";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../axiosApiBoilerplates/authApi";
import { setUserAuth } from "../../store_slices/userAuthSlice";
import { toast } from "react-toastify";

const CartItems = ({initUserData}) => {
  const { userData, idToken } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const clearCart = async () => {
    try {
      const res = await authApi(idToken).post(
        `/user/${userData.userId}`,
        { cart: [] },
        { params: { type: "dbOnly" } }
      );
      console.log(res, "db store");
      dispatch(setUserAuth({ stateProp: "userData", value: res.data }));
    } catch (err) {
      console.log(err);
      toast.error("There was an error, try again later");
    }
  };

  const user = userData ?? initUserData

  const { mutateAsync } = useMutation({ mutationFn: () => clearCart() });

  return (
    <>
      {console.log(user)}
      <section className="w-full px-4 py-3 bg-[var(--text-secondary-light)] shadow-[0px_2px_8px_-3px_black] rounded-md">
        <header className="flex items-center justify-between w-full">
          <h2 className="text-xl font-bold text-[var(--text-primary-light)]">
            Cart Items
          </h2>
          {user?.cart?.length > 0 && (
            <button
              onClick={() => mutateAsync()}
              className="text-base font-semibold text-[var(--main-primary)]"
            >
              Clear all
            </button>
          )}
        </header>
        {user?.cart?.length > 0 ? (
          user?.cart.map(({ name, price, quantity, productId, images }, index) => {
            return (
              <>
                <div className="mb-3">
                  <CartListProductCards
                    key={index}
                    name={name}
                    quantity={quantity}
                    price={price}
                    images={images}
                    productId={productId}
                  />
                </div>
              </>
            );
          })
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-lg text-[var(--text-pimary-light)] font-semibold">
              Cart is empty
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default CartItems;
