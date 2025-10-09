import { useMutation } from "@tanstack/react-query";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../../axiosApiBoilerplates/authApi";
import { setUserAuth } from "../../store_slices/userAuthSlice";

const CartListProductCards = ({
  name,
  quantity = 1,
  price,
  imageUrl,
  productId,
}) => {
  console.log(productId);
  const { idToken } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const deleteFromCart = async () => {
    try {
      const res = await authApi(idToken).delete("/user/cart/remove", {
        params: { productId: productId },
      });
      console.log(res);
      dispatch(
        setUserAuth({
          stateProp: "userData",
          value: res.data,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateCartQuantity = async (value) => {
    try {
      const res = await authApi(idToken).post("user/cart/add", {
        productId: productId,
        quantity: value,
      });
      console.log(res.data);
      dispatch(
        setUserAuth({
          stateProp: "userData",
          value: res.data,
      
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const { mutateAsync } = useMutation({ mutationFn: () => deleteFromCart() });

  return (
    <>
      <div className="flex items-start sm:items-center justify-between px-3 py-4 sm:py-1 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <div className="w-23 sm:w-32 md:40 lg:48 xl:56 aspect-square mx-auto">
            <img
              src={`${imageUrl}`}
              alt={`${name} image`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between h-full items-start">
            <p className="text-lg text-[var(--text-primary)] pl-3 font-semibold">
              {name}
            </p>
            <div className="flex gap-3 items-center justify-center">
              <div className="flex gap-4 px-3 text-[var(--text-primary)] h-10 rounded-full border-2 border-[var(--main-secondary-light)]">
                <button
                  onClick={() => updateCartQuantity(1)}
                  className="font-bold text-base hover:bg-[var(--main-primary-light)]"
                >
                  <FaPlus />
                </button>
                <span className="font-bold text-lg flex items-center justify-center">
                  {quantity}
                </span>
                <button className="font-bold text-base hover:bg-[var(--main-primary-light)]">
                  <FaMinus onClick={() => updateCartQuantity(-1)} />
                </button>
              </div>
              <span className="text-[var(--main-primary)] font-bold text-base">
                &#8358;{price}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => mutateAsync()}
          className="text-lg font-bold text-[var(--text-primary-light)]"
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default CartListProductCards;
