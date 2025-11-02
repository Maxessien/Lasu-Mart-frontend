import { useMutation } from "@tanstack/react-query";
import Button from "./../reusable_components/Buttons";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../store_slices/userAuthSlice";
import { useRouter } from "next/navigation";
import { addToCart } from "../../utils/regHelperFns";

const ProductCards = ({
  imageUrl,
  name,
  price,
  discountPrice = undefined,
  productId,
}) => {
  const {
    isLoggedIn,
    idToken,
    userData: { userId },
  } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const router = useRouter();

  const shopBtn = async () => {
    if (isLoggedIn) {
      await mutateAsync();
    } else {
      router.push("/register");
    }
  };

  const { mutateAsync, isPending, data } = useMutation({
    mutationFn: () => addToCart(idToken, userId, productId),
    onSuccess: () => {
      dispatch(
        setUserAuth({
          stateProp: "userData",
          value: data,
        })
      );
      toast.success("Added Succesfully");
    },
    onError: () => {
      toast.error("Unable to add to cart, Try again later");
    },
  });

  return (
    <>
      <div className="flex flex-col gap-2 shadow-[0.4px_0.7px_6px_var(--text-primary)] rounded-sm px-3 py-2 bg-[var(--text-secondary-light)] justify-end">
        <div className="w-full aspect-square mx-auto">
          <img
            src={`${imageUrl}`}
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
              <span className="line-through text-base mr-[10px]">
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
            <Button
              buttonFn={() => router.push(`/shop/${productId}`)}
              width="full"
              rounded="md"
            >
              View Product
            </Button>
            <Button width="full" buttonFn={() => shopBtn()} rounded="md">
              <FaShoppingCart size={20} className="mr-[5px]" /> Add to Cart
            </Button>
          </>
        ) : (
          <Button width="full">...</Button>
        )}
      </div>
    </>
  );
};

export default ProductCards;
