import { useMutation } from "@tanstack/react-query";
import Button from "./../reusable_components/Buttons";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { authApi } from "../../axiosApiBoilerplates/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../store_slices/userAuthSlice";
import { useRouter } from 'next/navigation';

const ProductCards = ({ imageUrl, name, price, discountPrice = undefined, productId }) => {
  const { isLoggedIn, idToken } = useSelector(
    (state) => state.userAuth
  );
  const dispatch = useDispatch();

  const router = useRouter();
  const addToCart = async () => {
    try {
      const res = await authApi(idToken).post("user/cart/add", {productId: productId, quantity: 1});
      console.log(res.data);
      dispatch(
        setUserAuth({
          stateProp: "userData",
          value: res.data,
        })
      );
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error("Unable to add to cart, Try again later");
      throw err;
    }
  };

  const shopBtn = async (type) => {
    if (isLoggedIn) {
      await mutateAsync();
      type === "add" ? toast.success("Added Succesfully") : router.push("/cart");
    } else {
      navigate("register");
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => addToCart(),
  });

  return (
    <>
      <div className="flex flex-col gap-2 shadow-[0.4px_0.7px_6px_var(--text-primary)] rounded-sm px-3 py-2 bg-[var(--text-secondary-light)] justify-end">
        <div className="w-26 sm:w-36 md:44 lg:52 xl:60 aspect-square mx-auto">
          <img
            src={`/images/${imageUrl}`}
            alt={`${name} image`}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-[var(--text-primary)] text-lg font-semibold align-center">
          {name}
        </p>
        <p className="text-[var(--text-primary-light)] flex flex-wrap text-lg font-bold align-left">
          {discountPrice ? (
            <>
              <span className="line-through text-md mr-[10px]">
                &#8358;{price}
              </span>
              <span>&#8358;{discountPrice.toFixed(2)}</span>
            </>
          ) : (
            <>&#8358; {price}</>
          )}
        </p>
        {!isPending ? (
          <>
            <Button buttonFn={() => shopBtn("buy")} rounded="md">
              <FaShoppingCart size={20} className="mr-[5px]" /> Order Now
            </Button>
            <Button buttonFn={() => shopBtn("add")} rounded="md">
              <FaShoppingCart size={20} className="mr-[5px]" /> Add to Cart
            </Button>
          </>
        ) : (
          <Button>...</Button>
        )}
      </div>
    </>
  );
};

export default ProductCards;
